import { createContext, useContext, useEffect, useState } from "react";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

import {
  UserStylesInstance,
  initialUserStyles,
  UserImageProps,
  ChangePictureProp,
} from "@/types/user-preference";
import { AuthContext } from "./AuthContext";
import { createStorageRef, downloadUserImage } from "@/utils/helpers";
import {
  getEmailColorFromDb,
  pushEmailColorToDb,
} from "@/firebase/preference.ts";
import { backgroundInit, pictureInit, emailColorInit } from "@/lib/sidebar";
import { ChildrenProps } from "@/types";

export const UserPreferenceContext =
  createContext<UserStylesInstance>(initialUserStyles);

export const UserPreferenceProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [userPhoto, setUserPhoto] = useState<string>(pictureInit);
  const [userBackground, setUserBackground] = useState<string>(backgroundInit);
  const [emailColor, setEmailColor] = useState<string>(emailColorInit);
  const { user, reloadUser } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      try {
        getUserImage({ path: "pictures", setImage: setUserPhoto });
        getUserImage({ path: "background", setImage: setUserBackground });
        getEmailColor();
      } catch (error: any) {
        console.log("error:", error);
      }
    }
  }, [user, emailColor]);

  const getUserImage = async ({ path, setImage }: UserImageProps) => {
    const storageRef = createStorageRef(path, user?.uid);
    try {
      const downloadURL = await getDownloadURL(storageRef);
      if (downloadURL) {
        setImage(downloadURL);
      } else {
        return;
      }
    } catch (error: any) {
      if (error.code === "storage/object-not-found") {
        console.log("You don't have a custom picture yet");
      }
    }
  };
  const changeUserBack = async ({ photo, setLoading }: ChangePictureProp) => {
    const storageRef = createStorageRef("background", user?.uid);

    setLoading(true);
    await uploadBytes(storageRef, photo);

    await downloadUserImage(storageRef, setUserBackground);

    setLoading(false);
  };

  const changeUserPhoto = async ({ photo, setLoading }: ChangePictureProp) => {
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

  const changeEmailColor = async (color: string) => {
    if (user) {
      pushEmailColorToDb(color, user.uid);
      setEmailColor(color);
    }
  };
  const getEmailColor = async () => {
    if (user) {
      const color = await getEmailColorFromDb(user.uid);
      if (color) setEmailColor(color);
    }
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
        emailColor,
        setEmailColor,
        changeEmailColor,
      }}
    >
      {children}
    </UserPreferenceContext.Provider>
  );
};
