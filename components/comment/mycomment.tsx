import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

import { Colors } from "../../enums/colors";

import Modal from "../ui/modal";

type CommentProps = {
  props: {
    comment: Types.Comment;
    deleteReply: (replyId: string) => void;
    parentCommentId: string;
    replyingTo: string | null;
    setReplyScore: (replyId: string, newScore: number) => void;
    submitEditedComment: (
      commentId: string,
      commentData: Types.Comment
    ) => void;
    submitEditedReply: (replyData: Types.Reply) => void;
  };
};

const MyComment = ({
  props: {
    comment,
    deleteReply,
    parentCommentId,
    replyingTo,
    setReplyScore,
    submitEditedComment,
    submitEditedReply,
  },
}: CommentProps) => {
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

  const [commentIdToDelete, setCommentIdToDelete] = useState<string>();
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [myComment, setMyComment] = useState(content);

  const handleChangeComment = (e: any) => {
    setMyComment(e.currentTarget.value);
  };

  const handleClickCancelDelete = () => {
    setDeleting(false);
  };

  const handleClickConfirmDelete = () => {
    if (replyingTo) {
      deleteReply(id);
    } else {
      deleteReply(parentCommentId);
    }

    setDeleting(false);
  };

  const handleClickDelete = () => {
    setCommentIdToDelete(id);
    setDeleting(true);
  };

  const handleClickEdit = () => {
    setEditing(true);
  };

  const handleSubmitUpdateComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (replyingTo) {
      const { replies, ...rest } = comment;

      const replyData: Types.Reply = {
        ...rest,
        replyingTo,
        content: myComment,
      };

      submitEditedReply(replyData);
    } else {
      const commentData = {
        ...comment,
        content: myComment,
        id: parentCommentId,
      };

      submitEditedComment(parentCommentId, commentData);
    }

    setEditing(false);
  };

  return (
    <Styles.Comment>
      <div>
        <div className="score">
          <div className="button">+</div>
          <div className="value">{score}</div>
          <div className="button">-</div>
        </div>
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
              <span className="text" data-comment-id={id}>
                Delete
              </span>
            </button>
            <button disabled={editing} onClick={handleClickEdit}>
              <Image
                alt=""
                height="16"
                src="/images/icon-edit.svg"
                width="16"
              />
              <span className="text" data-comment-id={id}>
                Edit
              </span>
            </button>
          </div>
        </div>

        {editing && (
          <Styles.Content>
            <form onSubmit={handleSubmitUpdateComment}>
              <textarea
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
        <Modal show>
          <p>Delete comment</p>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can&lsquo;t be undone.
          </p>
          <Styles.ModalButton
            backgroundColor={Colors.GRAYISH_BLUE}
            onClick={handleClickCancelDelete}
          >
            NO, CANCEL
          </Styles.ModalButton>
          <Styles.ModalButton
            backgroundColor={Colors.SOFT_RED}
            onClick={handleClickConfirmDelete}
          >
            YES, DELETE
          </Styles.ModalButton>
        </Modal>
      )}
    </Styles.Comment>
  );
};

export default MyComment;
