"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import { Notification } from ".";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
   <button type="submit" className={`-ml-10 z-10 ${otherClasses}`}>
      <Image
         src={"/magnifying-glass.svg"}
         alt={"magnifying glass"}
         width={40}
         height={40}
         className="object-contain"
      />
   </button>
);

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
   const [searchManufacturer, setSearchManufacturer] = useState<string>("");
   const [searchModel, setSearchModel] = useState<string>("");

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
         return toast.warn("Please fill in the search bar");
      }
      setModel(searchModel);
      setManufacturer(searchManufacturer);
   };

   return (
      <>
         <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
               <SearchManufacturer
                  selected={searchManufacturer}
                  setSelected={setSearchManufacturer}
               />
               <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item bg-gray-700  rounded-r-full">
               <Image
                  src="/model-icon.svg"
                  width={25}
                  height={25}
                  className="absolute w-[20px] h-[20px] ml-4"
                  alt="car model"
               />
               <input
                  type="text"
                  name="model"
                  value={searchModel}
                  onChange={(e) => setSearchModel(e.target.value)}
                  placeholder="Tiguan..."
                  className="searchbar__input text-gray-100 bg-gray-700"
               />
               <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
         </form>
         <Notification />
      </>
   );
};

export default SearchBar;
