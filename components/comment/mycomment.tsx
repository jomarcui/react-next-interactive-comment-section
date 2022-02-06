import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

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
  const showEditHandleClick = () => {};
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
        <Styles.Content>{content}</Styles.Content>
      </div>
    </Styles.Comment>
  );
};

export default MyComment;
