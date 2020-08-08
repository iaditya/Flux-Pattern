"use strict";

var ForumActions = {
  markAnswercorrect: function markAnswercorrect(id) {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.ANSWER_MARKED_CORRECT,
      id: id
    });
  },
  addAnswer: function addAnswer(answer) {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.ANSWER_ADDED,
      answer: answer
    });
  }
};