import { createContext, useContext, useEffect, useState } from "react";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

import {
   UserStylesInstance,
   initialUserStyles,
   ChildrenProps,
   UploadFileProps,
   UserImageProps,
} from "@/types";
import { AuthContext } from "./AuthContext";
import { createStorageRef, downloadUserImage } from "@/utils/helpers";

export const UserPreferenceContext =
   createContext<UserStylesInstance>(initialUserStyles);

export const UserPreferenceProvider: React.FC<ChildrenProps> = ({
   children,
}) => {
   const [userPhoto, setUserPhoto] = useState<string>("/tech/user.jpeg");
   const [userBackground, setUserBackground] = useState<string>(
      "/background/abstract4.jpeg"
   );
   const { user, reloadUser } = useContext(AuthContext);

   useEffect(() => {
      if (user) {
         getUserImage({ path: "pictures", setImage: setUserPhoto });
         getUserImage({ path: "background", setImage: setUserBackground });
      }
   }, [user]);

   const getUserImage = async ({ path, setImage }: UserImageProps) => {
      const storageRef = createStorageRef(path, user?.uid);
      try {
         const downloadURL = await getDownloadURL(storageRef);
         setImage(downloadURL);
      } catch (error) {
         console.log("error", error);
         throw error;
      }
   };
   const changeUserBack = async (photo: string) => {
      const photoLocation = `/background/${photo}`;

      const imageBlob = await fetch(photoLocation).then((response) =>
         response.blob()
      );

      const storageRef = createStorageRef("background", user?.uid);
      await uploadBytes(storageRef, imageBlob);

      await downloadUserImage(storageRef, setUserBackground);
   };

   const changeUserPhoto = async ({ photo, setLoading }: UploadFileProps) => {
      const storageRef = createStorageRef("pictures", user?.uid);
      setLoading(true);

      await uploadBytes(storageRef, photo);
      const photoURL = await downloadUserImage(storageRef, setUserPhoto);
      if (user) {
         await updateProfile(user, { photoURL });
         reloadUser();
      }
      setLoading(false);
   };

   return (
      <UserPreferenceContext.Provider
         value={{
            userPhoto,
            setUserPhoto,
            changeUserPhoto,
            userBackground,
            setUserBackground,
            changeUserBack,
         }}
      >
         {children}
      </UserPreferenceContext.Provider>
   );
};
