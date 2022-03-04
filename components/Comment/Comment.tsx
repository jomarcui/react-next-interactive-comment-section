import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import { displayHowOld } from "../../helpers/comment";

import Avatar from "../Avatar";
import ComponentsCommentContent from "./Content";
import ComponentsCommentReplyForm from "./ReplyForm";
import ComponentsScore from "../Score";

type CommentProps = {
  props: {
    comment: Types.Comment;
    currentUser: Types.User;
    parentCommentId: number;
    setCommentScore: (
      commentId: number,
      newScore: number,
      replyingTo: string
    ) => void;
    submitReply: (commentId: number, replyData: Types.Reply) => void;
  };
};

const Comment = ({
  props: {
    comment,
    currentUser,
    parentCommentId,
    setCommentScore,
    submitReply,
  },
}: CommentProps) => {
  const {
    content,
    createdAt,
    id,
    score,
    user: {
      image: { webp },
      username,
    },
  } = comment;
  const [replying, setReplying] = useState(false);

  const componentsScoreProps = {
    score,
    setCommentScore,
    commentId: id,
    replyingTo: "",
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
            <Avatar alt="" src={webp} />
            <Styles.Username>{username}</Styles.Username>
            <Styles.CreatedAt>{displayHowOld(createdAt)}</Styles.CreatedAt>
          </div>
          <div className="content">
            <ComponentsCommentContent content={content} />
          </div>
        </div>
        <div className="controls">
          <Styles.ControlButton isDelete={false} onClick={handleClickReply}>
            <Image alt="" height="16" src="/images/icon-reply.svg" width="16" />
            <span className="text">Reply</span>
          </Styles.ControlButton>
        </div>
      </Styles.Comment>

      {replying && <ComponentsCommentReplyForm {...replyProps} />}
    </>
  );
};

export default Comment;
