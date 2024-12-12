import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  accountCheck,
  toggleRemeberMe,
  userLogin,
} from "../../redux/userReducer";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import lines from "../../assets/lines.png";
import Logo from "../../assets/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const [password, setPassword] = useState("");
  const { loading, showField, userInfo, loggedIn } = useSelector(
    (state) => state.user
  );
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // console.log(loggedIn, userInfo);

  useEffect(() => {
    if (showField) {
      setVisible(true);
    }
  }, [showField]);

  function login(e) {
    e.preventDefault();
    if (
      email.match(emailRegex) &&
      password.length > 5 &&
      /[0-9]/.test(password)
    ) {
      const data = {
        email,
        password,
      };
      dispatch(userLogin(data));
    } else if (!email.match(emailRegex)) {
      toast.error("Please provide a valid Email address");
    } else if (password.length < 6) {
      toast.error("Password must be a minimum of 6 characters");
    } else if (!/[0-9]/.test(password)) {
      toast.error("Password must contain a number");
    }
  }

  function accountValidation(e) {
    e.preventDefault();
    if (email.match(emailRegex)) {
      const data = {
        email,
      }; 
      dispatch(accountCheck({ data }));
    } else if (!email.match(emailRegex)) {
      toast.error("Please provide a valid Email address");
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
      {/* <h1 className="text-[#3FAAE0]">Paybilli</h1> */}
      <div className="w-[100%] lg:w-max mx-auto mt-[4%] p-8 lg:p-4 ">
        <form className="w-full  flex flex-col justify-center">
          <h3 className="font-[600] text-[40px] bg-clip-text text-[#3FAAE0] ">
            Login
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur reprehenderitelit.
            <br /> Dolore reprehenderit
          </p>
          <div className="w-full mt-6  py-3">
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                    value={email}
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>
          </div>
          {visible && (
            <>
              <div className="w-full  mt-2 py-3">
                <div className=" p-[1px] rounded-[8px] mt-1 ">
                  <div className="bg-[#dbdbdb] rounded-md ">
                    <div className=" flex px-4 py-3 gap-x-3 items-center">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="bg-transparent text-[#2d2d2d] pash outline-none w-full"
                        value={password}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full md:w-[80%] mt-2">
                <Link
                  className="text-[#3FAAE0] text-sm font-[500]"
                  to={"/forgot-password"}
                >
                  Forgot Password?
                </Link>
              </div>
            </>
          )}{" "}
          {!visible && (
            <button
              disabled={loading}
              onClick={(e) => accountValidation(e)}
              className=" w-max font-[500] px-10 mt-14 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <BeatLoader
                  style={{ padding: "2px" }}
                  color="#ffffff"
                  size={10}
                />
              ) : (
                "Proceed"
              )}
            </button>
          )}
          {visible && (
            <button
              disabled={loading}
              onClick={login}
              className=" w-max font-[500] px-10 mt-14 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <BeatLoader
                  style={{ padding: "2px" }}
                  color="#ffffff"
                  size={10}
                />
              ) : (
                "Login"
              )}
            </button>
          )}{" "}
          <p className="text-sm mt-4 font-[500]">
            Don't have an account?{" "}
            <Link
              className="text-[#3FAAE0] opacity-100 underline-offset-1"
              to={"/register"}
            >
              Sign up, Now.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
