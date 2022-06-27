// ---Instructions:---
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// ---Submitted Solution:---
function persistence(num) {
    let count = 0
    if (num.toString().length < 2) {
        return 0
    } else {
        while (num.toString().length > 1) {
            count++;
            num = eval(num.toString().split("").join("*"));            
        }
        return count
    }
}

// ---Test cases:---
console.log(persistence(39)) // --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
console.log(persistence(999)) // --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
console.log(persistence(4)) // --> 0 (because 4 is already a one-digit number)
console.log(persistence(9999999)) // --> 5
