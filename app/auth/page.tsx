import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "@/components";
import { UserForm } from "@/components/UserForm";

function Signup() {
   return (
      <div className="flex justify-center pb-24  bg-[url('/background/red-car.jpg')] bg-no-repeat bg-center bg-cover">
         <div className="">
            <UserForm />
         </div>
         <Notification />
      </div>
   );
}

export default Signup;
