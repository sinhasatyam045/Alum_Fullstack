import React from "react";
import Mode_btn from "./mode_btn";
import handleAdminClick from "../dashboard/dashboard";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-transparent  py-4  mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <img src="Images/logo.png" alt="" />
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li className="font-semibold px-2 text-indio-900 hover:text-indigo-500 cursor-pointer"
            onClick={()=>{navigate("/dashboard")}}
            >
              Home
            </li>
            <li className="font-semibold px-2 text-indio-900 hover:text-indigo-500 cursor-pointer">
              About
            </li>
            <li className="font-semibold px-2 text-indio-900 hover:text-indigo-500 cursor-pointer"
            onClick={()=>{navigate("/feedback")}}
            >
              Contact
            </li>
            <li className="font-semibold px-2 text-indio-900  cursor-pointer flex align-center">
              <Mode_btn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
