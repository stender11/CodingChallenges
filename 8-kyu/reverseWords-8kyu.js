// ---Instructions:---
// Complete the solution so that it reverses all of the words within the string passed in.

// ---P.R.E.P.---
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// ---Submitted Solution:---
function reverseWords(str) {
    return str.split(" ").reverse().join(" ")
}

// ---Test cases:---
console.log(reverseWords("hello world!")); // "world! hello"
console.log(reverseWords("yoda doesn't speak like this")); // "this like speak doesn't yoda"
console.log(reverseWords("foobar")); // "foobar"
console.log(reverseWords("kata editor")); // "editor kata"
console.log(reverseWords("row row row your boat")); // "boat your row row row"
