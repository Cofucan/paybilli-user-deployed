import React, { useEffect, useState } from 'react'
import { CgAsterisk } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify';
import { kycVerification } from '../redux/userReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function KycModal(props) {

    const { loading, userInfo } = useSelector((state) => state.user);
    const [radio, setRadio] = useState("");
    const [bvn, setBvn] = useState("");
    const [nin, setNin] = useState("");
    const dispatch = useDispatch();
    const token = sessionStorage.getItem("token");
    useEffect(() => {
        if (radio === "bvn") {
            setNin("");
        } else if (radio === "nin") {
            setBvn("");
        }
    }, [radio]);

    const clickHandler = () => {
        if (radio === "bvn" && bvn.length !== 11) {
            toast.error("BVN must be 11 characters long.");
            return;
        }
        if (radio === "nin" && nin.length !== 11) {
            toast.error("NIN must be 11 characters long.");
            return;
        }
        const kyc = {
            bvn,
            nin,
        };
        dispatch(kycVerification({ token, kyc }));
    } 

    useEffect(()=> {
        if(userInfo?.nin){
            setRadio("nin")
            setNin(userInfo?.nin)
        } else if(userInfo?.bvn){
            setRadio("bvn")
            setNin(userInfo?.bvn)
        }
    }, [])

    return (
        <div className=' w-full fixed inset-0 z-50 bg-black bg-opacity-30 lg:px-0 px-4 flex justify-center items-center ' >
            <div className=' relative z-20 w-full rounded-xl max-w-[500px] h-fit bg-white ' >
                <div className=' w-full flex px-4 py-4 justify-between items-center  ' >
                    <h3 className=' text-xl lg:text-[30px] font-bold text-[#232759] ' >Deactivate Account</h3>
                    <div onClick={() => props?.setOpen(false)} role='button' className=' w-7 h-7 rounded-full flex justify-center items-center bg-[#DFDFDF] ' >
                        <IoMdClose size={"20px"} />
                    </div>
                </div>
                <div className=' w-full px-4 pb-8 ' >
                    <div className="mt-10">
                        <div className="flex items-center gap-x-2">
                            <input
                                maxLength={11}
                                minLength={11}
                                name="verification"
                                value={radio}
                                onChange={(e) => setRadio("bvn")}
                                checked={radio === "bvn" ? true : false}
                                type="radio"
                            />
                            <h4 className="text-[18px]">
                                Bank Verification Number (BVN)
                            </h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Purus odio porttitor
                            dignissim porttitor
                            <br /> orci non odio porttitor{" "}
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center gap-x-2">
                            <input
                                name="verification"
                                onChange={(e) => setRadio("nin")}
                                type="radio"
                                checked={radio === "nin" ? true : false}
                                value={radio}
                            />
                            <h4 className="text-[18px]">
                                National Identity Number (NIN)
                            </h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Purus odio porttitor
                            dignissim porttitor
                            <br /> orci non odio porttitor{" "}
                        </p>
                    </div>
                    {radio === "bvn" && (
                        <>
                            <h4 className="mt-8 flex">
                                BVN <CgAsterisk color="red" size={14} />
                            </h4>
                            <input
                                type="text" // Change type to text
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const numericValue = value.replace(/\D/g, "");
                                    setBvn(numericValue);
                                }}
                                value={bvn}
                                className="bg-[#eaeaea] p-4 rounded-[4px] text-[14px] font-[500] outline-none w-full"
                                placeholder="Enter BVN"
                            />
                        </>
                    )}
                    {radio === "nin" && (
                        <>
                            <h4 className="mt-8 flex">
                                NIN <CgAsterisk color="red" size={14} />
                            </h4>
                            <input
                                type="text" // Change type to text
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const numericValue = value.replace(/\D/g, "");
                                    setNin(numericValue);
                                }}
                                value={nin}
                                className="bg-[#eaeaea] p-4 rounded-[4px] text-[14px] font-[500] outline-none w-full"
                                placeholder="Enter NIN"
                            />
                        </>
                    )}
                    <button
                        disabled={loading}
                        onClick={clickHandler}
                        className=" w-max font-[500] px-10 mt-14 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                    >
                        {loading ? (
                            <BeatLoader
                                style={{ padding: "2px" }}
                                color="#ffffff"
                                size={10}
                            />
                        ) : (
                            "Login"
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

