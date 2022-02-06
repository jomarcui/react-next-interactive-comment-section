export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Comment[];
};

export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
