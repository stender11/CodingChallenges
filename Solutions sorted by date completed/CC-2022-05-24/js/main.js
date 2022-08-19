// ---Instructions:---
// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:


// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// ---Submitted Solution:---
// function xor(a, b) {
//   if (a === true && b === true) {
//     return false
//   } else if (a === true) {
//     return true
//   } else if (b === true) {
//     return true
//   } else {
//     return false
//   }
// }

// better solution
// const xor = (a, b) => a != b

// ---Test cases:---
// console.log(xor(false, false)) // == false // since both are false
// console.log(xor(true, false)) // == true // exactly one of the two expressions are true
// console.log(xor(false, true)) // == true // exactly one of the two expressions are true
// console.log(xor(true, true)) // == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.


// ---Instructions:---
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// ---Submitted Solution:---
function squareOrSquareRoot(array) {
  return array.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : e * e)
}

// ---Test cases:---
console.log(squareOrSquareRoot([4,3,9,7,2,1])) // -> [2,9,3,49,4,1]

