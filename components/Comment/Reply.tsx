import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import ComponentsScore from "../Score/Score";
import ComponentsCommentReplyForm from "./ReplyForm";
import Avatar from "../Avatar";

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

  const parseContent = (content: string) => {
    const words = content.split(" ");
    const replyingTo = content.match(/@\S+/g) || [];

    let usernamePassedBy = false;

    const newContent = words.map((word) => {
      if (replyingTo.includes(word)) {
        if (usernamePassedBy) {
          return (
            <>
              {" "}
              <Styles.ReplyingTo>{word}</Styles.ReplyingTo>
            </>
          );
        }

        usernamePassedBy = true;
        return <Styles.ReplyingTo>{word}</Styles.ReplyingTo>;
      }

      if (usernamePassedBy) {
        return ` ${word}`;
      }

      usernamePassedBy = true;
      return `${word}`;
    });

    return newContent;
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
            <Styles.CreatedAt>{createdAt}</Styles.CreatedAt>
          </div>
          <div className="content">
            <Styles.Content>{parseContent(content)}</Styles.Content>
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
