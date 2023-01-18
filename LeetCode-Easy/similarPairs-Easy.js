// ---Instructions:---
// LeetCode 2506 - Count Pairs Of Similar Strings
// You are given a 0-indexed string array words.
// Two strings are similar if they consist of the same characters.
// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

// ---P.R.E.P.---
// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consist of only lowercase English letters.
// Example 1:
// Input: words = ["aba","aabb","abcd","bac","aabc"]
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'. 
// Example 2:
// Input: words = ["aabb","ab","ba"]
// Output: 3
// Explanation: There are 3 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
// - i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
// - i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.
// Example 3:
// Input: words = ["nba","cba","dba"]
// Output: 0
// Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.

// ---Submitted Solution:---
const similarPairs = words => {
    const wordSet = words.map(word => [...new Set(word.split(""))].sort().join(""));
    let pairs = 0;

    for (let i = 0; i <= wordSet.length; i++) {
        for (let j = i; j < wordSet.length; j++) {
            if (wordSet[i] == wordSet[j + 1]) pairs++;
        }
    };

    return pairs;
};

// ---Test cases:---
console.log(similarPairs(["aba","aabb","abcd","bac","aabc"])); // 2
console.log(similarPairs(["aabb","ab","ba"])); // 3
console.log(similarPairs(["nba","cba","dba"])); // 0
console.log(similarPairs(["dcedceadceceaeddcedc","dddcebcedcdbaeaaaeab","eecbeddbddeadcbbbdbb","decbcbebbddceacdeadd","ccbddbaedcadedbcaaae","dddcaadaceaedcdceedd","bbeddbcbbccddcaceeea","bdabacbbdadabbbddaea"])); // 16
