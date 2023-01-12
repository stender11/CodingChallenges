// ---Instructions:---
// LeetCode 1941 - Check if All Characters Have Equal Number of Occurrences
// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// ---P.R.E.P.---
// Constraints:
// 1 <= s.length <= 1000
// s consists of lowercase English letters.
// Example 1:
// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:
// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

// ---Submitted Solution:---
const areOccurrencesEqual = str => {
    let strMap = {};

    for (char of str) {
        strMap[char] = strMap[char] + 1 || 1;
    }

    return new Set(Object.values(strMap)).size < 2
}

// ---Test cases:---
console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false
console.log(areOccurrencesEqual("")); // true
