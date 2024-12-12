import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { BeatLoader } from "react-spinners";
import ProgressBar from "@ramonak/react-progress-bar";
import Lottie from "lottie-react";
import Wallet from "../assets/wallet.png";
import profile from "../assets/profile.png";
import Shake from "../assets/shake.png";
import money from "../assets/money.png";
import { MdAdd } from "react-icons/md";
import wave from "../assets/wave.png";
import { HiOutlineMinus } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEventTypes,
  getOpenBets,
  getWalletBalance,
} from "../redux/userReducer";
import FundWallet from "../components/FundWallet";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import PlaceBettor from "../components/PlaceBet";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { loading, userInfo, openBets, balance, balanceLoading } = useSelector(
    (state) => state.user
  );
  const token = sessionStorage.getItem("token");

  const dispatch = useDispatch();
  console.log(balance[1]);
  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    dispatch(getOpenBets(token));
    dispatch(getAllEventTypes(token));
    dispatch(getWalletBalance({ token }));
  }, []);

  useEffect(() => {
    const fetchData = () => {
      dispatch(getWalletBalance({ token }));
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 30000); // Fetch every 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const config = {
    reference: "V1YDVD71XH9I54KX",
    email: userInfo.email,
    amount: 200000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_add85a75a264bae27365e637689aabca539c2694",
  };


  const navigate = useNavigate()

  // const text = React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h4", null, "Card Payment"),
  //   React.createElement("p", null, "Secure Payment with Paystack")
  // );

  // console.log(userInfo);
  return (
    <section className="h-[100vh] px-4 pb-4 lg:px-10 w-[100%] overflow-y-auto">
      <Navbar />
      <h4 className="font-[700] mt-2">Dashboard</h4>
      <div className="lg:grid grid-cols-3 flex flex-col gap-4 lg:gap-10 mt-4 w-full">
        <div className="flex flex-col bg-white p-4 max-h-[155px] rounded-[7px]">
          <div className="flex items-center gap-x-6">
            <img
              onContextMenu={(e) => e.preventDefault()}
              src={Wallet}
              width={50}
            />
            <div className="flex flex-col">
              <h4 className="text-[#0c0c0c] truncate font-[700] xxl:text-[25px]">
                NGN{balance.length > 0 ? balance[1].balance : "0.00"}
              </h4>
              <p>{balanceLoading ? "Refreshing balance..." : "My balance"}</p>
            </div>
          </div>
          <div className="flex mt-4 w-full ">
            <div
              onClick={() => setOpenTab(true)}
              className="flex cursor-pointer bg-[#e6e6e6] rounded-[4px] p-2 px-3"
            >
              <p className="flex items-center gap-x-1 text-[13px] text-[#5a5a5a] ">
                <MdAdd />
                Fund Wallet
              </p>
            </div>

            <div className="flex bg-[#e6e6e6] ml-3 rounded-[4px] p-2 px-3">
              <p className="flex items-center gap-x-1 text-[13px] text-[#5a5a5a] ">
                <HiOutlineMinus />
                withdraw
              </p>
            </div>
          </div>
        </div>
        <div role="button" onClick={() => navigate("/user/events/openbet")} className="flex flex-col bg-white rounded-[7px] p-5 max-h-[155px]">
          <div className="flex items-center gap-x-6">
            <img
              onContextMenu={(e) => e.preventDefault()}
              src={Shake}
              width={50}
            />
            <div className="flex flex-col">
              <h4 className="text-[#0c0c0c] font-[700] xxl:text-[25px]">031</h4>
              <p>Open Bets</p>
            </div>
          </div>
          <div className="flex justify-end w-full  mt-auto">
            <HiOutlineArrowNarrowRight size={32} />{" "}
          </div>
        </div>
        <div role="button" onClick={() => navigate("/user/events/pendingbet")} className="flex flex-col bg-white rounded-[7px] p-5 max-h-[155px]">
          <div className="flex items-center gap-x-6 ">
            <img
              onContextMenu={(e) => e.preventDefault()}
              src={Shake}
              width={50}
            />
            <div className="flex flex-col">
              <h4 className="text-[#0c0c0c] font-[700] xxl:text-[25px]">067</h4>
              <p>Pending Bets</p>
            </div>
          </div>
          <div className="flex justify-end w-full  mt-auto">
            <HiOutlineArrowNarrowRight size={32} />{" "}
          </div>
        </div>
      </div>
      <div className="flex mt-4 lg:flex-row flex-col-reverse w-full gap-4 lg:gap-10">
        <div className="flex bg-white flex-1  rounded-[7px] p-5 flex-col ">
          <h4 className="text-[#212059] font-[700]">Recent Open Bets</h4>
          {openBets.length < 1 && (
            <>
              <div className=" w-full  mt-40">
                <p className="text-center font-[600]  text-[15px]">
                  Nothing to show. Open events will show here..
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex w-full lg:w-[440px]  flex-col">
          <div className="flex bg-white p-5 rounded-[7px] w-full flex-col">
            <img
              onContextMenu={(e) => e.preventDefault()}
              width={200}
              src={money}
            />
            <h4>
              conveniently{" "}
              <span className="text-[#3FAAE0]">settle your bills</span> <br />
              directly from your wallet
            </h4>
            <p>
              Effortlessly manage your financial obligations by conveniently
              settling <br /> your bills directly from your wallet, ensuring
              hassle-free and convenient <br /> payment solutions at your
              fingertips
            </p>
            <button className="w-max h-max p-2 text-[white] font-[500] px-5 bg-[#3FAAE0] rounded-[7px] mt-5">
              Pay Bills
            </button>
          </div>
          <div role="button" onClick={() => navigate("/user/escrow")} className="flex flex-col mt-4 bg-white rounded-[7px] p-5 max-h-[155px]">
            <div className="flex items-center gap-x-6">
              <img
                onContextMenu={(e) => e.preventDefault()}
                src={Shake}
                width={50}
              />
              <div className="flex flex-col">
                <h4 className="text-[#0c0c0c] font-[700] xxl:text-[25px]">
                  031
                </h4>
                <p>Create Bets</p>
              </div>
            </div>
            <div className="flex justify-end w-full  mt-auto">
              <HiOutlineArrowNarrowRight size={32} />{" "}
            </div>
          </div>
        </div>
      </div>
      {openTab && <FundWallet setOpenTab={() => setOpenTab(false)} />}

      {/* {Object.keys(data) && Object.keys(data).length > 1 && (
        <PlaceBettor data={data} setData={() => setData({})} />
      )}{" "} */}
    </section>
  );
};

export default Dashboard;
