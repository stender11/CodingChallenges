// ---Instructions:---
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// ---P.R.E.P.---
// take in arr of nums and number
// returns arr of even nums, length of arr is number from the end of the evens arr
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// ---Submitted Solution:---
function evenNumbers(array, number) {
    return array.filter(e => e % 2 === 0).slice(-number)
}

// ---Test cases:---
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // Answer: [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // Answer: [-8, 26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) // Answer: [6] 
