// ---Instructions:---
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// ---Submitted Solution:---
function solution(value) {
    const padded = value.toString().padStart(5, "0")
    return `Value is ${padded}`
}

// ---Test cases:---
console.log(solution(5)) // should return "Value is 00005"
console.log(solution(1050)) // should return "Value is 01050"
