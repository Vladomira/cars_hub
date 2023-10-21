import { ChangeFormTypeProps, FormType } from "@/types";

// CarCard
export const makeItemAnimate = (isInView: boolean, idx: number) => {
   return {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 30,
      transition: { duration: 0.7, delay: idx * 0.03 },
   };
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
