// ---Instructions:---
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// ---P.R.E.P.---
// take in a string of random chars, always a str
// return a string using only "(" and ")" to represent chars in the str that repeat and don't repeat respectively
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// ---Submitted Solution:---
const duplicateEncode = word => word.toLowerCase().split("").map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")").join("")

// ---Test cases:---
console.log(duplicateEncode("din")) // Answer: "((("
console.log(duplicateEncode("recede")) // Answer: "()()()"
console.log(duplicateEncode("Success")) // Answer: ")())())","should ignore case"
console.log(duplicateEncode("(( @")) // Answer: "))(("
