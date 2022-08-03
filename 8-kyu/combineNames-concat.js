// ---Instructions:---
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
// Example:
// combineNames('James', 'Stevens')
// returns:
// 'James Stevens'

// ---Submitted Solution:---
function combineNames(str1, str2) {
    return str1.concat(" ", str2)
}

// alternate solution
// const combineNames = (...names) => names.join(" ")

// ---Test cases:---
console.log(combineNames("James", "Stephens")) // "James Stephens"
