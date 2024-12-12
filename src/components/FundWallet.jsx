import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import {
  addEvent,
  generateIntent,
  getWalletBalance,
} from "../redux/userReducer";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";
import { FaCheckCircle } from "react-icons/fa";

const FundWallet = ({ setOpenTab }) => {
  const { loading, userInfo, openBets, betTypes, intentLoading, intent } =
    useSelector((state) => state.user);

  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const [showTab, setShowTab] = useState(false);
  const [amount, setAmount] = useState("");
  const [phase, setPhase] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [checked, setChecked] = useState(false);
  const [reference, setReference] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowTab(true);
    }, 10);
  }, []);

  useEffect(() => {
    setReference(intent.reference_number);
  }, [intent]);

  const handleRadioChange = (value) => {
    setAmount(value);
    setSelectedAmount(value);
  };

  const handleOtherAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setAmount(value === "" ? "" : parseInt(value, 10));
      setSelectedAmount(0);
    }
  };

  const handleSubmit = () => {
    if (phase === 1) {
      if (amount > 99) {
        setPhase(2);
      } else {
        toast.error("Enter a valid amount greater than 99");
      }
    }
    if (phase === 2) {
      if (checked) {
        setPhase(3);
      } else {
        toast.error("You have to agree to out terms to proceed");
      }
    }
  };
  const config = {
    reference: reference,
    email: userInfo.email,
    amount: intent.provider_amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_add85a75a264bae27365e637689aabca539c2694",
  };

  const text = React.createElement(
    "div",
    null,
    React.createElement("h4", null, "Card Payment"),
    React.createElement("p", null, "Secure Payment with Paystack")
  );

  const componentProps = {
    ...config,
    text: "Pay with paystack",
    onSuccess: () => {
      // dispatch(getWalletBalance({ token }));
      window.location.reload();
      setReference("");
      setOpenTab(false);
    },
    onClose: () => window.location.reload(),
  };

  const handlePrevious = () => {
    setPhase(phase - 1);
    setReference("");
  };

  const handleIntent = () => {
    const data = {
      amount,
      currency: "ngn",
      type: "wallet_top_up",
      provider: "paystack",
    };
    if (!intentLoading) {
      dispatch(generateIntent({ token, data }));
    }
  };
  console.log(reference);
  return (
    <div className="w-full absolute top-0 left-0 h-full bg-black/[.70] flex justify-end">
      <div
        className={`overflow-y-auto ${
          showTab ? "w-[60%] md:w-[30%] bg-white overflow-y-auto" : "w-[0px]"
        } p-4 flex flex-col`}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            {phase === 1 ? (
              <h3 className="text-[#212059] font-[600]">Select Amount</h3>
            ) : phase === 2 ? (
              <h3 className="text-[#212059] font-[600]">Payment Review</h3>
            ) : (
              <h3 className="text-[#212059] font-[600]">Payment Method</h3>
            )}
            <div
              onClick={() => setOpenTab(false)}
              className="bg-[#e5e5e5] p-1 cursor-pointer rounded-full"
            >
              <MdClose />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus id minus reprehenderit aliquid excepturi odit
          </p>
        </div>
        {phase === 1 && (
          <>
            <h4 className="mt-6">Select Amount to fund</h4>
            <div className="flex items-center mb-4 gap-x-2 mt-4">
              <input
                type="radio"
                name="amount"
                value="2000"
                checked={selectedAmount === 2000}
                onChange={() => handleRadioChange(2000)}
              />
              <h4 className="text-[16px] font-[400]">NGN 2000.00</h4>
            </div>
            <div className="flex items-center mb-4 gap-x-2">
              <input
                type="radio"
                name="amount"
                value="5000"
                checked={selectedAmount === 5000}
                onChange={() => handleRadioChange(5000)}
              />
              <h4 className="text-[16px] font-[400]">NGN 5000.00</h4>
            </div>
            <div className="flex items-center mb-4 gap-x-2">
              <input
                type="radio"
                name="amount"
                value="10000"
                checked={selectedAmount === 10000}
                onChange={() => handleRadioChange(10000)}
              />
              <h4 className="text-[16px] font-[400]">NGN 10,000.00</h4>
            </div>
            <div className="flex items-center mb-4 gap-x-2">
              <input
                type="radio"
                name="amount"
                value="Others"
                checked={selectedAmount === 0}
                onChange={() => handleRadioChange(0)}
              />
              <h4 className="text-[16px] font-[400]">Others</h4>
            </div>
            {selectedAmount === 0 && (
              <div className="flex flex-col">
                <label className="mt-4 mb-2 font-[500] text-[#0c0c0c]">
                  Other Amount
                </label>
                <input
                  placeholder="Enter amount"
                  className="bg-[#dbdbdb] mb-4 p-2 rounded-[4px] outline-none"
                  onChange={handleOtherAmountChange}
                  value={amount}
                />
              </div>
            )}
          </>
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
                <p className="text-[#0c0c0c]">Charges</p>
                <p className="text-[#3FAAE0] font-[600]">N10</p>
              </div>
              <div className="flex border-dashed p-3 border-b-2 justify-between w-full">
                <p className="text-[#0c0c0c]">Total</p>
                <p className="text-[#3FAAE0] font-[600]">NGN{amount + 10}</p>
              </div>
            </div>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, maiores. Non quod, enim voluptates animi molestias
              delectus error perferendis sit. Sit odit tempore iure cum quasi
              libero eos? Minus, soluta.
            </p>
            <div className="flex mt-6 gap-x-2 items-center">
              <input
                checked={checked}
                onChange={() => setChecked(!checked)}
                type="checkbox"
              />
              <p>
                I agree to Paybilli's Terms and Condition and privacy policy
              </p>
            </div>
          </>
        )}
        {phase === 3 && (
          <div className="flex flex-col  mt-5">
            <div
              onClick={handleIntent}
              className="flex flex-col rounded-[12px]  w-full p-4 border-2 border-[#b1b1b1] cursor-pointer"
            >
              <h4 className="mb-1 text-[18px]">Card Payment</h4>
              <p>Secure Payment with Paystack</p>
            </div>
            {intentLoading && (
              <div className="flex mt-1 ml-1 items-center gap-x-1">
                <p className="text-[#0c0c0c]">Procesing, please wait</p>
                <BeatLoader
                  style={{ padding: "2px" }}
                  color="#3FAAE0"
                  size={6}
                />
              </div>
            )}
            {/* {reference.length > 0 && (
              <p className="flex items-center mt-1 gap-x-1 text-[#0c0c0c]">
                <FaCheckCircle color="#3FAAE0" />
                Payment details for paystack generated successfully!
              </p>
            )} */}
            <div className="flex flex-col rounded-[12px] mt-3 w-full p-4 border-2 border-[#b1b1b1] cursor-pointer">
              <h4 className="mb-1 text-[18px]">Crypto Currency</h4>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        )}
        <div className="mt-auto flex gap-x-2">
          {phase !== 1 && (
            <button
              onClick={handlePrevious}
              className="border-2 text-[15px] text-[#3FAAE0] font-[500] border-[#3FAAE0] rounded-[7px] px-6 p-3 w-max h-max"
            >
              Previous
            </button>
          )}
          {phase !== 3 && (
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
          {/* {phase === 3 && reference.length > 0 && (
            <button
              // onClick={}
              className=" text-[15px] text-[white] font-[500] bg-[#3FAAE0] rounded-[7px] px-6 p-3 w-max h-max"
            >
              Pay with paystack
            </button>
          )} */}
          {phase === 3 && reference && reference.length > 1 ? (
            <PaystackButton
              className="w-max text-[15px] h-max p-3 text-[white] font-[500] px-6 bg-[#3FAAE0] rounded-[7px]"
              {...componentProps}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
