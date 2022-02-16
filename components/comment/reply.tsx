import React from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";
import apiService from "../../services/api.service";

type ReplyProps = {
  commentId: string;
  currentUser: Types.User;
  handleReplyClick: any;
};

const Reply = ({
  commentId,
  currentUser: {
    image: { webp },
  },
  handleReplyClick,
}: ReplyProps) => {
  const handleSubmitReplyForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      reply: { value: string };
    };

    const { reply: { value } } = target;

    const postData = {
      commentId,

    }

    //apiService.postReply(commentId)
  }

  return (
    <Styles.ReplyForm onSubmit={handleSubmitReplyForm}>
      <Styles.FlexBoxRow>
        <div className="avatar-container">
          <Image alt="" height="32" src={webp} width="32" />
        </div>
        <div className="text-area-container">
          <textarea name="reply"></textarea>
        </div>
        <div className="button-container">
          <button>
            REPLY
          </button>
        </div>
      </Styles.FlexBoxRow>
    </Styles.ReplyForm>
  );
};

export default Reply;
