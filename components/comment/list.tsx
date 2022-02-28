import React, { Dispatch, SetStateAction } from "react";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";
import Mine from "./mine";

type CommentsProps = {
  props: {
    comments: Types.Comment[];
    currentUser: Types.User;
    deleteReply: (replyId: string) => void;
    setCommentScore: (
      commentId: string,
      isReply: boolean,
      newScore: number
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

const ComponentsCommentList = ({
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
}: CommentsProps) => {
  const renderComment = (
    comment: Types.Comment,
    parentCommentId: string,
    replyingTo: string | null
  ) => {
    const isMyComment = comment.user.username === currentUser?.username;

    if (isMyComment && !!replyingTo) {
      const myCommentProps = {
        comment,
        deleteReply,
        parentCommentId,
        replyingTo,
        setReplyScore,
        submitEditedComment,
        submitEditedReply,
      };

      return <Mine props={myCommentProps} />;
    }

    const commentProps = {
      comment,
      currentUser,
      parentCommentId,
      replyingTo,
      setCommentScore,
      submitReply,
    };

    return <Comment props={commentProps} />;
  };

  const extractCommentAndReplyingTo = (reply: Types.Reply) => {
    const { replyingTo, ...rest } = reply;
    const comment: Types.Comment = { ...rest, replies: [] };

    return { comment, replyingTo };
  };

  return (
    <Styles.Ul>
      {comments.map((comment) => {
        const { id, replies } = comment;

        return (
          <Styles.Li key={id}>
            {renderComment(comment, id, null)}

            <Styles.ReplyUlContainer>
              {replies.map((reply) => {
                const { id: replyId } = reply;
                const { comment: extractedComment, replyingTo } =
                  extractCommentAndReplyingTo(reply);

                return (
                  <Styles.Li key={replyId}>
                    {renderComment(extractedComment, id, replyingTo)}
                  </Styles.Li>
                );
              })}
            </Styles.ReplyUlContainer>
          </Styles.Li>
        );
      })}
    </Styles.Ul>
  );
};

export default ComponentsCommentList;
