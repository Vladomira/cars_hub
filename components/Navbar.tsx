"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { CustomButton } from ".";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
   const router = useRouter();
   const { user, logout } = useContext(AuthContext);

   return (
      <header className="w-full absolute z-10">
         <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
               <Image
                  src="/logo.svg"
                  alt="Car Hub Logo"
                  width={118}
                  height={18}
                  className="object-contain"
               />
            </Link>
            {user && <p className="text-black">Welcome, {user.email}</p>}

            {user?.email ? (
               <CustomButton
                  title={"Logout"}
                  btnType="button"
                  containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                  handleClick={() => logout()}
               />
            ) : (
               <CustomButton
                  title={"Sign In"}
                  btnType="button"
                  containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                  handleClick={() => router.push("/auth")}
               />
            )}
         </nav>
      </header>
   );
};

export default Navbar;
