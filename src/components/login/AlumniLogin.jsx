import React from 'react';
import Navbar from '../helper/navbar';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import alumni from '../../assets/alumni.json'

import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic
        // For now, just navigate to the dashboard
        navigate('/dashboard');
    };

    const handleSignup = () => {
        // Perform signup logic
        // For now, just navigate to the dashboard
        navigate('/dashboard');
    };
    return (
        <div>
            <Navbar />
            <div className="flex h-screen bg-indigo-200">
                {/* //bg-darkblue is not working here */}
                <div className="w-1/2 flex justify-end">

                    <Lottie animationData={alumni} />
                </div>
                <div className="w-1/2 flex items-center justify-center ">
                    <form className="w-96 p-8 bg-white rounded-xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 text-center">Alumni Login</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button className="bg-button mx-2 "
                                onClick={handleSignup}
                            >
                                Log In
                            </button>
                            <button className="bg-button mx-2 "
                                onClick={handleSignup}>
                                Sign Up
                            </button>
                        </div>

                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t" />
                            <span className="mx-4 text-gray-500">or</span>
                            <hr className="flex-grow border-t" />
                        </div>

                        <div className="flex justify-center space-x-2">
                            <button className="bg-button  ">
                                <FaFacebook size={16} />
                            </button>
                            <button className="bg-button  ">
                                <FaGoogle size={16} />
                            </button>
                            <button className="bg-button ">
                                <FaTwitter size={16} />
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );
};

export default Login;
