// ---Instructions:---
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// ---Submitted Solution:---
function findUniq(arr) {
    return arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e))[0]
}

// best practice solution from codewars
// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
//   }

// ---Test cases:---
console.log(findUniq([ 1, 0, 0 ])) // 1
console.log(findUniq([ 0, 1, 0 ])) // 1
console.log(findUniq([ 0, 0, 1 ])) // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // 2
console.log(findUniq([ 1, 1, 2, 1, 1 ])) // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])) // 10
