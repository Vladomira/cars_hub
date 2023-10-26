import React from "react";
import { UserForm } from "@/components/UserForm";

function Signup() {
   return (
      <div className="flex justify-center py-12 mt-24 bg-[url('/background/ford.jpg')] bg-no-repeat bg-center bg-cover">
         <div className={"form__overlay rounded-lg"}>
            <UserForm />
         </div>
      </div>
   );
}

export default Signup;
