import React from 'react'
import tick from './bluecheckmark.png';
import ellipse1 from './ellipse1.png';
import ellipse2 from './ellipse2.png';
import businessman from './businessman.png';
import person from './person.png';

const approval_page = () => {
  return (
    <>
    <div className='w-full h-16 bg-blue-900'></div>
    <div className='static'>
      <img src={ellipse1} style={{height: "500px"}} className='absolute top-15 right-0'/>
      <img src={ellipse2} style={{height: "350px"}} className='absolute bottom-0 right-0'/>
      <img src={businessman} style={{height: "350px"}} className='absolute top-28 right-12'/>



    </div>  
    <div className='px-24 pt-16'>

    
    <div className='text-6xl text-gray-500 pb-6'>Approval Page</div>
    <div className='text-4xl text-blue-900 '>Alumni</div>
    
    <div className='h-0.5 w-28 bg-black mb-10'></div>
    <div className='flex justify-start'>
      <div className='text-2xl pr-40 pt-12'>
        <div className='py-2'>Name: Navin Sharma</div>
        <div className='py-2'>User Name: navinsharma30</div>
        <div className='py-2'>Registration number: 21E0880</div>
      </div>
      <div className='pb-20 pl-32'>
        <img src={person} className='max-h-44 '/>
      </div>
    </div>
    </div>
    <div className='flex justify-center'>
      <div className='px-28'>
      <button className=' px-20 bg-green-700 py-5 text-2xl'>Approve</button>
      </div>
      <div className='px-28'>
      <button className='px-24 bg-red-700 py-5 text-2xl'>Deny</button>
      </div>
    </div>
    <div className='flex justify-center pt-14'>
    
      <img src={tick} alt='tickmark' className='h-10 w-24'/>
      <img src={tick} alt='tickmark' className='h-10 w-24'/>
      <img src={tick} alt='tickmark' className='h-10 w-24'/>
    
    </div>
    </>
  )
}

export default approval_page

