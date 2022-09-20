// ---Instructions:---
// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]

// ---Submitted Solution:---
function fizzbuzz(n) {
    fizzArr = []
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzArr.push("FizzBuzz")
        } else if (i % 5 === 0) {
            fizzArr.push("Buzz")
        } else if (i % 3 === 0) {
            fizzArr.push("Fizz")
        } else {
            fizzArr.push(i)
        } 
    }
    return fizzArr
}

// ---Test cases:---
console.log(fizzbuzz(3)) // [1,2,'Fizz']
console.log(fizzbuzz(10)) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
console.log(fizzbuzz(15)) // [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']
