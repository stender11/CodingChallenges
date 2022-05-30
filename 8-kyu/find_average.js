// ---Instructions:---
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// ---Submitted Solution:---
function find_average(arr) {
  let sumForAverage = arr.reduce((acc, cv) => cv + acc, 0)
  return arr == false ? 0 : sumForAverage / arr.length
}

// ---Test cases:---
console.log(find_average([1,2,3,4]))
