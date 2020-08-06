"use strict";

function ForumAnswers(props) {
  var allAnswers = props.allAnswers;
  var answers = [];

  for (var key in allAnswers) {
    answers.push( /*#__PURE__*/React.createElement(ForumAnswer, {
      key: key,
      id: key,
      answer: allAnswers[key]
    }));
  }

  return /*#__PURE__*/React.createElement("div", null, answers);
}