import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import profile from "../../assets/profile.png";

const MobileHeader = ({ openDrawer }) => {
  const location = useLocation();
  const { userInfo, darkMode } = useSelector((state) => state.user);
  return (
    <div
      className={`${
        // darkMode
        //   ? "bg-[#0a0325] border-b-white/10"
          // : 
          "bg-white border-b-black/10 text-black"
      } hidden border-b-[1px] sticky w-full top-0 left-0 z-[50] px-5 h-[60px]  justify-between items-center max-md:flex`}
    >
      <div className="flex items-center gap-x-3">
        <GiHamburgerMenu
          size={25}
          className="cursor-pointer"
          onClick={() => openDrawer()}
        />
        {/* <p className="font-medium text-[14px] text-inherit">
          {location.pathname.endsWith("test1") ||
          location.pathname.endsWith("test2")
            ? "Personality Test"
            : `Hello, ${userInfo?.firstName}`}
        </p> */}
      </div> 
      
      <div className="flex gap-x-4 items-center">
                <div className="bg-[#DDDDDD] rounded-full h-max w-max p-2">
                    <BsBell color="#393737" size={19} />
                </div>
                {/* <p className="text-[#0c0c0c]">Hi, {userInfo.first_name}</p> */}
                <img
                    onContextMenu={(e) => e.preventDefault()}
                    width={50}
                    src={profile}
                />
            </div>
    </div>
  );
};

export default MobileHeader;
