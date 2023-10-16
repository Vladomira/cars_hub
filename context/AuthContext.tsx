"use client";
import React, {
   createContext,
   useContext,
   useEffect,
   useState,
   ReactNode,
} from "react";
import { auth } from "@/firebase/config";
import {
   AuthInstance,
   SafeUserData,
   initialContextState,
   UserFromForm,
} from "@/types";
import {
   loginEmailPassword,
   logoutAuth,
   signupEmailPassword,
} from "@/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

type AuthProviderProps = {
   children: ReactNode;
};
export const AuthContext = createContext<AuthInstance>(initialContextState);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   const [user, setUser] = useState<SafeUserData | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
         if (firebaseUser) {
            setUser({
               id: firebaseUser.uid,
               email: firebaseUser.email as string,
            });
         } else {
            setUser(null);
         }
      });
      return () => unsubscribe();
   }, []);

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

   return (
      <AuthContext.Provider
         value={{
            user,
            loading,
            login,
            signup,
            logout,
            setUser,
            error,
            setError,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
export const useAuth = (): AuthInstance | null => {
   return useContext(AuthContext);
};
