// ---Instructions:---
// Is the string uppercase?
// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// ---Submitted Solution:---
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}

// ---Test cases:---
console.log("c".isUpperCase()) //== false
console.log("C".isUpperCase()) //== true
console.log("hello I AM DONALD".isUpperCase()) //== false
console.log("HELLO I AM DONALD".isUpperCase()) //== true
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()) //== false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()) //== true
