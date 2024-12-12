import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoggedOutAuthenticator({ children }) {
  const { loggedIn, userInfo } = useSelector((state) => state.user);

  if (loggedIn && !userInfo.is_onboarding_completed) {
    return <Navigate to="/user/onboarding" />;
  }

  if (loggedIn && userInfo.is_onboarding_completed) {
    return <Navigate to="/user/dashboard" />;
  }

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}
