// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(arr) {
    let sumForAverage = arr.reduce((acc, cv) => cv + acc, 0)
//     if (arr == false) {
//         return 0
//     } else {
//     return (average / arr.length)
//     }
    return arr == false ? 0 : sumForAverage / arr.length
  }

console.log(find_average([1,2,3,4]))
