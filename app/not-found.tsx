"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
   return (
      <div className="flex-1 pt-36 pb-36 padding-x ">
         <p className="text-gray-900 font-bold mb-9 text-[32px]">
            Ooooooooops. This page does not exist.
         </p>
         <Link
            href={"/"}
            className="w-full rounded-lg bg-primary-blue font-bold text-[18px] p-[7px] text-white "
         >
            Go Home
         </Link>
      </div>
   );
};

export default NotFound;
