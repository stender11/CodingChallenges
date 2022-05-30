// ---Instructions:---
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// ---Submitted Solution:---
function doubleChar(str) {
    let arr = str.split("")
    let double = arr.map(elem => elem.repeat(2))
    return double.join("")
}

// ---Test cases:---
console.log(doubleChar("Hello Pluto!"))
