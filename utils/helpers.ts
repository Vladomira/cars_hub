import { ChangeFormTypeProps, FormType } from "@/types";
import { MotionValue, useTransform } from "framer-motion";

export const updateSearchParams = (type: string, value: string) => {
   "for serverside code but it is reload page";
   const searchParams = new URLSearchParams(window.location.search);

   searchParams.set(type, value);

   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

   return newPathname;
};

export const isExistSearchParams = () => {
   const searchParams = new URLSearchParams(window.location.search);
   return searchParams.get("model") || null;
};

export const makeParagraph = (
   str: string,
   drive: string,
   city_mpg: number,
   transmission: string
) => {
   switch (str) {
      case "steering-wheel":
         return transmission === "a" ? "Automatic" : "Manual";

      case "tire":
         return drive?.toUpperCase();

      case "gas":
         return `${city_mpg} MPG`;
   }
};

// form
export const changeFormType = ({
   formType,
   setFormType,
   setError,
}: ChangeFormTypeProps) => {
   formType === FormType.Signup
      ? setFormType(FormType.Login)
      : setFormType(FormType.Signup);
   setError("");
};
