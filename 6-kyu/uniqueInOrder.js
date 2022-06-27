// ---Instructions:---
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// ---Submitted Solution:---
function uniqueInOrder(x) {
    const arr = []
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== x[i + 1]) {
            arr.push(x[i])
        }
    }
    return arr
}

// ---Test cases:---
console.log(uniqueInOrder('AAAABBBCCDAABBB')) // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) //         == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3])) //       == [1,2,3]
