// ---Instructions:---
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message

// ---Submitted Solution:---
function greet (name, owner) {
    if (name == owner) {
        return "Hello boss"
    } else {
        return "Hello guest"
    }
}

// One-liner expression
// const greet = (name, owner) => name == owner ? "Hello boss" : "Hello guest"

// Interesting use of template literals from solutions (not mine)
// function greet (name, owner) {
//     return `Hello ${name == owner ? 'boss' : 'guest'}`
// }

// ---Test cases:---
console.log(greet("Daniel", "Daniel")) // name equals owner	'Hello boss'
console.log(greet("Greg", "Daniel"))   // otherwise	        'Hello guest'
