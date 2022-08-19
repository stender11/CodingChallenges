// ---Instructions:---
// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// Note: The parameter is optional. So you have to give it a default value.

// ---Submitted Solution:---
// const arr = n => {
//   let arrayYay = []
//   for (i = 0; i <= n - 1; i++) {
//     arrayYay.push(i)
//   }
//   return arrayYay
// }

// ---Test cases:---
// console.log(arr(5)) // => [0,1,2,3,4]


// ---Instructions:---
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// ---Submitted Solution:---
// function getChar(c) {
//   return String.fromCharCode(c)
// }

// ---Test cases:---
// console.log(getChar(65)) // 'A'


// ---Instructions:---
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// ---Submitted Solution:---
// function shortcut(string) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   let letters = string.split("").filter(e => !vowels.includes(e))
//   return letters.join("")
// }

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
// console.log(shortcut("hello"))    // -->  "hll"
// console.log(shortcut("codewars")) // -->  "cdwrs"
// console.log(shortcut("goodbye"))  // -->  "gdby"
// console.log(shortcut("HELLO"))    // -->  "HELLO"


// ---Instructions:---
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.

// ---Submitted Solution:---
function dutyFree(normPrice, discount, holiday) {
  return Math.floor(holiday / (normPrice * (discount / 100)))
}

// ---Test cases:---
console.log(dutyFree(12, 50, 1000)) // 166
console.log(dutyFree(17, 10, 500))  // 294
console.log(dutyFree(24, 35, 3000)) // 357
