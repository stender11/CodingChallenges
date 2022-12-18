// ---Instructions:---
// LeetCode 1512 - Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// ---P.R.E.P.---
// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// ---Submitted Solution:---
// const numIdenticalPairs = function(nums) {
//     let pairsCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] == nums[j] && i < j) {
//                 pairsCount++;
//             };
//         };
//     };

//     return pairsCount;
// };

const numIdenticalPairs = function(nums) {
    const numsMap = {};
    let count = 0;
    
    for (const num of nums) {
        if (numsMap[num]) {
            count += numsMap[num];
            numsMap[num] += 1;
        } else {
            numsMap[num] = 1;
        }
    }
    return count;
};

// ---Test cases:---
console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4 
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0
