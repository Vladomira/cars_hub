import { SyntheticEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import { imageType } from "@/types";

const useChangePicture = () => {
   const { changeUserBack, changeUserPhoto, userPhoto, userBackground } =
      useContext(UserPreferenceContext);
   const [testImg, setTestImg] = useState<string>(userPhoto);
   const [testBack, setTestBack] = useState<string>(userBackground);
   const [blobFile, setBlobFile] = useState<Blob>();
   const [loading, setLoading] = useState(false);

   const handleChange = (
      type: imageType,
      e?: SyntheticEvent<HTMLInputElement>,
      localImg?: Blob
   ) => {
      const target = e?.target as HTMLInputElement;
      const selectedFile = localImg || (target.files && target.files[0]);

      if (selectedFile) {
         const newFile = new Blob([selectedFile], {
            type: selectedFile?.type,
         });

         setBlobFile(newFile);
         const fileUrl = URL.createObjectURL(selectedFile);
         if (type === "background") {
            setTestBack(fileUrl);
         } else {
            setTestImg(fileUrl);
         }
      }
   };

   const handleClick = (type: imageType) => {
      if (blobFile) {
         try {
            switch (type) {
               case "background":
                  changeUserBack({ photo: blobFile, setLoading });
                  break;

               case "picture":
                  changeUserPhoto({ photo: blobFile, setLoading });
                  break;
            }
            toast.success(
               `${type.charAt(0).toUpperCase() + type.slice(1)} was updated`
            );
         } catch (error) {
            console.log("error", error);
            toast.warn("Something went wrong");
         }
      }
   };

   const disabled = loading || !blobFile;

   return {
      handleChange,
      handleClick,
      disabled,
      testBack,
      testImg,
      loading,
   };
};

export default useChangePicture;
