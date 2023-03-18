// ---Instructions:---
// Your task is to write function factorial.

// ---P.R.E.P.---

// ---Submitted Solution:---
const factorial = num => {
    if (num < 2) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

// ---Test cases:---
console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);
