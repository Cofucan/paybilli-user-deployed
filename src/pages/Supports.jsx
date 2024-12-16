import React from "react";
import profile from "../assets/profile.png";
import settings from "../assets/settings.png";
import green from "../assets/shield.png";
import blue from "../assets/notify.png";
import pink from "../assets/note.png";
import red from "../assets/del.png";
import { FaChevronRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import wave from "../assets/wave.png";
import Wallet from "../assets/wallet.png";
import { HiOutlineMinus } from "react-icons/hi";
import { useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import Navbar from "../components/Navbar";

const Supports = () => {
  const { loading, userInfo } = useSelector((state) => state.user);

  return (
    <section className="h-[100vh] lg:px-10 px-4 pb-4 lg:pt-0 pt-4 w-[100%] overflow-y-auto">
      <Navbar />
      <div className="flex flex-col space-y-4 w-full lg:w-[75%] mx-auto">
        <h4 className=" font-[700] text-[#0c0c0c]  items-center">Support</h4>
        <div className="flex flex-col bg-white p-4 h-fit lg:max-h-[255px] rounded-[7px]">
          <div className="flex items-center gap-x-6">
            <img src={settings} width={200} />
            <div className="flex flex-col">
              <h4 className="text-[#212059] font-[700] text-[30px]">Support</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed
                posuere duis.Velit
                <br /> euismod quis sed ut quis. ipsum dolor sit amet
                consectetur. Tellus pulvinar cras sed <br /> posuere duis.Velit
                euismod quis sed ut{" "}
              </p>
              <p className="text-[#5f5ff6] mt-2">
                Read the terms & conditions and privacy policy
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white rounded-[7px] p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img width={60} src={pink} />
            <div className="flex flex-col">
              <h4 className="font-[600]">Set Transaction Pin </h4>
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
        <div className="flex items-center bg-white rounded-[7px] p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img width={60} src={blue} />
            <div className="flex flex-col">
              <h4 className="font-[600]">Notification</h4>
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
    </section>
  );
};

export default Supports;
