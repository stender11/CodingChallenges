// ---Instructions:---
// Given a string of characters, return the character that appears the most often.
// No String or Array Methods (well brute force it first, but then no methods)! 
// Hint: Use the "hash map" pattern from previous questions aka put each character in an object with its count and then find the highest by looping through

// ---P.R.E.P.---
// takes in a str, only str, can be empty
// returns letter that is repeated the most in the string
// Example:
// "Hello World!" ===> "l"

// ---Submitted Solution:---
function mostChar(str) {
    let charMap = {},
        count = 0,
        maxChar = null;

    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    };

    for (const char in charMap) {
        if (charMap[char] > count) {
            count = charMap[char];
            maxChar = char;
        };
    };

    return maxChar;
};

// with methods:
// maxChar =  Math.max(...Object.values(charMap))
// return Object.keys(charMap).find(key => charMap[key] === maxChar)

// ---Test cases:---
console.log(mostChar("ajfngajzzklsfbnzzzzzzaabbbjkazsfznzh")); // "z"
console.log(mostChar("Hello World!")); // "l"
console.log(mostChar("")); // ""
