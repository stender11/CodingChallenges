// ---Instructions:---
// LeetCode 2283 - Check if Number Has Equal Digit Count and Digit Value
// You are given a 0-indexed string num of length n consisting of digits.
// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

// ---P.R.E.P.---
// Constraints:
// n == num.length
// 1 <= n <= 10
// num consists of digits.
// Example 1:
// Input: num = "1210"
// Output: true
// Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
// The condition holds true for every index in "1210", so return true.
// Example 2:
// Input: num = "030"
// Output: false
// Explanation:
// num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
// num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
// num[2] = '0'. The digit 2 occurs zero times in num.
// The indices 0 and 1 both violate the condition, so return false.

// ---Submitted Solution:---
function digitCount(numStr) {
    let numStrMap = {};
    let numArr = numStr.split("").map(e => +e);
    
    if (numStr.length === 1) return false;

    for (const num of numArr) {
        numStrMap[num] = numStrMap[num] + 1 || 1;
    }
    for (const [key, value] of Object.entries(numStrMap)) {
        if (+numArr[key] !== value) return false;
    }

    return true;
};

// ---Test cases:---
console.log(digitCount("1210")); // true
console.log(digitCount("030")); // false
console.log(digitCount("1")); // false
console.log(digitCount("42101000")); // true
