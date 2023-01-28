// ---Instructions:---
// Codewars 7 kyu - Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// ---P.R.E.P.---
// 0 < input < 12
// example: 5! = 5 * 4 * 3 * 2 * 1 = 120
// By convention the value of 0! is 1.

// ---Submitted Solution:---
const factorial = num => {
    if (!(num >= 0 && num <= 12)) {
        throw new RangeError("The number must be between 0 and 12.");
    };
    
    if (num < 2) {
        return 1;
    } else {
        return num * factorial(num - 1);
    };
};

// ---Test cases:---
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(13)); // RangeError
