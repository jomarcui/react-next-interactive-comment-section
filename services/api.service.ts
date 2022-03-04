import * as Types from "../types/comment";

const apiService = {
  postReply(
    commentId: number,
    comments: Types.Comment[],
    replyText: string,
    replyingTo: string,
    currentUser: Types.User
  ) {
    const reply: Types.Comment = {
      content: replyText,
      createdAt: new Date(Date.now()),
      id: new Date().getTime(),
      //replyingTo: replyingTo,
      score: 0,
      user: currentUser,
      replies: [],
    };

    const comment = comments.find((comment) => comment.id === commentId);

    if (!!comment) {
      console.log("Test");
      //comment.replies = [...comment.replies, reply];
    }
  },
};

export default apiService;
