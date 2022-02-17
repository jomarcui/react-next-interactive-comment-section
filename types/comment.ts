export type Comment = {
  content: string;
  createdAt: string;
  id: string;
  replies: Reply[];
  score: number;
  user: User;
};

export type Reply = {
  content: string;
  createdAt: string;
  id: string;
  replyingTo: string,
  score: number;
  user: User;
}

export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
