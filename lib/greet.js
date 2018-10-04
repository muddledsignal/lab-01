'use strict';

let greet = module.exports = {};

greet.hello = function(name) {
  if (typeof name !== 'string') { return null; }
  return `Hello, ${name}`;
};