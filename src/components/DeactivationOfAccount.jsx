import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { IoIosEye, IoIosEyeOff, IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { deactivateAccount, logout } from '../redux/userReducer';

export default function DeactivationOfAccount(props) {

    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false)
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [tab, setTab] = useState(0)
    const token = sessionStorage.getItem("token");

    const clickHandler = () => {
        const data = {
            password: password
        }
        if (checked) {
            dispatch(deactivateAccount({ data, token })).then((res) => {
                console.log(res?.payload?.detail);
                if (res?.payload?.detail === "Incorrect password") {
                    toast.success(res?.payload?.detail);
                } else {
                    toast.success("Account Deactivated Successful");
                    dispatch(logout());
                }
            }); 
        }
    }

    return (
        <div className=' w-full fixed inset-0 z-50 bg-black bg-opacity-30 lg:px-0 px-4 flex justify-center items-center ' >
            <div className=' relative z-20 w-full rounded-xl max-w-[500px] h-fit bg-white ' >
                <div className=' w-full flex px-4 py-4 justify-between items-center  ' >
                    <h3 className=' text-xl lg:text-[30px] font-bold text-[#232759] ' >Deactivate Account</h3>
                    <div onClick={() => props?.setOpen(false)} role='button' className=' w-7 h-7 rounded-full flex justify-center items-center bg-[#DFDFDF] ' >
                        <IoMdClose size={"20px"} />
                    </div>
                </div>
                {tab === 0 && (
                    <div className=' p-4 w-full pb-7 flex flex-col ' >
                        <p className=' text-lg font-bold ' >NOTE</p>
                        <div className=' w-full h-[30vh] overflow-y-auto ' >
                            <p className=' mt-3 ' >Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut quis. Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut quis.Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut quis.Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut quis. Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut quis.Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis.Velit euismod quis sed ut quis.</p>
                        </div>
                        <div className=' flex gap-3 mt-4 items-center ' >
                            <Checkbox checked={checked} onChange={() => setChecked((prev) => !prev)} />
                            <p>{`I agree to Betbili’s Terms and Condition and privacy policy.`}</p>
                        </div>
                        <button
                            disabled={loading || !checked}
                            onClick={() => setTab(1)}
                            className=" w-max font-[500] px-7 mt-14 bg-[#3FAAE0] text-white h-[45px]  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                        >
                            Save Changes
                        </button>
                    </div>
                )}

                {tab === 1 && (
                    <div className=' w-full flex flex-col px-4 pb-9' >
                        <h4 className=' font-bold mt-4 text-lg ' >Enter your Password Pin</h4>
                        <div className="w-full py-2">
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
                        </div>
                        <button
                            disabled={loading || password?.length <= 6}
                            onClick={clickHandler}
                            className=" w-max font-[500] px-10 mt-4 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                        >
                            {loading ? (
                                <BeatLoader
                                    style={{ padding: "2px" }}
                                    color="#ffffff"
                                    size={10}
                                />
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                )}

                {tab === 2 && (
                    <div className=' w-full h-[400px] flex flex-col justify-center items-center px-6 pb-6' >
                        <p className=' text-[30px] font-bold text-[#232759] ' >Successful</p>
                        <p className=' mt-2 text-base text-center' >Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non odio porttitor dignissim orci no</p>
                    </div>
                )}
            </div>
        </div>
    )
}
