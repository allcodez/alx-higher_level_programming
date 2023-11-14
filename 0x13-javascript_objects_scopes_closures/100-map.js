#!/usr/bin/node
// Script that imports an arr and computes a new arr.

const originalList = require('./100-data').list;
console.log(originalList);

const mappedList = originalList.map (function (e, index) {
    return (e * index);
});
console.log(mappedList);
