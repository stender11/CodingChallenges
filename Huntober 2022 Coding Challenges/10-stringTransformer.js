// ---Instructions:---
// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// You may assume the input only contain English alphabet and spaces.

// ---P.R.E.P.---
// For example:
// "Example Input" ==> "iNPUT eXAMPLE"

// ---Submitted Solution:---
function stringTransformer(str) {
    const transformed = str.split("").map(e => {
        if (e === e.toLowerCase()) {
            return e = e.toUpperCase()
        } else if (e === e.toUpperCase()) {
            return e = e.toLowerCase()
        }
    }).join("")
    return transformed.split(" ").reverse().join(" ")
}

// ---Test cases:---
console.log(stringTransformer('Example string')) // Answer: 'STRING eXAMPLE'
console.log(stringTransformer("TACO tuesday")) // Answer: "TUESDAY taco"
