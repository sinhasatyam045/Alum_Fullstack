import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../helper/navbar';

const ScreenOne = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/onboarding2');
    }
    return (
        <>
        <div className='h-screen overflow-hidden'>
        <Navbar />
         <div className='w-full h-screen text-gray-100 bg-[#1f2e44] overflow-hidden'>
           
            <div className='flex flex-row gap-4 justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <img src="Images/LoginImages/StudentImage.png" alt="" srcset="" />

                </div>
                <div className='h-screen flex flex-col justify-between py-3 items-center'>
                    <div className='my-auto flex flex-col gap-12 items-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-bold p-3'>AlumnUnity</h1>
                            <p className='text-gray-500'>Connecting the School community</p>
                        </div>
                        <div><img src="Images/logoHome.png" alt="" /></div>
                        <div className='flex flex-col justify-center items-center' >
                            <h3 className='font-semibold text-xl text-center p-4'>Let's get Started</h3>
                            <button
                            className='bg-indigo-900'
                            onClick={handleStartClick}
                            >Start</button>
                        </div>

                    </div>

                </div>
                <div>
                    <img src="Images/LoginImages/AlumniImage.png" alt="" />
                </div>
            </div>

        </div>

        </div>
        
        </>
       

    );
};

export default ScreenOne;
