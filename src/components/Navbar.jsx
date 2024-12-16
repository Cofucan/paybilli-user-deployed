import React from 'react'
import { BsBell } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import wave from "../assets/wave.png";
import profile from "../assets/profile.png";

export default function Navbar() {

    const { userInfo } = useSelector((state) => state.user);

    return (
        <div className="hidden sticky z-[10000] top-0 lg:flex bg-[#F5F5F5] py-2 w-full items-center justify-between">
            <div className="flex flex-col">
                <h4 className="flex font-[700] text-[#0c0c0c]  items-center">
                    Hi, {userInfo.first_name}{" "}
                    <img onContextMenu={(e) => e.preventDefault()} src={wave} />
                </h4>
                <p>#{userInfo.username}</p>
            </div>
            <div className="flex gap-x-4 items-center">
                <div className="bg-[#DDDDDD] rounded-full h-max w-max p-2">
                    <BsBell color="#393737" size={19} />
                </div>
                <p className="text-[#0c0c0c]">Hi, {userInfo.first_name}</p>
                <img
                    onContextMenu={(e) => e.preventDefault()}
                    width={50}
                    src={profile}
                />
            </div>
        </div>
    )
}
