// ---Instructions:---
// LeetCode 387 - First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// ---P.R.E.P.---
// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

// ---Submitted Solution:---
const firstUniqChar = s => {
    for (let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }

    return -1;
};

// // ---Test cases:---
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
