// ---Instructions:---
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// ---P.R.E.P.---
// takes in arr of ints with length of at least 3, 0 is considered even
// returns a num that represents the only non-odd or non-even num in each arr
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] returns 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] returns 160 (the only even number)

// ---Submitted Solution:---
function findOutlier(arr) {
    const evenFilter = arr.filter(e => e % 2 === 0)
    if (evenFilter.length === 1) {
        return evenFilter[0]
    } else {
        return arr.filter(e => e % 2 !== 0)[0]
    }
}

// ---Test cases:---
console.log(findOutlier([0, 1, 2])) // Answer: 1
console.log(findOutlier([1, 2, 3])) // Answer: 2
console.log(findOutlier([2,6,8,10,3])) // Answer: 3
console.log(findOutlier([0,0,3,0,0])) // Answer: 3
console.log(findOutlier([1,1,0,1,1])) // Answer: 0
