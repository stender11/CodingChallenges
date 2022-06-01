// ---Instructions:---
// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// ---Submitted Solution:---
const countSheep = num => {
    let str = ""
    for (i = 1; i <= num; i++) {
        str = str + `${i} sheep...`
    }
    return str
}

// ---Test cases:---
console.log(countSheep(3))
