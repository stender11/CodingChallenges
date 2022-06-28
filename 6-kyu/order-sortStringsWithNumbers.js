// ---Instructions:---
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


// ---Submitted Solution:---
function order(words) {
    const wordArr = words.split(" ")
    const sortedArr = []
    for (i = 0; i < wordArr.length; i++) {
      sortedArr.push(wordArr.find((e) => e.includes(i + 1)))
    }
    return sortedArr.join(" ")
}

// alternate with regex
// function order(words) {
//     return words.split(" ").sort(function(a, b) {
//         return a.match(/\d/) - b.match(/\d/)
//     }).join(" ")
// }  

// alternate (not finished)
// function order(words){
//     if (!words) {
//         return ""
//     }
//     let indexArr = words.split(" ").map((e, i) => +(e.split("").find(Number)) - 1)
//     for (i = 0; i < words.length; i++) {
//         //...
//     }
// }

// ---Test cases:---
console.log(order("is2 Thi1s T4est 3a")) // -->  "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // -->  "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) // -->  ""
