"use strict";

function EventEmitter() {
  this._events = {}; //stores event_type: [listner, fns]
}

EventEmitter.prototype.on = function (type, listener) {
  this._events[type] = this._events[type] || [];
  this._events[type].push(listener);
};

EventEmitter.prototype.emit = function (type) {
  if (this._events[type]) {
    this._events[type].forEach(function (listener) {
      listener();
    });
  }
};

EventEmitter.prototype.remove = function (type, listener) {
  if (this._events[type]) {
    this._events[type].splice(this._events[type].indexOf(listener), 1);
  }
};

// let event_emitter = new EventEmitter();

// event_emitter.on("START", function () {
//   console.log("started the app");
// });

// event_emitter.on("START", function () {
//   console.log("started the app 2");
// });

// event_emitter.emit("START");
