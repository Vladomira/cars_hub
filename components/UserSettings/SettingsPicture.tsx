"use client";
import Image from "next/image";
import { useContext, useEffect, SyntheticEvent, useState } from "react";
import { CustomButton } from "..";

import { UserPreferenceContext } from "@/context/UserPreferenceContext";

const SettingsPicture = () => {
   const [photo, setPhoto] = useState<Blob | Uint8Array | ArrayBuffer>();
   const [loading, setLoading] = useState(false);
   const { userPhoto, changeUserPhoto } = useContext(UserPreferenceContext);

   const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const files = target.files;

      if (files) {
         const selectedFile = files[0];
         const newPhoto = new Blob([selectedFile], {
            type: selectedFile?.type,
         });

         setPhoto(newPhoto);
      }
   };

   const handleClick = () => {
      if (photo) {
         try {
            changeUserPhoto({ photo, setLoading });
         } catch (error) {
            console.log("error", error);
         }
      }
   };
   const disabled = loading || !photo;
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="flex  items-center">
            <label className="btn-animation input-file">
               <input type="file" onChange={handleChange} />
               <Image
                  src={"/tech/upload.svg"}
                  alt={"upload"}
                  width={40}
                  height={40}
                  className="mr-3"
               />
               Upload you picture
            </label>
         </div>
         <div className="my-6 flex items-center">
            {loading ? (
               <p>please wait ...</p>
            ) : (
               <Image
                  src={userPhoto}
                  width={200}
                  height={160}
                  alt={""}
                  className=" rounded h-auto"
               />
            )}
         </div>
         <CustomButton
            title={"Upload"}
            containerStyles={`input-file  disabled:opacity-50 
            ${disabled ? "pointer-events-none" : "pointer-events-auto"} 
            `}
            btnType="button"
            handleClick={handleClick}
            isDisabled={disabled}
         />
      </div>
   );
};

export default SettingsPicture;
