// ---Instructions:---
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// ---Submitted Solution:---
function shortcut(string) {
  let vowels = ["a", "e", "i", "o", "u"]
  let letters = string.split("").filter(e => !vowels.includes(e))
  return letters.join("")
}

// solution with indexof (from codewars)
// function shortcut(str) {
//   return str.split('').filter(function(e) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
//   }).join('')
// }

// regex (from codewars)
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }

// ---Test cases:---
console.log(shortcut("hello"))    // -->  "hll"
console.log(shortcut("codewars")) // -->  "cdwrs"
console.log(shortcut("goodbye"))  // -->  "gdby"
console.log(shortcut("HELLO"))    // -->  "HELLO"
