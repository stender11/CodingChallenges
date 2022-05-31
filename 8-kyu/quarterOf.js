// ---Instructions:---
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// ---Submitted Solution:---
const quarterOf = m => {
  switch (m) {
      case 1:
      case 2:
      case 3:
          return 1
      case 4:
      case 5:
      case 6:
          return 2
      case 7:
      case 8:
      case 9:
          return 3
      case 10:
      case 11:
      case 12:
          return 4
      default:
          return "Incorrect input, human!"
  }
}

// alternate solution using if...else
// const quarterOf = m => {
//     if (m < 4) {
//         return 1
//     } else if (m >= 4 && m < 7) {
//         return 2
//     } else if (m >= 7 && m < 10) {
//         return 3
//     } else if (m >= 10 && m <= 12) {
//         return 4
//     } else {
//         return "Coding done... Eat pizza."
//     }
// }

// ---Test cases:---
console.log(quarterOf(1))
console.log(quarterOf(6))
console.log(quarterOf(7))
console.log(quarterOf(11))
console.log(quarterOf("tooth"))
