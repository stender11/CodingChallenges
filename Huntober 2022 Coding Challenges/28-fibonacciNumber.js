// ---Instructions:---
// LeetCode 509 - Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// Constraints:
// 0 <= n <= 30
// Hint:  Create an array [0,1] and then a loop that starts at i =2. Loop all the way to n (the num passed in) add the previous two numbers to get the next number to put in the array. At the end just return the last number

// ---P.R.E.P.---
// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 
// ---Submitted Solution:---
const fib = function(n) {
    let fibArr = [0, 1]
    
    if (n < 2) {
        return n
    }

    for (let i = 2; i <= n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }

    return fibArr[fibArr.length - 1]
}

// ---Test cases:---
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(9)); // 34
console.log(fib(17)); // 1597
