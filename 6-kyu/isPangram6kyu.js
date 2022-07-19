// ---Instructions:---
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// ---Submitted Solution:---
function isPangram(str){
    str = str.toLowerCase()
    alphaTest = "abcdefghijklmnopqrstuvwxyz".split("")
    return alphaTest.every(e => str.indexOf(e) !== -1)
}

// alternate with regexp
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26
// }

// ---Test cases:---
console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("Pikachu!")) // false
