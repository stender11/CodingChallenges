// ---Instructions:---
// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
// Constraints:
// -231 <= x <= 231 - 1

// ---P.R.E.P.---
// take in a num, only ints
// return boolean representing is num is a palindrome or not
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// ---Submitted Solution:---
const isPalindrome = x => x.toString().split("").reverse().join("") === x.toString()

// ---Test cases:---
console.log(isPalindrome(121)) // Answer: true
console.log(isPalindrome(-121)) // Answer: false
console.log(isPalindrome(10)) // Answer: false
