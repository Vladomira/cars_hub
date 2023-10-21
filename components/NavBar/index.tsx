"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Image from "next/image";

import NavLink from "./NavLink";
import { Logo, SideBar } from "..";

const Navbar = () => {
   const [openSideBar, setOpenSideBar] = useState(false);
   const router = useRouter();

   return (
      <>
         <header className="w-full absolute z-10 bg-gray-950 border-b border-gray-900">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
               <Logo />
               <NavLink title={"Home"} href={"/"} />
               <button
                  type="button"
                  onClick={() => setOpenSideBar(true)}
                  className="outline-0"
               >
                  <Image
                     src={"/tech/menu.svg"}
                     width={40}
                     height={40}
                     alt={""}
                     className="hover:scale-110 transition duration-300  ease-in-out cursor-pointer"
                  />
               </button>
            </nav>
            <SideBar setIsOpen={setOpenSideBar} isOpen={openSideBar} />
         </header>
      </>
   );
};

export default Navbar;
