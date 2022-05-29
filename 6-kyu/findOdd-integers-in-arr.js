// ---Instructions:---
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// ---Submitted Solution:---
function findOdd(arr) {
  return arr.find(elem => arr.filter(int => int == elem).length % 2)
}

// ---Test cases:---
console.log(findOdd([7])) // should return 7, because it occurs 1 time (which is odd).
console.log(findOdd([0])) // should return 0, because it occurs 1 time (which is odd).
console.log(findOdd([1,1,2])) // should return 2, because it occurs 1 time (which is odd).
console.log(findOdd([0,1,0,1,0])) // should return 0, because it occurs 3 times (which is odd).
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) // should return 4, it appears 1 time (which is odd).
