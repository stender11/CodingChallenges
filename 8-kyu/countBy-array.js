// ---Instructions:---
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).

// ---Submitted Solution:---
function countBy(x, n) {
    let arr = [];
    for (i = x; i <= x * n; i += x) {
        arr.push(i)
    }
    return arr;
}

// ---Test cases:---
console.log(countBy(1, 10)) // === [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)) // === [2,4,6,8,10]
