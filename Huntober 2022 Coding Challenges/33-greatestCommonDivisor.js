// ---Instructions:---
// Codewars 7kyu - Greatest common divisor
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// ---P.R.E.P.---
// takes in two positive integers as parameters, only nums and always >= 1
// returns the greatest common divisor of the two nums, always a whole num
// Examples:
// (30, 12) returns 6
// (8, 9) returns 1
// (15, 60) returns 15
// Pseudo:
// function gcd(n1, n2) {
    // set base cases:
    // if (num1 % num2 === 0) return num1
    // recursive statement: 
    // else return mygcd(num2, num1 % num2)
//}

// ---Submitted Solution:---
const mygcd = (x, y) => {
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    };
};

// ---Test cases:---
console.log(mygcd(30, 12)); // 6
console.log(mygcd(8, 9)); // 1
console.log(mygcd(1, 1)); // 1
