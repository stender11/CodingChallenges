// ---Instructions:---
// LeetCode 1470 - Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// ---P.R.E.P.---
// Constraints:
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// ---Submitted Solution:---
const shuffle = (nums, n) => {
    const evenIndex = nums.slice(0, n);
    const oddIndex = nums.slice(n, nums.length);
    let shuffledArr = [];

    for (let i = 0; i < n; i++) {
        shuffledArr.push(evenIndex[i]);
        shuffledArr.push(oddIndex[i]);
    };

    return shuffledArr;
};

// ---Test cases:---
console.log(shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7] 
console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1,1,2,2], 2)); // [1,2,1,2]
console.log(shuffle([0], 0)); // []
