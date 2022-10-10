// ---Instructions:---
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples
// explode("312") should return : "333122"
// explode("102269") should return : "12222666666999999999"

// ---Submitted Solution:---
function explode(s) {
    let exploded = ""
    for (i = 0; i < s.length; i ++) {
        exploded += s[i].repeat(parseInt(s[i]))
    }
    return exploded
}

// ---Test cases:---
console.log(explode("312")) // "333122"
console.log(explode("102269")) // "12222666666999999999"
console.log(explode("0")) // ""
console.log(explode("000")) // ""
console.log(explode("123")) // "122333" 
