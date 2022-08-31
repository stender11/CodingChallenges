// ---Instructions:---
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ---Submitted Solution:---
function XO(str) {
    const xCount = str.split("").filter(e => e.toLowerCase() === "x").length
    const oCount = str.split("").filter(e => e.toLowerCase() === "o").length
    return xCount === oCount
}

// ---Test cases:---
console.log(XO('xo')) // true
console.log(XO("xxOo")) // true
console.log(XO("xxxm")) // false
console.log(XO("Oo")) // false
console.log(XO("ooom")) // false
