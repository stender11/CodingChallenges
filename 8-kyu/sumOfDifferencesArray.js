// ---Instructions:---
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// ---Submitted Solution:---
// function sumOfDifferences(arr) {
//     arr.sort((a, b) => b - a)
//     let sum = 0
//     for (i = 0; i < arr.length - 1; i++) {
//         sum += arr[i] - arr[i + 1]
//     }
//     return sum
// }

// alternate using map/reduce
// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);

// best practice (since sum = 13(-11+11)(-7+7)(-5+5)(-3+3)(-2+2)-1, all but the max and min values cancel each other out, so this is simpler)
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// ---Test cases:---
console.log(sumOfDifferences([1, 2, 10])) // 9
console.log(sumOfDifferences([-3, -2, -1])) // 2
console.log(sumOfDifferences([1, 2, 3, 5, 7, 11, 13])) // 12
