import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { addEvent, airtimePayment } from "../redux/userReducer";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import SuccessModal from "./successModal";
import PinInput from "react-pin-input";
import { formatNumber } from "../helper/numberFormat";

const BuyAirtime = ({ setOpenAirtime }) => {
  const { loading, balance, airtimeOptions } = useSelector(
    (state) => state.user
  );

  const [service_id, setServiceId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [phase, setPhase] = useState(1);
  const [pinDigits, setPinDigits] = useState("");

  const dispatch = useDispatch();
  const [showTab, setShowTab] = useState(false);
  const [tab, setTab] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowTab(true);
    }, 10);
  }, []);
  const pinInputRefs = useRef([]);  

  const validateForm = () => {
    if (!service_id || !phoneNumber || !amount) {
      toast.error("All fields are required");
      return false;
    }
    if (phoneNumber.length !== 11) {
      toast.error("Phone number must be exactly 11 digits without spaces");
      return false;
    }
    if (amount < 10) {
      toast.error("Amount cannot be less than 10");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      setPhase(phase + 1);
    }
  };


  const payForAirtime = () => {

    setPhase(4)

    const dataInfo = {
      phone_number: phoneNumber,
      service_id: service_id,
      amount: amount,
      pin: pinDigits
    }

    dispatch(airtimePayment({ dataInfo, pinDigits })).then((res) => {

      console.log(res);
      if (res?.type === "airtimePayment/rejected") {
        setPhase(3)
      } else if (res?.payload?.message) {
        toast.error(res?.payload?.message);
        setPinDigits(Array(4).fill(""))
        setPhase(3)
      } else {
        setTimeout(() => {
          setTab(true)
        }, 1000);
      }
    }
    );
  };

  console.log(pinDigits);

  return (
    <div className="w-full fixed top-0 left-0 z-[10000] h-full bg-black/[.70] flex justify-end">
      <div
        className={`overflow-y-auto ${showTab ? "w-[80%] md:w-[30%] bg-[#f6f6f6]" : "w-[0px]"
          } p-4 flex flex-col`}
      >
        {phase <= 3 && (
          <div
            onClick={() => setOpenAirtime(false)}
            className="bg-[#e5e5e5] w-fit ml-auto p-1 cursor-pointer rounded-full"
          >
            <MdClose />
          </div>
        )}
        {phase <= 3 && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-[#212059] font-[600]">Buy Airtime</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus id minus reprehenderit aliquid excepturi odit
            </p>
          </div>
        )}
        {phase === 3 && (
          <div className="flex flex-col mt-10 text-center">
            <h4 className="text-[24px]">Enter your transaction pin</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              quasi quos veritatis provident eveniet facere illum, dolor
              adipisci soluta in delectus odio tenetur inventore, voluptate
              dicta eaque numquam reprehenderit odit.
            </p>

            <div className="flex mx-auto mt-8 gap-x-6">
              {/* {[...Array(4)].map((_, index) => (
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
              ))} */}
 
                <PinInput
                  length={4}
                  focus
                  // disabled
                  // secret 
                  inputStyle={{ backgroundColor: '#D5D5D5', borderRadius: "8px", fontSize: "18px", borderColor: "#D5D5D5" }}
                  type="numeric"
                  onChange={(e) => setPinDigits(e)}
                  // onComplete={(e) => submit(e)}
                /> 
            </div>
          </div>
        )}
        {phase === 2 && (
          <>
            <h4 className="text-[15px] mt-6 font-[600]">PREVIEW</h4>
            <div className="flex flex-col w-full border-[1px] p-3 py-4 mt-4 bg-white rounded-[12px]">
              <div className="flex border-dashed p-3 border-b-2 justify-between w-full">
                <p className="text-[#0c0c0c]">Amount</p>
                <p className="text-[#3FAAE0] font-[600]">NGN{amount}</p>
              </div>
              <div className="flex border-dashed p-3 border-b-2 justify-between w-full">
                <p className="text-[#0c0c0c]">Network</p>
                <p className="text-[#3FAAE0] font-[600]">{service_id}</p>
              </div>
              <div className="flex border-dashed p-3 border-b-2 justify-between w-full">
                <p className="text-[#0c0c0c]">Phone Number</p>
                <p className="text-[#3FAAE0] font-[600]">{phoneNumber}</p>
              </div>
              <div className="flex border-dashed p-3 border-b-2 justify-between w-full">
                <p className="text-[#0c0c0c]">Total</p>
                <p className="text-[#3FAAE0] font-[600]">NGN{amount}</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, maiores. Non quod, enim voluptates animi molestias
              delectus error perferendis sit. Sit odit tempore iure cum quasi
              libero eos? Minus, soluta.
            </p>
          </>
        )}
        {phase === 1 && (
          <>
            <div className="flex flex-col mt-6">
              <label className="mb-2 font-[500] text-[#0c0c0c]">
                Network <span className="text-[red]">*</span>
              </label>
              <select
                value={service_id}
                onChange={(e) => setServiceId(e.target.value)}
                className="mb-4 text-[14px] text-[#7d7d7d] font-[500] p-2 bg-[#dbdbdb] rounded-[4px]"
              >
                <option disabled hidden value="">
                  Select Network Type
                </option>
                {airtimeOptions.map((item) => (
                  <option value={item.service_id} key={item.code}>
                    {item.service_id}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mt-4">
              <label className="mb-2 font-[500] text-[#0c0c0c]">
                Phone Number <span className="text-[red]">*</span>
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                required
                placeholder="Enter phone number"
                className="bg-[#dbdbdb] mb-4 p-2 rounded-[4px] outline-none"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label className="flex justify-between mb-2 font-[500] text-[#0c0c0c]">
                <div>
                  Amount <span className="text-[red]">*</span>
                </div>
                <div>wallet bal: {balance.length > 0 ? formatNumber(balance[1].balance) : "0.00"}</div>
              </label>
              <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                type="number"
                required
                placeholder="Enter amount"
                className="bg-[#dbdbdb] mb-4 p-2 rounded-[4px] outline-none"
              />
            </div>
          </>
        )}
        <div className="mt-auto flex items-center gap-x-2">
          {(phase !== 1 && phase !== 4) && (
            <button
              onClick={() => setPhase(phase - 1)}
              className="border-2 text-[15px] text-[#3FAAE0] font-[500] border-[#3FAAE0] rounded-[7px] px-6 p-3 w-max h-max"
            >
              Previous
            </button>
          )}
          {phase < 3 && (
            <button
              onClick={handleSubmit}
              className="w-max text-[15px] h-max p-3 text-[white] font-[500] px-6 bg-[#3FAAE0] rounded-[7px]"
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
          {phase === 3 && (
            <button
              onClick={payForAirtime}
              disabled={pinDigits[3] ? false : true}
              className="w-max text-[15px] disabled:opacity-50 h-max p-3 text-[white] font-[500] px-6 bg-[#3FAAE0] rounded-[7px]"
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
          )}
        </div>
        {phase === 4 && (
          <SuccessModal tab={tab} close={setOpenAirtime} />
        )}
      </div>
    </div>
  );
};

export default BuyAirtime;
