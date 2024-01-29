import React from 'react'
import NavBar from '../../helper/navbar';


const adminDashboard = () => {
  return (
    <>
    <div className='bg-indigo-100 h-screen'>
        <div className='w-5/6  mx-auto'>
            <div >
                <NavBar></NavBar>
            </div>
            <div className='flex'>

                <div className='text-6xl text-gray-500 font-bold pb-6 pt-2'>
                    Dashboard
                    <div className='flex justify-evenly'>
                        <div className='pt-5 pr-10'><button className=' text-[25px] h-16 rounded-full'>Student</button></div>
                        <div className='pt-5 px-10'><button className='text-[25px] h-16  rounded-full'>Faculty</button></div>
                        <div className='pt-5 pl-10 pr-28'><button className='text-[25px] h-16  rounded-full'>Alumni</button></div>
                    </div>
                    <form>
                        <label>
                            <input className='text-[20px] rounded-full' placeholder='Enter Name' type="text" name="name" />
                        </label>
                    </form>
                </div>   
                <div className=' bg-slate-300 rounded-xl p-6  m-0 text-blue-900 pt-8 font-extrabold'>Queries and Complaints
                    <div>
                        <ul>
                            <li className='text-black py-3 pt-6 font-semibold'> 
                                - Regarding portal technicalities
                            </li>
                            <li className='text-black py-3 font-semibold'>
                               - Annual day delay announcement
                            </li>
                            <li className='text-black py-3 font-semibold'>
                               - Exam dates postponement due to annual day celebrations
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pt-16'>
                <Data
                sno = "1"
                Name ="Navin "
                regNo="21bce3310"
                dateOfRegistration="12/12/12"
                username="abhi"
                />
            </div>
            
        </div>
    </div>

    </>
  )
}

const Data = (props) => {
    return (
      <table>
        <thead>
          <tr>
            <th className='p-3 pr-20 border text-sm text-center font-semibold text-black'>S.No</th>
            <th className='p-3 px-20 border text-sm text-center font-semibold text-black'>Name</th>
            <th className='p-3 px-20 border text-sm text-center font-semibold text-black'>Reg No.</th>
            <th className='p-3 px-20 border text-sm text-center font-semibold text-black'>Date of Registration</th>
            <th className='p-3 px-20 10border text-sm text-center font-semibold text-black'>Username</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td className='p-3 pr-20 border text-sm  text-gray-700 '>{props.sno}</td>
              <td className='p-3 px-20 border text-sm  text-gray-700 '>{props.Name}</td>
              <td className='p-3 px-20 border text-sm  text-gray-700 '>{props.regNo}</td>
              <td className='p-3 px-20 border text-sm  text-gray-700 '>{props.dateOfRegistration}</td>
              <td className='p-3 px-20 border text-sm  text-gray-700 '>{props.username}</td>
            </tr>

            
          
        </tbody>
      </table>
    );
  };

export default adminDashboard
