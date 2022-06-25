// ---Instructions:---
// Write a function that checks if a given string (case insensitive) is a palindrome.

// ---Submitted Solution:---
const isPalindrome = x => x.toLowerCase() == x.split("").reverse().join("").toLowerCase()

// ---Test cases:---
console.log(isPalindrome("hello")) // false
