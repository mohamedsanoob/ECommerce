import React, { useState } from "react";
import { BiShowAlt, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageToBase64 } from "../../utils/ImageToBase64";
import toast, { Toaster } from 'react-hot-toast'


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: ''
    })
    console.log(userData)
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleUploadProfile = async (e) => {
        const data = await ImageToBase64(e.target.files[0]);
        setUserData((prev) => {
            return {
                ...prev,
                image: data
            }
        })
        console.log(data);
    }

    console.log(process.env.VITE_SERVER_DOMAIN)
    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const { firstName, email, password, confirmPassword } = userData
        // if (firstName && email && password && confirmPassword) {
        //     if (password === confirmPassword) {
        //         // console.log(userData)
        //         // const fetchUserDetails = await fetch(`${process.env.VITE_SERVER_DOMAIN}/signup`, {
        //         //     method: "POST",
        //         //     headers: {
        //         //         "content-type": "application/json"
        //         //     },
        //         //     body: JSON.stringify(userData)
        //         // })
        //         // const data = await fetchUserDetails.json();
        //         // console.log(data)
        //         alert("success")
        //         // navigate('/login')
        //     } else {
        //         alert('Password is not matching')
        //     }
        // } else {
        //     alert('Please fill the fields')
        // }
    }

    return (
        <>
            <Toaster />
            <div className="p-2 md:p-4">
                <div className="w-full bg-white m-auto max-w-sm flex items-center flex-col p-4">
                    {/* <h1 className="text-2xl font-bold">Sign up</h1> */}
                    <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
                        <img src={userData.image ? userData.image : "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="} alt="user" className="w-full h-full" />
                        <label htmlFor="profileImage">
                            <div className="absolute w-full bg-slate-500 bg-opacity-70 h-1/3 text-center bottom-0 cursor-pointer">
                                <p className="p-1 text-white text-sm">Upload</p>
                            </div>
                            <input type={"file"} accept="image/*" id="profileImage" className="hidden" onChange={handleUploadProfile} />
                        </label>

                    </div>
                    <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="bg-slate-200 mt-1 w-full px-2 py-1 rounded mb-2 focus-within:outline-blue-300"
                            value={userData.firstName}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="bg-slate-200 mt-1 w-full px-2 py-1 rounded mb-2 focus-within:outline-blue-300"
                            value={userData.lastName}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-slate-200 mt-1 w-full px-2 py-1 rounded mb-2 focus-within:outline-blue-300"
                            value={userData.email}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="password">Password</label>
                        <div className="flex bg-slate-200 mt-1 px-2 py-1 rounded mb-2 focus-within:outline focus-within:outline-blue-300">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className=" w-full bg-slate-200 border-none outline-none"
                                value={userData.password}
                                onChange={handleInputChange}
                            />
                            <span
                                className="flex text-xl cursor-pointer"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? <BiShowAlt /> : <BiSolidHide />}
                            </span>
                        </div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="flex bg-slate-200 mt-1 px-2 py-1 rounded mb-2 focus-within:outline focus-within:outline-blue-300">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className=" w-full bg-slate-200 border-none outline-none"
                                value={userData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            <span
                                className="flex text-xl cursor-pointer"
                                onClick={handleShowConfirmPassword}
                            >
                                {showConfirmPassword ? <BiShowAlt /> : <BiSolidHide />}
                            </span>
                        </div>
                        <button className="w-full max-w-[150px] m-auto text-center bg-red-500 hover:bg-red-600 text-white text-xl font-medium rounded-full py-1 mt-4">
                            Sign up
                        </button>
                    </form>
                    <p className="text-sm mt-2">
                        Already have account?{" "}
                        <Link to={"/login"} className="text-red-500 underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
