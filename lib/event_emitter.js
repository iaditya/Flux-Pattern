"use strict";

function EventEmitter() {
  this._events = {};
}

EventEmitter.prototype.on = function (type, listner) {
  this._events[type] = this._events[type] || [];

  this._events[type].push(listner);
};

EventEmitter.prototype.emit = function (type) {
  console.log(type);

  if (this._events[type]) {
    this._events[type].forEach(function (listner) {
      listner();
    });
  }
};

EventEmitter.prototype.removeListner = function (type, listner) {
  if (this._events[type]) {
    this._events[type].splice(this._events[type].indexOf(listner), 1);
  }
};