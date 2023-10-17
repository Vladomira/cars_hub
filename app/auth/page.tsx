import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { Notification } from "@/components";
import { UserForm } from "@/components/UserForm";

const overlayFormStyles = `flex  relative items-center  shadow-lg shadow-slate-900 max-w-fit min-w-min h-screen  max-h-min p-24 relative overflow-hidden z-10
overflow-hidden z-10 bg-[url('/background/red-car.jpg')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute
before:inset-0 before:block before:bg-gradient-to-r before:from-gray-700 before:to-black before:opacity-80 before:z-[-5] `;

function Signup() {
   return (
      <div className="flex justify-center p-24 bg-[url('/background/ford.jpg')] bg-no-repeat bg-center bg-cover">
         <div className={overlayFormStyles}>
            <UserForm />
         </div>
         <Notification />
      </div>
   );
}

export default Signup;
