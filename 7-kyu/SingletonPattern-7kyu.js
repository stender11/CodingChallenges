// ---Instructions:---
// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
// Create an Singleton pattern, so there is one object in system.

// ---P.R.E.P.---
// Example:
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

// ---Submitted Solution:---
const Singleton = function(){
    if(Singleton._instance) {
        return Singleton._instance;
    }
    Singleton._instance = this;
}

// ---Test cases:---
var obj1 = new Singleton();
var obj2 = new Singleton();
console.log(obj1 === obj2); // => true
console.log(obj1.test = 1);
console.log(obj2.test); // => 1
console.log(obj1.test) // 
