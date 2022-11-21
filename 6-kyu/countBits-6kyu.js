// ---Instructions:---
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// ---P.R.E.P.---
// take in num, only nums
// return num that represents the number of bits (in binary) of the args num
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// ---Submitted Solution:---
function countBits(num) {
    return eval(num.toString(2).split("").join("+"))
}

// ---Test cases:---
console.log(countBits(1234)); // 5
console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2
