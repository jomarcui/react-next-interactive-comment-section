import React, { FormEvent, useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import { displayHowOld } from "../../helpers/comment";

import Avatar from "../Avatar";
import ComponentsCommentContent from "./Content";
import ComponentsCommentDelete from "./Delete";
import ComponentsScore from "../Score";

type MyCommentProps = {
  props: {
    comment: Types.Comment;
    parentCommentId: number;
    deleteComment: (replyId: number) => void;
    submitEditedComment: (commentData: Types.Comment) => void;
  };
};

const MyComment = ({
  props: { comment, parentCommentId, deleteComment, submitEditedComment },
}: MyCommentProps) => {
  const {
    content,
    createdAt,
    id,
    score,
    user: {
      image: { webp },
      username,
    },
  } = comment;

  const [commentIdToDelete, setCommentIdToDelete] = useState<number>();
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
    console.log("parentCommentId", parentCommentId);
    deleteComment(parentCommentId);
    setDeleting(false);
  };

  const handleChangeComment = (e: any) => setMyComment(e.currentTarget.value);

  const handleClickDelete = () => {
    setCommentIdToDelete(id);
    setDeleting(true);
  };

  const handleClickEdit = () => setEditing(true);

  const handleSubmitUpdateComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentData = {
      ...comment,
      content: myComment,
    };

    submitEditedComment(commentData);
    setEditing(false);
  };

  return (
    <Styles.Comment>
      <div className="score">
        <ComponentsScore {...componentsScoreProps} />
      </div>
      <div className="details">
        <div className="header">
          <Avatar alt="" src={webp} />
          <Styles.Username>
            {username}
            <Styles.You>you</Styles.You>
          </Styles.Username>
          <Styles.CreatedAt>{displayHowOld(createdAt)}</Styles.CreatedAt>
        </div>
        <div className="content">
          {editing && (
            <Styles.Content>
              <form onSubmit={handleSubmitUpdateComment}>
                <Styles.Textarea
                  onChange={handleChangeComment}
                  title="Your comment"
                  value={myComment}
                />
                <div className="button-container">
                  <Styles.FormButton>UPDATE</Styles.FormButton>
                </div>
              </form>
            </Styles.Content>
          )}

          {!editing && <ComponentsCommentContent content={content} />}
        </div>
      </div>
      <div className="controls">
        <Styles.ControlButton
          className="delete"
          disabled={editing}
          isDelete
          onClick={handleClickDelete}
        >
          <Image alt="" height="16" src="/images/icon-delete.svg" width="16" />
          <span className="text" data-comment-id={id}>
            Delete
          </span>
        </Styles.ControlButton>
        <Styles.ControlButton
          disabled={editing}
          isDelete={false}
          onClick={handleClickEdit}
        >
          <Image alt="" height="16" src="/images/icon-edit.svg" width="16" />
          <span className="text" data-comment-id={id}>
            Edit
          </span>
        </Styles.ControlButton>
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
