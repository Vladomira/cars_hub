import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "@/components";
import { UserForm } from "@/components/UserForm";

function Signup() {
   return (
      <div className="flex justify-center p-24 bg-[url('/background/ford.jpg')] bg-no-repeat bg-center bg-cover">
         <div className={"form_overlay rounded-lg"}>
            <UserForm />
         </div>
         <Notification />
      </div>
   );
}

export default Signup;
