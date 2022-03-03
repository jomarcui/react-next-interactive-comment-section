import * as Styles from "./Score.styles";

const SCORE_OPERAND = 1;

type ScoreProps = {
  commentId: string;
  replyingTo: string;
  score: number;
  setCommentScore: (
    commentId: string,
    newScore: number,
    replyingTo: string
  ) => void;
};

const Score = ({
  commentId,
  replyingTo,
  score,
  setCommentScore,
}: ScoreProps) => {
  const handleClickIncreaseScore = () =>
    setScore(commentId, increaseScore(true), replyingTo);

  const handleClickDecreaseScore = () =>
    setScore(commentId, increaseScore(false), replyingTo);

  const increaseScore = (increment: boolean) =>
    increment ? (score += SCORE_OPERAND) : (score -= SCORE_OPERAND);

  const setScore = (commentId: string, newScore: number, replyingTo: string) =>
    setCommentScore(commentId, newScore, replyingTo);

  return (
    <Styles.Score>
      <div>
        <Styles.Button onClick={handleClickIncreaseScore}>+</Styles.Button>
      </div>
      <Styles.Value>{score}</Styles.Value>
      <div>
        <Styles.Button onClick={handleClickDecreaseScore}>-</Styles.Button>
      </div>
    </Styles.Score>
  );
};

export default Score;
