// ---Instructions:---
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// ---P.R.E.P.---
// Let's assume that all numbers in the input will be integer values.
// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5

// ---Submitted Solution:---
const sumDigits = num => {
    const numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== "-") sum += +numStr[i];
    };

    return sum;
};

// ---Test cases:---
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
