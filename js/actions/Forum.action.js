var ForumActions = {
  onAddAnswer: (answer) => {
    ForumDispatcher.dispatch({
      type: ForumConstants.NEW_ANSWER_ADDED,
      data: answer,
    });
  },
  onMarkCorrect: (id) => {
    ForumDispatcher.dispatch({
      type: ForumConstants.ANSWER_MARKED_CORRECT,
      data: id,
    });
  },
};
