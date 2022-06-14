// ---Instructions:---
// Now you have to write a function that takes an argument and returns the square of it.

// PREP
// P: one integer, square it
// R: return squared integer
// E:
// function square(num) {
//   return num ** 2
// }
// P:
// function declaration with one argument which is a number
// return number squared
// called by code tester

// ---Submitted Solution:---
const square = num => Math.pow(num, 2)

// ---Test cases:---
console.log(square(3)) // 9
console.log(square(12)) // 144
