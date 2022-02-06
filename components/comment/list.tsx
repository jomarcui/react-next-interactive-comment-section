import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";

type CommentListProps = {
  comments: Types.Comment[];
  currentUser: Types.User;
};

const CommentList = ({ comments, currentUser }: CommentListProps) => {
  const handleReplyClick = (e: any) => {
    e.preventDefault();
    alert(e.currentTarget.dataset.commentId);
  };

  return (
    <Styles.Ul>
      {comments.map((comment) => {
        const isMyComment = comment.user.username === currentUser.username;

        const props = {
          currentUser,
          isMyComment,
          handleReplyClick,
        };

        return (
          <Styles.Li key={comment.id}>
            <Comment comment={comment} {...props} />
            <Styles.ReplyUlContainer>
              {comment.replies.map((reply) => (
                <Styles.Li key={reply.id}>
                  <Comment comment={reply} {...props} />
                </Styles.Li>
              ))}
            </Styles.ReplyUlContainer>
          </Styles.Li>
        );
      })}
    </Styles.Ul>
  );
};

export default CommentList;
