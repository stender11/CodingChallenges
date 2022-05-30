// ---Instructions:---
// Code as fast as you can! You need to double the integer and return it.
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.

// ---Submitted Solution:---
function invert(array) {
    return array.map(e => e * -1);
}

// ---Test cases:---
console.log(invert([1,2,3,4,5])) // [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])) // [-1,2,-3,4,-5]
console.log(invert([])) // []
