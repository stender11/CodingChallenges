// ---Instructions:---
// LeetCode 1365 - How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
// Constraints:
// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// ---P.R.E.P.---
// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:
// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 
// ---Submitted Solution:---
// BRUTE FORCE
function smallerNumbersThanCurrent(nums) {
    let arr = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        arr.push(count);
        count = 0;
    }

    return arr;
}

// HASHMAP
// function smallerNumbersThanCurrent(nums) {
//     let sortedArr = [...nums].sort((a, b)=> a - b)
        
//     let numsMap = {};
//     let outputArr = [];

//     for(let i = 0; i < sortedArr.length; i++){
//         if(sortedArr[i] == sortedArr[i-1]) continue;
//         numsMap[sortedArr[i]] = i
//     }
//     for(let i = 0; i < nums.length; i++){
//         outputArr[i] = numsMap[nums[i]]
//     }

//     return outputArr
// }

// ---Test cases:---
console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7])); // [0,0,0,0]
