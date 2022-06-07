// ---Instructions:---
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// ---Submitted Solution:---
function isDivideBy(number, a, b) {
    if (number % a == 0 && number % b == 0) {
        return true
    } else {
        return false
    }
}

// Concise expression
// const isDivideBy = (number, a, b) => number % a == 0 && number % b == 0

// ---Test cases:---
console.log(isDivideBy(-12, 2, -6)) //true
console.log(isDivideBy(-12, 2, -5)) //false
console.log(isDivideBy(45, 1, 6)) //false
console.log(isDivideBy(45, 5, 15)) //true
console.log(isDivideBy(4, 1, 4)) //true
console.log(isDivideBy(15, -5, 3)) //true
