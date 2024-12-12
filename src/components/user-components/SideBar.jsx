import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, toggleDarkMode } from "../../redux/userReducer";
import Logo from "../../assets/logo.png";
import letterLogo from "../../assets/logo.png";
import Rocket from "../../assets/logo.png";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { MdOutlineBuild } from "react-icons/md";
import { FaUser, FaWallet } from "react-icons/fa";
import eventsImg from "../../assets/events.png";
import escrowImg from "../../assets/escrowbar.png";
import { RiLogoutBoxFill } from "react-icons/ri";
import { RxCardStack, RxCardStackPlus } from "react-icons/rx"; // import { TbCardsFilled } from "react-icons/tb";
import {
  BsArrowRight,
  BsBook,
  BsChatDots,
  BsChevronDown,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillGearFill,
  BsKanban,
  BsQuestionCircleFill,
} from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import juliethToken from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { BiWallet } from "react-icons/bi";
import { useClickAway } from "react-use";
import { FaMapSigns, FaSitemap, FaUsers } from "react-icons/fa";

const SideBar = ({ isOpen, closeDrawer }) => {
  const {
    rememberMe,
    userInfo,
    darkMode,
    // userSubscriptionStatus,
    subscriptionState,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [showText, setShowText] = useState(true);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);
  const location = useLocation();
  const route = location.pathname;
  const drawerRef = useRef();
  const token = rememberMe
    ? localStorage.getItem("token")
    : sessionStorage.getItem("token");

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 230},
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 970px)" });
  // useEffect(() => {
  //   if (isTabletOrMobile) {
  //     setShowText(true);
  //   }
  // }, [isTabletOrMobile]);

  // useClickAway(drawerRef, () => {
  //   if (isTabletOrMobile) {
  //     closeDrawer();
  //   }
  // });

  const Logout = () => {
    dispatch(logout());
  }

  return (
    <motion.section
      onClick={() => closeDrawer()}
      className={`${darkMode ? "" : "bg-white"
        } overflow-visible max-md:w-full h-full max-md:fixed max-md:z-[999]`}
    >
      <motion.section
        onClick={(e) => e.stopPropagation()}
        variants={variants}
        transition={{ ease: "linear" }}
        initial={{ opacity: 0, x: "-120%" }}
        animate={{ opacity: 1, x: 0 }} 
        className={
          "w-[230px] overflow-visible  py-2 h-screen max-md:h-full  max-md:border-r-[1px] bg-[white] max-md:p-7 max-md:w-[75vw] max-md:top-0 max-md:left-0"
        }
      >
        <div className="flex flex-col max-md:justify-between h-full max-md:items-stretch w-full">
          <div className="flex items-center justify-between overflow-visible">
            {showText ? (
              <div
                className={
                  isTabletOrMobile
                    ? "w-full flex justify-start"
                    : "w-full  flex "
                }
              >
                <img width={200} src={Logo} />
              </div>
            ) : (
              <img src={letterLogo} alt="" width={35} />
            )}
            <IoIosClose
              className="hidden max-md:flex"
              onClick={() => closeDrawer()}
              size={50}
            />
          </div>
          <div className="flex flex-1 p-4 mt-8 gap-x-7 pt-5">
            <div className="flex flex-col overflow-y-auto gap-y-3 items-stretch w-max max-md:w-full">
              <NavLink
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex text-[#121212] flex-shrink-0 font-[500] items-center gap-x-4 text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
                to={"dashboard"}
              >
                <TbLayoutDashboard size={20} />
                Dashboard
              </NavLink>
              <NavLink
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
                to={"events"}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex flex-shrink-0 items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
              >
                {/* <BsChatDots size={20} /> */}
                {/* <img
                  src={eventsImg}
                  width={22}
                  onContextMenu={(e) => e.preventDefault()}
                /> */}
                {/* <TbCardsFilled /> */}
                <RxCardStack size={20} />
                Events
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex flex-shrink-0 items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
                to={"escrow"}
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
              >
                {/* <RxCardStackPlus size={22} /> */}
                <BsStack size={20} />
                {/* <img
                  src={escrowImg}
                  width={24}
                  onContextMenu={(e) => e.preventDefault()}
                /> */}
                Escrow{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex flex-shrink-0 items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
                to={"wallets"}
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
              >
                <FaWallet size={20} />
                Wallets{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex flex-shrink-0 items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
                to={"settings"}
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
              >
                <BsFillGearFill size={20} />
                Settings{" "}
              </NavLink>
              <NavLink
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex flex-shrink-0 items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
                to={"supports"}
              >
                <BsQuestionCircleFill size={20} />
                Supports{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-shrink-0 font-[500] text-[14px] text-white items-center gap-x-4 p-[0.6rem] rounded-lg  w-full bg-[#3FAAE0] "
                    : "flex flex-shrink-0 items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"
                }
                to={"account"}
                onClick={() => {
                  isTabletOrMobile && closeDrawer();
                }}
              >
                <FaUser size={20} />
                Account{" "}
              </NavLink>
              <NavLink
                className={"flex flex-shrink-0 mt-auto items-center gap-x-4 font-[500] text-[#121212] text-[14px] p-[0.6rem] rounded-lg  w-full"}
                to={"/"}
                onClick={() => Logout()}
              >
                <RiLogoutBoxFill size={25} />
                Logout{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.section>
  );
};

export default SideBar;
