/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IComment, addCommentHandlerProps } from "./CommentContainer"; // Import the IComment interface
import { images } from "../../constants";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import CommentForm from "./CommentForm";

//* Define the type for the addComment function
type AddCommentType = (props: addCommentHandlerProps) => void;
interface CommentProps {
  commentData: IComment; // Declare the type of the prop
  animationDelay?: number; // Declare animationDelay as an optional number prop
  loggedinUserId: string;
  affectedComment?: any | null;
  setAffectedComment?:
    | React.Dispatch<React.SetStateAction<string | null | IComment>>
    | any; // Correct the type
  addComment: AddCommentType;
  parentId?: string | null;
  updateComment: (value: string, commentId: string) => void;
  deleteComment: (commentId: string) => void;
  replies: IComment[];
}

//* Define the Comment component
const Comment: React.FC<CommentProps> = ({
  commentData,
  loggedinUserId,
  affectedComment,
  setAffectedComment,
  parentId = null,
  addComment,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggedIn = Boolean(loggedinUserId);
  const commentBelongsToUser = loggedinUserId === commentData.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === commentData._id;
  const repliedCommentId = parentId ? parentId : commentData._id;
  const replyOnUserID = commentData.user._id;

  // editing comment
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === commentData._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images.postProfile}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm ">
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
        {!isEditing && (
          <p className="mt-[10px] text-dark-light font-opensans">
            {commentData.desc}
          </p>
        )}

        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, commentData._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialValue={commentData.desc}
          />
        )}
        <div className="flex items-center gap-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggedIn && (
            <button
              className="flex items-center space-x-2"
              onClick={() => {
                setAffectedComment
                  ? setAffectedComment({
                      type: "replying",
                      _id: commentData._id,
                    })
                  : null;
              }}
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}

          {commentBelongsToUser && (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() => {
                  setAffectedComment
                    ? setAffectedComment({
                        type: "editing",
                        _id: commentData._id,
                      })
                    : null;
                }}
              >
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button
                className="flex items-center space-x-2"
                onClick={() => deleteComment(commentData._id)}
              >
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment({
                value,
                parent: repliedCommentId,
                replyOnUser: replyOnUserID,
              } as addCommentHandlerProps)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies!.length > 0 &&
          replies!.map((reply) => (
            <Comment
              key={reply._id}
              commentData={reply}
              loggedinUserId={loggedinUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              replies={[]}
              parentId={commentData._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Comment;
