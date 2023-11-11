import { PatternRule } from "@/types/form";

export const passwordPattern: RegExp = /^(?=.*\d)(?=.*\W).+/;
export const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const passwordFormRule: PatternRule = {
  value: passwordPattern,
  message: "Password should contain at least one number, one special character",
};
export const emailFormRule: PatternRule = {
  value: emailPattern,
  message: "Invalid email address",
};

export const passwordLengthRule = {
  value: 6,
  message: "Password must be at least 6 characters",
};
