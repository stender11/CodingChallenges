// ---Instructions:---
// LeetCode 2085 - Count Common Words With One Occurrence
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

// ---P.R.E.P.---
// Constraints:
// 1 <= words1.length, words2.length <= 1000
// 1 <= words1[i].length, words2[j].length <= 30
// words1[i] and words2[j] consists only of lowercase English letters.
// Example 1:
// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:
// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:
// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".

// ---Submitted Solution:---
const countWords = (words1, words2) => {
    const strArr1 = words1.filter(e => words1.indexOf(e) === words1.lastIndexOf(e));
    const strArr2 = words2.filter(e => words2.indexOf(e) === words2.lastIndexOf(e));
    const wordMap = {};

    for (const str of strArr1) {
        wordMap[str] = wordMap[str] + 1 || 1;
    }
    for (const item of strArr2) {
        wordMap[item] = wordMap[item] + 1 || 1;
    }

    return Object.values(wordMap).filter(num => num > 1).length;
};

// ---Test cases:---
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])); // 2
console.log(countWords(["b","bb","bbb"], ["a","aa","aaa"])); // 0
console.log(countWords(["a","ab"], ["a","a","a","ab"])); // 1
console.log(countWords([""], [])); // 0
