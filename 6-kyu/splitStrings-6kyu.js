// ---Instructions:---
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// ---P.R.E.P.---
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// ---Submitted Solution:---
function solution(str) {
    if (str.length < 1) return [];
    const strArr = str.match(/.{1,2}/g);
    if (strArr[strArr.length - 1].length < 2) strArr[strArr.length - 1] += "_";
    return strArr;
};

// ---Test cases:---
console.log(solution('abc')); // ['ab', 'c_']
console.log(solution('abcdef')); // ['ab', 'cd', 'ef']
console.log(solution("")); // []
