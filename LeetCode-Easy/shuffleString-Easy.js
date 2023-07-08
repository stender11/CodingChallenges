// ---Instructions:---
// LeetCode 1528 Shuffle String
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// ---P.R.E.P.---
// Constraints:
// s.length == indices.length == n
// 1 <= n <= 100
// s consists of only lowercase English letters.
// 0 <= indices[i] < n
// All values of indices are unique.
// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// ---Submitted Solution:---
const restoreString = function(s, indices) {
    let shuffled = "";

    for (let i = 0; i < s.length; i++) {
        shuffled += s[indices.indexOf(i)];
    }

    return shuffled;
};

// // ---Test cases:---
console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])); // "leetcode"
console.log(restoreString("abc", [0,1,2])); // "abc"
console.log(restoreString("gnat", [3,2,1,0])); // "tang"
