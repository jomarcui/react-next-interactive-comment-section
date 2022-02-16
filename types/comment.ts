export type Comment = {
  content: string;
  createdAt: string;
  id: string;
  replies?: Comment[];
  replyingTo?: string,
  score: number;
  user: User;
};

export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
