// ---Instructions:---
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// For Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing positive values.

// ---Submitted Solution:---
function sumOfMinimums(arr) {
    let rayTheArray = []
    for (i = 0; i < arr.length; i++) {
        let nested = arr[i]
        let min = Math.min(...nested)
        rayTheArray.push(min)
    }
    return rayTheArray.reduce((cv, acc) => acc + cv, 0)
}

// --alternates:
// function sumOfMinimums(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//      total += Math.min(...arr[i])
//     }
//     return total;
//   }

// function sumOfMinimums(arr) {
//     return arr.reduce((p, c) => p + Math.min(...c), 0);
//   }

// ---Test cases:---
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])) // 9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])) // 76
