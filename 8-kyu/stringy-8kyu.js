// ---Instructions:---
// Codewars 8kyu
// Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.

// ---P.R.E.P.---
// The size will always be positive and will only use whole numbers.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.

// ---Submitted Solution:---
function stringy(size) {
    let str = "";

    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) str += "1";
        if (i % 2 !== 0) str += "0";
    }

    return str;
}

// ---Test cases:---
console.log(stringy(9),"101010101")
console.log(stringy(1),"1")
console.log(stringy(4),"1010")
