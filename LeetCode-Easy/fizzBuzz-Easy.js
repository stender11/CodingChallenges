// ---Instructions:---
// LeetCode 412 - Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Constraints:
// 1 <= n <= 104

// ---P.R.E.P.---
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// ---Submitted Solution:---
const fizzBuzz = function(n) {
    let strArr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) strArr.push("FizzBuzz");
        else if (i % 3 === 0) strArr.push("Fizz");
        else if (i % 5 === 0) strArr.push("Buzz");
        else strArr.push(`${i}`);
    }

    return strArr;
};

// ---Test cases:---
console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
