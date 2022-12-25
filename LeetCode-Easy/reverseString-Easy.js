// ---Instructions:---
// LeetCode 344 - Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// ---P.R.E.P.---
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// ---Submitted Solution:---
const reverseString = function(s) {
    return s.reverse();
};

// ---Test cases:---
console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // ["h","a","n","n","a","H"]
console.log(reverseString(["R","a","c","e","c","a", "r"])); // ["r","a","c","e","c","a", "R"]
