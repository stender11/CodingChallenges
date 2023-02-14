// ---Instructions:---
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// ---P.R.E.P.---
// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// ---Submitted Solution:---
const high = str => {
    const wordsArr = str.split(" ");
    const valuesArr = wordsArr.map(word => word.split("").map(char => char.charCodeAt() - 96).reduce((pv, cv) => cv + pv), 0);

    return wordsArr[valuesArr.indexOf(Math.max(...valuesArr))];
};

// ---Test cases:---
console.log(high('man i need a taxi up to ubud')); // 'taxi'
console.log(high('what time are we climbing up the volcano')); // 'volcano'
console.log(high('take me to semynak')); // 'semynak'
console.log(high('aa b')); // 'aa'
console.log(high('b aa')); // 'b'
console.log(high('bb d')); // 'bb'
console.log(high('d bb')); // 'd'
console.log(high('aaa b')); // 'aaa'
