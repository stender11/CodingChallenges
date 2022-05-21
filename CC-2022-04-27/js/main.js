// ---Instructions:---
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// ---Submitted Solution:---
const digitize = n => n.toString().split("").map(Number).reverse()

// ---Test cases:---
console.log(digitize(348597)) // [7,9,5,8,4,3]
console.log(digitize(0)) // 0
