// ---Instructions:---
// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// ---P.R.E.P.---
// take in an array of nums, and a target, all positive integers
// returns indexes of nums that add up to target
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// ---Submitted Solution:---
const twoSum = function(nums, target) {
    const indexArr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j ++) {
            if (nums[i] + nums[j] === target && i !== j) {
                indexArr.push(i)
            }
        }
    }
    return indexArr
}

// ---Test cases:---
console.log(twoSum([2,7,11,15], 9)) // Answer: [0,1]
console.log(twoSum([3,2,4], 6)) // Answer: [1,2]
console.log(twoSum([3,3], 6)) // Answer: [0,1]
