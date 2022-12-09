// ---Instructions:---
// One we have seen before as we transition away from katas... Make sure you talk through prep and Big O! 
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// ---P.R.E.P.---
// takes in a number, only positive integers
// returns a count from 1 to the number, replacing multiples of 2, 3, and 6 with "Fizz", "Buzz", and "FizzBuzz" respectively
// Example:
// input = 7     ===>    output = 1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz", 7

// ---Submitted Solution:---
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 6 === 0) {
            console.log("FizzBuzz")
        } else if (i % 2 === 0) {
            console.log("Fizz")
        } else if (i % 3 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
    return "That's all folks!"
}

// ---Test cases:---
console.log(fizzBuzz(42)); // 1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz", 7, etc.
console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(12)); // 1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz", 7, "Fizz", "Buzz", "Fizz", 11, "FizzBuzz"
