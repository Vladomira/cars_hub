"use client";
import { useEffect } from "react";
import { CustomButton } from "../..";

import InputUpload from "./InputUpload";
import { SettingsPictureProps } from "@/types";
import useChangePicture from "@/hooks/useChangePicture";

const UserPictureUpload = ({ setImage }: SettingsPictureProps) => {
   const { handleChange, handleClick, disabled, testImg, loading } =
      useChangePicture();

   useEffect(() => {
      setImage(testImg);
   }, [testImg]);

   return (
      <>
         <div className="flex flex-col items-center  ">
            <InputUpload
               handleChange={(e) => handleChange("picture", e)}
               title={"photo"}
            />

            <CustomButton
               title={loading ? "Please wait..." : "Upload"}
               containerStyles={`mt-3 btn-upload ${
                  disabled ? "pointer-events-none" : "pointer-events-auto"
               } 
            `}
               btnType="button"
               handleClick={() => handleClick("picture")}
               isDisabled={disabled}
            />
         </div>
      </>
   );
};

export default UserPictureUpload;
