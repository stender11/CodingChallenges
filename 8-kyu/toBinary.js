// ---Instructions:---
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// ---Submitted Solution:---
function toBinary(n){
    return +n.toString(2)
}

// ---Test cases:---
console.log(toBinary(1)) // should return 1
console.log(toBinary(5)) // should return 101
console.log(toBinary(11)) // should return 1011
