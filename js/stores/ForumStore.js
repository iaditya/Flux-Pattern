var answersData = {
  1: { body: "option 1", correct: false },
  2: { body: "option 2", correct: false },
  3: { body: "option 3", correct: false },
};

var ForumStore = new EventEmitter();

ForumStore.getAnswers = function () {
  return answersData;
};

ForumStore.addNewAnswer = function (answer) {
  answersData[Object.keys(answers).length + 1] = {
    body: answer,
    correct: false,
  };
};

ForumStore.markAsCorrect = function (answer) {
  for (var key in answersData) {
    answersData[key].correct = false;
  }
  answersData[answer.id] = true;
};

//
ForumDispatcher.register(function (action) {
  switch (action.actionType) {
    case "ANSWER_ADDED":
      console.log("answer added");
      ForumStore.addNewAnswer(action.answer);
      break;

    case "ANSWER_MARKED_CORRECT":
      console.log("marked correct");
      ForumStore.markAsCorrect(action.answer);
      break;
  }
});
