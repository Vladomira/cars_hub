import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
   title: string;
   href: string;
}
const NavLink = ({ title, href }: NavLinkProps) => {
   const pathname = usePathname();

   return (
      <Link
         href={href}
         className={`${
            pathname === href ? "text-white font-bold" : "text-gray-400"
         }
         font-medium hover:scale-110 transition duration-300  ease-in-out`}
      >
         {title}
      </Link>
   );
};

export default NavLink;
