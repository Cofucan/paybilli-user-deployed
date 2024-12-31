import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { IoIosCamera, IoIosEye, IoIosEyeOff } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { CountryDropdown } from 'react-country-region-selector';
import { changePassword, getWithdrawDetail, updateAccount } from '../redux/userReducer';
import SuccessModal from '../components/successModal';

import profile from "../assets/profile.png";
import { toast } from 'react-toastify';

export default function Account() {

    const { userInfo, balance, withdrawDetail } = useSelector(
        (state) => state.user
    );

    const dispatch = useDispatch()

    const [password, setPassword] = useState("")
    const [passwordNew, setPasswordNew] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    const [country, setCountry] = useState("")
    const [month, setMonth] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [countryState, setCountryState] = useState("")
    const [image, setImage] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [withDrawDetail, setDetail] = useState({
        "owner": "",
        "account_name": "",
        "bank_name": "",
        "account_number": "",
        "usdt_address": ""
    })

    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState(false)

    const baseUrl = "https://paybilli-api-16f195c5b3f3.herokuapp.com";


    const handleImageChange = (e) => {

        const selected = e.target.files[0];

        const TYPES = ["image/png", "image/jpg", "image/jpeg"];
        if (selected && TYPES.includes(selected.type)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            toast.error("Invalid Image Type")
        }
        setImageFile(selected)
    }

    console.log(userInfo);

    const months = [
        { value: "January", label: "January" },
        { value: "February", label: "February" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" },
    ];

    useEffect(() => {
        dispatch(getWithdrawDetail());
    }, [])

    useEffect(() => {
        if (!email) {
            setEmail(userInfo?.email)
            setFirstName(userInfo?.first_name)
            setLastName(userInfo?.last_name)
            setPhone(userInfo?.phone_number)
            setCountry(userInfo?.country)
            setDate_of_birth(userInfo?.date_of_birth)
            setMonth(userInfo?.month_of_birth)
            setCountryState(userInfo?.state)
            setUserName(userInfo?.username)
            setImage(`https://paybilli-api-16f195c5b3f3.herokuapp.com${userInfo?.profile_image_url}`)
        }
    }, [userInfo])


    const handleSubmit = () => {

        setOpen(true)

        const data = {
            first_name: firstName,
            last_name: lastName,
            username: userName,
            email: email,
            phone_number: phone,
            date_of_birth: date_of_birth,
            month_of_birth: month,
            country: country,
            state: countryState,
        }

        dispatch(updateAccount({ data, imageFile })).then((res) => {

            console.log(res);
            if (res?.type === 'updateAccount/rejected') {
                setOpen(false)
            } else {
                setTab(true)
            }
        });
    };

    const handleSubmitPassword = () => {

        if (!password) {
            toast.error("Enter Your Password")
            return
        } else if (!passwordNew) {
            toast.error("Enter Your New Password")
            return
        } else {

            setOpen(true)
            const data = {
                "old_password": password,
                "new_password": passwordNew,
                "confirm_new_password": passwordNew
            }

            dispatch(changePassword({ data })).then((res) => {

                console.log(res);
                if (res?.payload?.message === 'Password changed successfully!') {
                    setPassword("")
                    setPasswordNew("")
                    setTab(true)
                } else {
                    toast.error(res.payload.detail)
                    setOpen(false)
                }
            });
        }
    };

    return (
        <section className="h-[100vh] lg:px-10 px-4 pb-4 lg:pt-0 pt-4 w-[100%] overflow-y-auto">
            <Navbar />
            <div className="flex flex-col space-y-4 w-full lg:w-[75%] mx-auto">
                <h4 className=" font-[700] text-[#0c0c0c] items-center">Account</h4>
                <div className="flex flex-col lg:items-start items-center text-center bg-white p-4 h-fit lg:max-h-[255px] rounded-[7px]">
                    <div className="flex lg:flex-row flex-col lg:items-center gap-6">
                        <label className=' w-[206px]  lg:mx-0 mx-auto relative flex justify-center items-center h-[206px] rounded-full ' >
                            <img className=' h-full w-full rounded-lg absolute inset-0 object-cover  ' src={image ? image : profile} alt='logo' />
                            <IoIosCamera size={"35px"} color='white' className=' z-20 ' />
                            <input style={{ display: 'none' }} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                            <div className=' w-full h-full bg-black bg-opacity-25 absolute z-10 ' />
                        </label>
                        <div className="flex flex-col ">
                            <h4 className="text-[#212059] font-[700] text-2xl lg:text-[30px]">{userInfo?.first_name + " " + userInfo?.last_name}</h4>
                            <p>
                                {userInfo?.email}
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
                                    First name
                                </label>
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter Fullname"
                                    value={firstName}
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Lastname
                                </label>
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter Fullname"
                                    value={lastName}
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>

                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Username
                                </label>
                                <input
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
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
                                <div className=' flex gap-3 items-center w-full ' >

                                    <div className="bg-[#eaeaea] w-full rounded-md">
                                        <div className=" w-full flex h-[40px] px-4 items-center">
                                            <select
                                                onChange={(e) => setDate_of_birth(e.target.value)}
                                                value={date_of_birth}
                                                placeholder='Enter Date '
                                                className="w-full bg-transparent  pash text-[14px] font-[500] p-1 outline-none"
                                            >
                                                <option value={""} >Enter Date</option>
                                                {[...Array(31)].map((_, index) => (
                                                    <option
                                                        key={index}
                                                        value={String(index + 1).padStart(2, "0")}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="bg-[#dbdbdb] w-full rounded-md">
                                        <div className=" w-full flex h-[40px] px-4 items-center">
                                            <select
                                                onChange={(e) => setMonth(e.target.value)}
                                                className="w-full outline-none bg-[#dbdbdb]"
                                                value={month}
                                            >
                                                <option value={""} >Enter Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month.value}>
                                                        {month.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Phone Number
                                </label>
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
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
                                    disabled={true}
                                    value={email}
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
                                <CountryDropdown
                                    classes="outline-none mb-4 h-[40px] px-4 rounded-[4px] cursor-pointer bg-[#dbdbdb] drop"
                                    value={country}
                                    onChange={(val) => setCountry(val)}
                                />
                            </div>
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    State
                                </label>
                                <input
                                    onChange={(e) => setCountryState(e.target.value)}
                                    disabled={true}
                                    value={countryState}
                                    placeholder="Enter Email Address "
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
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
                            Old Password
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
                                        placeholder="Old Password"
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
                        <label className="mb-1 font-[500] text-[#0c0c0c]">
                            New Password
                        </label>
                        <div className=" rounded-[8px] mt-1 ">
                            <div className="bg-[#dbdbdb] rounded-md ">
                                <div className=" flex px-4 h-[56px] relative gap-x-3 items-center">
                                    <input
                                        onChange={(e) => setPasswordNew(e.target.value)}
                                        type={showNewPassword ? "text" : "password"}
                                        id="password"
                                        className="bg-transparent text-[#2d2d2d] pash outline-none w-full"
                                        value={passwordNew}
                                        placeholder="New Password"
                                    />
                                    <div role='button' onClick={() => setShowNewPassword((prev) => !prev)} className=' absolute px-2 z-10 right-0 h-full flex justify-center items-center ' >
                                        {showNewPassword ? (
                                            <IoIosEye size={"25px"} />
                                        ) : (
                                            <IoIosEyeOff size={"25px"} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleSubmitPassword}
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

                        {/* <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Owner Names
                                </label>
                                <input
                                    onChange={(e) => setDetail({ ...detail, owner: e.target.value })}
                                    value={withDrawDetail?.owner}
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div> */}

                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Bank Name
                                </label>
                                <input
                                    onChange={(e) => setDetail({ ...detail, bank_name: e.target.value })}
                                    value={withDrawDetail?.owner}
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <div className=' w-full flex lg:flex-row flex-col gap-4 ' >
                            <div className=" w-full flex flex-col ">
                                <label className="mb-1 font-[500] text-[#0c0c0c]">
                                    Account Number
                                </label>
                                <input
                                    onChange={(e) => setDetail({ ...detail, account_number: e.target.value })}
                                    value={withDrawDetail?.owner}
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
                                    onChange={(e) => setDetail({ ...detail, usdt_address: e.target.value })}
                                    value={withDrawDetail?.owner}
                                    className="bg-[#dbdbdb] mb-4 h-[40px] px-4 rounded-[4px] outline-none"
                                />
                            </div>
                        </div>
                        <button
                            disabled={true}
                            className=" w-max font-[500] px-10 bg-[#3FAAE0] text-white p-3  rounded-[8px] disabled:opacity-50 flex items-center justify-center"
                        > Save Changes
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className=' w-full fixed inset-0 bg-black bg-opacity-30 z-[10000] lg:px-0 px-4 flex justify-center items-center ' >
                    <div className=' relative z-20 w-full rounded-xl max-w-[400px] h-fit bg-white ' >
                        <SuccessModal tab={tab} setTab={setTab} close={setOpen} />
                    </div>
                </div>
            )}

        </section>
    )
}
