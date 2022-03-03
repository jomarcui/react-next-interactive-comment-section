import React from "react";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import ComponentsComment from "./Comment";
import ComponentsCommentMine from "./MyComment";
import ComponentsCommentMyReply from "./MyReply";
import ComponentsCommentReply from "./Reply";

type ListProps = {
  props: {
    comments: Types.Comment[];
    currentUser: Types.User;
    deleteReply: (replyId: string) => void;
    setCommentScore: (
      commentId: string,
      newScore: number,
      replyingTo: string
    ) => void;
    setReplyScore: (replyId: string, newScore: number) => void;
    submitEditedComment: (
      commentId: string,
      commentData: Types.Comment
    ) => void;
    submitEditedReply: (replyData: Types.Reply) => void;
    submitReply: (commentId: string, replyData: Types.Reply) => void;
  };
};

const List = ({
  props: {
    comments,
    currentUser,
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
    parentCommentId: string
  ) => {
    const isMyComment = comment.user.username === currentUser.username;

    if (isMyComment) {
      const myCommentProps = {
        comment,
        parentCommentId,
        deleteReply,
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
    parentCommentId: string,
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
    <Styles.CommentUlContainer>
      {comments.map((comment) => {
        const { id: parentCommentId, replies } = comment;

        return (
          <Styles.CommentUlContainerLi key={parentCommentId}>
            {renderComment(comment, currentUser, parentCommentId)}

            <Styles.ReplyUlContainer>
              {replies.map((reply) => (
                <Styles.CommentUlContainerLi key={reply.id}>
                  {renderReply(currentUser, parentCommentId, reply)}
                </Styles.CommentUlContainerLi>
              ))}
            </Styles.ReplyUlContainer>
          </Styles.CommentUlContainerLi>
        );
      })}
    </Styles.CommentUlContainer>
  );
};

export default List;
