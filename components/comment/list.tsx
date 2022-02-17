import React, { Dispatch, SetStateAction } from "react";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";
import MyComment from "./mycomment";

type CommentsProps = {
  comments: Types.Comment[];
  currentUser: Types.User;
  setComments: Dispatch<SetStateAction<Types.Comment[]>>;
};

const Comments = ({ comments, currentUser, setComments }: CommentsProps) => {
  const submitReply = (commentId: string, replyData: Types.Reply) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        comment.replies = [...comment.replies, replyData];
      }

      return comment;
    });

    setComments(updatedComments);
  };

  const renderComment = (comment: Types.Comment, parentCommentId: string) => {
    const isMyComment = comment.user.username === currentUser?.username;

    if (isMyComment) {
      return <MyComment comment={comment} />;
    }

    const props = {
      comment,
      currentUser,
      parentCommentId,
      submitReply
    }

    return (
      <Comment props={props}/>
    );
  };

  const toComment = (reply: Types.Reply) => {
    const { replyingTo, ...rest } = reply;
    const comment: Types.Comment = { ...reply, replies: [] };

    return comment;
  }

  return (
    <Styles.Ul>
      {comments.map((comment) => {
        const { id, replies } = comment;

        return (
          <Styles.Li key={id}>
            {renderComment(comment, id)}

            <Styles.ReplyUlContainer>
              {replies?.map((reply) => (
                <Styles.Li key={reply.id}>{renderComment(toComment(reply), id)}</Styles.Li>
              ))}
            </Styles.ReplyUlContainer>
          </Styles.Li>
        );
      })}
    </Styles.Ul>
  );
};

export default Comments;
