// ---Instructions:---
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// PREP
// P: arr of str and num
// R: return sum
// E, P: 
// function sumMix(arr) {
//     convert to num and sum values
//     return sum
// }

// ---Submitted Solution:---
const sumMix = arr => arr.reduce((acc, cv) => Number(cv) + Number(acc), 0)

// ---Test cases:---
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42
