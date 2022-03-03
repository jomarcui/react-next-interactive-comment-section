import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import ComponentsScore from "../Score_/Score";
import ComponentsCommentReplyForm from "./ReplyForm";

type ReplyProps = {
  props: {
    reply: Types.Reply;
    currentUser: Types.User;
    parentCommentId: string;
    setCommentScore: (
      commentId: string,
      newScore: number,
      replyingTo: string
    ) => void;
    submitReply: (commentId: string, replyData: Types.Reply) => void;
  };
};

const Reply = ({
  props: { reply, currentUser, parentCommentId, setCommentScore, submitReply },
}: ReplyProps) => {
  const {
    content,
    createdAt,
    id,
    replyingTo,
    score,
    user: {
      image: { webp },
      username,
    },
  } = reply;
  const [replying, setReplying] = useState(false);

  const componentsScoreProps = {
    replyingTo,
    score,
    setCommentScore,
    commentId: id,
  };

  const replyProps = {
    currentUser,
    setReplying,
    submitReply,
    commentId: parentCommentId,
    replyingTo: username,
  };

  const handleClickReply = () => {
    setReplying(true);
  };

  return (
    <>
      <Styles.Comment>
        <div>
          <ComponentsScore {...componentsScoreProps} />
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

      {replying && <ComponentsCommentReplyForm {...replyProps} />}
    </>
  );
};

export default Reply;
