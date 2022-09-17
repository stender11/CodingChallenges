// ---Instructions:---
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// ---Submitted Solution:---
const capitals = function(word) {
    const capIndexes = []
    for (i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            capIndexes.push(i)
        }
    }
    return capIndexes
}

// ---Test cases:---
console.log(capitals('CodEWaRs')) // [0,3,4,6]
