import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';


const Login = () => {
    return (
<div className="flex h-screen bg-darkblue"> 
        {/* //bg-darkblue is not working here */}
            <div className="w-1/2 flex justify-center">

                <img
                    src="Images/login.png"
                    alt="login"
                    className="h-96 object-cover my-auto"
                />
            </div>
            <div className="w-1/2 flex items-center justify-left pl-20">
                <form className="w-96 p-8 bg-white rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
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
                        <button className="bg-button ">
                            Login
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
    );
};

export default Login;
