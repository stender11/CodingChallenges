// ---Instructions:---
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// ---Submitted Solution:---
// function solution(pairs) {
//     return Object.keys(pairs).map(e => {return `${e} = ${pairs[e]}`}).join(',')
// }

function solution(pairs) {
    return Object.entries(pairs).map(e => `${e[0]} = ${e[1]}`).join(",")
}

// ---Test cases:---
console.log(solution({a: 1, b: '2'})) // "a = 1,b = 2"
console.log(solution({a: 5, b: '2', d: "icee"})) // "a = 5,b = 2,d = icee"
