import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { dateFormat } from "../helper/dateFormat";

const PlaceBet = ({ setData, data }) => {
    const { loading, userInfo, openBets, betTypes } = useSelector(
        (state) => state.user
    );
    console.log(data);
    const token = sessionStorage.getItem("token");
    const [tab, setTab] = useState(0)
    const [selected, setSelected] = useState(0)
    const [checked, setChecked] = useState(false)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const [showTab, setShowTab] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowTab(true);
        }, 10);
    }, []);

    const handleSubmit = () => {

    };

    const clickHandler = () => {
        if (selected === 1) {
            setTab(1)
        } else {
            setTab(2)
        }
    } 

    function copyToClipboard(item) {
        navigator.clipboard.writeText(item);
        setShow(true)
        const timeout = setTimeout(() => {
            setShow(false)
          }, 1000);
    }


    return (
        <div className="w-full absolute top-0 left-0 h-full bg-black/[.70] flex justify-end">
            <div
                className={`"overflow-y-auto ${showTab ? "w-[60%] md:w-[40%] bg-white overflow-y-auto" : "w-[0px] "
                    } p-4 h-screen flex flex-col "`}
            >
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
                    {/* <p className=" text-[#333333] font-medium text-xl " >Betting Details</p> */}
                </div>
                {tab === 0 && (
                    <div className="flex bg-[#424242]  border-2 rounded-[12px] flex-col p-3 pl-4 mt-4">
                        <div className="flex justify-between w-full mb-4">
                            <div className="">
                                <h4 className="text-[16px] text-white ">{data.creator.name}</h4>
                                <p>Bettor</p>
                            </div>
                            <div className="min-w-[100px]">
                                <h4 className="text-[16px] text-white ">NGN{data.amount}</h4>
                                <p>Amount</p>
                            </div>
                        </div>

                        <div className="flex justify-between w-full mb-4">
                            <div className="">
                                <h4 className="text-[16px] text-white ">{data.due_date}</h4>
                                <p>Due Date</p>
                            </div>
                            <div className=" min-w-[100px]">
                                <h4 className="text-[16px] text-white ">{data.bet_type}</h4>
                                <p>Bet Type</p>
                            </div>
                        </div>
                        <div className="flex w-full border border-[#737373] mb-4"></div>
                        <div className="flex justify-between w-full mb-4">
                            <div className="">
                                <h4 className="text-[16px] text-white ">{data.win_condition}</h4>
                                <p>win condition</p>
                            </div>
                            <div className="min-w-[100px]">
                                <h4 className="text-[16px] text-white ">{data.refund_condition}</h4>
                                <p>refund condition</p>
                            </div>
                        </div>
                    </div>
                )}
                {tab === 0 && (
                    <div className=" w-full " >
                        <h3 className="text-[#212059] text-xl mt-4 font-[600]">Payment Option</h3>
                        <p className="  " >consectetur. Tempus aliquam id sagittis ut Lorem ipsum dolor sit amet empus aliquamaliquamsagittis.</p>
                        <div onClick={() => setSelected((prev) => prev === 1 ? 0 : 1)} role="button" className={` w-full rounded-lg px-6 border-[1.5px] ${selected === 1 ? " border-[#3FAAE0] " : " border-[#A6A6A6] "} mt-5 h-[109px] flex flex-col justify-center `} >
                            <h4>Wallet</h4>
                            <p>Tempus aliquam id sagittis ut Lorem  sit amet empus </p>
                        </div>
                        <div onClick={() => setSelected((prev) => prev === 2 ? 0 : 2)} role="button" className={` w-full rounded-lg px-6 border-[1.5px]  ${selected === 2 ? " border-[#3FAAE0] " : " border-[#A6A6A6] "}  mt-3 h-[109px] flex flex-col justify-center `} >
                            <h4>Crypto - Currency</h4>
                            <p>Tempus aliquam id sagittis ut Lorem  sit amet empus </p>
                        </div>

                        <button
                            onClick={clickHandler}
                            disabled={selected === 0 ? true : false}
                            className=" text-[15px] disabled:bg-[#B7B7B7] text-white bg-[#3FAAE0] font-[500] rounded-[7px] w-[145px] mt-8 p-3 h-[56px]"
                        >
                            Proceed
                        </button>
                    </div>
                )}
                {tab === 1 && (
                    <div className="flex rounded-[12px] flex-col flex-1 py-3  mt-4">
                        <h4>Wallet Preview</h4>
                        <p>The sum of NGN {data.amount} will be deduct from your wallet for the {data?.event_name} created on {dateFormat(data?.created_at)} with a due date of {dateFormat(data.due_date)} by bettor {data.creator.name} </p>
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
                        <div className=" w-full flex gap-4 mt-auto " >
                            <button
                                onClick={() => setTab(0)}
                                className="border-2 text-[15px] text-[#3FAAE0] font-[500] border-[#3FAAE0] rounded-[7px] p-3 w-[145px]  h-[56px]"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setTab(1)}
                                disabled={checked ? false : true}
                                className=" text-[15px] disabled:bg-[#B7B7B7] text-white bg-[#3FAAE0] font-[500] rounded-[7px] w-[145px] p-3 h-[56px]"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                )}
                {tab === 2 && (
                    <div className="flex rounded-[12px] flex-col flex-1 py-3  mt-4">
                        <h4>Crypto - Currency</h4>
                        <p className=" mt-3 " >Scan the QR Code or copy and paste the payment details into your wallet.</p>
                        <div className=" mt-6 flex w-full justify-center items-center " >
                            <div className=" w-[350px] h-[350px] bg-red-500 " />
                        </div>
                        <div className=" flex w-full justify-between items-center pt-5 gap-4 " >
                            <div className=" flex flex-col " >
                                <h4>Wallet Address</h4>
                                <p className=" text-[#0D74ED] " >bc1qjwq4qvehs0rpwgg9xsgp5zawvpxk9gvetda8kd</p>
                            </div>
                            <div className=" flex flex-col items-center " onClick={() => copyToClipboard("bc1qjwq4qvehs0rpwgg9xsgp5zawvpxk9gvetda8kd")} role="button" >
                                <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.652832" width="36.8377" height="36.8377" rx="18.4188" fill="#3FABDA" />
                                    <path d="M27.9832 11.0437L26.6593 10.4987V19.2864L29.0601 13.5836C29.4652 12.591 29.0008 11.4524 27.9832 11.0437ZM8.71785 14.6444L13.6182 26.2738C13.7625 26.6276 14.0086 26.9322 14.3263 27.1501C14.644 27.3679 15.0194 27.4895 15.4064 27.5C15.6633 27.5 15.93 27.4513 16.1869 27.3443L23.4682 24.3761C24.2092 24.0744 24.6636 23.3543 24.6834 22.6341C24.6933 22.3811 24.6439 22.0989 24.555 21.8459L19.6151 10.2165C19.4755 9.8603 19.2302 9.55379 18.9113 9.33683C18.5924 9.11987 18.2145 9.0025 17.8269 9C17.57 9 17.3132 9.05839 17.0662 9.14598L9.79474 12.1142C9.31139 12.3091 8.92643 12.6852 8.72449 13.1597C8.52255 13.6341 8.52016 14.1682 8.71785 14.6444ZM24.6735 10.9463C24.6735 10.4301 24.4653 9.93508 24.0948 9.57007C23.7242 9.20506 23.2216 9 22.6976 9H21.265L24.6735 17.1163" fill="white" />
                                </svg>
                                {show && (
                                    <p>Copied</p>
                                )}
                            </div>
                        </div>
                        <div className=" w-full flex gap-4 mt-auto " >
                            <button
                                onClick={() => setTab(0)}
                                className="border-2 text-[15px] text-[#3FAAE0] font-[500] border-[#3FAAE0] rounded-[7px] p-3 w-[145px]  h-[56px]"
                            >
                                Previous
                            </button>
                            <button
                                className=" text-[15px] disabled:bg-[#B7B7B7] text-white bg-[#3FAAE0] font-[500] rounded-[7px] w-[145px] p-3 h-[56px]"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlaceBet;
