// ---Instructions:---
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// ---Submitted Solution:---
function sayHello(name, city, state) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

// ---Test cases:---
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')) // --> "Hello, John Smith! Welcome to Phoenix, Arizona!"
