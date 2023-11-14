#!/usr/bin/node
// Prints the number of argu already printed and the new argu value.

let i = 0;
exports.logMe = function (item) {
  console.log(i+ ': ' + item);
  i++;
};
