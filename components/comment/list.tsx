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

    if (isMyComment) {
      const myCommentProps = {
        comment,
        parentCommentId,
        replyingTo,
        submitEditedComment,
        submitEditedReply,
      };
      return <MyComment props={myCommentProps} />;
    }

    const commentProps = {
      comment,
      currentUser,
      parentCommentId,
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
              {replies?.map((reply) => {
                const { comment: extractedComment, replyingTo } =
                  extractCommentAndReplyingTo(reply);

                return (
                  <Styles.Li key={reply.id}>
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

export default Comments;
