import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forgotPassword } from "../../redux/userReducer";
import { BeatLoader } from "react-spinners";
import lines from "../../assets/lines.png";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { loading, responseMessage } = useSelector((state) => state.user);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function forgot(e) {
    e.preventDefault();
    if (email.match(emailRegex)) {
      dispatch(forgotPassword({ email }));
    } else {
      toast.error("Please provide a valid Email address");
    }
  }

  useEffect(() => {
    if (responseMessage == "password reset code sent") {
    }
  }, [responseMessage]);

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
          onSubmit={forgot}
          className="w-full  flex flex-col justify-center"
        >
          <h3 className="font-[600] text-[40px] bg-clip-text text-[#3FAAE0] ">
            Forgot Password
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing Dolore
            reprehenderitDolore {"   "} reprehenderit
            <br /> elit. Dolore reprehenderit
          </p>
          <div className="w-full md:w-[80%] py-3">
            <div className="w-full py-3">
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
          </div>
          <button
            disabled={loading}
            type="submit"
            className=" w-max font-[500] px-10 mt-8 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
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
          <p className="text-sm mt-4 ">
            Remember password?{" "}
            <Link
              className="text-[#3FAAE0] opacity-100 underline-offset-1"
              to={"/auth/register"}
            >
              Sign in, Now
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
