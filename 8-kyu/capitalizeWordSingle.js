// ---Instructions:---
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// ---Submitted Solution:---
function capitalizeWord(word) {
  wordArr = word.split("")
  wordArr[0] = wordArr[0].toUpperCase()
  return wordArr.join("")
}

// alternate solution without an array
// const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase())

// ---Test cases:---
console.log(capitalizeWord('glasswear')) // 'Glasswear'
