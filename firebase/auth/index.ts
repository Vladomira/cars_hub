import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   signInWithPopup,
   getRedirectResult,
   GoogleAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../config";
import { DeviceType } from "@/types";

const signupEmailPassword = async (email: string, password: string) =>
   await createUserWithEmailAndPassword(auth, email, password);

const loginEmailPassword = async (email: string, password: string) =>
   await signInWithEmailAndPassword(auth, email, password);

const logoutAuth = async () => {
   await signOut(auth);
};

// google
const loginGoogle = async (device: DeviceType) => {
   switch (device) {
      case "desktop":
         return await signInWithPopup(auth, new GoogleAuthProvider());

      case "mobile":
         return await getRedirectResult(auth);
   }
};

export { loginEmailPassword, signupEmailPassword, logoutAuth, loginGoogle };
