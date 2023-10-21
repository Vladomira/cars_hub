import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinkProps } from "@/types";

const NavLink = ({
   title,
   href,
   children,
   linkStyle,
   handleClick,
}: NavLinkProps) => {
   const pathname = usePathname();

   return (
      <Link
         href={href}
         onClick={handleClick}
         className={`${
            pathname === href ? "text-white font-bold" : "text-gray-400"
         }
         font-medium hover:scale-110 hover:text-red-300 transition duration-300  ease-in-out ${linkStyle}`}
      >
         {title}
         {children}
      </Link>
   );
};

export default NavLink;
