import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

export default function Account() {

    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className="h-[100vh] lg:px-10 px-4 pb-4 lg:pt-0 pt-4 w-[100%] overflow-y-auto">
            <Navbar />
            <div className="flex flex-col space-y-4 w-full lg:w-[75%] mx-auto">
                <h4 className=" font-[700] text-[#0c0c0c] items-center">Account</h4>
                <div className="flex flex-col lg:items-start items-center text-center bg-white p-4 h-fit lg:max-h-[255px] rounded-[7px]">
                    <div className="flex lg:flex-row flex-col lg:items-center gap-6">
                        <div className=' w-[206px] bg-red-400  lg:mx-0 mx-auto h-[206px] rounded-full ' >

                        </div>
                        <div className="flex flex-col ">
                            <h4 className="text-[#212059] font-[700] text-2xl lg:text-[30px]">Olayimika Oluwasegun</h4>
                            <p>
                                olayimikaoluwasegun@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col bg-white p-6 gap-4 py-12 relative h-fit rounded-[7px]">
                    <div className=' w-full lg:w-fit ' >
                        <div className=' lg:w-[334px] flex flex-col ' >
                            <h4 className=' text-2xl font-semibold ' >Update Personal Details</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non odio porttitor dignissim orci non puruspurus. Nunc nisi ut </p>
                        </div>
                    </div>
                    <div className=' flex-1 flex-col flex gap-4' >
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Fullname
                                </label>
                                <input
                                    required
                                    placeholder="Enter Fullname"
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>

                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Username
                                </label>
                                <input
                                    required
                                    placeholder="Enter Username"
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Date of Birth
                                </label>
                                <input
                                    type='date'
                                    placeholder="Enter Username"
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>

                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Phone Number
                                </label>
                                <input
                                    required
                                    placeholder="Enter Phone Number"
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Email Address
                                </label>
                                <input
                                    required
                                    placeholder="Enter Email Address "
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Country
                                </label>
                                <select
                                    className="mb-4 text-[14px] text-[#7d7d7d] font-[500] h-[40px] bg-[#dbdbdb] rounded-[4px]"
                                >
                                    <option disabled hidden value="">
                                        Select Country
                                    </option>
                                </select>
                            </div>
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    State
                                </label>
                                <select
                                    className="mb-4 text-[14px] text-[#7d7d7d] font-[500] h-[40px] bg-[#dbdbdb] rounded-[4px]"
                                >
                                    <option disabled hidden value="">
                                        Select State
                                    </option>
                                </select>
                            </div>
                        </div>

                        <button
                            className=" w-max font-[500] px-10 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                        > Save Changes
                        </button>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col bg-white p-6 gap-4 py-12 relative h-fit rounded-[7px]">
                    <div className=' w-full lg:w-fit ' >
                        <div className=' lg:w-[334px] flex flex-col ' >
                            <h4 className=' text-2xl font-semibold ' >Password</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non odio porttitor dignissim orci non puruspurus. Nunc nisi ut </p>
                        </div>
                    </div>
                    <div className=" flex-1 flex flex-col gap-1">
                        <label className="mb-1 font-[500] text-[#0c0c0c]">
                            Password
                        </label>
                        <div className=" rounded-[8px] mt-1 ">
                            <div className="bg-[#dbdbdb] rounded-md ">
                                <div className=" flex px-4 h-[56px] relative gap-x-3 items-center">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="bg-transparent text-[#2d2d2d] pash outline-none w-full"
                                        value={password}
                                        placeholder="Password"
                                    />
                                    <div role='button' onClick={() => setShowPassword((prev) => !prev)} className=' absolute px-2 z-10 right-0 h-full flex justify-center items-center ' >
                                        {showPassword ? (
                                            <IoIosEye size={"25px"} />
                                        ) : (
                                            <IoIosEyeOff size={"25px"} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className=" w-max font-[500] px-10 mt-3 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                        > Save Password
                        </button>
                    </div>

                </div>

                <div className="flex lg:flex-row flex-col bg-white p-6 gap-4 py-12 relative h-fit rounded-[7px]">
                    <div className=' w-full lg:w-fit ' >
                        <div className=' lg:w-[334px] flex flex-col ' >
                            <h4 className=' text-2xl font-semibold ' >Withdrawal Details</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non odio porttitor dignissim orci non puruspurus. Nunc nisi ut </p>
                        </div>
                    </div>
                    <div className=' flex-1 flex-col flex gap-4' >

                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Card Number
                                </label>
                                <input
                                    required
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>

                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Expiry Date
                                </label>
                                <input
                                    required
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    CVV
                                </label>
                                <input
                                    required
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    USDT Address
                                </label>
                                <input
                                    required
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <button
                            className=" w-max font-[500] px-10 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                        > Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
