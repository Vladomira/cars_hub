import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
   return (
      <Link href="/" className="flex flex-col items-center ">
         <Image
            src={"/logo3.svg"}
            alt={"logo"}
            width={50}
            height={18}
            className="object-contain"
         />

         <p className="text-red-300">Car Hub</p>
      </Link>
   );
};

export default Logo;
