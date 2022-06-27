// ---Instructions:---
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// ---Submitted Solution:---
const problem = x => typeof x === "string" ? "Error" : (x * 50) + 6

// ---Test cases:---
console.log(problem(1)) // -> 56
