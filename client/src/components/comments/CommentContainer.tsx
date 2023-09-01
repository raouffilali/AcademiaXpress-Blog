import CommentForm from "./CommentForm";

import { getCommentsData } from "../../data/comments";
import { useEffect, useState } from "react";
import Comment from "./Comment";

interface CommentContainerProps {
  className?: string;
  loggedinUserId: string;
}
export interface IComment {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  desc: string;
  post: string;
  parent: string | null;
  replyOnUser: string | null;
  createdAt: string;
}
export interface addCommentHandlerProps {
  value: string;
  parent: string | null;
  replyOnUser: string | null;
}

export const CommentContainer = ({
  className,
  loggedinUserId,
}: CommentContainerProps) => {
  const [comments, setComments] = useState<IComment[]>([]);
  // filter comments that there parents are === null
  const mainComment = comments.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState<string | null>(null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = ({
    value,
    parent = null,
    replyOnUser = null,
  }: addCommentHandlerProps) => {
    console.log(value, parent, replyOnUser);
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    // setComments function
    setComments((currState) => [newComment, ...currState]);
    setAffectedComment(null);
  };

  const updateCommentHandler = (value: string, commentId: string) => {
    console.log(value, commentId);
    // setComments function
    setComments((currState) =>
      currState.map((comment) =>
        comment._id === commentId ? { ...comment, desc: value } : comment
      )
    );
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId: string) => {
    console.log(`delete comment with id: ${commentId}`);
    // setComments function
    setComments((currState) =>
      currState.filter((comment) => comment._id !== commentId)
    );
  };

  // get replies handler
  const getRepliesHandler = (commentId: string) => {
    console.log(`get replies for comment with id: ${commentId}`);
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };
  return (
    // Creating comment form
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) =>
          addCommentHandler({
            value: value,
            parent: null, // Update this with the appropriate value if needed
            replyOnUser: null, // Update this with the appropriate value if needed
          })
        }
      />
      <div className="space-y-4 mt-8">
        {mainComment.map((comment) => (
          <Comment
            key={comment._id}
            commentData={comment}
            loggedinUserId={loggedinUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};
