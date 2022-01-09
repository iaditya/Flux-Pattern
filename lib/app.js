"use strict";

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
ReactDOM.render( /*#__PURE__*/React.createElement(Forum, null), document.getElementById("forum"));