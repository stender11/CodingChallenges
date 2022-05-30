// ---Instructions:---
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// ---Submitted Solution:---
function sumArray(array) {
    if (array == null) {
        return 0
    }
    let solutionArr = array.sort(function(a, b) {return a - b})
    solutionArr.shift()
    solutionArr.pop()
    return solutionArr.reduce((acc, cv) => cv + acc, 0)
}

// Better solution (not mine)
// function sumArray(array) {
//     return Array.isArray(array) && array.length > 1
//       ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//       : 0
//   }

// ---Test cases:---
console.log(sumArray([ -6, -20, -1, -10, -12 ]))
