import { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type FormIds = "email" | "password" | "confirmPassword";

export type FormInputProps = {
  id: FormIds;
  title: "Email" | "Password" | "Confirm password";
  placeholder?: string;
  error: string | undefined;
  register: UseFormRegisterReturn;
  onKeyUp: () => void;
};
export enum FormType {
  Signup = "Signup",
  Login = "Login",
}

export type ChangeFormTypeProps = {
  formType: FormType;
  setFormType: Dispatch<SetStateAction<FormType>>;
  setError: (error: string) => void;
};
export type PatternRule = {
  value: RegExp;
  message: string;
};
