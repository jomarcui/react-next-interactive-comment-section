import { Dispatch, SetStateAction } from "react";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";
import MyComment from "./mycomment";

type CommentsProps = {
  props: {
    comments: Types.Comment[];
    currentUser: Types.User;
    setCommentIdToDelete: Dispatch<SetStateAction<number>>;
    setShow: Dispatch<SetStateAction<boolean>>;
  };
};

const Comments = ({
  props: { comments, currentUser, setCommentIdToDelete, setShow },
}: CommentsProps) => {
  const handleClickReply = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    alert(e.currentTarget.dataset.commentId);
  };

  const renderComment = (comment: Types.Comment) => {
    const isMyComment = comment.user.username === currentUser.username;

    if (isMyComment) {
      return <MyComment comment={comment} setCommentIdToDelete={setCommentIdToDelete} setShow={setShow} />;
    }

    return <Comment comment={comment} currentUser={currentUser} handleClickReply={handleClickReply} />;
  };

  return (
    <Styles.Ul>
      {comments.map((comment) => (
        <Styles.Li key={comment.id}>
          {renderComment(comment)}

          <Styles.ReplyUlContainer>
            {comment.replies.map((reply) => (
              <Styles.Li key={reply.id}>{renderComment(reply)}</Styles.Li>
            ))}
          </Styles.ReplyUlContainer>
        </Styles.Li>
      ))}
    </Styles.Ul>
  );
};

export default Comments;
