import { FilterProps } from "@/types";
import { Car } from "@/types/car";

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
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`,
      );
    }
    const result: Car[] = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export const generateCarImageUrl = (car: Car, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model?.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
