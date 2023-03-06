// ---Instructions:---
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// ---P.R.E.P.---
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
// Example 4:
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// ---Submitted Solution:---
const twoSum = (nums, target) => {
    let numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in numsMap) return [numsMap[diff], i];
        numsMap[nums[i]] = i;
    };
};

// ---Test cases:---
console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
console.log(twoSum([1,2,3], 4)) // [0, 2]
