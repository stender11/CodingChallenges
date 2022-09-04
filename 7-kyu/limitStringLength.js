// ---Instructions:---
// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

// ---Submitted Solution:---
function solution(string, limit) {
    return string.length > limit ? string.slice(0, limit) + "..." : string
}

// ---Test cases:---
console.log(solution("Testing String", 3)) // 'Tes...'
console.log(solution("Testing String", 8)) // 'Testing ...'
console.log(solution("Test", 8)) // 'Test'
console.log(solution("Test", 4)) // 'Test'
