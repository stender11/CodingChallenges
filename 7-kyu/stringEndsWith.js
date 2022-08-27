// ---Instructions:---
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// ---Submitted Solution:---
function solution(str, end) {
    return end ? str.slice(-(end.length)) === end : true
}

// alternate solution
// function solution(str, end) {
//     return str.endsWith(end)
// }

// ---Test cases:---
console.log(solution('abc', 'bc')) // true
console.log(solution('abc', 'd')) // false
console.log(solution('abcde', 'cde')) // true
console.log(solution('abcde', 'abc')) // false
