import { useContext } from "react";

import * as Types from "../../types/comment";

import ComponentsCommentList from "../../components/comment/list";
import { CommentContext } from "../../context/comment";

const ContainersComment = () => {
  const { comments, currentUser, error, loading } = useContext(CommentContext);

  const setComments = (updatedComments: Types.Comment[]) => {
    
  }
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error occurred.</div>
  }

  return (
    <ComponentsCommentList
      comments={comments}
      currentUser={currentUser}
    />
  );
}

export default ContainersComment;