import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";
import MyComment from "./mycomment";

type CommentListProps = {
  comments: Types.Comment[];
  currentUser: Types.User;
};

const CommentList = ({ comments, currentUser }: CommentListProps) => {
  const handleReplyClick = (e: any) => {
    e.preventDefault();
    alert(e.currentTarget.dataset.commentId);
  };

  const renderComment = (comment: Types.Comment) => {
    const isMyComment = comment.user.username === currentUser.username;

    const props = {
      currentUser,
      handleReplyClick,
    };

    if (isMyComment) {
      return <MyComment comment={comment} {...props} />;
    }

    return <Comment comment={comment} {...props} />;
  };

  return (
    <Styles.Ul>
      {comments.map((comment) => {
        return (
          <Styles.Li key={comment.id}>
            {renderComment(comment)}
            <Styles.ReplyUlContainer>
              {comment.replies.map((reply) => (
                <Styles.Li key={reply.id}>{renderComment(reply)}</Styles.Li>
              ))}
            </Styles.ReplyUlContainer>
          </Styles.Li>
        );
      })}
    </Styles.Ul>
  );
};

export default CommentList;
