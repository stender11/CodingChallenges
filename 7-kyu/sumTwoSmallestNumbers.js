// ---Instructions:---
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ---Submitted Solution:---
function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((acc, cv) => cv + acc, 0)
}

// ---Test cases:---
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // "Sum should be 13"
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // "Sum should be 6"
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // "Sum should be 10"
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])) // "Sum should be 24"
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // "Sum should be 16"
