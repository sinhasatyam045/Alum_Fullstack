import React from "react";
import Mode_btn from "./mode_btn";
import handleAdminClick from "../dashboard/dashboard";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  // bg-[#F8F9FA]
  const aboveNavBarListClass = "flex p-1  text-indio-900 hover:text-indigo-500 cursor-pointer border-r-2"
  const lowerNavBarListClass = "flex px-2 text-indio-900 hover:text-indigo-500 cursor-pointer"
  return (
    <header className="bg-transparent  mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-white text-lg font-bold">
          <img className="" src="Images/logo.png" alt="" />
        </div>
        <div>
          
        <nav>
          <ul className="flex text-[0.6rem] justify-end">
                <li className={aboveNavBarListClass}
                onClick={()=>{navigate("/")}}
                // TODO Replace with the required path 
                >
                  <img className="px-1" src="./src/assets/svgs/college_graduation.svg"></img>
                  <p className="p-1"> ADMISSION FORM</p>
                </li>
                <li className={aboveNavBarListClass}
                onClick={()=>{navigate("/")}}
                 // TODO Replace with the required path 
                >
                  <img className="px-1" src="./src/assets/svgs/phone.svg"></img>
                  <p className="p-1"> CONTACT US</p>
                </li>
                <li className={aboveNavBarListClass}
                onClick={()=>{navigate("/")}}
                 // TODO Replace with the required path 
                >
                  <img className="px-1" src="./src/assets/svgs/people_2.svg"></img>
                  <p className="p-1"> PARENT'S LOGIN</p>
                </li>
                <li className={aboveNavBarListClass}
                onClick={()=>{navigate("/")}}
                 // TODO Replace with the required path 
                >
                  <img className="px-1" src="./src/assets/svgs/people_2.svg"></img>
                  <p className="p-1">ADMIN LOGIN</p>
                </li>
                <li className={aboveNavBarListClass}
                onClick={()=>{navigate("/")}}
                 // TODO Replace with the required path 
                >
                  <img className="px-1" src="./src/assets/svgs/suitcase.svg"></img>
                  <p className="p-1">CAREERS</p>
                </li>
                <li className={aboveNavBarListClass}
                onClick={()=>{navigate("/")}}
                >
                  <img className="px-1" src="./src/assets/svgs/assignment.svg"></img>
                  <p className="p-1">MANDATORY PUBLIC DISCLOSURE</p>
                </li>
                
                {/* <li className="font-semibold px-2 text-indio-900  cursor-pointer flex align-center">
                  <Mode_btn />
                </li> */}
              </ul>
            </nav>
          
        <nav className="pt-2">
          <ul className="flex space-x-4 items-center">
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> About Us</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> Campus</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> Academics</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> Co-Curricular</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> School Life</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> Admission</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> News & Updates</p>
          </li>
          <li className={lowerNavBarListClass}
            onClick={()=>{navigate("/")}}
             // TODO Replace with the required path 
            >
            <p className="p-1"> AlumUnity</p>
          </li>
            {/* <li className="font-semibold px-2 text-indio-900  cursor-pointer flex align-center">
              <Mode_btn />
            </li> */}
          </ul>
        </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
