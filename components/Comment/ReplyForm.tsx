import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";

type ReplyFormProps = {
  commentId: string;
  currentUser: Types.User;
  replyingTo: string | null;
  setReplying: Dispatch<SetStateAction<boolean>>;
  submitReply: (commentId: string, replyData: Types.Reply) => void;
};

const ReplyForm = ({
  commentId,
  currentUser,
  replyingTo,
  setReplying,
  submitReply,
}: ReplyFormProps) => {
  const {
    image: { webp },
  } = currentUser;

  const replyTextInputRef = useRef<HTMLTextAreaElement>(null);
  const [replyText, setReplyText] = useState<string>(`@${replyingTo} `);

  useEffect(() => {
    const inputRef = replyTextInputRef.current;
    const inputRefValLength = inputRef?.value.length || 0;

    inputRef?.focus();
    inputRef?.setSelectionRange(inputRefValLength, inputRefValLength);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const replyData: Types.Reply = {
      content: replyText,
      createdAt: new Date(Date.now()).toLocaleDateString(),
      id: new Date().getTime().toString(),
      replyingTo: replyingTo ?? "",
      score: 0,
      user: currentUser,
    };

    submitReply(commentId, replyData);

    setReplying(false);
  };

  const handleChangeReplyText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  return (
    <Styles.ReplyForm onSubmit={handleSubmit}>
      <div className="avatar-container">
        <Image alt="" height="32" src={webp} width="32" />
      </div>
      <div className="text-area-container">
        <Styles.Textarea
          name="reply"
          onChange={handleChangeReplyText}
          ref={replyTextInputRef}
          title="Your reply."
          value={replyText}
        />
      </div>
      <div className="button-container">
        <Styles.FormButton>REPLY</Styles.FormButton>
      </div>
    </Styles.ReplyForm>
  );
};

export default ReplyForm;
