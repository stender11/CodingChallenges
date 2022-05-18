// ---Instructions:---
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// ---Submitted Solution:---
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+": {
      return value1 + value2;
    }
    case "-": {
      return value1 - value2;
    }
    case "*": {
      return value1 * value2;
    }
    case "/": {
      return value1 / value2;
    }
    default:
      return 0;
  }
}

// solution using if/else statements
// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2
//   } else if (operation === "-") {
//     return value1 - value2
//   } else if (operation === "*") {
//     return value1 * value2
//   } else if (operation === "/") {
//     return value1 / value2
//   }
// }

// solution using eval (copied from codewars solutions)
// function basicOp(o, a, b) {
//   return eval(a+o+b); //NEVER USE EVAL IN REAL CODE - IT IS A SECURITY RISK!!!
// }

// ---Test cases:---
console.log(basicOp("+", 4, 7))
console.log(basicOp("-", 15, 18))
console.log(basicOp("*", 5, 5))
console.log(basicOp("/", 49, 7))
console.log(basicOp("*", 8, 88))
