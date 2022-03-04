import { useContext } from "react";

import * as Types from "../../types/comment";

import { CommentContext } from "../../context/comment";
import ComponentsCommentList from "../../components/Comment/List";
import ComponentsCommentNew from "../../components/Comment/New";

const Comment = () => {
  const [commentContext, setCommentContext] = useContext(CommentContext);

  const { comments, currentUser, error, loading } = commentContext;

  const deleteComment = (commentId: number) => {
    let updatedComments = [...comments];

    updatedComments = updatedComments.filter(({ id }) => id !== commentId);

    setComments(updatedComments);
  };

  const deleteReply = (replyId: number) => {
    let updatedComments = [...comments];

    updatedComments.forEach((comment) => {
      comment.replies = comment.replies.filter(({ id }) => id !== replyId);
    });

    setComments(updatedComments);
  };

  const setComments = (updatedComments: Types.Comment[]) => {
    const commentContextData = {
      ...commentContext,
      comments: updatedComments,
    };

    setCommentContext(commentContextData);
  };

  const setCommentScore = (
    commentId: number,
    newScore: number,
    replyingTo: string
  ) => {
    const updatedComments = [...comments];

    if (!!replyingTo) {
      updatedComments.forEach(({ replies }) => {
        replies.forEach((reply) => {
          const { id } = reply;

          if (id === commentId) {
            reply.score = newScore;
          }
        });
      });
    } else {
      updatedComments.forEach((comment) => {
        const { id } = comment;

        if (id === commentId) {
          comment.score = newScore;
        }
      });
    }

    setComments(updatedComments);
  };

  const setReplyScore = (replyId: number, newScore: number) => {
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

  const submitComment = (newComment: Types.Comment) => {
    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
  };

  const submitEditedComment = (commentData: Types.Comment) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentData.id) {
        comment.content = commentData.content;
        return comment;
      }

      return comment;
    });

    setComments(updatedComments);
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

  const submitReply = (commentId: number, replyData: Types.Reply) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        comment.replies = [...comment.replies, replyData];
      }

      return comment;
    });

    setComments(updatedComments);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred.</div>;
  }

  const componentsCommentListProps = {
    comments,
    currentUser,
    deleteComment,
    deleteReply,
    setCommentScore,
    setReplyScore,
    submitEditedComment,
    submitEditedReply,
    submitReply,
  };

  return (
    <>
      <ComponentsCommentList props={componentsCommentListProps} />
      <ComponentsCommentNew
        currentUser={currentUser}
        submitComment={submitComment}
      />
    </>
  );
};

export default Comment;
