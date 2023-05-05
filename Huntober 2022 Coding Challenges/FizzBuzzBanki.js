// ---Instructions:---
// FizzBuzz Practice

// ---P.R.E.P.---


// ---Submitted Solution:---
const fizzBuzz = limit => {
    const outputArr = [0];

    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) outputArr.push("FizzBuzz")
        else if (i % 5 === 0) outputArr.push("Buzz")
        else if (i % 3 === 0) outputArr.push("Fizz")
        else outputArr.push(i)
    };

    return outputArr;
}

// ---Test cases:---
console.log(fizzBuzz(77), [0,1,2,"Fizz",4,"Buzz",6,7,8,"..."]);
