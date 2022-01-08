//entry point

var emitter = new EventEmitter();

emitter.on("STARTED", function () {
  console.log("started app.");
});

emitter.on("STARTED", function () {
  console.log("started app again.");
});

emitter.emit("STARTED");

ForumDispatcher.register(function (action) {
  console.log("ForumDispatcher action-> ", action);
});

ReactDOM.render(<Forum />, document.getElementById("forum"));
