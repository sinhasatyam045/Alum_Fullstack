import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScreenTwo = () => {
    const Navigate = useNavigate();
    const handleNextClick = () => {
        Navigate('/login');
    }
    const handleSkipClick =  () => {
        Navigate('/login');
    }
    return (
        <div className='w-full bg-[#1f2e44]'>
            <div className='flex h-screen w-4/5 justify-center  items-center gap-12 mx-auto'>
                <div className='w-1/2'><img src="Images/onboarding/group.png" alt="" /></div>
                <div className='w-1/2 flex flex-row justify-center items-center'>
                    <div>
                        <h2 className='w-2/3 mx-auto text-center text-xl font-semibold text-gray-200'>Unlock the full potential of your school memories. Join AlumUnity, where the past meets the present, and connections last a lifetime</h2>
                        <div className='flex w-full p-2 m-6 gap-12 justify-center'>
                            <button
                            className=''
                            onClick={handleSkipClick}>Skip</button>
                            <button
                            onClick={handleNextClick}>Next</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ScreenTwo;
