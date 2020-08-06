"use strict";

function ForumAnswer(props) {
  var answer = props.answer;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card card-default"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, answer.body)), /*#__PURE__*/React.createElement("br", null));
}