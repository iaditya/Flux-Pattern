//entry point

ForumDispatcher.register(function (action) {
  switch (action.type) {
    case "ANSWER_MARKED_CORRECT":
      ForumStore.markAnswerCorrect(action.data);
      break;
    case "NEW_ANSWER_ADDED":
      ForumStore.addNewAnswer(action.data);
      break;
  }
});

ReactDOM.render(<Forum />, document.getElementById("forum"));
