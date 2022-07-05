// ---Instructions:---
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// ---Submitted Solution:---
function powersOfTwo(n){
  let arr =[]
  for (i = 0; i <= n; i++) {
    arr.push(2 ** i)
  }
  return arr
}

// ---Test cases:---
console.log(powersOfTwo(0)) // ==> [1]        # [2^0]
console.log(powersOfTwo(1)) // ==> [1, 2]     # [2^0, 2^1]
console.log(powersOfTwo(2)) // ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
