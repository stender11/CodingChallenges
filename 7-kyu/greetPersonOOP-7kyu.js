// ---Instructions:---
// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)
// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.
// Here is how the final refactored code would be used:

// ---P.R.E.P.---
// create a class/object constructor that has a name property and a greet function that takes in another name for a person and greets them
// returns a greeting based on the name of the object and the argument in the prototype function
// Example
// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'

// ---Submitted Solution:---
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(yourName) {
        return `Hello ${yourName}, my name is ${this.name}`;
    }
}

// ---Test cases:---
const joe = new Person('Joe');
console.log(joe.name);         // should == 'Joe'
console.log(joe.greet("Kate")); // Answer: 
