import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileHeader = ({ openDrawer }) => {
  const location = useLocation();
  const { userInfo, darkMode } = useSelector((state) => state.user);
  return (
    <div
      className={`${
        darkMode
          ? "bg-[#0a0325] border-b-white/10"
          : "bg-white border-b-black/10 text-black"
      } hidden border-b-[1px] fixed w-full top-0 left-0 z-[50] px-5 h-[60px]  justify-between items-center max-md:flex`}
    >
      <div className="flex items-center gap-x-3">
        <GiHamburgerMenu
          size={25}
          className="cursor-pointer"
          onClick={() => openDrawer()}
        />
        <p className="font-medium text-[14px] text-inherit">
          {location.pathname.endsWith("test1") ||
          location.pathname.endsWith("test2")
            ? "Personality Test"
            : `Hello, ${userInfo?.firstName}`}
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <FaRegBell size={25} />
        <NavLink
          to={"/user/profile"}
          className="w-[30px] h-[30px] overflow-hidden object-cover rounded-[50%] border-[2px] border-[#FC00B5]"
        >
          <img
            className="w-full h-full object-cover"
            src={
              userInfo?.displayPhoto
                ? userInfo?.displayPhoto?.url
                : "https://i.pinimg.com/474x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"
            }
          />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileHeader;
