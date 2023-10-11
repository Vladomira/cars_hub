"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent, generateCarImageUrl, makeParagraph } from "@/utils";
import CarDetails from "./CarDetails";
import { carCharacteristics } from "@/lib/constants";

interface CarCardprops {
   car: CarProps;
}

const CarCard = ({ car }: CarCardprops) => {
   const [isOpen, setIsOpen] = useState(false);
   const { city_mpg, year, make, model, transmission, drive } = car;

   const normalizeName = (str: string) => str.replace(/-/g, " ");

   const carRent = calculateCarRent(city_mpg, year);

   return (
      <div className="car-card group">
         <div className="car-card__content">
            <h2 className="car-card__content-title">
               {make} {model}
            </h2>
         </div>

         <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">$</span>
            {carRent}
            <span className="self-end text-[14px] font-medium">/day</span>
         </p>

         <div className="relative w-full h-40 my-30 object-contain">
            <Image
               src={generateCarImageUrl(car)}
               alt={"car model"}
               fill
               priority
               className="object-contain"
            />
         </div>

         <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between to-gray">
               {carCharacteristics.map((item: string) => (
                  <div
                     key={item}
                     className="flex flex-col justify-center items-center gap-2"
                  >
                     <Image
                        src={`/${item}.svg`}
                        width={20}
                        height={20}
                        alt={normalizeName(item)}
                     />

                     <p className="text-[14px]">
                        {makeParagraph(item, drive, city_mpg, transmission)}
                     </p>
                  </div>
               ))}
            </div>

            <div className="car-card__btn-container">
               <CustomButton
                  title="View More"
                  containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                  textStyles="text-white text-[14px] leading-[17px] font-bold"
                  rightIcon="/right-arrow.svg"
                  handleClick={() => setIsOpen(true)}
               />
            </div>
         </div>

         <CarDetails
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            car={car}
         />
      </div>
   );
};

export default CarCard;
