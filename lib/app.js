"use strict";

//entry point
// var emitter = new EventEmitter();
// emitter.on("STARTED", function () {
//   console.log("started app.");
// });
// emitter.on("STARTED", function () {
//   console.log("started app again.");
// });
// emitter.emit("STARTED");
ForumDispatcher.register(function (action) {
  //console.log(action);
  console.log(action.type);
});
ForumDispatcher.dispatch({
  name: "adisha",
  type: "BHO"
});
ForumDispatcher.dispatch({
  name: "sha",
  type: "MEOW"
});
ReactDOM.render( /*#__PURE__*/React.createElement(Forum, null), document.getElementById("forum"));