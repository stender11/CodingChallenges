// ---Instructions:---
// Codewars 5kyu - Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// ---P.R.E.P.---
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ---Submitted Solution:---
const pigIt = str => {
    const wordsArr = str.split(" ").map(word => {
        if (/\W/.test(word)) {
            return word;
        } else {
            return word.slice(1, word.length) + word[0] + "ay";
        }
    });

    return wordsArr.join(" ");
};

// ---Test cases:---
console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // 'elloHay orldway !
console.log(pigIt("")); // ""
