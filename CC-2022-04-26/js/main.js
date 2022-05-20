// ---Instructions:---
// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.

// ---Submitted Solution:---
function preFizz(n) {
    let arr = []
    for (i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

// full FizzBuzz in one line
// for (let i = 1; i < 100;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)

// ---Test cases:---
console.log(preFizz(4))
