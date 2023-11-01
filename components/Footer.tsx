import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";
import Logo from "./Elements/Logo";

const Footer = () => {
   return (
      <footer className="flex flex-col text-white bg-gray-950 border-t border-gray-600">
         <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-7">
            <div className="flex flex-col justify-start items-start gap-6">
               <Logo />
               <p className="text-base text-gray-500">
                  Car hub 2023 <br /> All rights reserved &copy;
               </p>
            </div>
            <div className="footer__links">
               {footerLinks.map((link) => (
                  <div key={link.title} className="footer__link">
                     <h3 className="font-bold">{link.title}</h3>
                     {link.links.map((item) => (
                        <Link
                           href={item.url}
                           key={item.title}
                           className="text-gray-500 flex gap-2"
                        >
                           {link.title === "Socials" && (
                              <Image
                                 src={`/socials/${item.title.toLowerCase()}.svg`}
                                 alt={"item.title"}
                                 width={20}
                                 height={20}
                                 className="object-contain"
                              />
                           )}
                           {item.title}
                        </Link>
                     ))}
                  </div>
               ))}
            </div>
         </div>

         <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10">
            <p>@2023 CarHub. All Rights Reserved</p>

            <div className="footer__copyrights-link">
               <Link href={"/"} className="text-gray-500">
                  Privacy Policy
               </Link>
               <Link href={"/"} className="text-gray-500">
                  Terms of Use
               </Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
