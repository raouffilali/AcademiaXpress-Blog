import CommentForm from "./CommentForm";

import { getCommentsData } from "../../data/comments";
import { useEffect, useState } from "react";

interface CommentContainerProps {
  className?: string;
}
interface addCommentHandlerProps {
  value: string;
  parent: string | null;
  replyOnUser: string | null;
}

export const CommentContainer = ({ className }: CommentContainerProps) => {

  const [comments, setComments] = useState([] as Array<object>);


  console.log(comments);

  useEffect(() => {

    ( async()=>{
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
      desc:value,
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
    </div>
  );
};
