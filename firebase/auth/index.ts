import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
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
const loginGoogle = async () => signInWithPopup(auth, provider);

export { loginEmailPassword, signupEmailPassword, logoutAuth, loginGoogle };
