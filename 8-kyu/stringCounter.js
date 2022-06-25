// ---Instructions:---
// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

// ---Submitted Solution:---
function strCount(str, letter){
  let count = 0  
  for (i = 0;i < str.length; i++) {
    if (str[i] == letter) {
      count++
    }
  }
  return count
}

// best solution from codewars using split
// function strCount(str, letter){  
//   return str.split(letter).length-1
// }

// ---Test cases:---
console.log(strCount("Hello", "o")) // ==>  1
console.log(strCount("Hello", "l")) // ==>  2
console.log(strCount("", "z")) //      ==>  0
