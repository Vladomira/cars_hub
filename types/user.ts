import { ReactNode } from "react";
import { User } from "firebase/auth";
import { DeviceType } from ".";

export type UserDataForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserFromForm = Omit<UserDataForm, "confirmPassword">;

export type AuthInstance = {
  user: User | null;
  setUser: (user: User) => void;
  loading: boolean;
  login: (user: UserFromForm) => void;
  signup: (user: UserFromForm) => void;
  logout: () => void;
  loginWithGoogle: () => void;
  error: string;
  setError: (error: string) => void;
  reloadUser: () => void;
};

export const initialContextState = {
  user: null,
  setUser: () => {},
  loading: false,
  login: () => {},
  signup: () => {},
  loginWithGoogle: () => {},
  logout: () => {},
  error: "",
  setError: () => {},
  reloadUser: () => {},
};
