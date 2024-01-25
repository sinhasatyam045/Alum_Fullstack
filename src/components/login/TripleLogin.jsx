import React from 'react'
import { useState } from 'react'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
// Important info for Backend Devs :

// The handling between Faculty, Student or Alumni Login is decided by the variable activeUser

// activeUser = 1 : Student Login
// activeUser = 2 : Faculty Login
// activeUser = 3 : Alumni Login

const TripleLogin = () => {
    const [activeUser, setactiveUser] = useState(1) //default set to Student
    const [imageOpacity, setImageOpacity] = useState(100)
    const navigate = useNavigate();

    const handleButtonClick = (buttonNumber) => {
        setactiveUser(buttonNumber)
        setImageOpacity(0)
        setTimeout(() => setImageOpacity(1), 100)
    }

    const handleLoginClick = () => {
        navigate('/dashboard');
    }

    return (
        <>
         <div className="w-full h-full flex justify-center items-center">
            <div className="flex  items-center justify-center w-full h-screen bg-indigo-100">
                <div className="flex items-center align-center p-10 m-10">
                    {activeUser === 1 && (
                        <img
                            src="/Images/LoginImages/StudentImage.png"
                            alt="Alumni Image"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                opacity: imageOpacity,
                                transition: 'opacity 0.2s ease-in-out',
                            }}
                            className='w-96'
                        />
                    )}
                    {activeUser === 2 && (
                        <img
                            src="/Images/LoginImages/FacultyImage.png"
                            alt="Alumni Image"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                opacity: imageOpacity,
                                transition: 'opacity 0.2s ease-in-out',
                            }}
                            className='w-96'
                        />
                    )}
                    {activeUser === 3 && (
                        <img
                            src="/Images/LoginImages/AlumniImage.png"
                            alt="Alumni Image"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                opacity: imageOpacity,
                                transition: 'opacity 0.2s ease-in-out',
                            }}
                            className='w-96'
                        />
                    )}
                </div>

                <div className="bg-white w-1/3 shadow-xl rounded-3xl p-7 m-10 flex flex-col items-center">

                    {/* sliding Button */}
                    <div className="bg-blue-100 rounded-full w-5/6 flex justify-center relative">
                        {/* Sliding Button */}
                        <button
                            className="  absolute left-0 top-0 w-1/3"
                            style={{
                                borderRadius: '999px',
                                padding: 20,
                                marginLeft:
                                    activeUser === 1
                                        ? '0'
                                        : activeUser === 2
                                            ? '33%'
                                            : '67%',
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: '0 0 20px rgba(30, 58, 138, 0.7)',
                                ':hover': {
                                    backgroundColor: '#1e3a8a',
                                },

                            }}
                        >
                            <p className="font-extrabold">
                                {activeUser === 1
                                    ? 'STUDENT'
                                    : activeUser === 2
                                        ? 'FACULTY'
                                        : 'ALUMNI'}
                            </p>
                        </button>

                        {/* Student Button */}
                        <button
                            onClick={() => handleButtonClick(1)}
                            style={{
                                backgroundColor: '#dbeafe',
                                border: 'none',
                                borderRadius: '999px',
                                cursor: 'pointer',
                                padding: 20,
                                transition: 'all 0.2s ease-in-out',
                                color:
                                    activeUser !== 1
                                        ? 'black'
                                        : 'rgba(0, 0, 0, 0)',
                                ':hover': {
                                    backgroundColor: '#a0b9d9',
                                },
                            }}
                            className="w-1/3 font-extrabold"
                        >
                            STUDENT
                        </button>

                        {/* Faculty Button */}
                        <button
                            onClick={() => handleButtonClick(2)}
                            style={{
                                backgroundColor: '#dbeafe',
                                border: 'none',
                                borderRadius: '999px',
                                cursor: 'pointer',
                                padding: 20,
                                transition: 'all 0.2s ease-in-out',
                                color:
                                    activeUser !== 2
                                        ? 'black'
                                        : 'rgba(0, 0, 0, 0)',
                                ':hover': {
                                    backgroundColor: '#a0b9d9',
                                },
                            }}
                            className="w-1/3 font-extrabold"
                        >
                            FACULTY
                        </button>

                        {/* Alumni Button */}
                        <button
                            onClick={() => handleButtonClick(3)}
                            style={{
                                backgroundColor: '#dbeafe',
                                border: 'none',
                                borderRadius: '999px',
                                cursor: 'pointer',
                                padding: 13,
                                transition: 'all 0.2s ease-in-out',
                                color:
                                    activeUser !== 3
                                        ? 'black'
                                        : 'rgba(0, 0, 0, 0)',
                                ':hover': {
                                    backgroundColor: '#a0b9d9',
                                },
                            }}
                            className="w-1/3 font-extrabold"
                        >
                            ALUMNI
                        </button>
                    </div>

                    {/* Input Fields */}
                    <div className="w-4/6 mt-4 flex flex-col p-3 text-blue-900 -m-3">
                        <p className="font-bold text-lg p-2">Email</p>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value="Email Address"
                            className="px-4 py-2 border border-slate-500 text-blue-900 font-semibold shadow-sm rounded-full "
                        />
                        <p className="font-bold text-lg p-2">Password</p>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value="Password"
                            className="px-4 py-2 border border-slate-500 text-blue-900 font-semibold shadow-sm rounded-full "
                        />
                        <button
                            style={{
                                boxShadow: '0 0 10px rgba(30, 58, 138, 0.7)',
                            }}
                            className=" text-lg font-bold w-1/3 text-white py-4 p-2 mb-8 rounded-full mx-auto my-4 hover:bg-blue-800 transition-all duration-200 ease-in-out"
                            onClick={handleLoginClick}
                        >
                            LOGIN
                        </button>
                    </div>

                    {/* Continue Divider */}

                    <div className="w-1/2 flex flex-row items-center">
                        <div className="w-1/3 bg-blue-900 h-0.5 scale-y-50"></div>
                        <div className="w-1/2 text-sm font-medium text-center text-blue-900">
                            or continue with
                        </div>
                        <div className="w-1/3 bg-blue-900 h-0.5 scale-y-50"></div>
                    </div>
                    {/* Social buttons */}
                    <div className="flex w-1/2 mt-5 -mb-5 ">
                        <button
                            style={{
                                boxShadow: '0 0 10px rgba(30, 58, 138, 0.7)',
                            }}
                            className=" text-lg font-bold w-1/4 text-white p-2 rounded-full mx-auto my-4 hover:bg-blue-800 transition-all duration-200 ease-in-out"
                        >
                            <FaGoogle size={22} className="mx-auto m-2" />
                        </button>
                        <button
                            style={{
                                boxShadow: '0 0 10px rgba(30, 58, 138, 0.7)',
                            }}
                            className=" text-lg font-bold w-1/4 text-white p-2 rounded-full mx-auto my-4 hover:bg-blue-800 transition-all duration-200 ease-in-out"
                        >
                            <FaFacebook size={22} className="mx-auto" />
                        </button>
                        <button
                            style={{
                                boxShadow: '0 0 10px rgba(30, 58, 138, 0.7)',
                            }}
                            className=" text-lg font-bold w-1/4 text-white p-2 rounded-full mx-auto my-4 hover:bg-blue-800 transition-all duration-200 ease-in-out"
                        >
                            <FaTwitter size={22} className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    )
}

export default TripleLogin
