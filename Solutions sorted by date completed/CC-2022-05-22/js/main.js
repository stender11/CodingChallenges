// ---Instructions:---
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// ---Submitted Solution:---
// function capitalizeWord(word) {
//   wordArr = word.split("")
//   wordArr[0] = wordArr[0].toUpperCase()
//   return wordArr.join("")
// }

// alternate solution without an array
// const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase())

// ---Test cases:---
// console.log(capitalizeWord('glasswear')) // 'Glasswear'

// ---Instructions:---
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// ---Submitted Solution:---
// function reverseList(list) {
//   return list.reverse()
// }

// ---Test cases:---
// console.log(reverseList([1, 2, 3, 4])) // -> [4, 3, 2, 1]
// console.log(reverseList([9, 2, 0, 7])) // -> [7, 0, 2, 9]


// ---Instructions:---
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.

// ---Submitted Solution:---
// function plural(n) {
//   return n !== 1
// }

// ---Test cases:---
// console.log(plural(0)) // true
// console.log(plural(0.5)) // true
// console.log(plural(1)) // false
// console.log(plural(Infinity)) // true


// ---Instructions:---
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// ---Submitted Solution:---
function hello(name) {
  if (name == undefined || name == "") {
    return "Hello, World!"
  }
  let nameArr = name.toLowerCase().split("")
  nameArr[0] = nameArr[0].toUpperCase()
  return `Hello, ${nameArr.join("")}!`
}

// alternate (and better) solution using substring
function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}

// ---Test cases:---
console.log(hello())
console.log(hello(""))
console.log(hello("joHN"))
