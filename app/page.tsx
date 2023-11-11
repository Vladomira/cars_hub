"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  CarsList,
  CustomFilter,
  Hero,
  Loader,
  NoResult,
  SearchBar,
  ShowMore,
  Notification,
} from "@/components";
import { fuels, yearsOfProduction } from "@/lib/constants";
import { fetchCars } from "@/api";
import { Car } from "@/types/car";

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
      setLoading(true);
    } catch (error) {
      toast.warn("Something went wrong");
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
            <p className="text-gray-300">Explore the cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter
                title="year"
                options={yearsOfProduction}
                setFilter={setYear}
              />
            </div>
          </div>

          {!loading && allCars?.length === 0 && <NoResult />}
          {allCars?.length > 0 && (
            <section>
              <CarsList cars={allCars} />

              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />
            </section>
          )}

          {loading && (
            <div className="mt-16 w-full flex-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
      <Notification />
    </>
  );
}
