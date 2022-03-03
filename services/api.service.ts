import * as Types from "../types/comment";

const apiService = {
  postReply(
    commentId: string,
    comments: Types.Comment[],
    replyText: string,
    replyingTo: string,
    currentUser: Types.User
  ) {
    const reply: Types.Comment = {
      content: replyText,
      createdAt: new Date(Date.now()).toLocaleDateString(),
      id: new Date().getTime().toString(),
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
