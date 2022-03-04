import React, { useState } from "react";
import Image from "next/image";

import * as Styles from "./Comment.styles";
import * as Types from "../../types/comment";

import ComponentsCommentDelete from "./Delete";
import ComponentsScore from "../Score";
import Avatar from "../Avatar";

type MyCommentProps = {
  props: {
    comment: Types.Comment;
    parentCommentId: string;
    deleteReply: (replyId: string) => void;
    submitEditedComment: (
      commentId: string,
      commentData: Types.Comment
    ) => void;
  };
};

const MyComment = ({
  props: { comment, parentCommentId, deleteReply, submitEditedComment },
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

  const [commentIdToDelete, setCommentIdToDelete] = useState<string>();
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
    deleteReply(parentCommentId);
    setDeleting(false);
  };

  const handleChangeComment = (e: any) => setMyComment(e.currentTarget.value);

  const handleClickDelete = () => {
    setCommentIdToDelete(id);
    setDeleting(true);
  };

  const handleClickEdit = () => setEditing(true);

  const handleSubmitUpdateComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentData = {
      ...comment,
      content: myComment,
      id: parentCommentId,
    };

    submitEditedComment(parentCommentId, commentData);
    setEditing(false);
  };

  const parseContent = (content: string) => {
    const words = content.split(" ");
    const replyingTo = content.match(/@\S+/g) || [];

    let usernamePassedBy = false;

    const newContent = words.map((word) => {
      if (replyingTo.includes(word)) {
        if (usernamePassedBy) {
          return (
            <>
              {" "}
              <Styles.ReplyingTo>{word}</Styles.ReplyingTo>
            </>
          );
        }

        usernamePassedBy = true;
        return <Styles.ReplyingTo>{word}</Styles.ReplyingTo>;
      }

      if (usernamePassedBy) {
        return ` ${word}`;
      }

      usernamePassedBy = true;
      return `${word}`;
    });

    return newContent;
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
          <Styles.CreatedAt>{createdAt}</Styles.CreatedAt>
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

          {!editing && <Styles.Content>{parseContent(content)}</Styles.Content>}
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
