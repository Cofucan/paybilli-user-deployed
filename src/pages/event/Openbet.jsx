import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getOpenBets, getUserCreatedEvents } from '../../redux/userReducer';
import { useMediaQuery } from 'react-responsive';
import { BiArrowBack } from 'react-icons/bi';
import { DataGrid } from '@mui/x-data-grid';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import JoinEvent from '../../components/JoinEvent';
import OpenBetTable from '../../components/openBetTable';

export default function Openbet() {
 

    const navigate = useNavigate()

    return (
        <section className="h-[100vh] relative lg:px-10 p-4 w-[100%] overflow-y-auto">
        <Navbar />
            <div className=' w-full py-6 flex flex-col gap-4 ' >
                <div className=' flex gap-3 ' >
                    <BiArrowBack onClick={() => navigate(-1)} className=' cursor-pointer ' size={"30px"} color='black' />
                    <p className=' text-lg font-bold text-black' >Open Bet</p>
                </div>
                <div className=' w-full ' >
                    <div className="flex items-center gap-x-2">
                        <select className="p-2 px-6 bg-white">
                            <option>Bet Type</option>
                        </select>
                        <div className="bg-white rounded-md">
                            <div className="flex px-4 py-2 gap-x-3 items-center">
                                <input
                                    // onChange={(e) => setState(e.target.value)}
                                    type="text"
                                    placeholder="Enter State"
                                    className="bg-transparent  pash text-[14px] font-[500] p-1 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <OpenBetTable />
            </div> 
        </section>
    )
}
