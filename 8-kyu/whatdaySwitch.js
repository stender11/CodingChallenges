// ---Instructions:---
// Complete the function which returns the weekday according to the input number:

// ---Submitted Solution:---
function whatday(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Wrong, please enter a number between 1 and 7";
    }
}

// ---Test cases:---
console.log(whatday(1)) // "Sunday"
console.log(whatday(2)) // "Monday"
console.log(whatday(3)) // "Tuesday"
console.log(whatday(4)) // "Wednesday"
console.log(whatday(5)) // "Thursday"
console.log(whatday(6)) // "Friday"
console.log(whatday(7)) // "Saturday"
console.log(whatday("spoooon")) // "Wrong, please enter a number between 1 and 7"
