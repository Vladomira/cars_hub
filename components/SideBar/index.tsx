"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import SideBarNav from "./SideBarNav";

interface SideBar {
   setIsOpen: (prop: boolean) => void;
   isOpen: boolean;
}

const SideBar = ({ setIsOpen, isOpen }: SideBar) => {
   const { user } = useContext(AuthContext);

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               onMouseLeave={(e) => setIsOpen(false)}
               className={`min-[320px]:w-[280px] min-[768px]:w-[380px]  fixed bottom-0 right-0 h-full z-10 bg-zinc-800 text-slate-300 shadow-xl `}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 50 }}
               transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
               <div className="flex justify-center relative w-full h-52 bg-[url('/background/abstract4.jpeg')]  bg-no-repeat bg-center bg-cover">
                  <div className="flex flex-col items-center justify-center absolute top-[25%] ">
                     <Image
                        src={"/tech/user.jpeg"}
                        width={65}
                        height={40}
                        alt={""}
                        className=" rounded-full h-auto"
                     />
                     {user?.email && (
                        <p className=" text-[#004141] font-bold mt-3">
                           {user.email}
                        </p>
                     )}
                  </div>
               </div>
               <SideBarNav setIsOpen={setIsOpen} />
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default SideBar;
