// ---Instructions:--- 
// Messi goals function
// Messi is a soccer player with goals in three leagues: LaLiga, Copa del Rey, Champions League
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

// ---PREP---
// P: liga, copa, champ goals
// R: return total goals
// E: 
// function (liga, copa, champ) {
//     return liga + copa + champ
// }
// P:
// function with 3 parameters for each competition
// add 3 params together
// return sum 
// function is called by code tester in browser

// ---Submitted Solution:---
// const goals = (liga, copa, champ) => liga + copa + champ


// ---Instructions:---
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// ---Submitted Solution:---
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let howMany = sonYearsOld * 2 - dadYearsOld
//     return Math.abs(howMany)
// }

// ---Test cases:---
// console.log(twiceAsOld(36,7)) // 22


// ---Instructions:---
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// ---Submitted Solution:---
// function getAge(inputString){
//     return parseInt(inputString[0])
// }

// ---Test cases:---
// console.log(getAge("4 years old"))


// ---Instructions:---
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// ---Submitted Solution:---
// const feast = (b, d) => b[0] == d[0] && b[b.length - 1] == d[d.length - 1]

// ---Test cases:---
// console.log(feast("great blue heron", "garlic naan")) // true
// console.log(feast("chickadee", "chocolate cake")) // true
// console.log(feast("brown bear", "bear claw")) // false


// ---Instructions:---
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// ---Submitted Solution:---
// function enough(cap, on, wait) {
//     if (on + wait <= cap) {
//         return 0
//     } else {
//         return (on + wait) - cap
//     }
// }


// ---Instructions:---
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

// function switchItUp(number){
//     switch (number) {
//         case 0:
//             return "Zero"
//         case 1:
//             return "One"
//         case 2:
//             return "Two"
//         case 3:
//             return "Three"
//         case 4:
//             return "Four"
//         case 5:
//             return "Five"
//         case 6:
//             return "Six"
//         case 7:
//             return "Seven"
//         case 8:
//             return "Eight"
//         case 9:
//             return "Nine"
//         default:
//             return "Invalid input."
//     }
// }


// ---Instructions:---
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// ---Submitted Solution:---
// function expressionMatter(a, b, c) {
//     let sum = a + b + c
//     let product = a * b * c
//     let parenthesis1 = (a + b) * c
//     let parenthesis2 = a * (b + c)
//     let arr = [sum, product, parenthesis1, parenthesis2]
//     return Math.max(...arr)
// }

// alternate solution from codewars
// function expressionMatter(a, b, c) {
//     return Math.max(
//       a + b + c,
//       a * b * c,
//       a * (b + c),
//       (a + b) * c,
//       a + b * c,
//       a * b + c,
//     );
// }


// ---Instructions:---
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// ---Submitted Solution:---
String.prototype.toAlternatingCase = function () {
    return this.split("").map(char => char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
}

// ---Test cases:---
console.log("hello world".toAlternatingCase()) // "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()) // "hello world"
