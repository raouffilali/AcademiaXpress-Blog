import React from "react";
import { IComment } from "./CommentContainer"; // Import the IComment interface
import { images } from "../../constants";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";

interface CommentProps {
  commentData: IComment; // Declare the type of the prop
  animationDelay?: number; // Declare animationDelay as an optional number prop
  loggedinUserId: string


}

const Comment: React.FC<CommentProps> = ({ commentData,loggedinUserId }) => {
    const isUserLoggedIn = Boolean(loggedinUserId)



  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images.postProfile}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs ">
          {commentData.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {" "}
          {new Date(commentData.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="mt-[10px] text-dark-light font-opensans">
          {commentData.desc}
        </p>
        <div className="flex items-center gap-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          <button className="flex items-center space-x-2">
            <FiMessageSquare className="w-4 h-auto" />
            <span>Reply</span>
          </button>
          <button className="flex items-center space-x-2">
            <FiEdit2 className="w-4 h-auto" />
            <span>Edit</span>
          </button>
          <button className="flex items-center space-x-2">
            <FiTrash className="w-4 h-auto" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
