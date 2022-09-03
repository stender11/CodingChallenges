// ---Instructions:---
// Task: write your first JS function.
// mission 1:
// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
// mission 2:
// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
// mission 3:
// type the console.log() in the next line(don't forget to put the str in the brackets).
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// ---Submitted Solution:---
// function helloWorld() {
//   let str = "Hello World!"
//   console.log(str)
// }

// ---Test cases:---
// helloWorld()


// ---Instructions:---
// The wide-mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// When he meets the alligator, it then makes a tiny mouth.
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

// ---Submitted Solution:---
// function mouthSize(animal) {
//   return animal.toLowerCase() == "alligator" ? "small" : "wide"
// }

// ---Test cases:---
// console.log(mouthSize("toucan")) // "wide"
// console.log(mouthSize("ALLIGATOR")) // "small"


// ---Instructions:---
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// ---Submitted Solution:---
// function pipeFix(numbers){
//   let fixedList = []
//   let firstPipe = Math.min(...numbers)
//   let lastPipe = Math.max(...numbers)
//   for (i = firstPipe; i <= lastPipe; i++) {
//     fixedList.push(i)
//   }
//   return fixedList
// }

// ---Test cases:---
// console.log(pipeFix([1,3,5,6,7,8])) // Output: 1,2,3,4,5,6,7,8


// ---Instructions:---
// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// ---Submitted Solution:---
function isPalindrome(line) {
  return line.toString() == line.toString().split("").reverse().join("")
}

// ---Test cases:---
console.log(isPalindrome("anna"))   // ==> true
console.log(isPalindrome("walter")) // ==> false
console.log(isPalindrome(12321))    //  ==> true
console.log(isPalindrome(123456))  //  ==> false
