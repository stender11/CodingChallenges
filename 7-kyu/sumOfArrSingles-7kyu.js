// ---Instructions:---
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// More examples in the test cases.

// ---P.R.E.P.---
// takes in arr of nums, all positive ints
// returns a num that is the sum of the nums that aren't repeated in the arr
// Examples:
// [4,5,7,5,4,8] => 15
// [9, 10, 19, 13, 19, 13] => 19

// ---Submitted Solution:---
function repeats(arr) {
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((pv, cv) => cv + pv, 0)
}

// ---Test cases:---
console.log(repeats([4,5,7,5,4,8])) // Answer: 15
console.log(repeats([9, 10, 19, 13, 19, 13])) // Answer:19 
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) // Answer: 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) // Answer: 22
console.log(repeats([5, 10, 19, 13, 10, 13])) // Answer: 24
