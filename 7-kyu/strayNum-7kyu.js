// ---Instructions:---
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// ---P.R.E.P.---
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// ---Submitted Solution:---
const stray = arr => {
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))[0];
};

// ---Test cases:---
console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(stray([1, 1, 2])); // 2
console.log(stray([1, 2, 1])); // 2
console.log(stray([2, 1, 1])); // 2
console.log(stray([0])); // 0
