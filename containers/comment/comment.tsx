import { useContext } from "react";

import * as Types from "../../types/comment";

import ComponentsCommentList from "../../components/comment/list";
import { CommentContext } from "../../context/comment";

const ContainersComment = () => {
  const [commentContext, setCommentContext] = useContext(CommentContext);

  const { comments, currentUser, error, loading } = commentContext;

  const setComments = (updatedComments: Types.Comment[]) => {
    const commentContextData = {
      ...commentContext,
      comments: updatedComments,
    };

    setCommentContext(commentContextData);
  };

  const setCommentScore = (
    commentId: string,
    isReply: boolean,
    newScore: number
  ) => {
    const updatedComments = [...comments];

    if (isReply) {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred.</div>;
  }

  const componentsCommentListProps = {
    comments,
    currentUser,
    setComments,
    setCommentScore,
  };

  return <ComponentsCommentList props={componentsCommentListProps} />;
};

export default ContainersComment;
