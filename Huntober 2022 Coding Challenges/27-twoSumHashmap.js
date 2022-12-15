// ---Instructions:---
// TwoSum (HASHMAP)
// Let's finish up our hashmaps by visiting the famous two-sum problem!
// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
// Hint:  Create an array to hold winning pairs and create an object to store each number looped through. See if the sum - current number exists in the object, if so push current and stored value to your pairs array
// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

// ---P.R.E.P.---
// take in arr of nums and target num for sum, only nums, no edge cases
// return arr of pairs that add up to target num
// Examples:
// input: [1, 2, 2, 3, 4], 4 ===> output: [[2, 2], [3, 1]]
// input: [3, 2, 1, 6, 7, 8], 9 ===> output: [[6, 3], [7, 2], [8, 1]]

// ---Submitted Solution:---
function twoSum(arr, sum) {
    const pairsArr = [];
    const numMap = {};

    for (const num1 of arr) {
        const num2 = sum - num1;
        if (numMap[num2]) {
            pairsArr.push([num1, num2]);
        } else {
            numMap[num1] = 1;
        };
    };

    return pairsArr;
};

// ---Test cases:---
console.log(twoSum([1, 2, 2, 3, 4], 4)); // [[2, 2], [3, 1]]
console.log(twoSum([3, 2, 1, 6, 7, 8], 9)); // [[6, 3], [7, 2], [8, 1]]
console.log(twoSum([0, 1, 2, 3, 4, 5, 6], 6)); // [[4, 2], [5, 1], [6, 0]]
console.log(twoSum([1, 1, 1, 1, 1, 1, 1], 7)); // []
console.log(twoSum([], "z")); // []
