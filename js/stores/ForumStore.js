var allAnswers = {
  1: { body: "option 1", correct: false },
  2: { body: "option 2", correct: false },
  3: { body: "option 3", correct: false },
};

var ForumStore = new EventEmitter(); //OR Store

ForumStore.emitChange = function () {
  this.emit("CHANGE");
};

ForumStore.onListenChange = function (listener) {
  this.on("CHANGE", listener);
};

ForumStore.allAnswers = function () {
  return allAnswers;
};

ForumStore.markAnswerCorrect = function (id) {
  for (let key in allAnswers) {
    allAnswers[key]["correct"] = false;
  }
  allAnswers[id]["correct"] = true;
  ForumStore.emitChange();
};

ForumStore.addNewAnswer = function (answer) {
  allAnswers[Object.keys(allAnswers).length + 1] = {
    body: answer,
    correct: false,
  };
  ForumStore.emitChange();
};

//Dispatcher stores this single function to run everytime when any action dispatches.
//here based on action type we descide which emitter function to call [means where to store].
ForumDispatcher.register(function (action) {
  switch (action.type) {
    case ForumConstants.ANSWER_MARKED_CORRECT:
      ForumStore.markAnswerCorrect(action.data);
      break;
    case ForumConstants.NEW_ANSWER_ADDED:
      ForumStore.addNewAnswer(action.data);
      break;
  }
});
