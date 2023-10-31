import { User } from "firebase/auth";
import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

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

export type Car = {
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
   car: Car;
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

export type FormIds = "email" | "password" | "confirmPassword";

interface ValidationRules {
   required: string;
   pattern: RegExp;
   minLength: {
      value: number;
      message: string;
   };
}
export type FormInputProps = {
   id: FormIds;
   title: "Email" | "Password" | "Confirm password";
   placeholder?: string;
   error: string | undefined;
   register: UseFormRegisterReturn;
   onKeyUp: () => void;
};

// ****

// form helpers:
export type ChangeFormTypeProps = {
   formType: FormType;
   setFormType: Dispatch<SetStateAction<FormType>>;
   setError: (error: string) => void;
};

// context
export type ChildrenProps = {
   children: ReactNode;
};
export type UserFromForm = Omit<UserDataForm, "confirmPassword">;
export type UploadFileProps = {
   photo: Blob | Uint8Array | ArrayBuffer;
   setLoading: (prop: boolean) => void;
};
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
   reloadUser: () => void;
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
   reloadUser: () => {},
};

// preference
export type UserStylesInstance = {
   userPhoto: string;
   setUserPhoto: (picture: string) => void;
   changeUserPhoto: (props: UploadFileProps) => void;
   userBackground: string;
   setUserBackground: (photo: string) => void;
   changeUserBack: (photo: string) => void;
};
export const initialUserStyles = {
   userPhoto: "",
   setUserPhoto: () => {},
   changeUserPhoto: () => {},
   userBackground: "",
   setUserBackground: () => {},
   changeUserBack: () => {},
};
export type UserImageProps = {
   path: string;
   setImage: (prop: string) => void;
};

//
export type DeviceType = "mobile" | "desktop";

//
export interface NavLinkProps {
   title: string;
   href: string;
   children?: React.ReactNode;
   linkStyle?: string;
   handleClick?: () => void;
}

// modal
export interface ModalProps {
   isOpen: boolean;
   closeModal: () => void;
   children: ReactNode;
   modalBoxStyles: string;
}

//
export interface SideBarNavProps {
   setIsOpen: (prop: boolean) => void;
}

//
export type ThumbProps = {
   selected: boolean;
   onClick: () => void;
   image: string;
};
