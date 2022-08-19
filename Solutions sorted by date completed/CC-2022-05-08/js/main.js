// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   let arr = []
//   for (let i = n; i > 0; i--) {
//     arr.push(i)
//   }
//   return arr
// }

// console.log(reverseSeq(5))


// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// const DNAtoRNA = dna => dna.split("T").join("U")

//using regexp
// const DNAtoRNA = dna => dna.replace(/T/g, "U")

// console.log(DNAtoRNA("TTTT"))
// console.log(DNAtoRNA("GCAT"))

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0
// Input: [-2.398]
// Output: -2.398
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// const summaNumba = arr => arr.reduce((acc, cv) => cv + acc, 0)

// console.log(summaNumba([1, 5.2, 4, 0, -1]))
// console.log(summaNumba([]))
// console.log(summaNumba([-2.398]))


// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(arr, x) {
    return arr.some((e) => e === x)
}

console.log((check([66, 101], 66))) //true)
console.log((check([101, 45, 75, 105, 99, 107], 107))) //true)
console.log((check(['t', 'e', 's', 't'], 'e'))) //true
console.log((check(['what', 'a', 'great', 'kata'], 'kat'))) //false
