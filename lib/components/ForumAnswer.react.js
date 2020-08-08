"use strict";

function ForumAnswer(props) {
  var answer = props.answer;
  var classes = !answer.correct ? "card-body" : " card-body bg-success";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card card-default"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes
  }, answer.body, /*#__PURE__*/React.createElement("div", {
    className: "float-right"
  }, /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return props.onMarkCorrect(props.id);
    },
    href: "#"
  }, "Mark as correct"))))), /*#__PURE__*/React.createElement("br", null));
}