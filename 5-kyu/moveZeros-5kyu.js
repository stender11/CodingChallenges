// ---Instructions:---
// Codewars 5kyu - Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// ---P.R.E.P.---
// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns [false,1,1,2,1,3,"a",0,0]

// ---Submitted Solution:---
const moveZeros = arr => {
    for (let i = arr.length; i--;) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }

    return arr;
}

// best practice solution
// const moveZeros = arr => [
//     ...arr.filter(n => n !== 0),
//     ...arr.filter(n => n === 0)
//   ];

// ---Test cases:---
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([0])); // [0]
