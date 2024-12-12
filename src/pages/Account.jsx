import React from 'react'
import Navbar from '../components/Navbar'

export default function Account() {
    return (
        <section className="h-[100vh] lg:px-10 px-4 pb-4 w-[100%] overflow-y-auto">
            <Navbar />
            <div className="flex flex-col space-y-4 w-full lg:w-[75%] mx-auto">
                <h4 className=" font-[700] text-[#0c0c0c] items-center">Account</h4>
                <div className="flex flex-col bg-white p-4 h-fit lg:max-h-[255px] rounded-[7px]">
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
                <div className="flex lg:flex-row flex-col bg-white p-6 gap-6 py-12 relative h-fit rounded-[7px]">
                    <div className=' w-full lg:w-fit ' >
                        <div className=' lg:w-[334px] flex flex-col ' >
                            <h4 className=' text-2xl font-semibold ' >Update Personal Details</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non odio porttitor dignissim orci non puruspurus. Nunc nisi ut </p>
                        </div>
                    </div>
                    <div className=' flex-1 flex-col flex gap-4' >
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
                                    Fullname
                                </label>
                                <input
                                    required
                                    placeholder="Enter Fullname"
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>

                            <div className=" w-full flex flex-col ">
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
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
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
                                    Date of Birth
                                </label>
                                <input
                                    type='date'
                                    placeholder="Enter Username"
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>

                            <div className=" w-full flex flex-col ">
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
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
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
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
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
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
                                <label className="mb-2 font-[500] text-[#0c0c0c]">
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
                    </div>
                </div>
            </div>
        </section>
    )
}
