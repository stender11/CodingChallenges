// ---Instructions:---
// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 
// Hint: loop through string adding current value to previous equals a reversed string
// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// ---P.R.E.P.---

// ---Submitted Solution:---
function manualReverse(str) {
    let reversed = ""
    for (let letter of str) {
        reversed = letter + reversed
    }
    return reversed
}

// ---Test cases:---
console.log(manualReverse("Crab Diver")); // "reviD barC"
console.log(manualReverse("Cab Driver")); // "revirD baC"
console.log(manualReverse("")); // ""
