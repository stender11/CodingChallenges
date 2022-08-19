// ---Instructions:---
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// ---Submitted Solution:---
// function correct(string) {
//   return string.split("5").join("S").split("0").join("O").split("1").join("I")
// }

// best solution from codewars
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// ---Test cases:---
// console.log(correct("51NGAP0RE")) //"SINGAPORE"


// ---Instructions:---
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.

// ---Submitted Solution:---
// function checkForFactor (base, factor) {
  // return base % factor == 0
// }

// ---Test cases:---
// console.log(checkForFactor(653,7)) // false
// console.log(checkForFactor(2453,5)) // false
// console.log(checkForFactor(24617,3)) // false
// console.log(checkForFactor(63,7)) // true
// console.log(checkForFactor(2450,5)) // true
// console.log(checkForFactor(24612,3)) // true


// ---Instructions:---
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// Notes:
// If either input is an empty string, consider it as zero.
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// ---Submitted Solution:---
// const sumStr = (a,b) => String(Number(a) + Number(b))

// ---Test cases:---
// console.log(sumStr("4",  "5")) // --> "9"
// console.log(sumStr("34", "5")) // --> "39"
// console.log(sumStr("", "")) // --> "0"
// console.log(sumStr("2", "")) // --> "2"
// console.log(sumStr("-5", "3")) // --> "-2"


// ---Instructions:---
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// ---Submitted Solution:---
// function move (position, roll) {
//   return position + (2 * roll)
// }

// ---Test cases:---
// console.log(move(3, 6)) // should equal 15


// ---Instructions:---
// Kata Task
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// ---Submitted Solution:---
// var humanYearsCatYearsDogYears = function(humanYears) {
//   let catYears = 15
//   let dogYears = 15
//   if (humanYears <= 1){
//     return [humanYears, catYears, dogYears]
//   } else if (humanYears == 2) {
//     return [humanYears, 24, 24]
//   } else if (humanYears > 2) {
//     return [humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5)]
//   } 
// }

// ---Test cases:---
// console.log(humanYearsCatYearsDogYears(1)) // [1,15,15]
// console.log(humanYearsCatYearsDogYears(2)) // [2,24,24]
// console.log(humanYearsCatYearsDogYears(10)) // [10,56,64]


// ---Instructions:---
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// ---Submitted Solution:---
// function twoSort(...s) {
//   return s[0].sort().shift().split("").join("***")
// }

// ---Test cases:---
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // 'b***i***t***c***o***i***n'
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // 'a***r***e'


// ---Instructions:---
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

// ---Submitted Solution:---
// function sayHello(name) {
//   return `Hello, ${name}`
// }


// ---Instructions:---
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

// ---Submitted Solution:---
// function strCount(str, letter){
//   let count = 0  
//   for (i = 0;i < str.length; i++) {
//     if (str[i] == letter) {
//       count++
//     }
//   }
//   return count
// }

// best solution from codewars using split
// function strCount(str, letter){  
//   return str.split(letter).length-1
// }

// ---Test cases:---
// console.log(strCount("Hello", "o")) // ==>  1
// console.log(strCount("Hello", "l")) // ==>  2
// console.log(strCount("", "z")) //      ==>  0


// ---Instructions:---
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// 1 I love you
// 2 a little
// 3 a lot
// 4 passionately
// 5 madly
// 6 not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// ---Submitted Solution:---
// function howMuchILoveYou(nbPetals) {
//   const arr = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all"
//   ]
//   for (let i = 0; i < nbPetals; i++) {
//     if (i == nbPetals - 1) {
//       return arr[i % 6]
//       }
//   }
// }

// best solution from codewars
// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]
// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length] 
// }

// ---Test cases:---
// console.log(howMuchILoveYou(7)) // "I love you"
// console.log(howMuchILoveYou(3)) // "a lot"
// console.log(howMuchILoveYou(6)) // "not at all"
// console.log(howMuchILoveYou(428)) // "a little"


// ---Instructions:---
// Write a function that checks if a given string (case insensitive) is a palindrome.

// ---Submitted Solution:---
const isPalindrome = x => x.toLowerCase() == x.split("").reverse().join("").toLowerCase()

// ---Test cases:---
console.log(isPalindrome("hello")) // false

