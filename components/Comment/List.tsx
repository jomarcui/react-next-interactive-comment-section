import React from "react";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import ComponentsComment from "./Comment";
import ComponentsCommentMine from "./MyComment";
import ComponentsCommentMyReply from "./MyReply";
import ComponentsCommentReply from "./Reply";

type ListProps = {
  props: {
    comments: Types.Comment[];
    currentUser: Types.User;
    deleteComment: (commentId: number) => void;
    deleteReply: (replyId: number) => void;
    setCommentScore: (
      commentId: number,
      newScore: number,
      replyingTo: string
    ) => void;
    setReplyScore: (replyId: number, newScore: number) => void;
    submitEditedComment: (commentData: Types.Comment) => void;
    submitEditedReply: (replyData: Types.Reply) => void;
    submitReply: (commentId: number, replyData: Types.Reply) => void;
  };
};

const List = ({
  props: {
    comments,
    currentUser,
    deleteComment,
    deleteReply,
    setCommentScore,
    setReplyScore,
    submitEditedComment,
    submitEditedReply,
    submitReply,
  },
}: ListProps) => {
  const renderComment = (
    comment: Types.Comment,
    currentUser: Types.User,
    parentCommentId: number
  ) => {
    const isMyComment = comment.user.username === currentUser.username;

    if (isMyComment) {
      const myCommentProps = {
        comment,
        parentCommentId,
        deleteComment,
        setReplyScore,
        submitEditedComment,
        submitEditedReply,
      };

      return <ComponentsCommentMine props={myCommentProps} />;
    }

    const commentProps = {
      comment,
      currentUser,
      parentCommentId,
      setCommentScore,
      submitReply,
    };

    return <ComponentsComment props={commentProps} />;
  };

  const renderReply = (
    currentUser: Types.User,
    parentCommentId: number,
    reply: Types.Reply
  ) => {
    const isMyReply = reply.user.username === currentUser.username;

    if (isMyReply) {
      const myReplyProps = {
        parentCommentId,
        reply,
        deleteReply,
        setReplyScore,
        submitEditedComment,
        submitEditedReply,
      };

      return <ComponentsCommentMyReply props={myReplyProps} />;
    }

    const commentProps = {
      currentUser,
      parentCommentId,
      reply,
      setCommentScore,
      submitReply,
    };

    return <ComponentsCommentReply props={commentProps} />;
  };

  return (
    <Styles.CommentUl>
      {comments.map((comment) => {
        const { id: parentCommentId, replies } = comment;

        return (
          <li key={parentCommentId}>
            {renderComment(comment, currentUser, parentCommentId)}

            <Styles.ReplyUl>
              {replies.map((reply) => (
                <li key={reply.id}>
                  {renderReply(currentUser, parentCommentId, reply)}
                </li>
              ))}
            </Styles.ReplyUl>
          </li>
        );
      })}
    </Styles.CommentUl>
  );
};

export default List;
