// ---Instructions:---
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// For example:
// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.
// More examples in the tests cases.

// ---Submitted Solution:---
function solve(a, b) {
    let uncommonChars = ""
    for (i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            uncommonChars += a[i]
        }
    }
    for (i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            uncommonChars += b[i]
        }
    }
    return uncommonChars
}

// alternate solution
// function solve(a, b){
//     return (a + b).split("").filter(e => !a.includes(e) || !b.includes(e)).join("")
// }

// ---Test cases:---
console.log(solve("xyab","xzca")) // "ybzc"
console.log(solve("xyabb","xzca")) // "ybbzc"
console.log(solve("abcd","xyz")) // "abcdxyz"
console.log(solve("xxx","xzca")) // "zca"
