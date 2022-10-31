// ---Instructions:---
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// The combine function should be a good citizen, so should not mutate the input objects.

// ---P.R.E.P.---
// take in multiple objects with properties only containing nums
// return object with combined values of all argument objects
// Example:
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// ---Submitted Solution:---
const combine = (...objs) => objs.reduce((acc, item) => {
    for (let key in item) {
        if (acc[key]) {
            acc[key] += item[key]
        } else {
            acc[key] = item[key]
        }
    }
    return acc
}, {})

// ---Test cases:---
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

console.log(combine(objA, objB)) // Answer: { a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC)) // Answer: { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine(objA, objB, objC)) // Answer: { a: 18, b: 20, c: 36, d: 14, e: 8 }
console.log(combine(objA, objC, objD)) // Answer: { a: 15, b: 20, c: 33, d: 11, e: 8 }
console.log(combine({}, {}, {})) // Answer: {}
console.log(combine(objA, objC, {})) // Answer: { a: 15, b: 20, c: 30, d: 11, e: 8 }
