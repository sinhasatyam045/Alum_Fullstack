import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

const Post = ({
  username,
  avatar,
  images,
  likes,
  comments,
  postText,
  postId,
}) => {
  function handleComment(e, postId) {
    const obj = {
      postId,
      action: "Comment",
    };
    console.log(obj);
  }
  function handleLike(e, postId) {
    const obj = {
      postId,
      action: "Like",
    };
    console.log(obj);
  }

  return (
    <div className="bg-lightgray p-4 mb-4 rounded-2xl shadow-xl">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className="w-10 h-10 rounded-full border-2 border-black object-cover mr-3"
          />
          <div>
            <p className="text-gray-800 font-bold text-sm md:text-base">
              {username}
            </p>
            <p className="text-gray-600 text-xs md:text-base max-w-20 md:max-w-full">
              Posted 3 hours ago
            </p>
          </div>
        </div>
        <button className="bg-gray py-0 px-2 md:px-3 rounded-2xl text-xs md:text-base text-followBtn">
          + Follow
        </button>
      </div>

      {/*  Post Text */}

      <div className="my-4">{postText}</div>

      {/* Post Images */}
      <div className="mb-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Post ${index + 1}`}
            className="w-full h-64 object-cover mb-2 rounded"
          />
        ))}
      </div>

      {/* Post Actions (Likes and Comments) */}
      <div className="">
        <div className="flex items-center w-full justify-between space-x-4">
          <p
            className="pl-5 flex items-center gap-1"
            onClick={(e) => handleLike(e, postId)}
          >
            <FaRegThumbsUp className="text-commentblue " />
            {likes}
          </p>

          {/* <button
            className="flex items-center text-gray-100"
            onClick={(e) => handleComment(e, postId)}
          >
            💬 Comment
          </button> */}
          <p className="pr-2">
            <FiSend className="text-xl" />
          </p>
        </div>
        <div>
          <div className="flex items-center pr-6 pl-2 py-2 mx-auto">
            <img
              src="Images/profile.jpg"
              alt={` avatar`}
              className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-black"
            />
            <input
              type="text"
              // value={newPostText}
              // onChange={(e) => handleInputTextChange(e)}
              className="md:p-3 p-2 rounded-3xl md:w-full text-xs md:text-base w-11/12 font-semibold placeholder:text-black bg-gray"
              placeholder="Add a comment..."
            ></input>
          </div>
          <p className="text-commentblue pl-2">View All comments</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
