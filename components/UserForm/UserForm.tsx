"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as rdd from "react-device-detect";

import { AuthContext } from "@/context/AuthContext";
import { FormIds, FormType } from "@/types/form";
import { CustomButton } from "@/components";
import {
  emailFormRule,
  passwordFormRule,
  passwordLengthRule,
} from "@/lib/form-patterns";
import FormInputBox from "./FormInputBox";
import { changeFormType } from "@/utils/helpers";
import { UserDataForm } from "@/types/user";

const UserForm = () => {
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

  const handleKeyUp = (id: FormIds) => {
    setError("");
    trigger(id);
  };
  return (
    <div className="flex flex-col justify-center items-center  text-gray-400">
      <h1 className="font-bold text-[20px] text-gray-300">{formType}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10 ">
        <FormInputBox
          id={"email"}
          placeholder="example@mail.com"
          title="Email"
          error={errors.email?.message}
          onKeyUp={() => handleKeyUp("email")}
          register={register("email", {
            required: "Email is Required!!!",
            pattern: emailFormRule,
          })}
        />
        <FormInputBox
          id={"password"}
          placeholder="password"
          title="Password"
          error={errors.password?.message}
          onKeyUp={() => handleKeyUp("password")}
          register={register("password", {
            required: "Password required",
            pattern: passwordFormRule,
            minLength: passwordLengthRule,
          })}
        />

        {formType === FormType.Signup && (
          <FormInputBox
            id={"confirmPassword"}
            title="Confirm password"
            error={errors.confirmPassword?.message}
            onKeyUp={() => handleKeyUp("confirmPassword")}
            register={register("confirmPassword", {
              validate: (value) =>
                value === watch("password", "") || "The passwords do not match",
            })}
          />
        )}

        {error && <p className="text-red-500 mt-3">{error}</p>}

        <CustomButton
          textStyles=""
          btnType="submit"
          title="Submit"
          containerStyles="mt-10  font-bold text-red-300 btn-bg rounded-lg  btn-animation"
        />
      </form>

      <CustomButton
        title="Login with Google"
        containerStyles={`flex w-full mt-6 btn-bg  btn-animation`}
        btnType="button"
        handleClick={() => loginWithGoogle(isMobile ? "mobile" : "desktop")}
        textStyles="flex-none text-gray-300 mr-2 rounded-lg"
        rightIcon={"/google-2.png"}
      />
      <div className="mt-10 flex">
        <div className="flex items-center">
          {formType === FormType.Signup ? "I have account" : "Register:"}
          <CustomButton
            title={
              formType === FormType.Signup ? FormType.Login : FormType.Signup
            }
            containerStyles="flex items-center ml-3 btn-bg rounded-lg  btn-animation"
            btnType="button"
            handleClick={() =>
              changeFormType({ formType, setFormType, setError })
            }
            textStyles="underline"
          />
        </div>
      </div>
    </div>
  );
};
export default UserForm;
