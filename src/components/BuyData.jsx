import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { addEvent, dataPayment, getDataList } from "../redux/userReducer";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import SuccessModal from "./successModal";
import { formatNumber } from "../helper/numberFormat";

const BuyData = ({ setOpenAirtime }) => {
  const { loading, balance, dataList } = useSelector(
    (state) => state.user
  );

  const [service_id, setServiceId] = useState("");
  const [service_obj, setServiceObj] = useState("");
  const [data_code, setDataCode] = useState("");
  const [plan, setPlan] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [phase, setPhase] = useState(1);
  const [pinDigits, setPinDigits] = useState(Array(4).fill(""));
  const [tab, setTab] = useState(false)

  const dataOption = [
    {
      label: "mtn",
      value: "mtn-data"
    },
    {
      label: "glo",
      value: "glo-data"
    },
    {
      label: "etisalat",
      value: "etisalat-data"
    },
    {
      label: "airtel",
      value: "airtel-data"
    }
  ]

  const dispatch = useDispatch();
  const [showTab, setShowTab] = useState(false);

  useEffect(() => {
    if (service_id) {
      dispatch(getDataList(service_id));
    }
  }, [service_id]);

  console.log(dataList);

  useEffect(() => {
    setTimeout(() => {
      setShowTab(true);
    }, 10);
  }, []);
  const pinInputRefs = useRef([]);

  useEffect(() => {
    if (pinDigits.join("").length == 4) {
      console.log("ss");
    }
  }, [pinDigits]);

  console.log(pinDigits.join(""), service_id, phoneNumber, amount);

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

  const changeHandler = (item) => {
    setServiceObj(item)
    console.log(JSON?.parse(item));
    setDataCode(JSON?.parse(item)?.variation_code)
    setAmount(JSON?.parse(item)?.variation_amount)
    setPlan(JSON?.parse(item)?.name)
  }

  const validateForm = () => {
    if (!service_id || !phoneNumber || !amount || !data_code) {
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




  const payForData = () => {

    setPhase(3)

    const dataInfo = {
      phone_number: phoneNumber,
      service_id: service_id,
      amount: amount,
      variation_code: data_code,
      billers_code: phoneNumber
    }

    dispatch(dataPayment({ dataInfo, pinDigits })).then((res) => {

      console.log(res);
      if (res?.type === "dataPayment/rejected") {
        setPhase(2)
      } else if (res?.payload?.message) {
        toast.error(res?.payload?.message);
        setPhase(2)
      } else {
        setTimeout(() => {
          setTab(true)
        }, 1000);
      }
    }
    );
  };

  return (
    <div className="w-full fixed top-0 left-0 h-full z-[10000] bg-black/[.70] flex justify-end">
      <div
        className={`overflow-y-auto ${showTab ? "w-[60%] md:w-[30%] bg-[#f6f6f6]" : "w-[0px]"
          } p-4 flex flex-col`}
      >
        {phase !== 3 && (
          <div
            onClick={() => setOpenAirtime(false)}
            className="bg-[#e5e5e5] w-fit ml-auto p-1 cursor-pointer rounded-full"
          >
            <MdClose />
          </div>
        )}
        {phase !== 3 && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-[#212059] font-[600]">Buy Mobile Data</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus id minus reprehenderit aliquid excepturi odit
            </p>
          </div>
        )}
        {/* {phase <= 2 && (
          <div className="flex flex-col mt-10 text-center">
            <h4 className="text-[24px]">Enter your transaction pin</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              quasi quos veritatis provident eveniet facere illum, dolor
              adipisci soluta in delectus odio tenetur inventore, voluptate
              dicta eaque numquam reprehenderit odit.
            </p>

            <div className="flex mx-auto mt-8 gap-x-6">
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
        )} */}
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
              <div className="flex border-dashed p-3 gap-4 border-b-2 justify-between w-full">
                <div className=" w-fit " >
                <p className="text-[#0c0c0c]">Plan</p>
                </div>
                <p className="text-[#3FAAE0] font-[600] w-[80%] text-right">{plan}</p>
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
            {/* <div className="flex flex-col mt-6">
              <label className="mb-2 font-[500] text-[#0c0c0c]">
                Country <span className="text-[red]">*</span>
              </label>
              <select
                value={service_id}
                onChange={(e) => setServiceId(e.target.value)}
                className="mb-4 text-[14px] text-[#7d7d7d] font-[500] p-2 bg-[#dbdbdb] rounded-[4px]"
              >
                <option disabled hidden value="">
                  Select Country Type
                </option>
              </select>
            </div> */}

            <div className="flex flex-col mt-3">
              <label className="mb-2 font-[500] text-[#0c0c0c]">
                Network <span className="text-[red]">*</span>
              </label>
              <select
                value={service_id}
                onChange={(e) => setServiceId(e.target.value)}
                className="mb-4 text-[14px] text-[#7d7d7d] font-[500] p-2 bg-[#dbdbdb] rounded-[4px]"
              >
                <option value="">
                  Select Network Type
                </option>
                {dataOption.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mt-3">
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
            {service_id && (

              <div className="flex flex-col mt-3">
                <label className="mb-2 font-[500] text-[#0c0c0c]">
                  Plan <span className="text-[red]">*</span>
                </label>
                <select
                  value={service_obj}
                  onChange={(e) => changeHandler(e.target.value)}
                  className="mb-4 text-[14px] text-[#7d7d7d] font-[500] p-2 bg-[#dbdbdb] rounded-[4px]"
                >
                  <option value="">
                    Select Plan
                  </option>
                  {dataList?.map((item) => {
                    return (
                      <option value={JSON?.stringify(item)} key={item?.name} >{item?.name}</option>
                    )
                  })}
                </select>
              </div>
            )}

            <div className="flex flex-col mt-3">
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
                disabled={true}
                required
                placeholder="Enter amount"
                className="bg-[#dbdbdb] mb-4 p-2 rounded-[4px] outline-none"
              />
            </div>
          </>
        )}
        <div className="mt-auto flex items-center gap-x-2">
          {phase === 2 && (
            <button
              onClick={() => setPhase(phase - 1)}
              className="border-2 text-[15px] text-[#3FAAE0] font-[500] border-[#3FAAE0] rounded-[7px] px-6 p-3 w-max h-max"
            >
              Previous
            </button>
          )}
          {phase === 1 && (
            <button
              onClick={handleSubmit}
              className="w-max text-[15px] h-max p-3 text-[white] font-[500] px-6 bg-[#3FAAE0] rounded-[7px]"
            >
              Proceed
            </button>

          )}
          {phase === 2 && (
            <button
              onClick={payForData}
              className="w-max text-[15px] h-max p-3 text-[white] font-[500] px-6 bg-[#3FAAE0] rounded-[7px]"
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
        {phase === 3 && (
          <SuccessModal tab={tab} setTab={setTab} close={setOpenAirtime} />
        )}
      </div>
    </div>
  );
};

export default BuyData;
