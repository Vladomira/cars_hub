"use client";
import { useEffect, useState } from "react";
import {
   CarCard,
   CustomFilter,
   Hero,
   Loader,
   SearchBar,
   ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/lib/constants";
import { fetchCars } from "@/utils/api";
import { Car } from "@/types";

export default function Home() {
   const [allCars, setAllCars] = useState<Car[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   // search
   const [manufacturer, setManufacturer] = useState<string>("");
   const [model, setModel] = useState<string>("");
   //filter
   const [fuel, setFuel] = useState<string>("");
   const [year, setYear] = useState<number | string>(2022);
   // pagination
   const [limit, setLimit] = useState<number>(10);

   const getCars = async () => {
      try {
         const result = await fetchCars({
            manufacturer: manufacturer || "",
            year: year || 2022,
            fuel: fuel || "",
            limit: limit || 10,
            model: model || "",
         });

         setAllCars((prev) => [...prev, ...result]);
      } catch (error) {
         return { error: "Something went wrong!" };
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getCars();
   }, [fuel, year, limit, manufacturer, model]);

   return (
      <>
         <Hero />
         <div className="pt-6  bg-gradient-to-b from-slate-800 to-stone-400">
            <div className="padding-x padding-y max-width  ">
               <div className="home__text-container ">
                  <h1 className="text-4xl font-extrabold text-gray-300">
                     Car Catalogue
                  </h1>
                  <p className="text-gray-300">
                     Explore the cars you might like
                  </p>
               </div>
               <div className="home__filters">
                  <SearchBar
                     setManufacturer={setManufacturer}
                     setModel={setModel}
                  />
                  <div className="home__filter-container">
                     <CustomFilter
                        title="fuel"
                        options={fuels}
                        setFilter={setFuel}
                     />
                     <CustomFilter
                        title="year"
                        options={yearsOfProduction}
                        setFilter={setYear}
                     />
                  </div>
               </div>

               {loading && (
                  <div className="mt-16 w-full flex-center">
                     <Loader />
                  </div>
               )}
               {!loading && allCars?.length === 0 && (
                  <div className="home__error-container">
                     <h2 className="text-black text-xl font-bold">
                        Oops, no results
                     </h2>
                  </div>
               )}
               {allCars?.length > 0 && (
                  <section>
                     <ul className="home__cars-wrapper">
                        {allCars?.map((car, idx) => (
                           // index is a bad variant for key but we don't have a unique string or number in car
                           <CarCard car={car} key={idx} idx={idx} />
                        ))}
                     </ul>

                     <ShowMore
                        pageNumber={limit / 10}
                        isNext={limit > allCars.length}
                        setLimit={setLimit}
                     />
                  </section>
               )}
            </div>
         </div>
      </>
   );
}
