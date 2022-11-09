// ---Instructions:---
// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// ---P.R.E.P.---
// Example:
// var dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

// ---Submitted Solution:---
function Animal(name, type) {
    this.name = name;
    this.type = type;
}

Animal.prototype.toString = function() {
    return `${this.name} is a ${this.type}`
}

// ---Test cases:---
const dog = new Animal('Max', 'dog');
console.log(dog.toString()); // should return 'Max is a dog'
console.log(dog.type); // should == 'dog'
console.log(dog.name); // should == 'Max'
console.log(dog.name = 'Lassie'); // should set name to 'Lassie'
console.log(dog.toString()) // should return 'Lassie is a dog'
