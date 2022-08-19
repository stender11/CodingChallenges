// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// PREP
// P: arr of str and num
// R: return sum
// E, P: 
// function sumMix(arr) {
//     convert to num and sum values
//     return sum
// }

// const sumMix = arr => arr.reduce((acc, cv) => Number(cv) + Number(acc), 0)

// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42


// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

// const otherAngle = (a, b) => 180 - (a + b)


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// const removeExclamationMarks = str => str.split("!").join("")


// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//     if (array == null) {
//         return 0
//     }
//     let solutionArr = array.sort(function(a, b) {return a - b})
//     solutionArr.shift()
//     solutionArr.pop()
//     return solutionArr.reduce((acc, cv) => cv + acc, 0)
// }

// Better solution (not mine)
// function sumArray(array) {
//     return Array.isArray(array) && array.length > 1
//       ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//       : 0
//   }

// console.log(sumArray([ -6, -20, -1, -10, -12 ]))


// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.
// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test

// function firstNonConsecutive (arr) {
//     if (arr.length < 2) {
//         return null
//     }
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i]-1 !== arr[i-1]) {
//             return arr[i]
//         }
//     }
//     return null
// }

// Try using
// return arr.find((val, index) => val !== index + arr[0])

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// console.log(firstNonConsecutive([4,5,6,7,8,9,10,11,12,13]))


// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"

// function getPlanetName(id){
//     switch (id) {
//       case 1:
//         return 'Mercury';
//       case 2:
//         return 'Venus';
//       case 3:
//         return 'Earth';
//       case 4:
//         return 'Mars';
//       case 5:
//         return 'Jupiter';
//       case 6:
//         return 'Saturn';
//       case 7:
//         return 'Uranus';
//       case 8:
//         return 'Neptune';
//       default:
//         return 'Invalid input.';
//     }
// }

// console.log(getPlanetName(3))
// console.log(getPlanetName(7))
// console.log(getPlanetName(9))


// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade (s1, s2, s3) {
//     let averageScore = (s1 + s2 + s3) / 3
//     if (averageScore <= 100 && averageScore >= 90) {
//         return "A"
//     } else if (averageScore <= 90 && averageScore >= 80) {
//         return "B"
//     } else if (averageScore <= 80 && averageScore >= 70) {
//         return "C"
//     } else if (averageScore <= 70 && averageScore >= 60) {
//         return "D"
//     } else if (averageScore < 60 && averageScore >= 0) {
//         return "F"
//     } else {
//         return "Invalid input."
//     }
// }

// console.log(getGrade(75, 62, 99)) // C


// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.

// basic function w switch statement
// function updateLight(current) {
//     switch (current) {
//         case "green":
//             return "yellow"
//         case "yellow":
//             return "red"
//         case "red":
//             return "green"
//         default:
//             return "Invalid input."
//     }
// }

// one line expression using ternary operators
// const updateLight = current => current == "green" ? "yellow" : current == "yellow" ? "red" : "green"


// console.log(updateLight("green")) // yellow
// console.log(updateLight("yellow")) // red
// console.log(updateLight("red")) // green


// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// function cockroachSpeed(s) {
//     return Math.floor(s / 0.036)
// }

// // extra solution
// // const cockroachSpeed = s => Math.floor(s / 0.036)

// console.log(cockroachSpeed(1.08))


// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


// function setAlarm(employed, vacation){
//     return vacation ? false : employed ? true : false
// }

// // with short-circuit evaluation
// const setAlarm = (employed, vacation) => employed && !vacation


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let arr = str.split("")
    let double = arr.map(elem => elem.repeat(2))
    return double.join("")
}
  
console.log(doubleChar("Hello Pluto!"))
