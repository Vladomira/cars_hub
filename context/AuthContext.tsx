"use client";
import React, {
   createContext,
   useContext,
   useEffect,
   useState,
   ReactNode,
} from "react";
import { auth, provider, storage } from "@/firebase/config";
import {
   AuthInstance,
   ChildrenProps,
   DeviceType,
   initialContextState,
   UploadFileProps,
   UserFromForm,
} from "@/types";
import {
   loginEmailPassword,
   logoutAuth,
   signupEmailPassword,
   loginGoogle,
} from "@/firebase/auth";
import {
   GoogleAuthProvider,
   User,
   onAuthStateChanged,
   signInWithRedirect,
   updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const AuthContext = createContext<AuthInstance>(initialContextState);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
         if (firebaseUser) {
            setUser(firebaseUser);
         } else {
            setUser(null);
         }
      });
      return () => unsubscribe();
   }, []);

   const reloadUser = async () => {
      await user?.reload();
      setUser(auth.currentUser as User);
   };

   const login = async ({ email, password }: UserFromForm) => {
      try {
         return await loginEmailPassword(email.trim(), password);
      } catch (error: any) {
         setError(error.message);
      }
   };

   const signup = async ({ email, password }: UserFromForm) => {
      try {
         return await signupEmailPassword(email.trim(), password);
      } catch (error: any) {
         setError(error.message);
      }
   };
   const logout = async () => await logoutAuth();

   // google
   const loginWithGoogle = async (device: DeviceType) => {
      try {
         if (device === "mobile") {
            signInWithRedirect(auth, provider);
         }
         const result = await loginGoogle(device);
         if (result) {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken; //if need
            setUser(result.user);
         }
      } catch (error: any) {
         const credential = GoogleAuthProvider.credentialFromError(error);
         setError(error.message);
      }
   };

   return (
      <AuthContext.Provider
         value={{
            user,
            login,
            signup,
            loading,
            logout,
            setUser,
            loginWithGoogle,
            error,
            setError,
            reloadUser,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
export const useAuth = (): AuthInstance | null => {
   return useContext(AuthContext);
};
