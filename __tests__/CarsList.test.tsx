import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import server from "@/mocks/server";
import { act } from "react-dom/test-utils";

import { fetchCars } from "@/api";

import { mockCar, mockCars } from "@/mocks/mockData";
import { CarsList } from "@/components";
import CarCard from "@/components/CarList/CarCard";
const testCar = {
   manufacturer: "",
   year: 2022,
   fuel: "",
   limit: 10,
   model: "",
};
describe("cars list", () => {
   it("should return the correct number of cars items", async () => {
      const carsArr = await fetchCars(testCar);

      expect(carsArr.length).toBe(10);
   });

   it("should render a cars list", async () => {
      // works if remove animation from CarCard
      await act(async () => {
         render(<CarsList cars={mockCars} />);
      });

      const carsList = screen.getAllByTestId("cars-list");

      expect(carsList.length).toBe(1);

      carsList.forEach((carElement) => {
         expect(carElement).toBeInTheDocument();
      });
   });
});
