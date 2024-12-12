import React, { useState } from "react";
import profile from "../assets/profile.png";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import pink from "../assets/pink.png";
import purple from "../assets/purple.png";
import { FaChevronRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import wave from "../assets/wave.png";
import { BsBell } from "react-icons/bs";
import Wallet from "../assets/wallet.png";
import { HiOutlineMinus } from "react-icons/hi";
import BuyAirtime from "../components/BuyAirtime";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import BuyData from "../components/BuyData";
import PayBill from "../components/PayBill";

const Wallets = () => {
  const { loading, userInfo, openBets } = useSelector((state) => state.user);

  const [openAirtime, setOpenAirtime] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [openBillPay, setOpenBillPay] = useState(false);

  return (
    <section className="h-[100vh] px-4 pb-4 w-[100%] overflow-y-auto">
      <Navbar />
      <div className="flex flex-col pb-6 space-y-4 lg:w-[75%] mx-auto">
        <h4 className=" font-[700] text-[#0c0c0c]  items-center">Wallet</h4>
        <div className="flex flex-col box bg-white p-4 max-h-[155px] rounded-[7px]">
          <div className="flex items-center gap-x-6">
            <img src={Wallet} width={50} />
            <div className="flex flex-col">
              <h4 className="text-[#0c0c0c] font-[700] text-xl lg:text-[30px]">
                NGN200,000.00
              </h4>
              <p>My balance</p>
            </div>
          </div>
          <div className="flex mt-4 w-full ">
            <div className="flex bg-[#e6e6e6] p-2 px-3">
              <p className="flex items-center gap-x-1 text-[13px] text-[#5a5a5a] rounded-[7px]">
                <MdAdd />
                Fund Wallet
              </p>
            </div>
            <div className="flex bg-[#e6e6e6] ml-3 p-2 px-3">
              <p className="flex items-center gap-x-1 text-[13px] text-[#5a5a5a] rounded-[7px]">
                <HiOutlineMinus />
                withdraw
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpenAirtime(true)}
          className="flex box items-center cursor-pointer bg-white rounded-[7px] p-4 justify-between"
        >
          <div className="flex items-center gap-x-2">
            <img width={60} src={green} />
            <div className="flex flex-col">
              <h4>Buy Airtime</h4>
              <p>
                Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut
                quis.
                <br />
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
          </div>
          <FaChevronRight size={24} />
        </div>
        <div 
          onClick={() => setOpenData(true)}
          className="flex box items-center cursor-pointer bg-white rounded-[7px] p-4 justify-between"
          >
          <div className="flex items-center gap-x-2">
            <img width={60} src={blue} />
            <div className="flex flex-col">
              <h4>Buy Mobile Data</h4>
              <p>
                Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut
                quis.
                <br />
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
          </div>
          <FaChevronRight size={24} />
        </div>
        <div
          onClick={() => setOpenBillPay(true)}
          className="flex box items-center cursor-pointer bg-white rounded-[7px] p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img width={60} src={pink} />
            <div className="flex flex-col">
              <h4>Pay for Bills</h4>
              <p>
                Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut
                quis.
                <br />
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
          </div>
          <FaChevronRight size={24} />
        </div>
        <div className="flex items-center box mb-5 bg-white rounded-[7px] p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img width={60} src={purple} />
            <div className="flex flex-col">
              <h4>Transaction History</h4>
              <p>
                Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut
                quis.
                <br />
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
          </div>
          <FaChevronRight size={24} />
        </div>
      </div>
      {openAirtime && (
        <BuyAirtime setOpenAirtime={() => setOpenAirtime(false)} />
      )}
      {openData && (
        <BuyData setOpenAirtime={() => setOpenData(false)} />
      )}
      {openBillPay && (
        <PayBill setOpenAirtime={() => setOpenBillPay(false)} />
      )}
    </section>
  );
};

export default Wallets;
