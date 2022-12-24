// ---Instructions:---
// LeetCode 1748 - Sum of Unique Elements
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.
// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// ---P.R.E.P.---
// Example 1:
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:
// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 
// ---Submitted Solution:---
const sumOfUnique = arr => {
    const numsMap = {};
    const uniqueArr = [];

    if (arr.length === 1) return arr[0];

    for (num of arr) {
        if (numsMap[num]) {
            numsMap[num]++;
        } else {
            numsMap[num] = 1;
        }
    }
    for (item in numsMap) {
        if (numsMap[item] < 2) {
            uniqueArr.push(+item);
        }
    }

    return uniqueArr.reduce((pv, cv) => pv + cv, 0);
};

// ---Test cases:---
console.log(sumOfUnique([1,2,3,2])); // 4
console.log(sumOfUnique([1,1,1,1,1])); // 0
console.log(sumOfUnique([1,2,3,4,5])); // 15
console.log(sumOfUnique([7])); // 7
