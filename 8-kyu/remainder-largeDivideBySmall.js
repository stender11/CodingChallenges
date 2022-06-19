// ---Instructions:---
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// ---Submitted Solution:---
const remainder = (n, m) => Math.max(n, m) % Math.min(n, m)

// ---Test cases:---
console.log(remainder(13, 72)) // 7
