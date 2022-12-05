// ---Instructions:---
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.
// Return as a number.

// ---P.R.E.P.---

// ---Submitted Solution:---
function divCon(arr) {
    const strNums = arr.filter(num => typeof num === "string").reduce((pV, cV) => +cV + +pV, 0)
    const numNums = arr.filter(num => typeof num === "number").reduce((pV, cV) => cV + pV, 0)
    return numNums - strNums
}

// ---Test cases:---
console.log(divCon([9, 3, '7', '3'])); // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 13
