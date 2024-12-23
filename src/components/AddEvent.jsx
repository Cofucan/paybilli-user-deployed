import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { addEvent, getAllEventTypes } from "../redux/userReducer";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { StepOne, StepThree, StepTwo } from "../svg";
import BettorModal from "./BettorModal";

const AddEvent = ({ setOpenTab }) => {
  const { loading, betTypes } = useSelector(
    (state) => state.user
  );

  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllEventTypes())
  }, [])

  const [showTab, setShowTab] = useState(false);
  const [event_name, setEvet_name] = useState("");
  const [eventData, setEventData] = useState({});
  const [due_date, setDue_date] = useState("");
  const [bet_type, setBet_type] = useState("");
  const [win_condition, setWin_condition] = useState("");
  const [refund, setRefund] = useState("");
  const [amount, setAmount] = useState();
  const [terms, setTerms] = useState(false);
  const [tab, setTab] = useState(0)
  const [tabBet, setTabBet] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setShowTab(true);
    }, 10);
  }, []);

  const data = {
    event_name,
    due_date,
    bet_type,
    win_condition,
    refund_condition: refund,
    amount,
    status: "pending",
  };

  const handleSubmit = () => {
    if (
      !event_name ||
      !due_date ||
      !bet_type ||
      !refund ||
      amount <= 100 ||
      amount.length > 13
    ) {
      toast.error(
        "Please fill all fields and ensure the amount is greater than 100 and no more than 13 digits."
      );
      return;
    }
    dispatch(addEvent({ data, token })).then((res) => { 
      if (
        res.payload.event_id &&
        res.payload.event_id.length > 1 &&
        res.payload.participants.length > 0
      ) {
        setEventData(res.payload)
        setEvet_name("");
        setBet_type("");
        setAmount(0);
        setDue_date("");
        setRefund("");
        setWin_condition("");
        setTab(2)
        // setTimeout(() => {
        //   setOpenTab(false);
        // }, 3000);
      }
    });
  };
  return (
    <div className="w-full fixed z-[10000] top-0 left-0 h-full bg-black/[.70] flex justify-end">
      <div
        className={`"overflow-y-auto ${showTab ? "w-[60%] md:w-[40%] bg-white overflow-y-auto" : "w-[0px] "
          } p-4  "`}
      >

        {tab !== 2 && (
          <div className=" flex gap-3 w-full ">
            <div className=" w-fit  " >
              <div className=" w-[110px] " >
                {tab === 0 ? (
                  <StepOne />
                ) : tab === 1 ? (
                  <StepTwo />
                ) : (
                  <StepThree />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-[#212059] font-[600]">{tab === 0 ? "Bet Details" : "Payment"}</h3>
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
          </div>
        )}
        {tab === 0 && (

          <div className="flex mt-4 flex-col">
            <label className="mb-2 font-[500] text-[#0c0c0c]">
              Bet Type <span className="text-[red]">*</span>
            </label>
            <select
              value={bet_type}
              required
              onChange={(e) => setBet_type(e.target.value)}
              className="mb-4 text-[14px] text-[#7d7d7d] font-[500] p-2 bg-[#dbdbdb] rounded-[4px]"
            >
              <option disabled hidden value="">
                Select type
              </option>
              <option>Football</option>
              {/* {betTypes.map((result) => (
                <option value={result.name} key={result.id}>
                  {result.name}
                </option>
              ))} */}
            </select>
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-[500] text-[#0c0c0c]">
                Due Date <span className="text-[red]">*</span>
              </label>
              <input
                onChange={(e) => setDue_date(e.target.value)}
                value={due_date}
                required
                className="text-[14px] mb-4 text-[#7d7d7d] font-[500] p-2 rounded-[4px] bg-[#dbdbdb] outline-none"
                type="date"
              />
            </div>
            <div className="flex w-full mb-4 gap-x-10 justify-between">
              <div className="flex  w-full flex-col">
                <label className="mb-2 font-[500] text-[#0c0c0c]">
                  Event Name <span className="text-[red]">*</span>
                </label>
                <input
                  value={event_name}
                  required
                  onChange={(e) => setEvet_name(e.target.value)}
                  placeholder="Enter the name of the event"
                  className="bg-[#dbdbdb] pash p-2 rounded-[4px] outline-none"
                />
              </div>
              <div className="flex  w-full flex-col">
                <label className="mb-2 font-[500] text-[#0c0c0c]">
                  Condition for Win <span className="text-[red]">*</span>
                </label>
                <input
                  onChange={(e) => setWin_condition(e.target.value)}
                  required
                  value={win_condition}
                  placeholder="Enter condition for win here"
                  className="bg-[#dbdbdb] pash p-2 rounded-[4px] outline-none"
                />
              </div>

            </div>
            <label className="mb-2 font-[500] text-[#0c0c0c]">
              Condition for Refund <span className="text-[red]">*</span>
            </label>
            <textarea
              onChange={(e) => setRefund(e.target.value)}
              required
              value={refund}
              placeholder="Enter condition for refund here"
              className="bg-[#dbdbdb] mb-4 min-h-[80px] max-h-[120px] pash p-2 rounded-[4px] outline-none"
            />
            <label className="mb-2 font-[500] text-[#0c0c0c]">
              Amount <span className="text-[red]">*</span>
            </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              type="number"
              required
              placeholder="Enter amount"
              className="bg-[#dbdbdb] pash mb-4 p-2 rounded-[4px] outline-none"
            />
            <div className="flex gap-x-2 items-center">
              <input checked={terms} onClick={() => setTerms((prev) => !prev)} type="checkbox" />
              <p>I agree to Paybilli's Terms and Condition and privacy policy</p>
            </div>
          </div>
        )}
        {tab === 0 && (

          <button
            disabled={loading || !bet_type || !event_name || !due_date || !win_condition || !refund || !amount || !terms}
            onClick={() => setTab(1)}
            className="w-max  h-max p-3 text-[white] disabled:bg-opacity-40 mt-6 font-[500] px-5 bg-[#3FAAE0] rounded-[7px]"
          >
            {loading ? (
              <BeatLoader style={{ padding: "2px" }} color="#ffffff" size={10} />
            ) : (
              "Save & continue"
            )}
          </button>
        )}
        {tab === 1 && (
          <div className="flex pt-6 flex-col gap-4 ">
            <div onClick={handleSubmit} role="button" className=" w-full p-5 mt-6 flex flex-col border border-[#8F8F8F] rounded-lg " >
              <h4 className=" text-[21px] font-semibold " >Wallet</h4>
              <p className=" " >Tempus aliquam id sagittis ut Lorem  sit amet empus </p>
            </div>
            <div role="button" className=" w-full p-5 flex flex-col border border-[#8F8F8F] rounded-lg " >
              <h4 className=" text-[21px] font-semibold " >Card Payment</h4>
              <p className=" " >Tempus aliquam id sagittis ut Lorem  sit amet empus </p>
            </div>
            <div role="button" className=" w-full p-5 flex flex-col border border-[#8F8F8F] rounded-lg " >
              <h4 className=" text-[21px] font-semibold " >Crypto - Currency</h4>
              <p className=" " >Tempus aliquam id sagittis ut Lorem  sit amet empus </p>
            </div>
          </div>
        )}
        {tab === 2 && (
          <BettorModal close={setOpenTab} data={eventData} tab={tabBet} setTab={setTabBet} notitle={true} />
        )}
      </div>
    </div>
  );
};

export default AddEvent;
