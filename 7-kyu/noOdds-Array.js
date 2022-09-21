// ---Instructions:---
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

// ---Submitted Solution:---
function noOdds(values) {
    return values.filter(e => e % 2 === 0)
}

// ---Test cases:---
console.log(noOdds([0,1])) // [0]
console.log(noOdds([0,1,2,3])) // [0,2]
