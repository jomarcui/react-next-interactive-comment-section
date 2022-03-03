import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import ComponentsScore from "../Score/Score";
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
        <div className="score">
          <ComponentsScore {...componentsScoreProps} />
        </div>
        <div className="details">
          <div className="header">
            <Styles.Avatar>
              <Image alt="" height="32" src={webp} width="32" />
            </Styles.Avatar>
            <Styles.Username>{username}</Styles.Username>
            <Styles.CreatedAt>{createdAt}</Styles.CreatedAt>
          </div>
          <div className="content">
            <Styles.Content>{content}</Styles.Content>
          </div>
        </div>
        <div className="controls">
          <Styles.ControlButton isDelete={false}>
            <Image alt="" height="16" src="/images/icon-reply.svg" width="16" />
            <span
              className="text"
              data-comment-id={id}
              onClick={handleClickReply}
            >
              Reply
            </span>
          </Styles.ControlButton>
        </div>
      </Styles.Comment>

      {replying && <ComponentsCommentReplyForm {...replyProps} />}
    </>
  );
};

export default Reply;
