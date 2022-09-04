// ---Instructions:---
// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
// Note: only positive integers will be tested.

// ---Submitted Solution:---
function sumOfIntegersInString(str) {
    return str.split(/([^0-9])/g).map(e => parseInt(e) ).filter(e => e).reduce((acc, cv) => cv + acc, 0)
}

// ---Test cases:---
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")) // 3635
