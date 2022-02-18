import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

type NewProps = {
  currentUser: Types.User;
  submitComment: (comment: Types.Comment) => void;
};

const New = ({
  currentUser,
  submitComment,
}: NewProps) => {
  const {
    image: { webp },
    username,
  } = currentUser;

  const [commentText, setCommentText] = useState<string>("");

  const handleChangeCommentText = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentText(e.currentTarget.value);
  };

  const handleSubmitCommentForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCommentData: Types.Comment = {
      content: commentText,
      createdAt: new Date(Date.now()).toLocaleDateString(),
      id: new Date().getTime().toString(),
      replies: [],
      score: 0,
      user: currentUser
    }

    submitComment(newCommentData);

    setCommentText("");
  };

  return (
    <Styles.NewComment>
      <form onSubmit={handleSubmitCommentForm}>
        <div className="user-avatar-container">
          <Image alt={username} height={32} src={webp} width={32} />
        </div>
        <div className="comment-text-container">
          <Styles.Textarea
            onChange={handleChangeCommentText}
            value={commentText}
          />
        </div>
        <div className="button-container">
          <Styles.FormButton align="end">Send</Styles.FormButton>
        </div>
      </form>
    </Styles.NewComment>
  );
};

export default New;
