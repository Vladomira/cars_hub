"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import NavLink from "../NavBar/NavLink";

const SideBarNav = ({ setIsOpen }: { setIsOpen: (prop: boolean) => void }) => {
   const { user, logout } = useContext(AuthContext);

   return (
      <div className="sidebar-nav">
         <div className="sidebar-nav__links">
            <Image
               src={"/nav-links/home.svg"}
               width={30}
               height={30}
               alt={"home"}
               className="flex items-center justify-center mr-3"
            />

            <NavLink title={"Home"} href={"/"} />
         </div>

         {user?.email ? (
            <div className="sidebar-nav__links">
               <Image
                  src={"/nav-links/logout.svg"}
                  alt={"Logout"}
                  width={30}
                  height={30}
                  className="mr-2"
               />
               <NavLink
                  title={"Sign out"}
                  href={""}
                  linkStyle=""
                  handleClick={() => logout()}
               />
            </div>
         ) : (
            <div className="sidebar-nav__links">
               <Image
                  src={"/nav-links/login.svg"}
                  alt={"Logout"}
                  width={30}
                  height={30}
                  className="mr-2"
               />

               <NavLink
                  title={"Sign in"}
                  href={"/auth"}
                  handleClick={() => setIsOpen(false)}
               />
            </div>
         )}
      </div>
   );
};

export default SideBarNav;
