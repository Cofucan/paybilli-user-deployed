import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsEye, BsEyeSlash, BsFillLockFill, BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../redux/userReducer";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import lines from "../../assets/lines.png";
import SideBar from "../../components/user-components/SideBar";

const SetPassword = () => {
  const { userInfo, loading, token } = useSelector((state) => state.user);
  // const token = sessionStorage.getItem("token");
  const [passwords, setPasswords] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const dispatch = useDispatch();

  function setUserPassword(e) {
    e.preventDefault();
    if (
      passwords === confirm_password &&
      passwords.length > 5 &&
      /[0-9]/.test(passwords)
    ) {
      const data = {
        password: passwords,
        confirm_password,
      };
      dispatch(setPassword({ token, data }));
    } else if (passwords !== confirm_password) {
      toast.error("Please ensure both passwords are the same");
    } else if (passwords.length < 6) {
      toast.error("Password must be a minimum of 6 characters");
    } else if (!/[0-9]/.test(password)) {
      toast.error("Password must contain a number");
    }
  }

  return (
    <section
      style={{
        backgroundImage: `url(${lines})`,
        backgroundSize: "cover",
        backgroundPosition: " center",
      }}
      className="w-full flex px-4 p-2 flex-col  h-screen"
    >
      <img src={Logo} width={200} />

      <div className="w-[100%] lg:w-max mx-auto mt-[4%] p-8 lg:p-4 ">
        <form
          onSubmit={setUserPassword}
          className="w-full  flex flex-col justify-center"
        >
          <h3 className="font-[600] text-[40px] bg-clip-text text-[#3FAAE0] ">
            Set Password
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing Dolore
            reprehenderitDolore {"   "} reprehenderit
            <br /> elit. Dolore reprehenderit
          </p>
          <div className="w-full mt-6  py-3">
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setPasswords(e.target.value)}
                    type="password"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                    value={passwords}
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  mt-2 py-3">
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setConfirm_password(e.target.value)}
                    type="password"
                    className="bg-transparent text-[#2d2d2d] pash outline-none w-full"
                    value={confirm_password}
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className=" w-max font-[500] px-10 mt-14 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <BeatLoader
                style={{ padding: "2px" }}
                color="#ffffff"
                size={10}
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SetPassword;
