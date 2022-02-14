import { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Reply from "./reply";

type CommentProps = {
  comment: Types.Comment;
  currentUser: Types.User;
  handleClickReply: any;
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
  handleClickReply,
}: CommentProps) => {
  const [showReply, setShowReply] = useState(false);

  const showReplyHandleClick = () => {
    setShowReply(true);
  };

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
                  onClick={showReplyHandleClick}
                >
                  Reply
                </span>
              </button>
            </div>
          </div>
          <Styles.Content>{content}</Styles.Content>
        </div>
      </Styles.Comment>

      {showReply && (
        <Reply
          commentId={id}
          currentUser={currentUser}
          handleReplyClick={handleClickReply}
        />
      )}
    </>
  );
};

export default Comment;
