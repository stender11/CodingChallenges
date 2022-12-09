// ---Instructions:---
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

// ---P.R.E.P.---
// take in a string of words, only strings
// return an array of words sorted alphabetically by last character, same last char should keep original order
// Examples:
// 'man i need a taxi up to ubud' => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// 'what time are we climbing up the volcano' => ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']

// ---Submitted Solution:---
function last(str) {
    return str.split(" ").sort((a, b) => a.charCodeAt([a.length - 1]) - b.charCodeAt([b.length - 1]))
}

// ---Test cases:---
console.log(last('man i need a taxi up to ubud')) // Answer: ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano')) // Answer: ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
console.log(last('take me to semynak')) // Answer: ['take', 'me', 'semynak', 'to']
console.log(last('t    k    ')) // Answer: to test for length = null errors
