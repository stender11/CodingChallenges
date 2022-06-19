// ---Instructions:---
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

// ---Submitted Solution:---
function distinct(a) {
    return a.filter((e, i) => a.indexOf(e) === i)
} 

// using the Set object
// function distinct(a) {
//     return [...new Set(a)]
// }

// ---Test cases:---
console.log(distinct([1,1,2])) // [1,2]
