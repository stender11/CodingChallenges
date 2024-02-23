// ---Instructions:---
// Codewars 8kyu - Flick Switch

// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// ---P.R.E.P.---
// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// ---Submitted Solution:---
function flickSwitch(arr) {
    let boolee = true;
    return arr.map((elem) => {
        if (elem == "flick") {
            boolee = !boolee;
        }
        return boolee;
    });
}

// // ---Test cases:---
console.log(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false]);
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]), [false, false, false, false]);
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true]);
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [false, true, false, true, false]);
console.log(flickSwitch(["john, smith, susan", "flick"]), [true, false]);
console.log(flickSwitch(["bicycle"]), [true]);
console.log(flickSwitch(["flick"]), [false]);
console.log(flickSwitch([]), []);
