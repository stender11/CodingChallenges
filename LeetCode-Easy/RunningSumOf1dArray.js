// ---Instructions:---
// Leetcode 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Constraints:
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// ---Submitted Solution:---
const runningSum = function(nums) {
    let sumsArr = []
    nums.reduce((acc, cv, i) => sumsArr[i] = acc + cv, 0)
    return sumsArr
}

// ---Test cases:---
console.log(runningSum([1,2,3,4])) // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])) // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]
