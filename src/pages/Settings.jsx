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
import { BsBell } from "react-icons/bs";
import Wallet from "../assets/wallet.png";
import { HiOutlineMinus } from "react-icons/hi";
import Navbar from "../components/Navbar";

const Settings = () => {
  return (
    <section className="h-[100vh] p-4 w-[100%] overflow-y-auto">
      <Navbar />
      <div className="flex flex-col space-y-4 w-full lg:w-[75%] mx-auto">
        <h4 className=" font-[700] text-[#0c0c0c]  items-center">Settings</h4>
        <div className="flex flex-col bg-white p-4 h-fit lg:max-h-[255px] rounded-[7px]">
          <div className="flex items-center gap-x-6">
            <img src={settings} width={200} />
            <div className="flex flex-col">
              <h4 className="text-[#212059] font-[700] text-[30px]">
                Settings
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed
                posuere duis.Velit
                <br /> euismod quis sed ut quis. ipsum dolor sit amet
                consectetur. Tellus pulvinar cras sed <br /> posuere duis.Velit
                euismod quis sed ut{" "}
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
        <div className="flex items-center bg-white rounded-[7px] p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img width={60} src={green} />
            <div className="flex flex-col">
              <h4 className="font-[600]">Update KYC</h4>
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
            <img width={60} src={red} />
            <div className="flex flex-col">
              <h4 className="font-[600]">Deactivate Account</h4>
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

export default Settings;
