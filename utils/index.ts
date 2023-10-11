import { CarProps, FilterProps } from "@/types";

const BASE_URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?";

export async function fetchCars(filters: FilterProps) {
   const { manufacturer, year, fuel, limit, model } = filters;

   const headers = {
      "X-RapidAPI-Key": "282cbbedb2msh1841861e0adc7f2p1aba49jsn2b5ea4438b39",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
   };
   const url = `${BASE_URL}make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
   try {
      const response = await fetch(url, { headers });
      const result = await response.json();

      return result;
   } catch (error) {
      return { error: "Something went wrong!" };
   }
}

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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
   const url = new URL("https://cdn.imagin.studio/getimage");

   const { make, year, model } = car;

   url.searchParams.append("customer", "hrjavascript-mastery");
   url.searchParams.append("make", make);
   url.searchParams.append("modelFamily", model.split(" ")[0]);
   url.searchParams.append("zoomType", "fullscreen");
   url.searchParams.append("modelYear", `${year}`);
   url.searchParams.append("angle", `${angle}`);

   return `${url}`;
};

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
         return drive.toUpperCase();

      case "gas":
         return `${city_mpg} MPG`;
   }
};
