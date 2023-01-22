// ---Instructions:---
// LeetCode 1281 - Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// ---P.R.E.P.---
// Constraints:
// 1 <= n <= 10^5
// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// ---Submitted Solution:---
function subtractProductAndSum(num) {
    const numArr = num.toString().split("");
    const numProduct = numArr.reduce((pv, cv) => cv * pv, 1);
    const numSum = numArr.reduce((pv, cv) => +cv + +pv, 0);

    return numProduct - numSum;
};

// ---Test cases:---
console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21
console.log(subtractProductAndSum(42)); // 2
