"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

import BackgroundsList from "./SettingsBackground";
import SettingsEmailColor from "./SettingsEmailColor";
import UserArea from "../SideBar/UserArea";
import SettingsPicture from "./SettingsPicture";
import { settingList } from "@/lib/constants";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import { AuthContext } from "@/context/AuthContext";

// export const tabsContentList = [
//    <BackgroundsList />,
//    <SettingsPicture />,
//    <SettingsEmailColor />,
// ];

const UserSettings = () => {
   const { user } = useContext(AuthContext);
   const { userPhoto, userBackground } = useContext(UserPreferenceContext);
   // const [userPicture, setUserPicture] = useState<string>(userPhoto);
   // const [userBack, setUserBack] = useState<string>(userBackground);

   // useEffect(() => {
   //    if (user) {
   //       setUserPicture(userPhoto);
   //       setUserBack(userBackground);
   //    }
   // }, [user?.photoURL]);

   return (
      <div className="flex flex-col  ">
         <div className="flex justify-center pb-4 border-b-[1px] border-gray-600">
            <UserArea
               boxStyles={"min-[320px]:w-[232px] min-[768px]:w-[332px]"}
            />
         </div>

         <div className="flex ">
            <Tab.Group>
               <Tab.List
                  className={
                     "flex flex-col whitespace-nowrap border-r-[1px] border-gray-600  "
                  }
               >
                  {settingList.map((el) => (
                     <Tab as={Fragment} key={el}>
                        {({ selected }) => (
                           <button
                              type="button"
                              className={`flex justify-start outline-none pt-2 pb-2 pr-4 pl-2  border-b-[1px] border-gray-600
                         ${
                            selected
                               ? "bg-gray-300 text-slay-400 font-medium rounded-l"
                               : "bg-slay-500 text-gray-400 "
                         }
                         `}
                           >
                              {el}
                           </button>
                        )}
                     </Tab>
                  ))}
               </Tab.List>
               <Tab.Panels
                  className={" pl-[1.6rem] pt-[1.6rem] min-h-[486px]  "}
               >
                  <Tab.Panel>
                     <BackgroundsList />
                  </Tab.Panel>

                  <Tab.Panel>
                     <SettingsPicture />
                  </Tab.Panel>

                  <Tab.Panel>
                     <SettingsEmailColor />
                  </Tab.Panel>
               </Tab.Panels>
            </Tab.Group>
         </div>
      </div>
   );
};

export default UserSettings;
