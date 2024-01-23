import React, { useState } from "react";
import { FiBell } from "react-icons/fi"; // Import notification bell icon
import { FaSearch } from "react-icons/fa"; // Import the search icon
import ChatSnippet from "./ChatSnippet";
import NoProfile from "../../assets/images/message/groupiconwhite.png";
import SchoolLogo from "../../assets/images/message/Linkbkj.png"; // Replace with the path to your school logo
import ProfilePicture from "../../assets/images/message/profile.png"; // Replace with the path to your profile picture
import NavigationPanel from "./NavigationPanel";
import { IoIosSend } from "react-icons/io";

const messageBoard = () => {
  const chatList = [
    {
      profileImage: null,
      name: "John Doe",
      Designation: "Student",
    },
    {
      profileImage: null,
      name: "Jane Smith",
      Designation: "Alumni",
    },
    {
      profileImage: null,
      name: "Ajax",
      Designation: "Student",
    },
    {
      profileImage: null,
      name: "Joeline",
      Designation: "Faculty",
    },
    {
      profileImage: null,
      name: "Nadira Sam",
      Designation: "Faculty",
    },
    {
      profileImage: null,
      name: "Hagrid Hash",
      Designation: "Alumni",
    },
    // Add more chat data as needed
  ];

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [clickMessage, setclickMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };
  const handleChatClick = (clickedName) => {
    setclickMessage(clickedName);
  };
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div
        style={{ backgroundColor: "rgb(22, 53, 96)" }}
        className="p-3 flex items-center justify-between"
      >
        <div className="flex items-center bg-white">
          <img
            src={SchoolLogo}
            alt="School Logo"
            style={{ width: "250px", height: "64px" }}
          />
        </div>
        <div className="flex items-center">
          <FiBell className="text-white mr-4 cursor-pointer" />
          <div className="flex items-center">
            <div className="overflow-hidden">
              <img
                src={ProfilePicture}
                alt="Profile"
                className="h-12 w-30 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Left Navigation Panel */}
        <div
          style={{ width: "350px" }}
          className="p-4 border-r flex flex-col items-center"
        >
          <NavigationPanel />
        </div>

        {/* Chat Snippet */}
        <div
          style={{ width: "500px" }}
          className="border-r p-4 overflow-y-scroll"
        >
          <div className="h-10 mb-2">
            <h2 style={{ color: "#3A3285" }} className="text-xl font-bold mb-1">
              Message
            </h2>
          </div>
          <div className="relative mb-2">
            <div className="flex items-center">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none bg-gray-100"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
              />
              <button
                style={{ color: "#778CAB" }}
                className="absolute right-1 bg-gray-100"
              >
                <FaSearch />
              </button>
            </div>
          </div>
          <div>
            {chatList.map((chat, index) => (
              <ChatSnippet
                key={index}
                profileImage={chat.profileImage}
                name={chat.name}
                designation={chat.Designation}
                onClick={handleChatClick}
              />
            ))}
          </div>
        </div>

        {/* Chat Panel */}
        <div className="w-3/4 flex flex-col">
          <div style={{ backgroundColor: "#204C89" }} className="h-16 flex">
            <img src={NoProfile} className="w-14 h-12 ml-6 mt-2"></img>
            <h2 className="text-white ml-4 mt-5">{clickMessage}</h2>
          </div>
          <div className="p-4 flex-1 overflow-y-scroll">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === "me" ? "text-right" : "text-left"
                }`}
              >
                <span
                  style={{ backgroundColor: "rgb(22, 53, 96)" }}
                  className={`inline-block p-2 bg-blue-500 rounded-lg text-white`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex p-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-l-md"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 p-2 rounded-md text-white"
            >
              <IoIosSend className="text-white mr-2 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default messageBoard;
