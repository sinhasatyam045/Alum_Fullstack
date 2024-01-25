import React from 'react'
import { useState } from 'react'

// Important info for Backend Devs :

// The handling between Faculty, Student or Alumni Login is decided by the variable activeUser

// activeUser = 1 : Student Login
// activeUser = 2 : Faculty Login
// activeUser = 3 : Alumni Login

const TripleLogin = () => {
    const [activeUser, setactiveUser] = useState(1)  //default set to Student
    const [imageOpacity, setImageOpacity] = useState(100)

    const handleButtonClick = (buttonNumber) => {
        setactiveUser(buttonNumber)
        setImageOpacity(0)
        setTimeout(() => setImageOpacity(1), 100)
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex items-center justify-center w-full h-5/6 bg-indigo-100">
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
                        />
                    )}
                </div>

                <div className="bg-white w-5/6 h-5/6  shadow-xl rounded-3xl p-10 m-10 flex flex-col items-center">
                    <div className="bg-blue-100 rounded-3xl w-1/2 flex justify-center relative">
                        {/* Sliding Button */}
                        <button
                            className="  absolute left-0 top-0 w-1/3"
                            style={{
                                borderRadius: '999px',
                                padding: '13px',
                                marginLeft:
                                    activeUser === 1
                                        ? '0'
                                        : activeUser === 2
                                        ? '33%'
                                        : '66%',
                                transition: 'all 0.3s ease-in-out',
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
                                padding: 13,
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
                                padding: 13,
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
                    <div>Alumni Login</div>
                    <div>email-password</div>
                    <div>or continue with</div>
                    <div>google facebook</div>
                </div>
            </div>
        </div>
    )
}

export default TripleLogin
