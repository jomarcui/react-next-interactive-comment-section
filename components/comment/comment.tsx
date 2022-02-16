import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

type CommentProps = {
  comment: Types.Comment;
  currentUser: Types.User;
  submitReply: (replyData: Types.Comment) => void;
};

const Comment = ({
  comment: {
    content,
    createdAt,
    id,
    score,
    user: {
      image: { webp },
      username,
    },
  },
  currentUser,
  submitReply,
}: CommentProps) => {
  const [replyText, setReplyText] = useState<string>("");
  const [replying, setReplying] = useState(false);

  const handleChangeReplyText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  const handleClickReply = () => {
    setReplyText(`@${username}`);
    setReplying(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const replyData: Types.Comment = {
      id,
      content: replyText,
      createdAt: "now",
      replyingTo: username,
      score: 0,
      user: currentUser,
    }

    submitReply(replyData);

    setReplying(false);
  }

  return (
    <>
      <Styles.Comment>
        <div>
          <div className="score">
            <div className="button">+</div>
            <div className="value">{score}</div>
            <div className="button">-</div>
          </div>
        </div>
        <div className="details">
          <div className="comment-header">
            <div className="user-info">
              <div className="avatar">
                <Image alt="" height="32" src={webp} width="32" />
              </div>
              <div className="username">{username}</div>
              <div className="created-at">{createdAt}</div>
            </div>
            <div className="controls">
              <button>
                <Image
                  alt=""
                  height="16"
                  src="/images/icon-reply.svg"
                  width="16"
                />
                <span
                  className="text"
                  data-comment-id={id}
                  onClick={handleClickReply}
                >
                  Reply
                </span>
              </button>
            </div>
          </div>
          <Styles.Content>{content}</Styles.Content>
        </div>
      </Styles.Comment>

      {replying && (
        <Styles.ReplyForm onSubmit={handleSubmit}>
          <Styles.FlexBoxRow>
            <div className="avatar-container">
              <Image alt="" height="32" src={webp} width="32" />
            </div>
            <div className="text-area-container">
              <textarea name="reply" onChange={handleChangeReplyText} value={replyText} />
            </div>
            <div className="button-container">
              <button>REPLY</button>
            </div>
          </Styles.FlexBoxRow>
        </Styles.ReplyForm>
      )}
    </>
  );
};

export default Comment;
