const SCORE_OPERAND = 1;

type ComponentsScoreProps = {
  commentId: string;
  replyingTo: string | null;
  score: number;
  setCommentScore: (
    commentId: string,
    isReply: boolean,
    newScore: number
  ) => void;
};

const ComponentsScore = ({
  commentId,
  replyingTo,
  score,
  setCommentScore,
}: ComponentsScoreProps) => {
  const handleClickIncreaseScore = () => {
    const increment = true;
    setScore(increment);
  };

  const handleClickDecreaseScore = () => {
    const increment = true;
    setScore(!increment);
  };

  const setScore = (increment = true) => {
    const isReply = !!replyingTo;

    let newScore = score;

    if (increment) {
      newScore += SCORE_OPERAND;
    } else {
      newScore -= SCORE_OPERAND;
    }

    setCommentScore(commentId, isReply, newScore);
  };

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

export default ComponentsScore;
