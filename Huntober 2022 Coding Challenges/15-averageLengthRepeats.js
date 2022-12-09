// ---Instructions:---
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
// If the average length is not an integer, use Math.round().
// The input array's length > 1
// Hint: Find the average off all the letters (don't get hung up on individual words add them all together) then map while repeating the characters the average amounts
// From: https://www.codewars.com/kata/5a430359e1ce0e35540000b1/

// ---P.R.E.P.---
// takes in an arr of strings only, arrays have a length of at least 1
// return arr with strings repeated as much as the average of the string length in the last array
// A few examples:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

// ---Submitted Solution:---
function averageLength(arr) {
    const average = Math.round(arr.join("").length / arr.length)
    return arr.map(str => str[0].repeat(average))
}

// ---Test cases:---
console.log(averageLength(['u', 'y'])); // ['u', 'y']
console.log(averageLength(['aa', 'bbb', 'cccc'])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(['aa', 'bb', 'ddd', 'eee'])); // ['aaa', 'bbb', 'ddd', 'eee']
