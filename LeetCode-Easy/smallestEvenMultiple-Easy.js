// ---Instructions:---
// LeetCode 2413 - Smallest Even Multiple
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
// Constraints:
// 1 <= n <= 150

// ---P.R.E.P.---
// Example 1:
// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:
// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

// ---Submitted Solution:---
const smallestEvenMultiple = num => num % 2 === 0 ? num : num * 2

// ---Test cases:---
console.log(smallestEvenMultiple(5)); // 10
console.log(smallestEvenMultiple(6)); // 6
console.log(smallestEvenMultiple(11)); // 22
