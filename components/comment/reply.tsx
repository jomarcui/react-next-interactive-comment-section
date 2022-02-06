import * as Styles from "./comment.styles";
import * as Types from "../../types/comment";
import Image from "next/image";

type ReplyProps = {
  commentId: number;
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
  return (
    <Styles.Reply>
      <Styles.FlexBoxRow>
        <div className="avatar-container">
          <Image alt="" height="32" src={webp} width="32" />
        </div>
        <div className="text-area-container">
          <textarea></textarea>
        </div>
        <div className="button-container">
          <button data-comment-id={commentId} onClick={handleReplyClick}>
            REPLY
          </button>
        </div>
      </Styles.FlexBoxRow>
    </Styles.Reply>
  );
};

export default Reply;
