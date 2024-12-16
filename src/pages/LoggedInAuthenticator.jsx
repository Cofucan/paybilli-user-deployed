import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../components/user-components/SideBar";
import MobileHeader from "../components/user-components/MobileHeader";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import {
  getAirtimeOptions,
  getAllEventTypes,
  getOpenBets,
  getWalletBalance,
} from "../redux/userReducer";

export default function LoggedInAuthenticator({ children }) {
  const { loggedIn, userInfo } = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token");

  const [isOpen, setOpenDrawer] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(getOpenBets(token));
      dispatch(getAllEventTypes(token));
      dispatch(getAirtimeOptions(token));
      dispatch(getWalletBalance({ token }));
    }
  }, []);

  if (!loggedIn) {
    return <Navigate to="/" />;
  }
  // if (loggedIn && userInfo.is_onboarding_completed) {
  //   return <Navigate to="/user/dashboard" />;
  // }

  return (
    <div className="flex max-md:flex-col overflow-hidden ">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <div className=" lg:block  hidden " >
        {(!window.location.pathname.includes("onboarding")) && (
          <SideBar isOpen={isOpen} closeDrawer={() => setOpenDrawer(false)} />
        )}
      </div>

      <div className=" lg:hidden  " >
        {(!window.location.pathname.includes("onboarding") && isOpen) && (
          <SideBar isOpen={isOpen} closeDrawer={() => setOpenDrawer(false)} />
        )}
      </div>


      <div className="h-[100vh] lg:pt-0 w-full relative flex flex-col ">
      <MobileHeader openDrawer={() => setOpenDrawer(true)} />
        <Outlet />
      </div>
    </div>
  );
}
