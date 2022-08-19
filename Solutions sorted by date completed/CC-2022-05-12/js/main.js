// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// const countSheep = num => {
//     let str = ""
//     for (i = 1; i <= num; i++) {
//         str = str + `${i} sheep...`
//     }
//     return str
// }

// console.log(countSheep(3))


// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//     let arr = [];
//     for (i = x; i <= x * n; i += x) {
//         arr.push(i)
//     }
//     return arr;
// }

// console.log(countBy(1, 10))
// console.log(countBy(2, 5))


// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	                 return
// name equals owner	'Hello boss'
// otherwise	        'Hello guest'

// Basic, readable solution
// function greet (name, owner) {
//     if (name == owner) {
//         return "Hello boss"
//     } else {
//         return "Hello guest"
//     }
// }

// One-liner expression
// const greet = (name, owner) => name == owner ? "Hello boss" : "Hello guest"

// Interesting use of template literals from solutions (not mine)
// function greet (name, owner) {
//     return `Hello ${name == owner ? 'boss' : 'guest'}`
// }

// console.log(greet("Daniel", "Daniel"))
// console.log(greet("Greg", "Daniel"))


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// Basic solution
// const areaOrPerimeter = function(l , w) {
//     if (l == w) {
//         return l * w
//     } else {
//         return 2 * (l + w)
//     }
// }

// Expression in one line (concise body)
// const areaOrPerimeter = (l, w) => l == w ? l * w : 2 * (l + w)

// console.log(areaOrPerimeter(4 , 4)) //16
// console.log(areaOrPerimeter(6 , 10)) //32


// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// Basic function
// function isDivideBy(number, a, b) {
//     if (number % a == 0 && number % b == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// Concise expression
// const isDivideBy = (number, a, b) => number % a == 0 && number % b == 0

// console.log(isDivideBy(-12, 2, -6)) //true
// console.log(isDivideBy(-12, 2, -5)) //false
// console.log(isDivideBy(45, 1, 6)) //false
// console.log(isDivideBy(45, 5, 15)) //true
// console.log(isDivideBy(4, 1, 4)) //true
// console.log(isDivideBy(15, -5, 3)) //true


// PREP (Parameters, Returns, Examples, Pseudo Code)
// 1 to num, 3 fizz, 5 buzz, 3 & 5 fizzbuzz
// P: num, whole, +
// R: console
// E:

// function fizzBuzz(num) {
//     // loop
//     // conditionals % 3 & 5, % 3, % 5
//     // console.log num or fizz, buzz, fizzbuzz
// }

// fizzBuzz(5) // 1, 2, fizz, 4, buzz
// fizzBuzz(3) // 1, 2, fizz
// fizzBuzz(15) // ...buzz, 11, fizz, 13, 14, fizzbuzz

// P: PSEUDOOOOOOOOOOOO!@!!!!!!!!!!!@#!#!#


// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
// PREP
// P: length, width, height, volume
// R: return volume
// E:
// function getVolumeOfCuboid(length, width, height) {
//     // calculate volume with parameters
//     // return volume
// }
// P: function with 3 parameters (used class and static because they were in the placeholder code and I wanted practice with something new)
//     get total of three parameters multiplied
//     return the total
//     function is called by code test in the browser

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height
//     }
//   }


// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
// PREP
// P: player 1, player 2, winning conditions
// R: return a string with the outcome of each game
// E:
// function rps(p1, p2) {
//     // conditional statement comparing player choices
//     // return string with outcome
// }
// P: function with 2 parameters representing each player choice
//  condtional inside function comparing each possible combination for the 3 possible outcomes
//  return a string for each outcome
//  function is called by code test in browser

// const rps = (p1, p2) => {
//     if ((p1 == "rock" && p2 == "scissors") || (p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock")) {
//         return "Player 1 won!"
//     } else if ((p2 == "rock" && p1 == "scissors") || (p2 == "scissors" && p1 == "paper") || (p2 == "paper" && p1 == "rock")) {
//         return "Player 2 won!"
//     } else if (p1 == p2) {
//         return "Draw!"
//     }
// }

// // test cases
// console.log(rps("rock", "rock")) // Draw
// console.log(rps("scissors", "rock")) // Player 2 wins
// console.log(rps("paper", "rock")) // Player 1 wins


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = m => {
    switch (m) {
        case 1:
        case 2:
        case 3:
            return 1
        case 4:
        case 5:
        case 6:
            return 2
        case 7:
        case 8:
        case 9:
            return 3
        case 10:
        case 11:
        case 12:
            return 4
        default:
            return "Incorrect input, human!"
    }
}

// alternate solution using if...else
// const quarterOf = m => {
//     if (m < 4) {
//         return 1
//     } else if (m >= 4 && m < 7) {
//         return 2
//     } else if (m >= 7 && m < 10) {
//         return 3
//     } else if (m >= 10 && m <= 12) {
//         return 4
//     } else {
//         return "Coding done... Eat pizza."
//     }
// }

// test cases
console.log(quarterOf(1))
console.log(quarterOf(6))
console.log(quarterOf(7))
console.log(quarterOf(11))
console.log(quarterOf("tooth"))
