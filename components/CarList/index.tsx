import { Car } from "@/types/car";
import React from "react";
import CarCard from "./CarCard";

const CarsList = ({ cars }: { cars: Car[] }) => {
  return (
    <ul className="home__cars-wrapper" data-testid="cars-list">
      {cars?.map((car, idx) => (
        // index is a bad variant for key but we don't have a unique string or number in car
        <CarCard car={car} key={idx} idx={idx} />
      ))}
    </ul>
  );
};

export default CarsList;
