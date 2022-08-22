// ---Instructions:---
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// ---Submitted Solution:---
function calculator(a,b,sign){
    if (typeof a === "number" && typeof b === "number" && (sign === "+" || sign === "-" || sign === "*" || sign === "/")) {
        return eval(a + sign + b)
    } else {
        return "unknown value"
    }
}

// ---Test cases:---
console.log(calculator(1,2,"+")) // result will be 3
console.log(calculator(1,2,"&")) // result will be "unknown value"
console.log(calculator(1,"k","*")) // result will be "unknown value"
