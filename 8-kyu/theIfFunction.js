// ---Instructions:---
// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.

// ---Submitted Solution:---
const _if = (bool, func1, func2) => bool ? func1() : func2()

// ---Test cases:---
// none, this kata had several issues with testing and no listed test cases
