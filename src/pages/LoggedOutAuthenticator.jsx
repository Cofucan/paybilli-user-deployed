import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoggedOutAuthenticator({ children }) {
  const { loggedIn, userInfo } = useSelector((state) => state.user);
  
  const [searchParams] = useSearchParams(); 

  if (loggedIn && !userInfo.is_onboarding_completed) { 
      return <Navigate to="/user/onboarding?password=true" /> 
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
