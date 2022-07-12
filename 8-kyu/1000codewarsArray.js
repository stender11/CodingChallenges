// ---Instructions:---
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// Add the value "codewars" to the array websites/Websites 1,000 times.

// ---Submitted Solution:---
let websites = []
for (i = 1;i <= 1000;i++) {
  websites.push("codewars")
}

// good alternate
// var websites = new Array(1000).fill("codewars")

// ---Test cases:---
console.log(websites)
