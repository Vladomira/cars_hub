import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "@/components";
import { UserForm } from "@/components/UserForm";

function Signup() {
   return (
      <div className="flex justify-center  pb-10">
         <div className="">
            <UserForm />
         </div>
         <Notification />
      </div>
   );
}

export default Signup;
