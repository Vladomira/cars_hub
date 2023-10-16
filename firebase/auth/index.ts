import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";
import { auth } from "../config";

const signupEmailPassword = async (email: string, password: string) =>
   await createUserWithEmailAndPassword(auth, email, password);

const loginEmailPassword = async (email: string, password: string) =>
   await signInWithEmailAndPassword(auth, email, password);

const logoutAuth = async () => {
   await signOut(auth);
};

export { loginEmailPassword, signupEmailPassword, logoutAuth };
