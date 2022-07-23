// ---Instructions:---
// Description:
// Remove all exclamation marks from the end of sentence.
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// ---Submitted Solution:---
function remove(string) {
    while (string.charAt(string.length - 1) === "!") {
        string = string.slice(0, -1)
    }
    return string
}

// ---Test cases:---
console.log(remove("Hi!")) // "Hi"
console.log(remove("Hi!!!")) // "Hi"
console.log(remove("Hi! Hi!")) // "Hi! Hi"
