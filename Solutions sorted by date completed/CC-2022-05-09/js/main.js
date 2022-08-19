// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// const areYouPlayingBanjo = name => name.toLowerCase().startsWith("r") ? `${name} plays banjo` : `${name} does not play banjo`

// alternate solution----
// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }

// console.log(areYouPlayingBanjo("Ralph"))
// console.log(areYouPlayingBanjo("ralph"))
// console.log(areYouPlayingBanjo("taterrrrrralph"))

// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (mpg * fuelLeft >= distanceToPump) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(zeroFuel(50, 25, 2)) //true
// console.log(zeroFuel(100, 50, 1)) //false


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//     let averagePoints = classPoints.reduce((acc, cv) => cv + acc, 0) / classPoints.length
//     return yourPoints >= averagePoints
// }
  
// console.log(betterThanAverage([2, 3], 5))
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))


// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x){
//     return x.reduce((acc, cv) => cv * acc, 1)
// }

// console.log(grow([1,2,3,4]))

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((acc, cv) => cv + acc, 0) + arr2.reduce((a, c) => c + a, 0)
// }

// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) //2100


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const smash = w => w.join(' ')

console.log(smash(['hello', 'world', 'this', 'is', 'great']))
