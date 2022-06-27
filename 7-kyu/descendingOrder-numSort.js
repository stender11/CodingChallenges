// ---Instructions:---
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// ---Submitted Solution:---
function descendingOrder(n){
    return Number(Array.from(String(n)).sort((a, b) => b - a).join(""))
}  

// ---Test cases:---
console.log(descendingOrder(42145)) // == 54421
console.log(descendingOrder(145263)) // == 654321
console.log(descendingOrder(123456789)) // == 987654321
