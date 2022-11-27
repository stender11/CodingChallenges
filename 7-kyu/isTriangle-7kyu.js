// ---Instructions:---
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// ---P.R.E.P.---
// take in 3 nums, only positive ints
// return boolean representing if nums can be sides of a tringle or not
// Example:
// a = 1, b = 2, c = 2
// 1 + 2 > 2, 1 + 2 > 2, 2 + 2 > 1 ==> true

// ---Submitted Solution:---
function isTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a)
}

// better solution from codewars
// const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2

// ---Test cases:---
console.log(isTriangle(1,2,2)); // true
console.log(isTriangle(7,2,2)); // false
