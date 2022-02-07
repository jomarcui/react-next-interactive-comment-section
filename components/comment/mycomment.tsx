import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";
import { useState } from "react";

type CommentProps = {
  comment: Types.Comment;
};

const MyComment = ({
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
}: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [myComment, setMyComment] = useState(content);

  const commentHandleChange = (e: any) => {
    setMyComment(e.currentTarget.val);
  };

  const showEditHandleClick = () => {
    setIsEditing(true);
  };

  return (
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
            <div className="username">
              {username}
              <span className="you">you</span>
            </div>
            <div className="created-at">{createdAt}</div>
          </div>
          <div className="controls">
            <button className="delete">
              <Image
                alt=""
                height="16"
                src="/images/icon-delete.svg"
                width="16"
              />
              <span
                className="text"
                data-comment-id={id}
                onClick={showEditHandleClick}
              >
                Delete
              </span>
            </button>
            <button>
              <Image
                alt=""
                height="16"
                src="/images/icon-edit.svg"
                width="16"
              />
              <span
                className="text"
                data-comment-id={id}
                onClick={showEditHandleClick}
              >
                Edit
              </span>
            </button>
          </div>
        </div>
        {isEditing && (
          <Styles.Content>
            <textarea
              onChange={commentHandleChange}
              title="Your comment"
              value={myComment}
            />
            <Styles.Button align="end">UPDATE</Styles.Button>
          </Styles.Content>
        )}

        {!isEditing && <Styles.Content>{content}</Styles.Content>}
      </div>
    </Styles.Comment>
  );
};

export default MyComment;
