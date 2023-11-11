"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import { UserAreaProps } from "@/types/sidebar";

const UserArea = ({
  boxStyles,
  color,
  sideBar,
  photo,
  backgroundTest,
}: UserAreaProps) => {
  const { user } = useContext(AuthContext);
  const { userPhoto, userBackground, emailColor } = useContext(
    UserPreferenceContext,
  );

  const back = `${sideBar ? userBackground : backgroundTest}`;
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
      }}
      className={`${boxStyles}  flex justify-center relative w-full h-52  bg-no-repeat bg-center bg-cover`}
    >
      {user?.email && (
        <div className="flex flex-col items-center justify-center absolute top-[25%] ">
          <div className="flex justify-center h-[65px] w-[160px]">
            <Image
              src={sideBar ? userPhoto : photo}
              width={65}
              height={65}
              alt={"user picture"}
              className="rounded-full h-auto object-cover"
            />
          </div>

          <p
            className="font-bold mt-3"
            style={{ color: sideBar ? emailColor : color }}
          >
            {user.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserArea;
