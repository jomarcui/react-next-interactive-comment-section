import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import ComponentsScore from "../Score";
import ComponentsCommentReplyForm from "./ReplyForm";

type CommentProps = {
  props: {
    comment: Types.Comment;
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
