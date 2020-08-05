"use strict";

function ForumHeader(props) {
  console.log(props);
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-default"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "React Forum"))));
}