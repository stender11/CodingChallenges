// ---Instructions:---
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// -make as few changes as possible.
// -if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// ---Submitted Solution:---
function solve(s) {
    const upperCaseMeasure = s.split("").filter(e => e.charCodeAt() < 91).length
    return upperCaseMeasure > (s.length / 2) ? s.toUpperCase() : s.toLowerCase()
}

// ---Test cases:---
console.log(solve("code")) // "code"
console.log(solve("CODe")) // "CODE"
console.log(solve("COde")) // "code"
console.log(solve("Code")) // "code"
