import { ChangeFormTypeProps, FormType } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50; // Base rental price per day in dollars
   const mileageFactor = 0.1; // Additional rate per mile driven
   const ageFactor = 0.05; // Additional rate per year of vehicle age

   // Calculate additional rate based on mileage and age
   const mileageRate = city_mpg * mileageFactor;
   const ageRate = (new Date().getFullYear() - year) * ageFactor;

   // Calculate total rental rate per day
   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

   return rentalRatePerDay.toFixed(0);
};

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
