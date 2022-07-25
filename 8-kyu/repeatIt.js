// ---Instructions:---
// Create a function that takes a string and an integer (n).
// The function should return a string that repeats the input string n number of times.
// If anything other than a string is passed in you should return "Not a string"

// ---Submitted Solution:---
var repeatIt = function(str, n) {
    if (typeof str !== "string" ) {
        return "Not a string"
    }
    strstr = ""
    for (i = 1; i <= n; i++) {
        strstr += str
    }
    return strstr
}

// best solution
// const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'

// ---Test cases:---
console.log(repeatIt("Hi", 2)) // "HiHi"
console.log(repeatIt(1234, 5)) // "Not a string"
