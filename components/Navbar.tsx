"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { CustomButton } from ".";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import Logo from "./Elements/Logo";

const Navbar = () => {
   const router = useRouter();
   const { user, logout } = useContext(AuthContext);

   return (
      <header className="w-full absolute z-10 bg-gray-950 border-b border-gray-900">
         <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
            <Logo />

            <div className="flex items-center ">
               {user && (
                  <p className="text-white mr-4">Welcome, {user.email}</p>
               )}
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
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
