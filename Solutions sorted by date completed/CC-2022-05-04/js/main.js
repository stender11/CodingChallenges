// ---Instructions:---
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// ---Submitted Solution:---
function countPositivesSumNegatives(input) {
  let arr = []
  if (input == null) {
    return []
  } else if (input.length < 1 ) {
      return []
    }
  arr[0] = input.filter(x => x > 0).length
  arr[1] = input.filter(x => x < 0).reduce((acc, c) => acc + c , 0)
  return arr
}

// ---Test cases:---
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))      // [8, -50]
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]

