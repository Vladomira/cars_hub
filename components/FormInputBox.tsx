import React, { FC } from "react";
import { FieldError } from "react-hook-form";

type FormInputProps = {
   id: "email" | "password" | "confirmPassword";
   error: FieldError | undefined;
   children: React.ReactNode;
   title: "Email" | "Password" | "Confirm password";
};
const FormInputBox: FC<FormInputProps> = (inputProps) => {
   const { id, error, children, title } = inputProps;

   return (
      <label htmlFor={id} className="flex justify-between items-start mb-9">
         <p>{title}</p>
         <div className="flex flex-col ml-4 ">
            {children}

            {error && (
               <p className="max-w-[184px] text-red-400 mt-2">
                  {error.message}
               </p>
            )}
         </div>
      </label>
   );
};

export default FormInputBox;
