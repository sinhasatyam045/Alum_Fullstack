import React, { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi"; // Import notification bell icon
import SchoolLogo from "../../assets/images/message/Schoollogo.png"; // Replace with the path to your school logo
import ProfilePicture from "../../assets/images/message/profile.png"; // Replace with the path to your profile picture
import tick from "../../../public/Images/tick-mark.png";
import cross from "../../../public/Images/remove.png";
import Card from "./card";

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export default function NotificationNew() {
  const userProfile = "Images/profile.jpg";
  const userName = "John Doe";
  const notificationData = [
    {
      id: 1,
      message: "New requests for AlumUnity Account",
      actionButtons: ["View", "DenyImg", "ApproveImg"],
      desc: "Neha(Student)",
      time: "3min",
      notifType: "newReq",
      img1: "",
    },
    {
      id: 2,
      message: "Pending Requests",
      desc: "(20+) requests",
      actionButtons: ["View"],
      time: "1hr 5min",
      notifType: "prMul",
      img1: "Images/tick-mark.png",
    },
    {
      id: 3,
      message: "Likes",
      actionButtons: [""],
      desc: "sanjeev ram and 44 others liked the post",
      notifType: "post",
      time: "2 days",
      img1: "",
    },
    {
      id: 4,
      message: "Pending Requests",
      actionButtons: ["View"],
      desc: "Jack(student)",
      notifType: "prSolo",
      time: "1 month",
      img1: "",
    },
    {
      id: 5,
      message: "New Login",
      actionButtons: ["Change Password"],
      desc: "Samsung s21 Ultra",
      time: "1 month",
      notifType: "newLogin",
      img1: "",
    },
    {
      id: 6,
      message: "Event Request",
      actionButtons: ["View"],
      desc: "From Eten Hunt for Holi Celebration",
      time: "2 months",
      notifType: "eventReq",
      img1: "",
    },
    {
      id: 7,
      message: "New Requests",
      actionButtons: ["Approve", "Deny"],
      desc: "Nancy(Alumini)",
      time: "3 months",
      notifType: "newReq",
      img1: "",
    },
    {
      id: 8,
      message: "Pending Requests",
      desc: "(10+) requests",
      actionButtons: ["View"],
      time: "3 months",
      notifType: "prMul",
      img1: "Images/tick-mark.png",
    },
    {
      id: 9,
      message: "Likes",
      actionButtons: [""],
      desc: "Eten Hunt and 44 others liked the post",
      notifType: "post",
      time: "4 months",
      img1: "",
    },
    {
      id: 10,
      message: "Pending Requests",
      actionButtons: ["View"],
      desc: "Jack(student)",
      notifType: "prSolo",
      time: "4 months",
      img1: "",
    },
    {
      id: 11,
      message: "New requests for AlumUnity Account",
      actionButtons: ["View", "DenyImg", "ApproveImg"],
      desc: "Rahul(Parent)",
      time: "4 months",
      notifType: "newReq",
      img1: "",
    },
  ];

  const handleAction = (id, action) => {
    // Implement logic for handling the action for the given notification id
    console.log(`Notification ID ${id} - Action: ${action}`);
  };

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="dark:bg-[#1e3242] m-0 p-0 absolute top-0 left-0 w-[100%] bg-stone-100 text-black">
      <div className="rounded-lg p-4 mx-auto">
        <button onClick={() => darkModeHandler()}>
          {dark && <IoSunny />}
          {!dark && <IoMoon />}
        </button>
      </div>
      <div className="h-[100%] w-[50%] m-auto">
        <div className="h-[100px]  w-[100%] m-auto items-center flex mt-6 pl-5 mb-8 text-3xl rounded-xl text-black back bg-white">
          Notifications
        </div>
        <div className="">
          {/* <Card value={userProfile} />
          <Card value={userProfile} /> */}
          {notificationData.map((notification) => (
            <Card
              value={userProfile}
              key={notification.id}
              message={notification.message}
              actionButtons={notification.actionButtons}
              desc={notification.desc}
              time={notification.time}
              notifType={notification.notifType}
              img1={notification.img1}
              handleAction={() =>
                handleAction(notification.id, notification.actionButtons[0])
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
