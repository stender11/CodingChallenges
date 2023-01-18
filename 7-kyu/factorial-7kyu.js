// ---Instructions:---
// Please use recursion! We'll identify the base cases and walk through a recursive solution together during standup!
// Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The value of 0! is 1.
// #Your task
// You have to create the function factorial that receives n and returns n!. You have to use recursion.
// Hint:  Look at our fib solution. What are the base cases for factorial?

// ---P.R.E.P.---
//Example 1
// n = 5, 5! = 5 * 4 * 3 * 2 * 1 = 120
// output = 120
//Example 2
// n = 0, 0! = 1 = 1
// output = 1
//Example 3
// n = 3, 3! = 3 * 2 * 1 = 6
// output = 6

// ---Submitted Solution:---
const factorial = num => {
    if (num < 2) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    };
};

// ---Test cases:---
console.log(factorial(5)); // 120
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040
