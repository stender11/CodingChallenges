// ---Instructions:---
// Now you have to write a function that takes an argument and returns the square of it.

// PREP
// P: one integer, square it
// R: return squared integer
// E:
// function square(num) {
//   return num ** 2
// }
// P:
// function declaration with one argument which is a number
// return number squared
// called by code tester

// ---Submitted Solution:---
// const square = num => Math.pow(num, 2)

// ---Test cases:---
// console.log(square(3)) // 9
// console.log(square(12)) // 144


// ---Instructions:---
// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// ---Submitted Solution:---
// function createArray(number){
//   var newArray = [];
//   for(var counter = 1; counter <= number; counter++){
//     newArray.push(counter);
//   }
//   return newArray;
// }


// ---Instructions:---
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// ---Submitted Solution:---
// const hoopCount = n => n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"


// ---Instructions:---
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

// ---Submitted Solution:---
// function finalGrade (exam, projects) {
//   if (exam > 90 || projects > 10) {
//     return 100
//   } else if (exam > 75 && projects >= 5) {
//     return 90
//   } else if (exam > 50 && projects >= 2) {
//     return 75
//   } else {
//     return 0
//   }
// }

// console.log(finalGrade(100, 12))// 100, 12 --> 100
// console.log(finalGrade(99, 0))// 99, 0 --> 100
// console.log(finalGrade(10, 15))// 10, 15 --> 100
// console.log(finalGrade(85, 5))// 85, 5 --> 90
// console.log(finalGrade(55, 3))// 55, 3 --> 75
// console.log(finalGrade(55, 0))// 55, 0 --> 0
// console.log(finalGrade(20, 2))// 20, 2 --> 0


// ---Instructions:---
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

// ---Submitted Solution:---
// function findDifference(a, b) {
//   return Math.abs(eval(a.join("*")) - eval(b.join("*")))
// }

// ---Test cases:---
// console.log(findDifference([9, 7, 2], [5, 2, 2])) // 106


// ---Instructions:---
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// Possible invalid inputs include:
// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

// ---Submitted Solution:---
function greet(language) {
	const languageDatabase = 
    {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }
  return languageDatabase[language] || 'Welcome'
}

// using a switch statement
// function greet(language) {
//   switch (language) {
//     case "english": return 'Welcome'
//     case "czech": return 'Vitejte'
//     case "danish": return 'Velkomst'
//     case "dutch": return 'Welkom'
//     case "estonian": return 'Tere tulemast'
//     case "finnish": return 'Tervetuloa'
//     case "flemish": return 'Welgekomen'
//     case "french": return 'Bienvenue'
//     case "german": return 'Willkommen'
//     case "irish": return 'Failte'
//     case "italian": return 'Benvenuto'
//     case "latvian": return 'Gaidits'
//     case "lithuanian": return 'Laukiamas'
//     case "polish": return 'Witamy'
//     case "spanish": return 'Bienvenido'
//     case "swedish": return 'Valkommen'
//     case "welsh": return 'Croeso'
//     default: return "Welcome"
//   }
// }

// ---Test cases:---
console.log(greet('english')) //'Welcome'
console.log(greet('dutch')) // 'Welkom'
console.log(greet('IP_ADDRESS_INVALID')) // 'Welcome'
