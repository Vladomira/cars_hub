"use client";
import { motion, AnimatePresence } from "framer-motion";
import SideBarNav from "./SideBarNav";
import UserArea from "./UserArea";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import { useContext } from "react";

interface SideBar {
   setIsOpen: (prop: boolean) => void;
   isOpen: boolean;
}

const SideBar = ({ setIsOpen, isOpen }: SideBar) => {
   const { userPhoto, userBackground } = useContext(UserPreferenceContext);
   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               // onMouseLeave={(e) => setIsOpen(false)}
               className={`min-[320px]:w-[280px] min-[768px]:w-[380px]  fixed bottom-0 right-0 h-full z-20 bg-zinc-800 text-slate-300 shadow-xl `}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 50 }}
               transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
               <UserArea />
               <SideBarNav setIsOpen={setIsOpen} />
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default SideBar;
