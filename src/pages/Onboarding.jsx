import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { toast } from "react-toastify";

import {
  kycVerification,
  setOnboarding,
  setOnboardingLoading,
  setPin,
  updateProfile,
} from "../redux/userReducer";
import { CgAsterisk } from "react-icons/cg";

const Onboarding = () => {
  const { loading, userInfo, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [phase, setPhase] = useState(1);
  const [month, setMonth] = useState("");
  const [radio, setRadio] = useState("");
  const [file, setFile] = useState(null);
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [bvn, setBvn] = useState("");
  const [nin, setNin] = useState("");
  const [pinDigits, setPinDigits] = useState(Array(4).fill(""));
  // const token = sessionStorage.getItem("token");

  const data = {
    month_of_birth: month,
    state,
    country,
    username: userInfo.username,
    email: userInfo.email,
    date_of_birth,
    // profile_image: "",
  };

  useEffect(() => {
    if (userInfo.country.length > 2 && !userInfo.is_kyc_completed) {
      setPhase(2);
    }
  }, [userInfo, userInfo.country, userInfo.is_kyc_completed]);

  useEffect(() => {
    if (userInfo.country.length > 2 && userInfo.is_kyc_completed) {
      setPhase(3);
    }
  }, [userInfo, userInfo.country, userInfo.is_kyc_completed]);

  useEffect(() => {
    if (radio === "bvn") {
      setNin("");
    } else if (radio === "nin") {
      setBvn("");
    }
  }, [radio]); 

  console.log(userInfo);

  const pinInputRefs = useRef([]);
  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const handlePinInputChange = (index, value) => {
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = value;
    setPinDigits(newPinDigits);

    if (value && index < pinDigits.length - 1) {
      pinInputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      pinInputRefs.current[index - 1].focus();
    }
  };
  const handleSubmit = async () => {
    if (phase === 1 && country.length > 2 && state.length > 1) {
      dispatch(setOnboardingLoading(true));
      try {
        let response = await fetch(
          `https://paybilli-api-16f195c5b3f3.herokuapp.com/account/user-details/`,
          {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        ).then((res) => res.json());
        dispatch(setOnboarding(response));
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else if (phase === 2) {
      if (radio === "bvn" && bvn.length !== 11) {
        toast.error("BVN must be 11 characters long.");
        return;
      }
      if (radio === "nin" && nin.length !== 11) {
        toast.error("NIN must be 11 characters long.");
        return;
      }
      const kyc = {
        bvn,
        nin,
      };
      dispatch(kycVerification({ token, kyc }));
    } else if (phase === 3) {
      if (pinDigits.length !== 4) {
        toast.error("PIN must be 4 characters long.");
        return;
      }
      const data = {
        pin: pinDigits.join(""),
      };
      dispatch(setPin({ token, data }));
    } else {
      toast.error("Please fill in all fields correctly");
    }
  };
  // console.log(pinDigits.join(""));
  return (
    <section className="h-full flex w-[100%] bg-[white] ">
      <div className="flex flex-col h-[100%] w-[250px] bg-[#F5F5F5]">
        <img src={logo} width={170} />
        <div className="">
          <div className="flex">{/* <input type="" /> */}</div>
        </div>
      </div>
      <div className="h-[100%] flex-1 overflow-y-auto">
        <div className="w-max mt-6 mx-auto">
          <div className="flex gap-x-2 items-center">
            <p className="border-2 rounded-full p-3">1\4</p>
            <div className="flex flex-col">
              <h4 className="text-[#212059] font-[700] text-[32px]">
                Onboarding Process
              </h4>
              <p className="text-[#828282] text-[24px] font-[600]">
                Update Personal Detailsa
              </p>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Purus odio porttitor
            dignissim <br /> orci non odio porttitor dignissim orci non
            puruspurus. Nunc nisi ut{" "}
          </p>
          {phase == 1 && (
            <div className=" mt-4">
              <div className="w-full flex justify-between mt-1 py-3">
                <div className="p-[1px] w-[45%] rounded-[8px] mt-1">
                  <p className="text-[#0c0c0c]">Fullname</p>
                  <div className="bg-[#eaeaea] rounded-md">
                    <div className="flex px-4 py-3 gap-x-3 items-center">
                      <input
                        disabled
                        value={`${userInfo.first_name} ${userInfo.last_name}`}
                        placeholder="First name"
                        className="bg-transparent  pash text-[14px] font-[500] p-1 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-[1px] w-[45%] rounded-[8px] mt-1">
                  <p className="text-[#0c0c0c]">Username</p>
                  <div className="bg-[#eaeaea] rounded-md">
                    <div className="flex px-4 py-3 gap-x-3 items-center">
                      <input
                        value={userInfo.username}
                        disabled
                        className="bg-transparent  pash text-[14px] font-[500] p-1 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between py-3">
                <div className="p-[1px] rounded-[8px] mt-1 w-[45%]">
                  <p className="text-[#0c0c0c]">Date of Birth</p>
                  <div className="bg-[#eaeaea] rounded-md">
                    <div className="flex px-4 py-3 gap-x-3 items-center">
                      <select
                        onChange={(e) => setDate_of_birth(e.target.value)}
                        value={date_of_birth}
                        className="w-full bg-transparent  pash text-[14px] font-[500] p-1 outline-none"
                      >
                        {[...Array(31)].map((_, index) => (
                          <option
                            key={index}
                            value={String(index + 1).padStart(2, "0")}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="p-[1px] w-[45%] rounded-[8px] mt-1">
                  <p className="text-[#0c0c0c]">Month</p>
                  <div className="bg-[#eaeaea] rounded-md">
                    <div className="flex px-4 py-3 gap-x-3 items-center">
                      <select
                        onChange={(e) => setMonth(e.target.value)}
                        className="w-full "
                      >
                        {months.map((month, index) => (
                          <option key={index} value={month.value}>
                            {month.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3">
                <div className="p-[1px] w-full rounded-[8px] mt-1">
                  <p className="text-[#0c0c0c]">Email Address</p>
                  <div className="bg-[#eaeaea] rounded-md">
                    <div className="flex px-4 py-3 gap-x-3 items-center">
                      <input
                        disabled
                        value={userInfo.email}
                        placeholder="Email"
                        type="email"
                        className="bg-transparent  pash text-[14px] font-[500] p-1 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between py-3">
                <div className="p-[1px] w-[50%] rounded-[8px] mt-1">
                  <p className="text-[#0c0c0c]">Country</p>
                  <CountryDropdown
                    classes="outline-none  mt-[1px] b p-3 rounded-[8px] cursor-pointer bg-[#2A2441] drop"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
                <div className="p-[1px] w-[35%] rounded-[8px] mt-1">
                  <p className="text-[#0c0c0c]">State</p>
                  <div className="bg-[#eaeaea] rounded-md">
                    <div className="flex px-4 py-3 gap-x-3 items-center">
                      <input
                        onChange={(e) => setState(e.target.value)}
                        type="text"
                        placeholder="Enter State"
                        className="bg-transparent  pash text-[14px] font-[500] p-1 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-3">
                <p className="text-[#0c0c0c]">Phone Number</p>
                <div className="w-full py-3">
                  <div className="p-[1px] w-full rounded-[8px] mt-1">
                    <div className="bg-[#eaeaea] rounded-md">
                      <div className="flex px-4 py-3 gap-x-3 items-center">
                        <input
                          value={userInfo.phone_number}
                          disabled
                          placeholder="Mobile number"
                          className="bg-transparent  text-[14px] font-[500] p-1 outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full py-3">
                <p className="text-[#0c0c0c]">profile image</p>
                <div className="w-full py-3">
                  <div className="p-[1px] w-full rounded-[8px] mt-1">
                    <div className="bg-[#eaeaea] rounded-md">
                      <div className="flex px-4 py-3 gap-x-3 items-center">
                        <input
                          onChange={(e) => setFile(e.target.files[0])}
                          type="file"
                          className="bg-transparent  text-[14px] font-[500] p-1 outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          )}{" "}
          {phase == 2 && (
            <>
              <div className="mt-10">
                <div className="flex items-center gap-x-2">
                  <input
                    maxLength={11}
                    minLength={11}
                    name="verification"
                    onChange={(e) => setRadio("bvn")}
                    type="radio"
                  />
                  <h4 className="text-[18px]">
                    Bank Verification Number (BVN)
                  </h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Purus odio porttitor
                  dignissim porttitor
                  <br /> orci non odio porttitor{" "}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-x-2">
                  <input
                    name="verification"
                    onChange={(e) => setRadio("nin")}
                    type="radio"
                  />
                  <h4 className="text-[18px]">
                    National Identity Number (NIN)
                  </h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Purus odio porttitor
                  dignissim porttitor
                  <br /> orci non odio porttitor{" "}
                </p>
              </div>
              {radio === "bvn" && (
                <>
                  <h4 className="mt-8 flex">
                    BVN <CgAsterisk color="red" size={14} />
                  </h4>
                  <input
                    type="text" // Change type to text
                    onChange={(e) => {
                      const value = e.target.value;
                      const numericValue = value.replace(/\D/g, "");
                      setBvn(numericValue);
                    }}
                    value={bvn}
                    className="bg-[#eaeaea] p-4 rounded-[4px] text-[14px] font-[500] outline-none w-full"
                    placeholder="Enter BVN"
                  />
                </>
              )}
              {radio === "nin" && (
                <>
                  <h4 className="mt-8 flex">
                    NIN <CgAsterisk color="red" size={14} />
                  </h4>
                  <input
                    type="text" // Change type to text
                    onChange={(e) => {
                      const value = e.target.value;
                      const numericValue = value.replace(/\D/g, "");
                      setNin(numericValue);
                    }}
                    value={nin}
                    className="bg-[#eaeaea] p-4 rounded-[4px] text-[14px] font-[500] outline-none w-full"
                    placeholder="Enter NIN"
                  />
                </>
              )}
            </>
          )}
          {phase == 3 && (
            <>
              <div className="mt-10">
                <div className="flex items-center gap-x-2">
                  <h4 className="text-[18px]">Enter your transaction Pin</h4>
                </div>
                <p>
                  Keep your transaction pin easy to remember password and do not
                  <br />
                  share with anyone
                </p>
                <div className="flex mt-6 gap-x-6">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative">
                      <input
                        ref={(el) => (pinInputRefs.current[index] = el)}
                        type="text"
                        maxLength={1}
                        className="bg-[#eaeaea] text-[#eaeaea] p-4 rounded-[4px] text-[14px] outline-4 font-[500]  w-[50px] text-center"
                        style={{ letterSpacing: "20px" }}
                        value={pinDigits[index]}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            // Only allow numeric characters
                            handlePinInputChange(index, value);
                          }
                        }}
                      />
                      {pinDigits[index] && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 rounded-full bg-[#3FAAE0]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}{" "}
          <button
            disabled={loading}
            onClick={handleSubmit}
            className=" w-max font-[500] px-4 mt-16 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <BeatLoader
                style={{ padding: "2px" }}
                color="#ffffff"
                size={10}
              />
            ) : phase == 3 ? (
              "Finish"
            ) : (
              "Save & continue"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
