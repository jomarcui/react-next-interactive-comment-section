import { ReactNode } from "react";
import * as Styles from "./Layout.styles";

type CommentProps = {
  score: ReactNode;
  details: ReactNode;
  controls: ReactNode;
};

const Comment = ({ score, details, controls }: CommentProps) => {
  return (
    <Styles.Comment>
      <div className="score">{score}</div>
      <div className="details">{details}</div>
      <div className="controls">{controls}</div>
    </Styles.Comment>
  );
};

export default Comment;
