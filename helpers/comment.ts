const deconstructWord = (word: string) => {
  const pattern = /[!?.,;:]\s*$/;
  const patternFound = pattern.test(word);

  if (patternFound) {
    return [word.slice(0, -1), word.slice(-1)];
  }

  return [word, ""];
};

export const displayHowOld = (createdAt: Date) => {
  const createdDate = new Date(createdAt);
  const now = new Date(Date.now());

  const diffInMs = now.getTime() - createdDate.getTime();

  const seconds = Math.round(diffInMs / 1000);
  const minutes = Math.round(diffInMs / (1000 * 60));
  const hours = Math.round(diffInMs / (1000 * 60 * 60));
  const days = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  if (seconds < 60) return "a few seconds ago";
  else if (minutes < 60)
    return `${minutes} ${plural("minute", minutes > 1)} ago`;
  else if (hours < 24) return `${hours} ${plural("hour", minutes > 1)} ago`;
  else return `${days} ${plural("day", minutes > 1)} ago`;
};

export const parseContent = (content: string) => {
  const words = content.split(" ");
  const replyingTo = content.match(/@\S+/g) || [];

  const newContent = words.map((word) => {
    if (replyingTo.includes(word)) {
      const wordDeconstructed = deconstructWord(word);

      return `<span class="replyingTo">${wordDeconstructed[0]}</span>${wordDeconstructed[1]}`;
    }

    return `${word}`;
  });

  return newContent.join(" ");
};

const plural = (str: string, isPlural: boolean) =>
  `${(str += isPlural ? "s" : "")}`;
