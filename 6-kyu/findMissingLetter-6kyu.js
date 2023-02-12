// ---Instructions:---
// Codewwars 6kyu - Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// (Use the English alphabet with 26 letters!)

// ---P.R.E.P.---
// Example:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// ---Submitted Solution:---
const findMissingLetter = array => {
    let codeArr = array.map(e => e.charCodeAt());

    for (let i = 0; i < codeArr.length; i++) {
        if (codeArr[i] !== codeArr[i + 1] - 1) return String.fromCharCode(codeArr[i] + 1);
    }
};

// ---Test cases:---
console.log(findMissingLetter(['a','b','c','d','f'])); // 'e'
console.log(findMissingLetter(['O','Q','R','S'])); // 'P'
