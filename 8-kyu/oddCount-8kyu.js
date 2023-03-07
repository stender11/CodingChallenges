// ---Instructions:---
// Given a number n, return the number of positive odd numbers below n, EASY!
// Expect large Inputs!

// ---P.R.E.P.---
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// ---Submitted Solution:---
function oddCount(n) {
    return Math.floor(n / 2);
};

// ---Test cases:---
console.log(oddCount(15)) // 7
console.log(oddCount(15023)) // 7511
