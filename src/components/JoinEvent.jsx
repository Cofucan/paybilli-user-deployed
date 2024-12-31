import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import { placeBet } from '../redux/userReducer';
import { toast } from 'react-toastify';
import { dateFormat } from '../helper/dateFormat';
import SuccessModal from './successModal';
import { useDispatch } from 'react-redux';

export default function JoinEvent({ setData, data, setOpenTab }) {

  const [showTab, setShowTab] = useState(false)
  const [terms, setTerms] = useState(false)
  const [phase, setPhase] = useState(1)
  const [condition, setCondition] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShowTab(true);
    }, 10);
  }, []);

  const [tab, setTab] = useState(false)


  const handleSubmit = () => {

    setPhase(4)

    const dataInfo = {
      condition: condition
    }

    const details = {
      id: data?.id
    }

    dispatch(placeBet({ dataInfo, details })).then((res) => {
      if(res?.payload?.detail){
        setPhase((prev)=> prev-1)
      } else {
        setTab(true)
      } 
    });
  };


  const clickHandler = () => {
    if (!condition) {
      toast?.error("Enter A condition to contiune")
    }
  }

  return (
    <div className="w-full fixed z-[10000] top-0 left-0 h-full bg-black/[.70] flex justify-end">
      <div
        className={`"overflow-y-auto ${showTab ? "w-[60%] md:w-[40%] bg-white overflow-y-auto" : "w-[0px] "
          } p-4  "`}
      >
        <div className=' w-full flex flex-col gap-6 ' >
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              {phase !== 4 && (
                <h3 className="text-[#212059] font-[600]">{phase !== 3 ? "Play Bet" : "Payment Option"}</h3>
              )}
              <div
                onClick={() => setOpenTab(false)}
                className="bg-[#e5e5e5] p-1 ml-auto cursor-pointer rounded-full"
              >
                <MdClose />
              </div>
            </div>
            {phase === 2 && (
              <p>consectetur. Tempus aliquam id sagittis ut Lorem ipsum dolor sit amet empus aliquamaliquamsagittis.</p>
            )}
          </div>
          {phase === 1 && (
            <div className=' w-full flex flex-col gap-2 ' >
              <h4 className=' text-lg ' >Betting Details</h4>
              <div className="flex border-2 bg-[#424242] !text-white rounded-[12px] flex-col p-3 pl-4">
                <div className="flex justify-between w-full mb-4">
                  <div className="">
                    <h4 className="text-[16px] !text-white ">{data?.creator?.name}</h4>
                    <p className=' text-[#C2C2C2] ' >Bettor</p>
                  </div>
                  <div className="min-w-[100px]">
                    <h4 className="text-[16px] !text-white ">NGN{data?.amount}</h4>
                    <p className=' text-[#C2C2C2] ' >Amount</p>
                  </div>
                </div>
                <div className="flex justify-between w-full mb-4">
                  <div className="">
                    <h4 className="text-[16px] !text-white ">{data?.due_date}</h4>
                    <p className=' text-[#C2C2C2] ' >Due Date</p>
                  </div>
                  <div className=" min-w-[100px]">
                    <h4 className="text-[16px] !text-white ">{data?.bet_type}</h4>
                    <p className=' text-[#C2C2C2] ' >Bet Type</p>
                  </div>
                </div>
                <div className="flex w-full border-2 mb-4"></div>
                <div className="flex justify-between w-full mb-4">
                  <div className="">
                    <h4 className="text-[16px] !text-white ">{data?.creator?.name}</h4>
                    <p className=' text-[#C2C2C2] ' >Bettor</p>
                  </div>
                  <div className="min-w-[100px]">
                    <h4 className="text-[16px] !text-white ">NGN{data?.amount}</h4>
                    <p className=' text-[#C2C2C2] ' >Amount</p>
                  </div>
                </div>

                <div className="">
                  <h4 className="text-[16px] !text-white ">{data?.win_condition}</h4>
                  <p className=' text-[#C2C2C2] ' >Win Terms</p>
                </div>
                <div className="">
                  <h4 className="text-[16px] !text-white ">{data?.refund_condition}</h4>
                  <p className=' text-[#C2C2C2] ' >Refund Terms</p>
                </div>
              </div>
              <div className=' w-full flex flex-col gap-2 pt-5 ' >
                <div className="flex flex-col mt-3">
                  <label className="flex justify-between mb-2 font-[500] text-[#0c0c0c]">
                    <div>
                      Win Condition <span className="text-[red]">*</span>
                    </div>
                  </label>
                  <input
                    onChange={(e) => setCondition(e.target.value)}
                    value={condition}
                    type="text"
                    required
                    placeholder="Enter Condition"
                    className="bg-[#dbdbdb] mb-4 p-2 rounded-[4px] outline-none"
                  />
                </div>
                <button
                  disabled={!condition}
                  onClick={() => setPhase(phase + 1)}
                  className="border-2 text-[15px] text-[#fff] font-[500] bg-[#3FAAE0] disabled:bg-opacity-50 rounded-[7px] px-6 p-3 w-max h-max"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {phase === 2 && (
            <div className=' w-full flex flex-col ' >
              <h3 className="text-[#212059] text-xl font-[600]">{"Wallet Preview"}</h3>
              <p className=' my-2 ' >The sum of {data?.amount} will be deduct from your wallet for the {data?.event_name} created on {dateFormat(data?.created_at)} with a due date of {dateFormat(data?.due_date)} by {data?.creator?.name} </p>
              <div className="flex gap-x-2 items-center">
                <input checked={terms} onClick={() => setTerms((prev) => !prev)} type="checkbox" />
                <p>I agree to Paybilli's Terms and Condition and privacy policy</p>
              </div>
              <button
                disabled={!terms}
                onClick={() => setPhase((prev) => prev + 1)}
                className="border-2 text-[15px] text-[#fff] font-[500] bg-[#3FAAE0] disabled:bg-opacity-50 rounded-[7px] mt-12 px-6 p-3 w-max h-max"
              >
                Continue
              </button>
            </div>
          )}
          {phase === 3 && (
            <div className=' w-full flex flex-col ' >
              <div className="flex pt-3 flex-col gap-4 ">
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
            </div>
          )}
          {phase === 4 && (
            <SuccessModal tab={tab} setTab={setTab} close={setOpenTab} />
          )}
        </div>
      </div>
    </div>
  )
}
