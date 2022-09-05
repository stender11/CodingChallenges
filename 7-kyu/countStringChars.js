// ---Instructions:---
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// ---Submitted Solution:---
function solve(str) {
    const upperCaseCount = str.match(/[A-Z]/g).length || 0
    const lowerCaseCount = str.match(/[a-z]/g).length || 0
    const numbersCount = str.match(/[0-9]/g).length || 0
    const specialCharsCount = (str.length - (upperCaseCount + lowerCaseCount + numbersCount)) || 0
    return [upperCaseCount, lowerCaseCount, numbersCount, specialCharsCount]
}

// ---Test cases:---
console.log(solve("Codewars@codewars123.com")) // [1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ")) // [7,6,3,2]
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")) // [9,9,6,9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")) // [15,8,6,9] 
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")) // [10,7,3,6]
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")) // [7,13,4,10]
