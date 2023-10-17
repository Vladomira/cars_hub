"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as rdd from "react-device-detect";

import { AuthContext } from "@/context/AuthContext";
import { FormType, UserDataForm } from "@/types";
import { CustomButton, Notification } from "@/components";
import { emailFormRule, passwordFormRule } from "@/lib/constants";
import FormInputBox from "./FormInputBox";

export const UserForm = () => {
   const { login, signup, user, error, setError, loginWithGoogle } =
      useContext(AuthContext);
   const {
      handleSubmit,
      formState: { errors },
      trigger,
      register,
      watch,
      setValue,
   } = useForm<UserDataForm>();
   const [formType, setFormType] = useState<FormType>(FormType.Signup);
   const isMobile = rdd.isMobile;

   const router = useRouter();

   const onSubmit = async (data: UserDataForm) => {
      const { email, password } = data;
      if (email !== "" && password !== "") {
         try {
            switch (formType) {
               case FormType.Login:
                  return login({ email, password });
               case FormType.Signup:
                  return signup({ email, password });
            }
         } catch (error: any) {
            return error.message;
         }
      }
   };
   useEffect(() => {
      if (user) {
         setValue("email", ""), setValue("password", "");
         setValue("confirmPassword", "");
         router.push("/");
      }
   }, [user]);

   const changeFormType = () => {
      formType === FormType.Signup
         ? setFormType(FormType.Login)
         : setFormType(FormType.Signup);
      setError("");
   };

   return (
      <div className="flex flex-col justify-center items-center  text-gray-400">
         <h1 className="font-bold text-gray-300">{formType}</h1>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-10 "
         >
            <FormInputBox id={"email"} error={errors.email} title="Email">
               <input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required={true}
                  className="bg-transparent border-b-2 border-gray-300  focus:outline-none"
                  {...register("email", {
                     required: "Email is Required!!!",
                     pattern: emailFormRule,
                  })}
                  onKeyUp={() => {
                     setError(""), trigger("email");
                  }}
               />
            </FormInputBox>

            <FormInputBox
               id={"password"}
               error={errors.password}
               title="Password"
            >
               <input
                  id="password"
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  required={true}
                  className="bg-transparent border-b-2 border-gray-300  focus:outline-none"
                  {...register("password", {
                     required: "Password required",
                     pattern: passwordFormRule,

                     minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                     },
                  })}
                  onKeyUp={() => {
                     setError(""), trigger("password", { shouldFocus: true });
                  }}
               />
            </FormInputBox>

            {formType === FormType.Signup && (
               <FormInputBox
                  id={"confirmPassword"}
                  error={errors.confirmPassword}
                  title="Confirm password"
               >
                  <input
                     id="confirmPassword"
                     type="password"
                     {...register("confirmPassword", {
                        validate: (value) =>
                           value === watch("password", "") ||
                           "The passwords do not match",
                     })}
                     autoComplete="off"
                     onPaste={(e) => {
                        e.preventDefault();
                        return false;
                     }}
                     className=" bg-transparent border-b-2 border-gray-300  focus:outline-none"
                     required={true}
                     onKeyUp={() => {
                        setError(""), trigger("confirmPassword");
                     }}
                  />
               </FormInputBox>
            )}

            {error && <p className="text-red-500 mt-3">{error}</p>}

            <CustomButton
               textStyles=""
               btnType="submit"
               title="Submit"
               containerStyles="mt-10  font-bold text-gray-300 text-red-300 btn-bg"
            />
         </form>
         <CustomButton
            title="Login with Google"
            containerStyles={`flex w-full mt-6 btn-bg`}
            btnType="button"
            handleClick={() => loginWithGoogle(isMobile ? "mobile" : "desktop")}
            textStyles="flex-none text-gray-300 mr-2"
            rightIcon={"/google-2.png"}
         />
         <div className="mt-10 flex">
            <div className="flex items-center">
               {formType === FormType.Signup
                  ? "I have account"
                  : "I don't have account"}

               <CustomButton
                  title={
                     formType === FormType.Signup
                        ? FormType.Login
                        : FormType.Signup
                  }
                  containerStyles="flex items-center ml-3  shadow-lg shadow-slate-900 bg-slate-800 rounded-lg"
                  btnType="button"
                  handleClick={() => changeFormType()}
                  textStyles="underline"
               />
            </div>
         </div>

         <Notification />
      </div>
   );
};
