"use client";
import Image from "next/image";

import { CardDetailsProps } from "@/types";
import { generateCarImageUrl } from "@/api";
import { carAngles } from "@/lib/constants";
import { Modal } from "..";

const CarDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
   return (
      <Modal
         isOpen={isOpen}
         closeModal={closeModal}
         modalBoxStyles={
            "w-full max-w-lg max-h-[90vh] text-left  flex flex-col gap-5"
         }
      >
         <div className="flex-1 flex flex-col gap-3">
            <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
               <Image
                  src={generateCarImageUrl(car)}
                  alt={"car model"}
                  fill
                  priority
                  className="object-contain"
               />
            </div>

            <div className="flex gap-3">
               {carAngles.map((angle) => (
                  <div
                     className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
                     key={angle}
                  >
                     <Image
                        src={generateCarImageUrl(car, angle)}
                        alt={"car model"}
                        fill
                        priority
                        className="object-contain"
                     />
                  </div>
               ))}
            </div>
         </div>

         <div className="flex-1 flex flex-col gap-2">
            <h2 className="font-semibold text-xl capitalize">
               {car.make} &nbsp;
               {car.model}
            </h2>

            <ul className="mt-3 flex flex-wrap gap-4">
               {Object.entries(car).map(([key, value]) => (
                  <li
                     className="flex justify-between gap-5 w-full text-right"
                     key={key}
                  >
                     <h4 className="text-grey capitalize">
                        {key.split("_").join(" ")}
                     </h4>
                     <p className="text-black-100 font-semibold">{value}</p>
                  </li>
               ))}
            </ul>
         </div>
      </Modal>
   );
};

export default CarDetails;
