// ---Instructions:---
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// ---Submitted Solution:---
function disemvowel(str) {
    let vowelsArr = ["a", "e", "i", "o", "u"]
    return str.split("").filter(e => vowelsArr.indexOf(e.toLowerCase()) === - 1).join("")
}

// Best solution with RegExp
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '')
// }

// ---Test cases:---
console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"
