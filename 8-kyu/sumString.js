// ---Instructions:---
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// ---Submitted Solution:---
const sumStr = (a,b) => String(Number(a) + Number(b))

// ---Test cases:---
console.log(sumStr("4",  "5")) // --> "9"
console.log(sumStr("34", "5")) // --> "39"
console.log(sumStr("", "")) // --> "0"
console.log(sumStr("2", "")) // --> "2"
console.log(sumStr("-5", "3")) // --> "-2"
