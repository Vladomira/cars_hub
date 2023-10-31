import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";

type UserAreaProps = {
   boxStyles?: string;
};
const UserArea = ({ boxStyles }: UserAreaProps) => {
   const { user } = useContext(AuthContext);
   const { userPhoto, userBackground } = useContext(UserPreferenceContext);
   console.log("userPhoto", userPhoto);

   return (
      <div
         style={{ backgroundImage: `url(${userBackground})` }}
         className={`${boxStyles} flex justify-center relative w-full h-52  bg-no-repeat bg-center bg-cover`}
      >
         {user?.email && (
            <div className="flex flex-col items-center justify-center absolute top-[25%] ">
               <Image
                  src={userPhoto}
                  width={65}
                  height={65}
                  alt={"user picture"}
                  className="rounded-full h-[65px]"
               />

               <p className=" text-[#004141] font-bold mt-3">{user.email}</p>
            </div>
         )}
      </div>
   );
};

export default UserArea;
