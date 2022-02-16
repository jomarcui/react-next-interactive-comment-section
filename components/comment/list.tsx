import React, { Dispatch, SetStateAction } from "react";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";
import MyComment from "./mycomment";

type CommentsProps = {
  comments: Types.Comment[];
  currentUser: Types.User;
  setComments: Dispatch<SetStateAction<Types.Comment[]>>
};

const Comments = ({ comments, currentUser, setComments }: CommentsProps) => {
  const submitReply = (replyData: Types.Comment) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === replyData.id) {
        comment.replies = [...comment.replies, replyData];
      }

      return comment;
    });

    console.log("updatedComments", updatedComments);

    setComments(updatedComments);
  };

  const renderComment = (comment: Types.Comment) => {
    const isMyComment = comment.user.username === currentUser?.username;

    if (isMyComment) {
      return <MyComment comment={comment} />;
    }

    return (
      <Comment
        comment={comment}
        currentUser={currentUser}
        submitReply={submitReply}
      />
    );
  };

  return (
    <Styles.Ul>
      {comments.map((comment) => {
        const { id, replies } = comment;

        return (
          <Styles.Li key={id}>
            {renderComment(comment)}

            <Styles.ReplyUlContainer>
              {replies?.map((reply) => (
                <Styles.Li key={reply.id}>{renderComment(reply)}</Styles.Li>
              ))}
            </Styles.ReplyUlContainer>
          </Styles.Li>
        );
      })}
    </Styles.Ul>
  );
};

export default Comments;
