// ---Instructions:---
//bracket notation for objects!  You can check if a property exists and increment a value tied to that property HINT HINT!
// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
// Hint: loop through the characters and use bracket notation to add one to the value for that letter in the object or add that letter as a property of the object with the value of 1

// ---P.R.E.P.---
// take in a string of letters, may be an empty string, strings only
// return an object with a count of all the letters in the string, empty string returns empty object
// Examples:
// "aba" ---> { a: 2, b: 1 }
// "stradivarius" ---> {"s": 2, "t": 1, "r": 2, "a": 2, "d": 1, "i": 2, "v": 1, "u": 1}
// "" -----> {}

// ---Submitted Solution:---
function count(string) {
    let counter = {};
    for (const letter of string) {
        counter[letter] ? counter[letter] ++ : counter[letter] = 1;
    };
    return counter;
};

// ---Test cases:---
console.log(count("aba")); // { a: 2, b: 1 }
console.log(count("stradivarius"))
console.log(count("")); // {}
