// ---Instructions:---
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// ---Submitted Solution:---
function include(arr, item){
    return arr.includes(item)
}

// ---Test cases:---
console.log(include([1,2,3,4], 3)) // True
