"use strict";

function ForumAnswer(props) {
  var answer = props.answer;
  var markAnswer;

  if (!answer.correct) {
    markAnswer = /*#__PURE__*/React.createElement("span", {
      className: "btn btn-sm btn-primary float-right",
      onClick: function onClick() {
        return props.onMarkCorrect(props.id);
      }
    }, "Mark Correct");
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card card-default"
  }, /*#__PURE__*/React.createElement("div", {
    className: !!answer.correct ? "card-body bg-success text-white" : "card-body"
  }, answer.body, markAnswer)), /*#__PURE__*/React.createElement("br", null));
}