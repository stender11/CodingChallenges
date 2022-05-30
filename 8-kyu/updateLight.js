// ---Instructions:---
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.

// ---Submitted Solution:---
// basic function w switch statement
function updateLight(current) {
    switch (current) {
        case "green":
            return "yellow"
        case "yellow":
            return "red"
        case "red":
            return "green"
        default:
            return "Invalid input."
    }
}

// one line expression using ternary operators
// const updateLight = current => current == "green" ? "yellow" : current == "yellow" ? "red" : "green"

// ---Test cases:---
console.log(updateLight("green")) // yellow
console.log(updateLight("yellow")) // red
console.log(updateLight("red")) // green
