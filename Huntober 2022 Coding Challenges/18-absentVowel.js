// ---Instructions:---
// Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.
// Hint: loop through array of vowels and check for the indexOf in the original string. If -1 you found the missing one!  

// ---P.R.E.P.---
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// ---Submitted Solution:---
function absentVowel(x) {
    const vowelsArr = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < vowelsArr.length; i++) {
        if (x.indexOf(vowelsArr[i]) === -1) {
            return i
        }
    }
}

// more concise solution
// function absentVowel(x) {
//     return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
// }

// ---Test cases:---
console.log(absentVowel("John Doe hs seven red pples under his bsket")); // 0
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles")); // 3
