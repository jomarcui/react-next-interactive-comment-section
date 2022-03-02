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
    <div className="score">
      <button className="button" onClick={handleClickIncreaseScore}>
        +
      </button>
      <div className="value">{score}</div>
      <button className="button" onClick={handleClickDecreaseScore}>
        -
      </button>
    </div>
  );
};

export default Score;
