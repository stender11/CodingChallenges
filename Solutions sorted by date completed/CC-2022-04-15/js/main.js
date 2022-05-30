// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
    let total = 0
    for (i = 0; i <= num; i++) {
        total += i
    }
    return total
}

console.log(summation(2))
// 3
console.log(summation(8))
// 36
