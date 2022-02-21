import React, { Dispatch, SetStateAction } from "react";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import Comment from "./comment";
import Mine from "./mine";

type CommentsProps = {
  props: {
    comments: Types.Comment[];
    currentUser: Types.User;
    setComments: (updatedComments: Types.Comment[]) => void;
    setCommentScore: (
      commentId: string,
      isReply: boolean,
      newScore: number
    ) => void;
  };
};

const ComponentsCommentList = ({
  props: { comments, currentUser, setComments, setCommentScore },
}: CommentsProps) => {
  const deleteReply = (replyId: string) => {
    let updatedComments = [...comments];

    updatedComments.forEach((comment) => {
      comment.replies = comment.replies.filter(({ id }) => id !== replyId);
    });

    setComments(updatedComments);
  };

  const setReplyScore = (replyId: string, newScore: number) => {
    const updatedComments = [...comments];

    updatedComments.forEach(({ replies }) => {
      replies.forEach((reply) => {
        const { id } = reply;

        if (id === replyId) {
          reply.score = newScore;
        }
      });
    });

    setComments(updatedComments);
  };

  const submitEditedComment = (
    commentId: string,
    commentData: Types.Comment
  ) => {
    console.log("comments", comments);
    console.log("commentData", commentData);

    // const updatedComments = comments.map((comment) => {
    //   if (comment.id === commentId) {
    //     if (!isReply) {
    //       comment = commentData;
    //     } else {
    //       const { replies } = comment;

    //       const updatedReplies = replies.map((reply) => {
    //         if (reply.id === commentData.id) {
    //           reply = commentData;
    //         }
    //       })
    //     }
    //   }

    //   return comment;
    // });

    // setComments(updatedComments);
  };

  const submitEditedReply = (replyData: Types.Reply) => {
    let updatedComments = [...comments];

    updatedComments.forEach(({ replies }) => {
      replies.forEach((reply) => {
        const { id } = reply;

        if (id === replyData.id) {
          reply.content = replyData.content;
        }
      });
    });

    setComments(updatedComments);
  };

  const submitReply = (commentId: string, replyData: Types.Reply) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        comment.replies = [...comment.replies, replyData];
      }

      return comment;
    });

    setComments(updatedComments);
  };

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
                    {renderComment(extractedComment, replyId, replyingTo)}
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
