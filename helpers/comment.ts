export const parseContent = (content: string) => {
  const words = content.split(" ");
  const replyingTo = content.match(/@\S+/g) || [];

  const newContent = words.map((word) => {
    if (replyingTo.includes(word)) {
      return `<span class="replyingTo">${word}</span>`;
    }

    return `${word}`;
  });

  return newContent.join(" ");
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

const plural = (str: string, isPlural: boolean) =>
  `${(str += isPlural ? "s" : "")}`;
