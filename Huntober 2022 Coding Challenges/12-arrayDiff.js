// ---Instructions:---
// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other.

// ---P.R.E.P.---
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"
// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

// ---Submitted Solution:---
function arrayDiff(arrA, arrB) {
    let newSet = new Set(arrB);
    return arrA.filter(n => !newSet.has(n));
}

// ---Test cases:---
console.log(arrayDiff([1,2,2,2,3],[2])) // [1,3]
console.log(arrayDiff([], [4,5])) // []
console.log(arrayDiff([3,4], [3])) // [4]
console.log(arrayDiff([1,8,2], [])) // [1,8,2]
console.log(arrayDiff([1,2],[1])) // [2]
