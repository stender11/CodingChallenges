// ---Instructions:---
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.

// ---Submitted Solution:---
function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest
}

// alternate solution from codewars
// const findLongest = s => Math.max(...s.split(" ").map(x => x.length))

// ---Test cases:---
console.log(findLongest("The quick white fox jumped around the massive dog")) // 7
