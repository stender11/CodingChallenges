// ---Instructions:---
// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// ---Submitted Solution:---
function alphabetPosition(text) {
    const letterNumber = text.toLowerCase().split("").filter(e => e.charCodeAt() > 96 && e.charCodeAt() < 123)
    return letterNumber.map(e => e.charCodeAt() - 96).join(" ")
}

// ---Test cases:---
console.log(alphabetPosition("The sunset sets at twelve o' clock.")) // === return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
