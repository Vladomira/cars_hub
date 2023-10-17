"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as rdd from "react-device-detect";

import { AuthContext } from "@/context/AuthContext";
import { FormType, UserDataForm } from "@/types";
import { Notification } from "@/components";
import { emailFormRule, passwordFormRule } from "@/lib/constants";

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
         <h1 className="">{formType}</h1>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-10 "
         >
            <label htmlFor="email" className="flex justify-between mb-5">
               <p>Email</p>
               <input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required={true}
                  {...register("email", {
                     required: "Email is Required!!!",
                     pattern: emailFormRule,
                  })}
                  onKeyUp={() => {
                     setError(""), trigger("email");
                  }}
               />
               {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
               )}
            </label>
            <label htmlFor="password" className="flex justify-between mb-5">
               {" "}
               <p>Password</p>
               <input
                  id="password"
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  required={true}
                  {...register("password", {
                     required: "You must specify a password",
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
               {errors.password && (
                  <small className="text-danger">
                     {errors.password.message}
                  </small>
               )}
            </label>
            {formType === FormType.Signup && (
               <div>
                  <label
                     className="flex justify-between"
                     htmlFor="confirmPassword"
                  >
                     Confirm password
                     <input
                        id="confirmPassword"
                        type="password"
                        {...register("confirmPassword", {
                           validate: (value) =>
                              value === watch("password", "") ||
                              "The passwords do not match",
                        })}
                        placeholder="confirm password"
                        autoComplete="off"
                        onPaste={(e) => {
                           e.preventDefault();
                           return false;
                        }}
                        className="ml-2"
                        required={true}
                        onKeyUp={() => {
                           setError(""), trigger("confirmPassword");
                        }}
                     />
                  </label>
                  {errors.confirmPassword && (
                     <small className="text-danger">
                        {errors.confirmPassword.message}
                     </small>
                  )}
               </div>
            )}{" "}
            {error && <p className="text-red-500 mt-3">{error}</p>}
            <button type="submit" className="mt-10">
               Submit
            </button>
            <button
               type="button"
               onClick={() => loginWithGoogle(isMobile ? "mobile" : "desktop")}
            >
               Login with Google
            </button>
            <div className="mt-10 flex">
               <div className="flex">
                  {formType === FormType.Signup
                     ? "I have account"
                     : "I don't have account"}

                  <button
                     type="button"
                     className="ml-3"
                     onClick={() => changeFormType()}
                  >
                     {formType === FormType.Signup
                        ? FormType.Login
                        : FormType.Signup}
                  </button>
               </div>
            </div>
         </form>
         <Notification />
      </div>
   );
};
