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
