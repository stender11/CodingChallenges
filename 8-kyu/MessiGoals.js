// ---Instructions:--- 
// Messi goals function
// Messi is a soccer player with goals in three leagues: LaLiga, Copa del Rey, Champions League
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.

// ---PREP---
// P: liga, copa, champ goals
// R: return total goals
// E: 
// function (liga, copa, champ) {
//     return liga + copa + champ
// }
// P:
// function with 3 parameters for each competition
// add 3 params together
// return sum 
// function is called by code tester in browser

// ---Submitted Solution:---
const goals = (liga, copa, champ) => liga + copa + champ

// ---Test cases:---
console.log(goals(5, 10, 2)) // -->  17
