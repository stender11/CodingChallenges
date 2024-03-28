// ---Instructions:---
// Codewars 7kyu
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
//     Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// ---P.R.E.P.---
// Examples:
// 2020 => true
// 2000 => true
// 2015 => false
// 2100 => false

// ---Submitted Solution:---
function isLeapYear(year) {
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    else return false;
};

// ---Test cases:---
console.log(isLeapYear(2020), true, "Incorrect answer for year = 2020");
console.log(isLeapYear(2000), true, "Incorrect answer for year = 2000");
console.log(isLeapYear(2015), false, "Incorrect answer for year = 2015");
console.log(isLeapYear(2100), false, "Incorrect answer for year = 2100");
