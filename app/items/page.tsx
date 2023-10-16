"use client";
import React, { useState, useEffect } from "react";
import {
   collection,
   addDoc,
   getDoc,
   // querySnapshot,
   query,
   onSnapshot,
   deleteDoc,
   doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";

type UserForm = { email: string; password: string; id: string };
const initialUser = {
   email: "",
   password: "",
   id: "",
};

export default function Home() {
   const [items, setItems] = useState<UserForm[]>([]);
   const [newItem, setNewItem] = useState<UserForm>(initialUser);

   //    Add item to database
   const addItem = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (newItem.email !== "" && newItem.password !== "") {
         // setItems([...items, newItem]);
         await addDoc(collection(db, "users"), {
            email: newItem.email.trim(),
            password: newItem.password,
         });
         setNewItem({ email: "", password: "", id: "" });
      }
   };

   // Read items from database
   useEffect(() => {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
         let itemsArr: UserForm[] = [];

         querySnapshot.forEach((doc) => {
            const { email, password } = doc.data();
            itemsArr.push({
               email,
               password,
               id: doc.id,
            });
         });
         setItems(itemsArr);

         return () => unsubscribe();
      });
   }, []);

   // Delete items from database
   const deleteItem = async (id: string) => {
      await deleteDoc(doc(db, "users", id));
   };
   return (
      <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
         <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
            <div className="bg-slate-800 p-4 rounded-lg">
               <form className="grid grid-cols-6 items-center text-black">
                  <input
                     value={newItem.email}
                     onChange={(e) =>
                        setNewItem({ ...newItem, email: e.target.value })
                     }
                     className="col-span-3 p-3 border"
                     type="text"
                     placeholder="Enter Item"
                  />
                  <input
                     value={newItem.password}
                     onChange={(e) =>
                        setNewItem({ ...newItem, password: e.target.value })
                     }
                     className="col-span-2 p-3 border mx-3"
                     type="password"
                     placeholder="Enter $"
                  />
                  <button
                     onClick={addItem}
                     className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
                     type="submit"
                  >
                     +
                  </button>
               </form>
               <ul>
                  {items.length > 0 &&
                     items.map((item) => {
                        return (
                           <li
                              key={item.id}
                              className="my-4 w-full flex justify-between bg-slate-950"
                           >
                              <div className="p-4 w-full flex justify-between">
                                 <span className="capitalize text-blue-50">
                                    {item.email}
                                 </span>
                                 <span className="text-blue-50">
                                    ${item.password}
                                 </span>
                              </div>
                              <button
                                 onClick={() => deleteItem(item.id)}
                                 className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16"
                              >
                                 X
                              </button>
                           </li>
                        );
                     })}
               </ul>
               {items.length < 1 ? (
                  ""
               ) : (
                  <div className="flex justify-between p-3">
                     {/* <span>Total</span>
                     <span>${total}</span> */}
                  </div>
               )}
            </div>
         </div>
      </main>
   );
}
