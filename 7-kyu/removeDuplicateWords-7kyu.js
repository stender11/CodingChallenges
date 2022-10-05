// ---Instructions:---
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

// ---Submitted Solution:---
function removeDuplicateWords(s) {
    let words = s.split(" ")
    return [...new Set(words)].join(" ")
}

// ---Test cases:---
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta'
