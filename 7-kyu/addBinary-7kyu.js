// ---Instructions:---
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// ---P.R.E.P.---
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// ---Submitted Solution:---
function addBinary(num1, num2) {
    return (num1 + num2).toString(2)
}

// ---Test cases:---
console.log(addBinary(1, 1)); // "10"
console.log(addBinary(5, 9)); // "1110"
console.log(addBinary(7, 49)); // "111000"
