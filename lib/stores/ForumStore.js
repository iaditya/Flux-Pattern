"use strict";

var answersData = {
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

ForumStore.addChangeListener = function (listener) {
  this.on("Change", listener);
};

ForumStore.onEmit = function () {
  this.emit("Change");
};

ForumStore.getAnswers = function () {
  return answersData;
};

ForumStore.addNewAnswer = function (answer) {
  answersData[Object.keys(answersData).length + 1] = {
    body: answer,
    correct: false
  };
  this.onEmit();
};

ForumStore.markAsCorrect = function (id) {
  for (var key in answersData) {
    answersData[key].correct = false;
  }

  answersData[id].correct = true;
  this.onEmit();
};

ForumDispatcher.register(function (action) {
  switch (action.actionType) {
    case "ANSWER_ADDED":
      console.log("answer added");
      ForumStore.addNewAnswer(action.answer);
      break;

    case "ANSWER_MARKED_CORRECT":
      console.log("marked correct");
      ForumStore.markAsCorrect(action.id);
      break;
  }
});