import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Shake from "../../assets/shake.png";
import { useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import profile from "../../assets/profile.png";
import wave from "../../assets/wave.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Events = () => {
  const { loading, userInfo } = useSelector((state) => state.user);

  const navigate = useNavigate()

  return (
    <section className="h-[100vh] lg:px-10 p-4 w-[100%] overflow-y-auto">
      <Navbar />
      <h4 className="font-[700] mt-2">Betting</h4>

      <div className="lg:grid grid-cols-2 mt-4 lg:w-[70%] flex flex-col gap-4 lg:gap-10">
        <div role="button" onClick={()=> navigate("openbet")} className="flex flex-col bg-white rounded-[7px] p-5 max-h-[155px]">
          <div className="flex items-center gap-x-6">
            <img src={Shake} width={50} />
            <div className="flex flex-col">
              <h4 className="text-[#0c0c0c] font-[700] text-[30px]">031</h4>
              <p>Open Bets</p>
            </div>
          </div>
          <div className="flex justify-end w-full  mt-auto">
            <HiOutlineArrowNarrowRight size={32} />{" "}
          </div>
        </div>
        <div role="button" onClick={()=> navigate("pendingbet")} className="flex flex-col bg-white rounded-[7px] p-5 max-h-[155px]">
          <div className="flex items-center gap-x-6">
            <img src={Shake} width={50} />
            <div className="flex flex-col">
              <h4 className="text-[#0c0c0c] font-[700] text-[30px]">031</h4>
              <p>Pending Bet</p>
            </div>
          </div>
          <div className="flex justify-end w-full  mt-auto">
            <HiOutlineArrowNarrowRight size={32} />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
