var ForumActions = {
  markAnswercorrect: function (id) {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.ANSWER_MARKED_CORRECT,
      id: id,
    });
  },
  addAnswer: function (answer) {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.ANSWER_ADDED,
      answer: answer,
    });
  },
};
