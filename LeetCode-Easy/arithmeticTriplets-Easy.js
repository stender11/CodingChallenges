// ---Instructions:---
// LeetCode 2367 - Number of Arithmetic Triplets
// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// ---P.R.E.P.---
// Constraints:
// 3 <= nums.length <= 200
// 0 <= nums[i] <= 200
// 1 <= diff <= 50
// nums is strictly increasing.
// Example 1:
// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
// Example 2:
// Input: nums = [4,5,6,7,8,9], diff = 2
// Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

// ---Submitted Solution:---
const arithmeticTriplets = (nums, diff) => {
    const numsMap = {};
    let tripsCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i] - diff;
        if (numsMap[temp] && numsMap[temp - diff]) tripsCount++;
        numsMap[nums[i]] = 1;
    }

    return tripsCount;
}

// ---Test cases:---
console.log(arithmeticTriplets([0,1,4,6,7,10], 3)) // 2
console.log(arithmeticTriplets([4,5,6,7,8,9], 2)) // 2
console.log(arithmeticTriplets([0])) // 0
