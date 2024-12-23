import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forgotPassword, sendVerificationCode, verifyEmail } from "../../redux/userReducer";
import { BeatLoader } from "react-spinners";
import lines from "../../assets/lines.png";
import PinInput from "react-pin-input";

const Verification = () => {
  const { userInfo, loading, token } = useSelector((state) => state.user);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const myParam = searchParams.get("forgot"); 

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    if (myParam === "true") {
      dispatch(forgotPassword({ email: userInfo.email }));
    } else {
      dispatch(sendVerificationCode(token));
    }

  };

  const submit = (digit) => {
    const data = { verify_token: Number(digit) };
    dispatch(verifyEmail({ token, data }));
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

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

      <div className="w-[100%]  lg:w-max mx-auto mt-[4%] p-8 lg:p-4 ">
        <h3 className="font-[600] text-[40px] bg-clip-text text-[#3FAAE0] ">
          Enter the 6-digit sent to <br />{" "}
          {userInfo.email && userInfo.email.length > 1 ? userInfo.email : " "}
        </h3>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed
          posuere <br /> duis.Velit euismod quis sed ut quis.
        </p> */}
        <div className="flex mt-6 gap-x-6">
          <PinInput
            length={6}
            focus
            // disabled
            // secret 
            inputStyle={{ backgroundColor: '#D5D5D5', borderRadius: "8px", fontSize: "18px", borderColor: "#D5D5D5" }}
            type="numeric"
            onChange={(e) => setOtp(e)}
            onComplete={(e) => submit(e)}
          />
        </div>
        <div className="flex gap-x-2 items-center w-full mt-5">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p className="font-[500]">Didn't recieve code?</p>
          )}

          <button
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#696868" : "#3FAAE0",
            }}
            onClick={resendOTP}
            type="button"
            className="font-[500]"
          >
            {loading ? (
              <BeatLoader
                style={{ padding: "2px" }}
                color="#3FAAE0"
                size={10}
              />
            ) : (
              "Resend Code"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Verification;
