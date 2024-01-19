import React from 'react';

const Post = ({ username, avatar, images, likes, comments }) => {
    return (
        <div className="bg-white p-4 mb-4 rounded-2xl shadow">
            {/* Post Header */}
            <div className="flex items-center mb-3">
                <img src={avatar} alt={`${username}'s avatar`} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                    <p className="text-gray-800 font-bold">{username}</p>
                    <p className="text-gray-600">Posted 3 hours ago</p>
                </div>
            </div>

            {/* Post Images */}
            <div className="mb-4">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Post ${index + 1}`} className="w-full h-64 object-cover mb-2 rounded" />
                ))}
            </div>

            {/* Post Actions (Likes and Comments) */}
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <button className="flex items-center text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                        Like
                    </button>
                    <button className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-1 2-1-2M19 9a7 7 0 0 0-14 0h0a7 7 0 0 0 1.542 4.568A7.002 7.002 0 0 0 12 21a7.002 7.002 0 0 0 5.458-2.632A7 7 0 0 0 19 9z"></path>
                        </svg>
                        Comment
                    </button>
                </div>
                <div className="text-gray-600">
                    {likes} Likes - {comments} Comments
                </div>
            </div>
        </div>
    );
};

export default Post;
