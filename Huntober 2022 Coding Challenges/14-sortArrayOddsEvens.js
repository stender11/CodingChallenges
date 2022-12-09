// ---Instructions:---
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Hint: figure out the odd numbers and then map to replace in place

// ---P.R.E.P.---
// takes in arr of nums, always an arr of ints or an empty arr
// returns a sorted arr with evens in place, and odds sorted in ascending order
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

// ---Submitted Solution:---
function sortArray(array) {
    const oddNums = array.filter(e => e % 2 !== 0).sort((a, b) => b - a)
    return array.map(e => e % 2 === 0 ? e : oddNums.pop())
}

// ---Test cases:---
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray([])); // []
