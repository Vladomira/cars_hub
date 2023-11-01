import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config";

export const pushEmailColorToDb = async (
   emailColor: string,
   userId: string
) => {
   const userSettingsRef = doc(db, "userSettings", userId);

   try {
      await setDoc(userSettingsRef, { emailColor });
   } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
   }
};
export const getEmailColorFromDb = async (userId: string) => {
   const userSettingsRef = doc(db, "userSettings", userId);

   try {
      const res = await getDoc(userSettingsRef);
      if (res.exists()) {
         const userData = res.data();
         return userData.emailColor;
      }
   } catch (error) {
      throw error;
   }
};

export const pushBackgroundToDb = async (
   userBackground: string,
   userId: string
) => {
   const userSettingsRef = doc(db, "userSettings", userId); // Reference to the user's document

   try {
      await setDoc(userSettingsRef, { userBackground }, { merge: true });
   } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
   }
};
export const getBackFromDb = async (userId: string) => {
   const userSettingsRef = doc(db, "userSettings", userId);

   try {
      const res = await getDoc(userSettingsRef);
      if (res.exists()) {
         const userData = res.data();
         return userData.userBackground;
      }
   } catch (error) {
      throw error;
   }
};
export const pushPictureToDb = async (
   photo: Blob | Uint8Array | ArrayBuffer,
   userId: string
) => {
   const userSettingsRef = doc(db, "userSettings", userId); // Reference to the user's document

   try {
      await setDoc(userSettingsRef, { userPhoto: photo }, { merge: true });
   } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
   }
};

export const getPictureFromDb = async (userId: string) => {
   const userSettingsRef = doc(db, "userSettings", userId); // Reference to the user's document

   try {
      const res = await getDoc(userSettingsRef);
      if (res.exists()) {
         const userData = res.data();
         return userData.userPhoto;
      }
   } catch (error) {
      throw error;
   }
};
