export type Comment = {
  content: string;
  createdAt: Date;
  id: number;
  replies: Reply[];
  score: number;
  user: User;
};

export type Reply = {
  content: string;
  createdAt: Date;
  id: number;
  replyingTo: string;
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
