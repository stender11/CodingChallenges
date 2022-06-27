// ---Instructions:---
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// Zero alone is fine, don't worry about it. Poor guy anyway
console.time("noBoringZeros")

// ---Submitted Solution:---
function noBoringZeros(n) {
    if (n % 10 !== 0 || n === 0) {
        return n
    }
    while (n % 10 === 0) {
        n = n / 10
    }
    return n
}
// 0.099853515625 ms

// alternate solution
// function noBoringZeros(n) {
//     while (n % 10 === 0 && n !== 0) {
//       n = n / 10
//     }
//     return n
// }
// 0.14892578125 ms

// alternate with regex
// function noBoringZeros(n) {
//     return +`${n}`.replace(/0*$/, "")
// }
// 0.10302734375 ms

// ---Test cases:---
console.log(noBoringZeros(1450)) // -> 145
console.log(noBoringZeros(960000)) // -> -> 96
console.log(noBoringZeros(1050)) // ->  105
console.log(noBoringZeros(-1050)) // -> -105
console.log(noBoringZeros(0)) // -> 0

console.timeEnd("noBoringZeros")
