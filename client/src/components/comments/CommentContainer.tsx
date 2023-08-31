import CommentForm from "./CommentForm";

import { getCommentsData } from "../../data/comments";
import { useEffect, useState } from "react";
import Comment from "./Comment";

 interface CommentContainerProps {
  className?: string;
  loggedinUserId: string
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
interface addCommentHandlerProps {
  value: string;
  parent: string | null;
  replyOnUser: string | null;
}

export const CommentContainer = ({ className, loggedinUserId }: CommentContainerProps) => {
  const [comments, setComments] = useState<IComment[]>([]);
  // filter comments that there parents are === null
  const mainComment = comments.filter((comment) => comment.parent === null);

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
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
    // setComments function
    setComments((currState) => [newComment, ...currState]);
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
        {mainComment.map((comment)=>(
          <Comment key={comment._id} commentData={comment} loggedinUserId={loggedinUserId}/>

        ))}

      </div>
    </div>
  );
};
