// ---Instructions:---
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// ---Submitted Solution:---
function highAndLow(numbers){
    const numArr = numbers.split(" ").map(e => Number(e))
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}

// ---Test cases:---
console.log(highAndLow("1 2 3 4 5")) // return "5 1"
console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")) // return "9 -5"
