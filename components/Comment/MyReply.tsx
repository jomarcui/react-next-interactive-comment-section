import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import ComponentsCommentDelete from "./Delete";
import ComponentsScore from "../Score";

type MyReplyProps = {
  props: {
    reply: Types.Reply;
    parentCommentId: string;
    deleteReply: (replyId: string) => void;
    submitEditedComment: (
      commentId: string,
      commentData: Types.Comment
    ) => void;
    submitEditedReply: (replyData: Types.Reply) => void;
  };
};

const MyComment = ({
  props: {
    reply,
    parentCommentId,
    deleteReply,
    submitEditedComment,
    submitEditedReply,
  },
}: MyReplyProps) => {
  const {
    content,
    createdAt,
    id,
    replyingTo,
    score,
    user: {
      image: { webp },
      username,
    },
  } = reply;

  const [replyIdToDelete, setReplyIdToDelete] = useState<string>();
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [myComment, setMyComment] = useState(content);

  const componentsScoreProps = {
    score,
    commentId: id,
    replyingTo: "",
    setCommentScore: () => {},
  };

  const confirmDelete = () => {
    deleteReply(id);
    setDeleting(false);
  };

  const handleChangeComment = (e: any) => setMyComment(e.currentTarget.value);

  const handleClickDelete = () => {
    setReplyIdToDelete(id);
    setDeleting(true);
  };

  const handleClickEdit = () => setEditing(true);

  const handleSubmitUpdateComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const replyData: Types.Reply = {
      ...reply,
      content: myComment,
    };

    submitEditedReply(replyData);
    setEditing(false);
  };

  return (
    <Styles.Comment>
      <div>
        <ComponentsScore {...componentsScoreProps} />
      </div>
      <div className="details">
        <div className="comment-header">
          <div className="user-info">
            <div className="avatar">
              <Image alt="" height="32" src={webp} width="32" />
            </div>
            <div className="username">
              {username}
              <span className="you">you</span>
            </div>
            <div className="created-at">{createdAt}</div>
          </div>
          <div className="controls">
            <button
              className="delete"
              disabled={editing}
              onClick={handleClickDelete}
            >
              <Image
                alt=""
                height="16"
                src="/images/icon-delete.svg"
                width="16"
              />
              <span className="text">Delete</span>
            </button>
            <button disabled={editing} onClick={handleClickEdit}>
              <Image
                alt=""
                height="16"
                src="/images/icon-edit.svg"
                width="16"
              />
              <span className="text">Edit</span>
            </button>
          </div>
        </div>

        {editing && (
          <Styles.Content>
            <form onSubmit={handleSubmitUpdateComment}>
              <Styles.Textarea
                onChange={handleChangeComment}
                title="Your comment"
                value={myComment}
              />
              <Styles.FormButton align="end">UPDATE</Styles.FormButton>
            </form>
          </Styles.Content>
        )}

        {!editing && <Styles.Content>{content}</Styles.Content>}
      </div>

      {deleting && (
        <ComponentsCommentDelete
          confirmDelete={confirmDelete}
          setDeleting={setDeleting}
        />
      )}
    </Styles.Comment>
  );
};

export default MyComment;
