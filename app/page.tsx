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
import { fetchCars } from "@/utils";

export default function Home() {
   const [allCars, setAllCars] = useState([]);
   const [loading, setLoading] = useState<boolean>(false);
   // search
   const [manufacturer, setManufacturer] = useState<string>("");
   const [model, setModel] = useState<string>("");
   //filter
   const [fuel, setFuel] = useState<string>("");
   const [year, setYear] = useState<number | string>(2022);
   // pagination
   const [limit, setLimit] = useState<number>(10);

   const getCars = async () => {
      setLoading(true);
      try {
         const result = await fetchCars({
            manufacturer: manufacturer || "",
            year: year || 2022,
            fuel: fuel || "",
            limit: limit || 10,
            model: model || "",
         });
         setAllCars(result);
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
         <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
               <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
               <p>Explore the cars you might like</p>
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

            {allCars?.length > 0 ? (
               <section>
                  <div className="home__cars-wrapper">
                     {allCars?.map((car, idx) => (
                        <CarCard car={car} key={idx} />
                     ))}
                  </div>

                  {loading && (
                     <div className="mt-16 w-full flex-center">
                        <Loader />
                     </div>
                  )}
                  <ShowMore
                     pageNumber={limit / 10}
                     isNext={limit > allCars.length}
                     setLimit={setLimit}
                  />
               </section>
            ) : (
               <div className="home__error-container">
                  <h2 className="text-black text-xl font-bold">
                     Oops, no results
                  </h2>
               </div>
            )}
         </div>
      </>
   );
}
