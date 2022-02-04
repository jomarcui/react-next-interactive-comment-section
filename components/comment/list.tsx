import Image from "next/image";
import { Comment } from "../../types/comment";
import * as Styles from "./list.styles";

type CommentListProps = {
  comments: Comment[];
};

const CommentList = ({ comments }: CommentListProps) => {
  console.log(comments);
  return (
    <Styles.Ul>
      {comments.map(
        ({
          id,
          createdAt,
          score,
          user: {
            image: { webp },
            username,
          },
        }) => (
          <Styles.Li key={id}>
            <div className="score">
              <div className="button">+</div>
              <div className="value">{score}</div>
              <div className="button">-</div>
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
                  <div className="button reply">
                    <Image
                      alt=""
                      height="16"
                      src="/images/icon-reply.svg"
                      width="16"
                    />
                    <span className="text">Reply</span>
                  </div>
                </div>
              </div>
            </div>
          </Styles.Li>
        )
      )}
    </Styles.Ul>
  );
};

export default CommentList;
