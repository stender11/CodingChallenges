// ---Instructions:---
// LeetCode 2703 _ Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.

// ---P.R.E.P.---
// Constraints:
// argsArr is a valid JSON array
// 0 <= argsArr.length <= 100
// Example 1:
// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1
// One value was passed to the function so it should return 1.
// Example 2:
// Input: argsArr = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3
// Three values were passed to the function so it should return 3.

// ---Submitted Solution:---
const argumentsLength = (...args) => {
    return args.length;
};

// // ---Test cases:---
console.log(argumentsLength([5])); // 
console.log(argumentsLength([{}, null, "3"])); // 
console.log(argumentsLength([])); // 
