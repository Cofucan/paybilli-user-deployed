import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { inviteBettor } from "../redux/userReducer";
import { BeatLoader } from "react-spinners";
import SuccessModal from "./successModal";
import BettorModal from "./BettorModal";

const AddBettor = ({ setData, data, setOpenTab }) => {
  const { loading, userInfo, openBets, betTypes } = useSelector(
    (state) => state.user
  );
  console.log(data);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const [showTab, setShowTab] = useState(false);
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [tab, setTab] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setShowTab(true);
    }, 10);
  }, []);

  const handleSubmit = () => {
    if (!email) {
      toast.error(
        "Please Enter Email."
      );
      return;
    }

    const dataInfo = {
      event_id: data?.id,
      email: email
    };

    dispatch(inviteBettor({ dataInfo, token })).then((res) => {

      console.log(res);
      if (res?.type === "inviteBettor/rejected") {

      } else {
        setEmail("");
        setTimeout(() => { 
          setTab(1)
        }, 1000);
      }
    }
    );
  };

  return (
    <div className="w-full fixed z-[10000] top-0 left-0 h-full bg-black/[.70] flex justify-end">
      <div
        className={`"overflow-y-auto ${showTab ? "w-[60%] md:w-[40%] bg-white overflow-y-auto" : "w-[0px] "
          } p-4  "`}
      >
        {/* {tab === 0 && (
          <div className=" flex flex-col " >
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-[#212059] font-[600]">Bet Details</h3>
                <div
                  onClick={() => setData({})}
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
            <div className="flex border-2 rounded-[12px] flex-col p-3 pl-4 mt-4">
              <div className="flex justify-between w-full mb-4">
                <div className="">
                  <h4 className="text-[16px]">{data.creator.name}</h4>
                  <p>Bettor</p>
                </div>
                <div className="min-w-[100px]">
                  <h4 className="text-[16px]">NGN{data.amount}</h4>
                  <p>Amount</p>
                </div>
              </div>

              <div className="flex justify-between w-full mb-4">
                <div className="">
                  <h4 className="text-[16px]">{data.due_date}</h4>
                  <p>Due Date</p>
                </div>
                <div className=" min-w-[100px]">
                  <h4 className="text-[16px]">{data.bet_type}</h4>
                  <p>Bet Type</p>
                </div>
              </div>
              <div className="flex w-full border-2 mb-4"></div>
              <div className="flex justify-between w-full mb-4">
                <div className="">
                  <h4 className="text-[16px]">{data.creator.name}</h4>
                  <p>Bettor</p>
                </div>
                <div className="min-w-[100px]">
                  <h4 className="text-[16px]">NGN{data.amount}</h4>
                  <p>Amount</p>
                </div>
              </div>

              <div className="">
                <h4 className="text-[16px]">{data.win_condition}</h4>
                <p>Win Terms</p>
              </div>
              <div className="">
                <h4 className="text-[16px]">{data.refund_condition}</h4>
                <p>Refund Terms</p>
              </div>
            </div>
            <h3 className="text-[#212059] mt-4 font-[600]">Invite Bettor</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
              id minus reprehenderit aliquid excepturi odit
            </p>
            <div className="flex flex-col mt-4">
              <label className="mb-2 font-[500] text-[#0c0c0c]">Username</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                required
                placeholder="Enter bettor username"
                className="bg-[#dbdbdb] pash mb-4 p-2 rounded-[4px] outline-none"
              />
              <label className="mb-2 font-[500] text-[#0c0c0c]">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                placeholder="Enter email"
                className="bg-[#dbdbdb] pash mb-4 p-2 rounded-[4px] outline-none"
              />
              <label className="mb-2 font-[500] text-[#0c0c0c]">Phone Number</label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                required
                placeholder="Enter phone number"
                className="bg-[#dbdbdb] pash mb-4 p-2 rounded-[4px] outline-none"
              />
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="w-max h-max p-3 text-[white] disabled:bg-opacity-40 font-[500] px-5 bg-[#3FAAE0] rounded-[7px] mt-auto"
              >
                {loading ? (
                  <BeatLoader style={{ padding: "2px" }} color="#ffffff" size={10} />
                ) : (
                  "Invite"
                )}
              </button>
            </div>
          </div>
        )}
        {tab === 1 && (
          <SuccessModal close={setOpenTab} />
        )} */}
        <BettorModal close={setOpenTab} data={data} tab={tab} setTab={setTab} />
      </div>
    </div>
  );
};

export default AddBettor;
