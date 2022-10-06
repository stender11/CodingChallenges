// ---Instructions:---
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

// ---Submitted Solution:---
function capitalize(s) {
    const evenIndexCaps = s.split("").map((e, i) => i % 2 === 0 ? e.toUpperCase() : e).join("")
    const oddIndexCaps = s.split("").map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join("")
    return [evenIndexCaps, oddIndexCaps]
}

// ---Test cases:---
console.log(capitalize("abcdef")) // ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars")) // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")) // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors")) // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
