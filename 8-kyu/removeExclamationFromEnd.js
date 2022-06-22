// ---Instructions:---
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// ---Submitted Solution:---
function remove(string) {
    return string.charAt(string.length - 1) === "!" ? string.slice(0, -1) : string
}

// using endsWith()
// function remove(string) {
//     return string.endsWith('!') ? string.slice(0, -1) : string
// }

// ---Test cases:---
console.log(remove("Hi!")) // === "Hi"
console.log(remove("Hi!!!")) // === "Hi!!"
console.log(remove("!Hi")) // === "!Hi"
console.log(remove("!Hi!")) // === "!Hi"
console.log(remove("Hi! Hi!")) // === "Hi! Hi"
console.log(remove("Hi")) // === "Hi"
