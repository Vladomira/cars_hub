import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

// Initialize Firebase
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

export { db, auth };
// import React, { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged(setCurrentUser);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
