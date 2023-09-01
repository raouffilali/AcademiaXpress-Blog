// Desc: This file contains the comment form component

import { useState } from "react";

interface CommentFormProps {
  btnLabel: string;
  formSubmitHandler: (value: string) => void;
  formCancelHandler?: (() => void) | null; // Adjust the type
}

export default function CommentForm({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
}: CommentFormProps) {
  const [value, setValue] = useState("");

  const submiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };

  return (
    <form onSubmit={submiHandler}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none bg-transparent "
          placeholder="Leave your comment here..."
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center gap-x-2 pt-2 ">
          {formCancelHandler !== null && (
            <button onClick={formCancelHandler} className="px-6 py-2.5 rounded-lg border border-red-500 ">Cancel</button>
          )}
        <button
          type="submit"
          className="px-6 rounded-lg bg-primary text-white font-semibold py-2.5  "
        >
          {btnLabel}
        </button>

        </div>

      </div>
    </form>
  );
}
