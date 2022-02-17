import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

type CommentProps = {
  props: {
    comment: Types.Comment;
    currentUser: Types.User;
    parentCommentId: string;
    replyingTo: string | null;
    setCommentScore: (commentId: string, isReply: boolean, newScore: number) => void;
    submitReply: (commentId: string, replyData: Types.Reply) => void;
  };
};

const SCORE_OPERAND = 1;

const Comment = ({
  props: {
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
    parentCommentId,
    replyingTo,
    setCommentScore,
    submitReply,
  },
}: CommentProps) => {
  const [replyText, setReplyText] = useState<string>("");
  const [replying, setReplying] = useState(false);

  const decreaseScore = () => {
    setScore(false);
  }

  const handleChangeReplyText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  const handleClickReply = () => {
    setReplyText(`@${username} `);
    setReplying(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const replyData: Types.Reply = {
      content: replyText,
      createdAt: new Date(Date.now()).toLocaleDateString(),
      id: new Date().getTime().toString(),
      replyingTo: username,
      score: 0,
      user: currentUser,
    };


    submitReply(parentCommentId, replyData);

    setReplying(false);
  };

  const increaseScore = () => {
    setScore(true);
  }

  const setScore = (increment: boolean) => {
    const isReply = !!replyingTo;
    let newScore = score;

    if (increment) {
      newScore += SCORE_OPERAND;
    } else {
      if (newScore > 0) {
        newScore -= SCORE_OPERAND;
      }
    }

    setCommentScore(id, isReply, newScore);
  }

  return (
    <>
      <Styles.Comment>
        <div>
          <div className="score">
            <button className="button" onClick={increaseScore}>+</button>
            <div className="value">{score}</div>
            <button className="button" onClick={decreaseScore}>-</button>
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
              <Image alt="" height="32" src={currentUser.image.webp} width="32" />
            </div>
            <div className="text-area-container">
              <textarea
                name="reply"
                onChange={handleChangeReplyText}
                value={replyText}
              />
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
