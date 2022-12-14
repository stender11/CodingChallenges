// ---Instructions:---
// LeetCode 169 - Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// Do:  HASH MAP PATTERN! and n log n complexity with sorting
// From: https://leetcode.com/problems/majority-element/

// ---P.R.E.P.---
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// ---Submitted Solution:---
const majorityElement = nums => {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

// HASH MAP SOLUTION
// const majorityElement = nums => {
//     let numsMap = {},
//         count = 0,
//         majElem = nums[0];

//     for (num of nums) {
//         numsMap[num] = numsMap[num] + 1 || 1;
//         // numsMap[num] > nums.length / 2;
//     };
//     for (const n in numsMap) {
//         if (numsMap[n] > count) {
//             count = numsMap[n];
//             majElem = n;
//         };
//     };
//     return +majElem;
// };

// ---Test cases:---
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
console.log(majorityElement([1,7,3,7,5,6,7,7,7,7,7,7,7,7,8,9,0,0,0])); // 7
