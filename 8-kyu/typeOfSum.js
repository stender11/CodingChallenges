// ---Instructions:---
// Type of sum
// Return the type of the sum of the two arguments

// ---Submitted Solution:---
function typeOfSum(a, b) {
    return typeof (a + b)
}

// ---Test cases:---
console.log(typeOfSum(12, 1)) // 'number'
console.log(typeOfSum('d', 1)) // 'string'
console.log(typeOfSum(1, 'a')) // 'string'
console.log(typeOfSum('dd', '')) // 'string'
console.log(typeOfSum(true, 1)) // 'number'
