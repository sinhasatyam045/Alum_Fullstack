import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "../helper/navbar";
import "./profile.css";
import RequestBox from "../helper/requestbox";
import { FaRegEdit } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { BiSolidNavigation } from "react-icons/bi";
import ProfileSection from "./profileSection";
import ActivitiesSection from "./activitiesSection";
import ArticlesSection from "./articlesSection";
import { currentUser } from "./UserData";
import { useNavigate } from "react-router-dom";
const profile = () => {
  const sections = [
    <ProfileSection />,
    <ActivitiesSection />,
    <ArticlesSection />,
  ];
  const [sectionIndex, setSectionIndex] = useState(0);
  const controlBtns = ["Profile", "Activity & interests", "Articles (3)"];
  const navigate = useNavigate();
  return (
    <>
      <section className=" relative profile_page_container min-h-screen">
        {/* Navbar */}
        <section className=" w-full px-16 bg-transparent">
          <Navbar />
        </section>
        {/* Profile Page container */}
        <main className="mx-[3%] my-[1rem] min-h-[80vh]">
          <button
            className="back_btn text-[2rem] p-0 text-black bg-transparent dark:text-white "
            onClick={() => navigate("/dashboard")}
          >
            <IoMdArrowRoundBack />
          </button>
          <div className="page_components h-full flex">
            <section className=" h-full profile_left_section w-[70%] py-[2rem] flex flex-col gap-[3rem] ">
              <div className="bg-img relative">
                <img
                  src={currentUser.coverImg}
                  alt="Cover"
                  width="100%"
                  className="h-[180px]"
                />
                <div className="absolute top-5 right-5 edit-options flex w-fit ml-auto gap-4">
                  <button className="profile-control-options p-2 uppercase rounded bg-[#0D0D0D99] flex justify-between items-center hover:bg-[#0b72da24] ml-auto text-white ">
                    <FaRegEdit />
                    <span className="px-2 pr-6">Edit Profle</span>
                  </button>
                  <button className="profile-control-options p-2 uppercase rounded bg-[#0D0D0D99] flex justify-between items-center hover:bg-[#0b72da24] ml-auto text-white">
                    <SlOptionsVertical />
                  </button>
                </div>
              </div>
              <section className="user-profile-head flex gap-4 items-center px-[1rem] mt-[-2rem]">
                <img
                  src={currentUser.userImg}
                  alt={currentUser.userName}
                  width="170px"
                  height="170px"
                  className="rounded-full border-8 border-black mt-[-4rem] z-10 dark:border-white"
                />
                <div className="user_head_desc flex-1 flex flex-col gap-2 ">
                  <h1 className="flex justify-between items-baseline text-[18px] font-bold">
                    {currentUser.userName}
                    <div className="contact_info flex items-center text-[0.8rem] sm:text-[1rem] sm:px-8 p-2 rounded gap-2">
                      <BiSolidNavigation className="text-[#0B73DA]" />
                      <span>City, country</span>
                    </div>
                  </h1>
                  <p className="texxt-[14px]">{currentUser.userTitle}</p>
                  <div className="user_misc_details flex items-center gap-2 uppercase font-semibold text-center">
                    <div className="contact_info bg-[#0B73DA]  text-[0.8rem] sm:text-[1rem] sm:px-8 p-2 rounded cursor-pointer">
                      Contact Info
                    </div>
                    <div className="contact_info bg-black text-[#0B73DA]  text-[0.8rem] sm:text-[1rem] sm:px-8 p-2 rounded cursor-pointer">
                      {currentUser.connections} Connections
                    </div>
                  </div>
                </div>
              </section>
              <div className="user-head-controls border-[#25252533] border-b-2 flex">
                {controlBtns.map((btn, index) => (
                  <button
                    key={index}
                    className={`p-6 text-center rounded font-bold rounded-b-none flex-1 border-[#25252533] border-r-2 hover:font-bold hover:bg-[#0b72da78] ${
                      sectionIndex == index
                        ? `bg-[#0B73DA]`
                        : `bg-transparent text-black dark:text-white`
                    }`}
                    onClick={() => setSectionIndex(index)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              {sections[sectionIndex]}
            </section>
            <section className="h-full profile_right_section flex-1 md:pl-[1rem]">
              <RequestBox />
            </section>
          </div>
        </main>
      </section>
    </>
  );
};

export default profile;
