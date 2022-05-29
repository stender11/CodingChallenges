// ---Instructions:---
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// ---Submitted Solution:---
function getCount(str) {
  let vowelsArr = ["a", "e", "i", "o", "u"]
  return str.split("").filter(elem => vowelsArr.indexOf(elem) !== -1).length
}

// ---Test cases:---
console.log(getCount("abracadabra")) // 5
