// ---Instructions:---
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// ---Submitted Solution:---
function between(a, b) {
  let arr = []
  for (i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

// ---Test cases:---
console.log(between(1, 4)) // --> [1, 2, 3, 4]
