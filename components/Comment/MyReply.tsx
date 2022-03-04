import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import { displayHowOld } from "../../helpers/comment";

import Avatar from "../Avatar";
import ComponentsCommentContent from "./Content";
import ComponentsCommentDelete from "./Delete";
import ComponentsScore from "../Score";

type MyReplyProps = {
  props: {
    reply: Types.Reply;
    deleteReply: (replyId: number) => void;
    submitEditedReply: (replyData: Types.Reply) => void;
  };
};

const MyReply = ({
  props: { reply, deleteReply, submitEditedReply },
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

  const [replyIdToDelete, setReplyIdToDelete] = useState<number>();
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

export default MyReply;
