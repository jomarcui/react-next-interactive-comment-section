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
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  switch (true) {
    case diffInDays < 2:
      return "a moment ago";
    case diffInDays > 1 && diffInDays < 8:
      return `${diffInDays} ${plural("day", diffInDays > 1)} ago`;
    case diffInDays > 7 && diffInDays < 31:
      const weeks = Math.round(diffInDays / 7);
      return `${weeks} ${plural("week", weeks > 1)} ago`;
    default:
      const months = Math.round(diffInDays / 30);
      return `${months} ${plural("month", months > 1)} ago`;
  }
};

const plural = (str: string, isPlural: boolean) =>
  `${(str += isPlural ? "s" : "")}`;
