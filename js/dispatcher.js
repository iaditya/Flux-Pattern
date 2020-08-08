function Dispatcher() {
  this._lastID = 0; //like DB auto number
  this._callbacks = {};
}

Dispatcher.prototype.register = function (callback) {
  var id = "PID_" + this._lastID++;
  this._callbacks[id] = callback;
  return id;
};

Dispatcher.prototype.dispatch = function (action) {
  for (var id in this._callbacks) {
    this._callbacks[id](action);
  }
};
