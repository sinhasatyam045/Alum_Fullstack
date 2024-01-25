import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
            {/* Custom Colours not working, some setup has been made. bg-[#BCCBE1] Doesnt work */}
            <div className="flex flex-row bg-black p-10 w-4/5 h-5/6 rounded-2xl text-white">
                <div className="h-[80%] w-1/3 p-4 flex flex-col items-center justify-center">
                    <img
                        src="/Images/LoginImages/Img1.png"
                        alt="Img1"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            width: 'auto',
                            height: 'auto',
                        }}
                    />
                    <img
                        src="/Images/LoginImages/Img2.png"
                        alt="Img2"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            width: 'auto',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="h-[80%] w-1/3 border-white mt-10">
                    <h2 className="text-3xl font-bold mb-4 text-center">
                        LOGIN
                    </h2>

                    {/* Buttons in Column Form */}
                    <div className="flex flex-col space-y-6 mt-10">
                        <button
                            className=" text-lg text-white py-4 px-4 rounded-full"
                        >
                            Alumni
                        </button>
                        <button className=" text-lg text-white py-4 px-4 rounded-full">
                            Faculty
                        </button>
                        <button className=" text-lg text-white py-4 px-4 rounded-full">
                            Student
                        </button>
                    </div>

                    <div className="flex flex-row items-center mt-12 p-2">
                        <div className="w-1/4 bg-indigo-100 h-0.5 scale-y-50"></div>
                        <div className="w-1/2 text-xs text-center">
                            No account ? Register Now !
                        </div>
                        <div className="w-1/4 bg-indigo-100 h-0.5 scale-y-50"></div>
                    </div>

                    {/* Footer with Another Button */}
                    <div className="flex flex-col space-y-10 mt-4 items-center">
                        <button className=" text-lg font-bold w-1/2 bg-yellow-400 text-blue-900 py-4 px-4 rounded-full">
                            REGISTER
                        </button>
                    </div>
                </div>
                <div className="h-[80%] w-1/3 p-4 flex flex-col items-center justify-center">
                    <img
                        src="/Images/LoginImages/Img3.png"
                        alt="Img3"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            width: 'auto',
                            height: 'auto',
                        }}
                    />
                    <img
                        src="/Images/LoginImages/Img4.png"
                        alt="Img4"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            width: 'auto',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
