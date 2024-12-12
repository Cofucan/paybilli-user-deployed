import React, { useState } from 'react'
import { IoIosEye, IoIosEyeOff, IoMdClose, IoMdEye } from 'react-icons/io'
import PinInput from 'react-pin-input'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { setNewPin } from '../redux/userReducer'

export default function SetPin(props) {

    const [pin, setPin] = useState("")
    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [tab, setTab] = useState(0)
    const token = sessionStorage.getItem("token");

    const submit = (digit) => {

        const data = {
            pin: digit
        };

        if (pin === digit) {
            dispatch(setNewPin({
                data, token
            }));
            setTab(2)
        } else {
            toast.error("Incorrect Pin");
            setTab(0)
        }
    }

    return (
        <div className=' w-full fixed inset-0 bg-black bg-opacity-30 lg:px-0 px-4 flex justify-center items-center ' >
            <div className=' relative z-20 w-full rounded-xl max-w-[400px] h-fit bg-white ' >
                <div onClick={()=> props?.setOpenPin(false)} role='button' className=' w-7 h-7 absolute right-4 top-4 rounded-full flex justify-center items-center bg-[#DFDFDF] ' >
                    <IoMdClose size={"20px"} />
                </div>
                {tab === 0 && (

                    <div className=' w-full flex flex-col px-6 pb-24' >
                        <p className=' text-xl lg:text-[30px] mt-[18px] font-bold text-[#232759] ' >Set Transaction Pin</p>
                        <p className=' font-bold mt-6 text-lg text-center ' >Enter your transaction Pin</p>
                        <p className=' mt-2 text-base text-center' >Keep your transaction pin easy to remember password and do not share with anyone</p>

                        <div className="flex mt-6 gap-x-6 mx-auto">
                            <PinInput
                                length={4}
                                focus
                                // disabled
                                // secret 
                                inputStyle={{ backgroundColor: '#D5D5D5', borderRadius: "8px", fontSize: "18px", borderColor: "#D5D5D5" }}
                                type="numeric"
                                onChange={(e) => setPin(e)}
                                onComplete={() => setTab(1)}
                            />
                        </div> 
                    </div>
                )}
                {tab === 1 && (

                    <div className=' w-full flex flex-col px-6 pb-24' >
                        <p className=' text-2xl lg:text-[30px] mt-[18px] font-bold text-[#232759] ' >Set Transaction Pin</p>
                        <p className=' font-bold mt-6 text-lg text-center ' >Confirm your transaction Pin</p>
                        <p className=' mt-2 text-base text-center' >Keep your transaction pin easy to remember password and do not share with anyone</p>

                        <div className="flex mt-6 gap-x-6 mx-auto">
                            <PinInput
                                length={4}
                                focus
                                // disabled
                                // secret 
                                inputStyle={{ backgroundColor: '#D5D5D5', borderRadius: "8px", fontSize: "18px", borderColor: "#D5D5D5" }}
                                type="numeric"
                                // onChange={(e) => setConfirmPin(e)}
                                onComplete={(e) => submit(e)}
                            />
                        </div> 
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
