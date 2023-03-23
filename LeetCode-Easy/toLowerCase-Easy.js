// ---Instructions:---
// LeetCode 709 - To Lower Case
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// ---P.R.E.P.---
// Constraints:
// 1 <= s.length <= 100
// s consists of printable ASCII characters.
// Example 1:
// Input: s = "Hello"
// Output: "hello"
// Example 2:
// Input: s = "here"
// Output: "here"
// Example 3:
// Input: s = "LOVELY"
// Output: "lovely"

// ---Submitted Solution:---
var toLowerCase = function(s) {
    return s.toLowerCase();
};

// ---Test cases:---
console.log(toLowerCase("Hello"), "hello");
console.log(toLowerCase("here"), "here");
console.log(toLowerCase("LOVELY"), "lovely");
