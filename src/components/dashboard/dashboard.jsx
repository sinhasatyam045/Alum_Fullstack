import React from 'react';
import Post from '../helper/post';

const Dashboard = () => {
    return (
        <div className='overflow-hidden'>
            <div className="w-full flex justify-between">
                {/* Profile Section */}
                <div className="w-1/5 h-screen bg-indigo-200 p-4 flex flex-col items-center pt-20">
                    <div className="mb-4">
                        <img
                            src="Images/profile.jpg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-2 border-white"
                        />
                    </div>
                    <div className="text-blue-900 text-center">
                        <h2 className="font-bold text-lg">John Doe</h2>
                        <p>Pragyan's Alumini</p>
                    </div>
                    {/* Navigation Menu */}
                    <div className="mt-4 w-4/5">
                        <ul className="text-white space-y-2">
                            <li>
                                <button className="w-full bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-xl focus:outline-none">
                                    Notifications
                                </button>
                            </li>
                            <li>
                                <button className="w-full bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-xl focus:outline-none">
                                    Messages
                                </button>
                            </li>
                            <li>
                                <button className="w-full bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-xl focus:outline-none">
                                    Updates
                                </button>
                            </li>
                            <li>
                                <button className="w-full bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-xl focus:outline-none">
                                    Saved
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Posts Section */}
                <div className="w-3/5 h-screen bg-gray-200 p-4 overflow-y-auto">
                    {/* Example Post */}
                    <div className='w-4/5 mx-auto border overflow-y '>
                        <Post
                            username="John Doe"
                            avatar="Images/profile.jpg"
                            images={[
                                "Images/profile.jpg",

                                // Add more image URLs as needed
                            ]}
                            likes={10}
                            comments={5}
                        />

                        <Post
                            username="John Doe"
                            avatar="Images/profile.jpg"
                            images={[
                                "Images/profile.jpg",

                                // Add more image URLs as needed
                            ]}
                            likes={10}
                            comments={5}
                        />
                        <Post
                        username="John Doe"
                        avatar="Images/profile.jpg"
                        images={[
                            "Images/profile.jpg",
                           
                            // Add more image URLs as needed
                        ]}
                        likes={10}
                        comments={5}
                    />
                    </div>


                    {/* Add more posts as needed */}
                </div>

                {/* Spotlights Section */}
                <div className="w-1/5 h-screen bg-indigo-200 p-4">
                    <div className='w-4/5  mx-auto'>
                        <div className="mb-4">
                            <h2 className="text-blue-900 font-bold text-xl pt-20">Spotlights</h2>
                        </div>
                        {/* Styled Bullet Points for Important Notices */}
                        <ul className="text-blue-900 list-disc pl-4 space-y-2">
                            <li className="flex items-center">
                                <span className="bg-yellow-500 rounded-full h-3 w-3 mr-2"></span>
                                Important notice 1
                            </li>
                            <li className="flex items-center">
                                <span className="bg-yellow-500 rounded-full h-3 w-3 mr-2"></span>
                                Important notice 2
                            </li>
                            <li className="flex items-center">
                                <span className="bg-yellow-500 rounded-full h-3 w-3 mr-2"></span>
                                Important notice 3
                            </li>
                            {/* Add more styled bullet points as needed */}
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
