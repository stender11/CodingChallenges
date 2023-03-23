// ---Instructions:---
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// ---P.R.E.P.---
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// ---Submitted Solution:---
const towerBuilder = floors => {
    return [...Array(floors)].map((e, i) => {
        return " ".repeat(floors - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(floors - 1 - i);
        });
};

// ---Test cases:---
console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);
