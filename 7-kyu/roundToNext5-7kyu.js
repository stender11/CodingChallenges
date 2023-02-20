// ---Instructions:---
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.

// ---P.R.E.P.---
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5

// ---Submitted Solution:---
const roundToNext5 = num => {
    return Math.ceil(num / 5) * 5;
};

// ---Test cases:---
console.log(roundToNext5(0)); // 0
console.log(roundToNext5(1)); // 5
console.log(roundToNext5(-1)); // 0
console.log(roundToNext5(-5)); // -5
console.log(roundToNext5(3)); // 5
console.log(roundToNext5(5)); // 5
console.log(roundToNext5(7)); // 10
console.log(roundToNext5(20)); // 20
console.log(roundToNext5(39)); // 40
console.log(roundToNext5(990)); // 990
console.log(roundToNext5(121)); // 125
console.log(roundToNext5(555)); // 555
