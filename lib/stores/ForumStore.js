"use strict";

var allAnswers = {
  1: {
    body: "option 1",
    correct: false
  },
  2: {
    body: "option 2",
    correct: false
  },
  3: {
    body: "option 3",
    correct: false
  }
};
var ForumStore = new EventEmitter();

ForumStore.allAnswers = function () {
  return allAnswers;
};

ForumStore.markAnswerCorrect = function (id) {
  for (var key in allAnswers) {
    allAnswers[key]["correct"] = false;
  }

  allAnswers[id]["correct"] = true;
};

ForumStore.addNewAnswer = function (answer) {
  allAnswers[Object.keys(allAnswers).length + 1] = {
    body: answer,
    correct: false
  };
};