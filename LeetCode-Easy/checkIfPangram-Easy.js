// ---Instructions:---
// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
// Constraints:
// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

// ---P.R.E.P.---
// take in a a sentence in string form
// return a boolean result depending on if the sentence is a pangram
// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:
// Input: sentence = "leetcode"
// Output: false

// ---Submitted Solution:---
const checkIfPangram = sentence => {
    return new Set(sentence.match(/[a-z]/gi)).size === 26
}

// ---Test cases:---
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) // Answer: true
console.log(checkIfPangram("leetcode")) // Answer: false
