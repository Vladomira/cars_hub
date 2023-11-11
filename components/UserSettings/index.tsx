"use client";
import React, { Fragment, useContext, useState } from "react";
import { Tab } from "@headlessui/react";

import SettingsImages from "./SettingsImages";
import SettingsEmailColor from "./SettingsEmailColor";
import UserArea from "../SideBar/UserArea";
import { tabTitles } from "@/lib/sidebar";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";

const UserSettings = () => {
  const { userPhoto, emailColor, userBackground } = useContext(
    UserPreferenceContext,
  );
  const [color, setColor] = useState<string>(emailColor);
  const [photo, setPhoto] = useState<string>(userPhoto);
  const [backgroundTest, setBackgroundTest] = useState<string>(userBackground);

  return (
    <div className="flex flex-col  scrollbar__child ">
      <div className="flex justify-center pb-6 border-b-[1px] border-gray-600">
        <UserArea
          boxStyles={"min-[320px]:w-[232px] min-[768px]:w-[332px] rounded-md"}
          color={color}
          photo={photo}
          backgroundTest={backgroundTest}
        />
      </div>

      <div className="flex ">
        <Tab.Group>
          <Tab.List
            className={
              "flex flex-col whitespace-nowrap border-r-[1px] border-gray-600  "
            }
          >
            {tabTitles.map((el) => (
              <Tab as={Fragment} key={el}>
                {({ selected }) => (
                  <button
                    type="button"
                    className={`flex justify-start outline-none pt-2 pb-2 pr-4 pl-2  border-b-[1px] border-gray-600
                         ${
                           selected
                             ? "bg-slate-300 text-slate-800 font-semibold rounded-l"
                             : "text-gray-400 "
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
            className={"pl-[1.6rem] pt-[1.6rem] min-h-[486px] block m-auto  "}
          >
            <Tab.Panel>
              <SettingsImages
                setImage={setBackgroundTest}
                image={backgroundTest}
                photo={photo}
                setPhoto={setPhoto}
              />
            </Tab.Panel>

            <Tab.Panel>
              <SettingsEmailColor setColor={setColor} color={color} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default UserSettings;
