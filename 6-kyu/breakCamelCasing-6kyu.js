// ---Instructions:---
// Complete the solution so that the function will break up camel casing, using a space between words.

// ---P.R.E.P.---
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ---Submitted Solution:---
const solution = string => {
    return string.replace(/[A-Z]/g, " $&")
};

// ---Test cases:---
console.log(solution('camelCasing')); // 'camel Casing'
console.log(solution('camelCasingTest')); // 'camel Casing Test'
console.log(solution('camel')); // 'camel'
