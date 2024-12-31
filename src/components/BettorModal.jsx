import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import SuccessModal from './successModal'
import { inviteBettor } from '../redux/userReducer';
import { MdClose } from 'react-icons/md';
import { BeatLoader } from 'react-spinners';
import { StepThree } from '../svg';

export default function BettorModal(props) {

    const { loading } = useSelector(
        (state) => state.user
    );
    console.log(props?.data);
    const token = sessionStorage.getItem("token");
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [tab, setTab] = useState(false)

    const handleSubmit = () => {

        props?.setTab(1)
        if (!email) {
            toast.error(
                "Please Enter Email."
            );
            return;
        }

        const dataInfo = {
            event_id: props?.data?.id,
            email: email
        };

        dispatch(inviteBettor({ dataInfo, token })).then((res) => {

            console.log(res);
            if (res?.type === "inviteBettor/rejected") {
                props?.setTab(0)
            } else {
                setEmail("");
                setTimeout(() => {
                    setTab(true)
                }, 1000);
            }
        }
        );
    };

    return (
        <div className=' h-fit flex flex-col ' >
            {props?.tab === 0 && (
                <div className=" flex flex-col " >
                    {!props?.notitle ? (
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#212059] font-[600]">Bet Details</h3>
                                <div
                                    onClick={() => props?.close(false)}
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
                    ) : (

                        <div className=" flex gap-3 w-full ">
                            <div className=" w-fit  " >
                                <div className=" w-[110px] " >
                                    <StepThree />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[#212059] font-[600]">{"Invite Bettor (optional)"}</h3>
                                    <div
                                        onClick={() => props?.close(false)}
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
                    {!props?.notitle && (
                        <div className="flex border-2 bg-[#424242] !text-white rounded-[12px] flex-col p-3 pl-4 mt-4">
                            <div className="flex justify-between w-full mb-4">
                                <div className="">
                                    <h4 className="text-[16px] !text-white ">{props?.data?.creator?.name}</h4>
                                    <p className=' text-[#C2C2C2] ' >Bettor</p>
                                </div>
                                <div className="min-w-[100px]">
                                    <h4 className="text-[16px] !text-white ">NGN{props?.data?.amount}</h4>
                                    <p className=' text-[#C2C2C2] ' >Amount</p>
                                </div>
                            </div> 
                            <div className="flex justify-between w-full mb-4">
                                <div className="">
                                    <h4 className="text-[16px] !text-white ">{props?.data?.due_date}</h4>
                                    <p className=' text-[#C2C2C2] ' >Due Date</p>
                                </div>
                                <div className=" min-w-[100px]">
                                    <h4 className="text-[16px] !text-white ">{props?.data?.bet_type}</h4>
                                    <p className=' text-[#C2C2C2] ' >Bet Type</p>
                                </div>
                            </div>
                            <div className="flex w-full border-2 mb-4"></div>
                            <div className="flex justify-between w-full mb-4">
                                <div className="">
                                    <h4 className="text-[16px] !text-white ">{props?.data?.creator?.name}</h4>
                                    <p className=' text-[#C2C2C2] ' >Bettor</p>
                                </div>
                                <div className="min-w-[100px]">
                                    <h4 className="text-[16px] !text-white ">NGN{props?.data?.amount}</h4>
                                    <p className=' text-[#C2C2C2] ' >Amount</p>
                                </div>
                            </div>

                            <div className="">
                                <h4 className="text-[16px] !text-white ">{props?.data?.win_condition}</h4>
                                <p className=' text-[#C2C2C2] ' >Win Terms</p>
                            </div>
                            <div className="">
                                <h4 className="text-[16px] !text-white ">{props?.data?.refund_condition}</h4>
                                <p className=' text-[#C2C2C2] ' >Refund Terms</p>
                            </div>
                        </div>
                    )}
                    {!props?.notitle && ( 
                        <h3 className="text-[#212059] mt-4 font-[600]">Invite Bettor</h3>
                    )}
                    {!props?.notitle && (
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                            id minus reprehenderit aliquid excepturi odit
                        </p>
                    )}
                    <div className={` ${props?.notitle ? "pt-4" : "pt-12"} flex flex-col `}>
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
            {props?.tab === 1 && (
                <SuccessModal tab={tab} setTab={setTab} close={props?.close} />
            )}
        </div>
    )
}
