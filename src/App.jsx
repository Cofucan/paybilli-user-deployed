import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
// import Mentor from "./pages/Mentor";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Verification from "./pages/auth/Verification";
import ForgotPassword from "./pages/auth/ForgotPassword";
import SetNewPassword from "./pages/auth/SetNewPassword";
import LoggedOutAuthenticator from "./pages/LoggedOutAuthenticator";
import LoggedInAuthenticator from "./pages/LoggedInAuthenticator";
import Events from "./pages/event/Events";
import Wallets from "./pages/Wallets";
import Settings from "./pages/Settings";
import Onboarding from "./pages/Onboarding";
import SetPassword from "./pages/auth/SetPassword";
import { useSelector } from "react-redux";
import Escrow from "./pages/Escrow";
import Supports from "./pages/Supports";
import Openbet from "./pages/event/Openbet";
import Pendingbet from "./pages/event/Pendingbet";
import Account from "./pages/Account";

const App = () => {
  const { loggedIn, userInfo } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoggedOutAuthenticator />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-verification" element={<Verification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Route>
        <Route path="/user" element={<LoggedInAuthenticator />}>
          {/* {loggedIn && !userInfo.is_onboarding_completed && (
            <Navigate to="onboarding" />
          )} */}
          {/* You can add other condition-based navigation here */}
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="events" element={
            <>
              <Outlet />
            </>
          } >
            <Route index element={<Events />} />
            <Route path="openbet" element={<Openbet />} />
            <Route path="pendingbet" element={<Pendingbet />} /> 
          </Route>
          <Route path="wallets" element={<Wallets />} />
          <Route path="settings" element={<Settings />} />
          <Route path="escrow" element={<Escrow />} />
          <Route path="supports" element={<Supports />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
