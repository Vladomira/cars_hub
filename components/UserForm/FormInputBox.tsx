import { FormInputProps } from "@/types";
import React, { FC } from "react";

const FormInputBox: FC<FormInputProps> = (inputProps) => {
   const { id, error, title, register, onKeyUp, placeholder } = inputProps;

   return (
      <label htmlFor={id} className="flex justify-between items-start mb-9">
         <p>{title}</p>
         <div className="flex flex-col ml-4 ">
            <input
               id={id}
               type={id === "confirmPassword" ? "password" : id}
               placeholder={placeholder}
               required={true}
               className="bg-transparent border-b-2 border-gray-300  focus:outline-none"
               {...register}
               onKeyUp={onKeyUp}
            />

            {error && (
               <p className="max-w-[184px] text-red-400 mt-2">{error}</p>
            )}
         </div>
      </label>
   );
};

export default FormInputBox;
