import React from 'react';
import { useNavigate } from 'react-router-dom';


const ScreenThree = () => {
    const Navigate = useNavigate();
    const handleNextClick = () => {
        Navigate('/login');
    }
    const handleSkipClick =  () => {
        Navigate('/login');
    }
    return (
        <div className='bg-[#1f2e44] h-screen overflow-hidden'>
            <div className='flex flex-col gap-4 w-3/5 mx-auto items-center justify-center p-8'>
                <h2 className='text-gray-200 font-bold text-4xl'>
                    Showcase your Journey
                </h2>
                <img src="Images/onboarding/path.png" alt="" />
                <h3 className='text-gray-300 font-semibold text-lg'>
                    Average student to IIT topper
                </h3>
                <div className='flex w-full p-2 m-6 gap-12 justify-center'>
                    <button
                        className=''
                        onClick={handleSkipClick}>Skip</button>
                    <button
                        onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ScreenThree;
