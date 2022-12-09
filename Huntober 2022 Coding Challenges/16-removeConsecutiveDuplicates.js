// ---Instructions:---
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// ---P.R.E.P.---
// takes in a string, only strs
// return str with consecutive dupes removed
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" --> "alpha beta gamma delta alpha beta gamma delta"

// ---Submitted Solution:---
const removeConsecutiveDuplicates = str => {
    return str.split(" ").filter((word, index, arr) => word !== arr[index + 1]).join(" ")
}
    
// ---Test cases:---
console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // 'alpha beta gamma delta alpha beta gamma delta'
