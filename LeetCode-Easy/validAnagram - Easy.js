// ---Instructions:---
// LeetCode 242 - Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// ---P.R.E.P.---
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// ---Submitted Solution:---
const isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

// ---Test cases:---
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
console.log(isAnagram()); // Output: 
