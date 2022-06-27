"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftpad = void 0;

var leftpad = function leftpad(str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
};

exports.leftpad = leftpad;