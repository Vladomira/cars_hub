"use client";
import React from "react";
import Image from "next/image";

export const SearchButton = ({ btnClasses }: { btnClasses: string }) => {
   return (
      <button type="submit" className={`-ml-3 z-10 ${btnClasses}`}>
         <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
         />
      </button>
   );
};
export default SearchButton;
