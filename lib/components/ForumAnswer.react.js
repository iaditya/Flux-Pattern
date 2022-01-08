"use strict";

function ForumAnswer(props) {
  var answer = props.answer;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card card-default"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, answer.body, /*#__PURE__*/React.createElement("span", {
    className: "btn btn-sm btn-primary float-right",
    onClick: function onClick() {
      return props.onMarkCorrect(props.id);
    }
  }, "Mark Correct"))), /*#__PURE__*/React.createElement("br", null));
}