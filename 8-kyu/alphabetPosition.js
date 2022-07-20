// ---Instructions:---
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// ---Submitted Solution:---
function position(letter) {
    let alphaPosition = letter.toLowerCase().charCodeAt(letter) - 96
    return `Position of alphabet: ${alphaPosition}`
}

// ---Test cases:---
console.log(position("a")) // 1
console.log(position("x")) // 24
