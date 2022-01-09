"use strict";

var ForumActions = {
  onAddAnswer: function onAddAnswer(answer) {
    ForumDispatcher.dispatch({
      type: ForumConstants.NEW_ANSWER_ADDED,
      data: answer
    });
  },
  onMarkCorrect: function onMarkCorrect(id) {
    ForumDispatcher.dispatch({
      type: ForumConstants.ANSWER_MARKED_CORRECT,
      data: id
    });
  }
};