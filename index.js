'use strict';

var React = require('react');
var newlineRegex = /(\r\n|\n\r|\r|\n)/g;

module.exports = function(str) {
  if (typeof str === 'number') {
    return str;
  } else if (typeof str !== 'string') {
    return '';
  }
  
  var current = 0;

  return str.split(newlineRegex).map(function(line, index) {
    if (line.match(newlineRegex)) {
      if (current < 2) {
        React.createElement('br', { key: index });
        current++;
      } else {
        current = 0;
        return false;
      }
    } else {
      return line;
    }
  });
};
