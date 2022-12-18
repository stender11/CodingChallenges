// ---Instructions:---
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// Hint:  HASH MAP PATTERN!
// From: https://leetcode.com/problems/jewels-and-stones/

// ---P.R.E.P.---
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// ---Submitted Solution:---
const numJewelsInStones = (jewels, stones) => {
    let map = {},
        count = 0;
    for (const jewel of jewels) {
        map[jewel] = true
    };
    for (stone of stones) {
        if (map[stone]) {
            count++;
        };
    };
    return count;
};

// ---Test cases:---
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
console.log(numJewelsInStones("", "")); // 0
