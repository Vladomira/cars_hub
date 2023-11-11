"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import NavLink from "../NavBar/NavLink";
import { Modal, UserSettings } from "..";

import { SideBarNavProps } from "@/types/sidebar";
import { UserPreferenceContext } from "@/context/UserPreferenceContext";
import { backgroundInit } from "@/lib/sidebar";

const SideBarNav = ({ setIsOpen }: SideBarNavProps) => {
  const { user, logout } = useContext(AuthContext);
  const { setUserBackground } = useContext(UserPreferenceContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="sidebar-nav">
      <div className="sidebar-nav__links">
        <Image
          src={"/nav-links/home.svg"}
          width={30}
          height={30}
          alt={"home"}
          className="flex items-center justify-center mr-3"
        />

        <NavLink title={"Home"} href={"/"} />
      </div>

      {user?.email ? (
        <>
          <div className="sidebar-nav__links">
            <Image
              src={"/nav-links/logout.svg"}
              alt={"logout-icon"}
              width={30}
              height={30}
              className="mr-2"
            />
            <NavLink
              title={"Sign out"}
              href={""}
              linkStyle=""
              handleClick={() => {
                logout(), setUserBackground(backgroundInit);
              }}
            />
          </div>
          <div className="sidebar-nav__links">
            <Image
              src={"/nav-links/settings.svg"}
              alt={"settings"}
              width={30}
              height={30}
              className="mr-2"
            />

            <NavLink
              title={"Settings"}
              href={""}
              handleClick={() => setIsOpenModal(true)}
            />
          </div>
          <Modal
            isOpen={isOpenModal}
            modalBoxStyles=" scrollbar min-[320px]:w-[280px] min-[768px]:w-[380px] min-[1000px]:min-w-[623px] overflow-y-scroll py-9 px-8   bg-zinc-800"
            closeModal={() => setIsOpenModal(false)}
          >
            <UserSettings />
          </Modal>
        </>
      ) : (
        <div className="sidebar-nav__links">
          <Image
            src={"/nav-links/login.svg"}
            alt={"login-icon"}
            width={30}
            height={30}
            className="mr-2"
          />

          <NavLink
            title={"Sign in"}
            href={"/auth"}
            handleClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SideBarNav;
