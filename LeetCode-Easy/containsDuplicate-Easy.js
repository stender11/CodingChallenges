// ---Instructions:---
// LeetCode 217 - Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// ---P.R.E.P.---
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// ---Submitted Solution:---
// using Set object
// const containsDuplicate = nums => {
//     if (nums.length == new Set(nums).size) {
//         return false
//     } else {
//         return true
//     }
// }

// HASH MAP PATTERN
const containsDuplicate = arr => {
    let numsMap = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (numsMap[num]) {
            return true;
        } else {
            numsMap[num] = true;
        };
    };
    return false;
};

// ---Test cases:---
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
