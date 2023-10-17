import { User } from "firebase/auth";
import React, { MouseEventHandler } from "react";

export type CustomButtonProps = {
   title: string;
   btnType?: "button" | "submit";
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   textStyles?: string;
   rightIcon?: string;
   isDisabled?: boolean;
};

export type SearchManufacturerProps = {
   selected: string;
   setSelected: (manufacturer: string) => void;
};

export type CarProps = {
   city_mpg: number;
   class: string;
   combination_mpg: number;
   cylinders: number;
   displacement: number;
   drive: string;
   fuel_type: string;
   highway_mpg: number;
   make: string;
   model: string;
   transmission: string;
   year: number;
};
export type CardDetailsProps = {
   isOpen: boolean;
   closeModal: () => void;
   car: CarProps;
};
export type FilterProps = {
   manufacturer: string;
   year: number | string;
   fuel: string;
   limit: number;
   model: string;
};

export type OptionProps = {
   title: string;
   value: string;
};
export type CustomFilterProps = {
   title: string;
   options: OptionProps[];
   setFilter: (filter: string) => void;
};

export type ShowMoreProps = {
   pageNumber: number;
   isNext: boolean;
   setLimit: (limit: number) => void;
};

export type SearchBarProps = {
   setManufacturer: (manufacturer: string) => void;
   setModel: (model: string) => void;
};
export type PatternRule = {
   value: RegExp;
   message: string;
};
// User
export type UserDataForm = {
   email: string;
   password: string;
   confirmPassword: string;
};

export enum FormType {
   Signup = "Signup",
   Login = "Login",
}
// ****

// context
export type UserFromForm = Omit<UserDataForm, "confirmPassword">;
export type AuthInstance = {
   user: User | null;
   setUser: (user: User) => void;
   loading: boolean;
   login: (user: UserFromForm) => void;
   signup: (user: UserFromForm) => void;
   logout: () => void;
   loginWithGoogle: (device: DeviceType) => void;
   error: string;
   setError: (error: string) => void;
};

export const initialContextState = {
   user: null,
   setUser: (user: User) => {},
   loading: false,
   login: (user: UserFromForm) => {},
   signup: (user: UserFromForm) => {},
   loginWithGoogle: () => {},
   logout: () => {},
   error: "",
   setError: () => {},
};

export type DeviceType = "mobile" | "desktop";
