// ---Instructions:---
// Array combinations
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
// See test cases for more examples.
// Good luck!

// ---P.R.E.P.---
// take in arr of arrs, only arrs, no empty arrs
// return a num that represents the total num of unique arr combos
// Examples
// [[1,2],[4],[5,6]] => 4
// [[1,2],[4,4],[5,6,6]] => 4
// [[1,2],[3,4],[5,6]] => 8
// [[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]] => 72

// ---Submitted Solution:---
// brute force (first try)
// function solve(arr) {
//     return arr.map(e => [...new Set(e)]).reduce((acc, elem) => acc * elem.length, 1)
// }

function solve(arr) {
    return arr.reduce((a, c) => a * new Set(c).size, 1)
}

// ---Test cases:---
console.log(solve([[1,2],[4],[5,6]])) // Answer: 4
console.log(solve([[1,2],[4,4],[5,6,6]])) // Answer: 4
console.log(solve([[1,2],[3,4],[5,6]])) // Answer: 8
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])) // Answer: 72
