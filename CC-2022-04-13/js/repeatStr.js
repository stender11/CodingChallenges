// Write a function called repeatStr which repeats the given string string exactly n times.

const repeatStr = (n, s) => n > 0 ? s.repeat(n) : ""

console.log(repeatStr(6, "I")) // "IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"
