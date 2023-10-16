import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FormType, UserDataForm } from "@/types";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "@/components";
import { emailFormRule, passwordFormRule } from "@/lib/constants";

import { useForm } from "react-hook-form";

export const UserForm = () => {
   const { login, signup, user, error, setError } = useContext(AuthContext);
   const {
      handleSubmit,
      formState: { errors },
      trigger,
      register,
      watch,
      setValue,
   } = useForm<UserDataForm>();
   const [formType, setFormType] = useState<FormType>(FormType.Signup);

   const router = useRouter();

   const onSubmit = async (data: UserDataForm) => {
      const { email, password } = data;
      if (email !== "" && password !== "") {
         try {
            switch (formType) {
               case FormType.Signin:
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
         ? setFormType(FormType.Signin)
         : setFormType(FormType.Signup);
      setError("");
   };
   return (
      <>
         <h1 className="mt-60 mb-30">{formType}</h1>
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
                  <small className="text-danger">{errors.email.message}</small>
               )}
            </label>
            <label htmlFor="password" className="flex justify-between flex-col">
               <div className="flex ">
                  {" "}
                  <p>Password</p>
                  <input
                     id="password"
                     type="password"
                     placeholder="password"
                     autoComplete="off"
                     className={`form-control ml-3 ${
                        errors.password && "invalid"
                     }`}
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
                        setError(""),
                           trigger("password", { shouldFocus: true });
                     }}
                  />
               </div>

               {errors.password && (
                  <small className="text-danger">
                     {errors.password.message}
                  </small>
               )}
            </label>
            {error && <p className="text-red-500 mt-3">{error}</p>}
            {formType === FormType.Signup && (
               <div>
                  <label>Confirm your password</label>
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
                     className={`form-control mt-4`}
                     required={true}
                     onKeyUp={() => {
                        setError(""), trigger("confirmPassword");
                     }}
                  />
                  {errors.confirmPassword && (
                     <small className="text-danger">
                        {errors.confirmPassword.message}
                     </small>
                  )}
               </div>
            )}

            <button type="submit" className="mt-10">
               Submit
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
                        ? FormType.Signin
                        : FormType.Signup}
                  </button>
               </div>
            </div>
         </form>
         <Notification />
      </>
   );
};
