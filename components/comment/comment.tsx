import React, { useRef, useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import ComponentsScore from "../score/score";
import Reply from "./reply";

type CommentProps = {
  props: {
    comment: Types.Comment;
    currentUser: Types.User;
    parentCommentId: string;
    replyingTo: string | null;
    setCommentScore: (
      commentId: string,
      isReply: boolean,
      newScore: number
    ) => void;
    submitReply: (commentId: string, replyData: Types.Reply) => void;
  };
};

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

      {replying && <Reply {...replyProps} />}
    </>
  );
};

export default Comment;
