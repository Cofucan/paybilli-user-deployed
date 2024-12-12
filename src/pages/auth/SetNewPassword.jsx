import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsEye, BsEyeSlash, BsFillLockFill, BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
// import { verifyCodeUpdatePassword } from "../../redux/userReducer";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import lines from "../../assets/lines.png";
import SideBar from "../../components/user-components/SideBar";

const SetNewPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading } = useSelector((state) => state.user);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function newPassword(e) {
    e.preventDefault();
    if (
      !isNaN(code) &&
      password1 === password2 &&
      email.match(emailRegex) &&
      password1.length > 5 &&
      /[0-9]/.test(password1)
    ) {
      const data = {
        email,
        resetCode: Number(code),
        password: password1,
      };
      dispatch(verifyCodeUpdatePassword(data));
    } else if (!email.match(emailRegex)) {
      toast.error("Please provide a valid Email address");
    } else if (password1 !== password2) {
      toast.error("Please ensure both passwords are the same");
    } else if (password1.length < 6) {
      toast.error("Password must be a minimum of 6 characters");
    } else if (!/[0-9]/.test(password1)) {
      toast.error("Password must contain a number");
    } else if (isNaN(code)) {
      toast.error("Reset code is not a valid number");
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
          onSubmit={newPassword}
          className="w-full  flex flex-col justify-center"
        >
          <h3 className="font-[600] text-[40px] bg-clip-text text-[#3FAAE0] ">
            Set New Password
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
                    // onChange={(e) => setEmail(e.target.value)}
                    type="password"
                    id="email"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                    // value={email}
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
                    // onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    className="bg-transparent text-[#2d2d2d] pash outline-none w-full"
                    // value={password}
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

export default SetNewPassword;
