// ---Instructions:---
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// ---Submitted Solution:---
function replace(s){
    return s.replace(/[aeiou]/gi, "!")
}

// ---Test cases:---
console.log(replace("Hi!")) // === "H!!"
console.log(replace("!Hi! Hi!")) // === "!H!! H!!"
console.log(replace("aeiou")) // === "!!!!!"
console.log(replace("ABCDE")) // === "!BCD!"
