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
