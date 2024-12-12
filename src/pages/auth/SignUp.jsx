import React, { useState } from "react";
// import Logo from "../../assets/julieth.png";
import { BiUserCircle } from "react-icons/bi";
import { BsEye, BsEyeSlash, BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/userReducer";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import lines from "../../assets/lines.png";
import Logo from "../../assets/logo.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { loading } = useSelector((state) => state.user);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone_number, setPhone_number] = useState("");

  // console.log(first_name, last_name, phone_number, email, username);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function signUp(e) {
    e.preventDefault();
    if (
      first_name.length > 0 &&
      last_name.length > 0 &&
      phone_number.length > 3 &&
      email.match(emailRegex)
    ) {
      const data = {
        first_name,
        last_name,
        phone_number,
        email,
        username,
      };
      dispatch(registerUser(data));
    } else if (!email.match(emailRegex)) {
      toast.error("Please provide a valid Email address");
    } else if (phone_number.length < 4) {
      toast.error("Please provide a valid phone number");
    } else {
      toast.error("Please fill in all fields!");
    }
  }

  console.log;
  return (
    <section
      style={{
        backgroundImage: `url(${lines})`,
        backgroundSize: "cover",
        backgroundPosition: " center",
      }}
      className="w-full px-4 p-2   h-screen overflow-y-auto"
    >
      <img src={Logo} width={200} />

      <div className="w-[100%] lg:w-max mx-auto mt-[2%] p-8 lg:p-4 ">
        <form
          onSubmit={signUp}
          className="w-full  flex flex-col justify-center"
        >
          <h3 className="font-[600] text-[40px] bg-clip-text text-[#3FAAE0] ">
            Registration
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed
            posuere <br /> duis.Velit euismod quis sed ut quis.
          </p>
          <div className="w-full flex gap-x-10 mt-2  py-3">
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setFirst_name(e.target.value)}
                    value={first_name}
                    type="text"
                    // id="email"
                    placeholder="First name"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                  />
                </div>
              </div>
            </div>
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setLast_name(e.target.value)}
                    value={last_name}
                    type="text"
                    // id="email"
                    placeholder="Surname"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-2 py-3">
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-2 py-3">
            <div className=" p-[1px] rounded-[8px] mt-1 ">
              <div className="bg-[#dbdbdb] rounded-md ">
                <div className=" flex px-4 py-3 gap-x-3 items-center">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    type="email"
                    className="bg-transparent text-[#2d2d2d] pash text-[14px] font-[500] p-1 outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <PhoneInput
            className="border-2 bg-[#dbdbdb] mt-2 outline-none font-[500] text-[14px] p-4 rounded-lg phone"
            onChange={setPhone_number}
            value={phone_number}
            id="phone"
            placeholder="Enter Phone Number"
          />

          <button
            disabled={loading}
            type="submit"
            className=" w-max font-[500] px-10 mt-10 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <BeatLoader
                style={{ padding: "2px" }}
                color="#ffffff"
                size={10}
              />
            ) : (
              "Sign Up"
            )}
          </button>
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link
              className="text-[#3FAAE0] opacity-100 underline-offset-1"
              to={"/login"}
            >
              Sign in, Now
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
