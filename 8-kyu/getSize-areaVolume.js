// ---Instructions:---
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// ---Submitted Solution:---
function getSize(w, h, l) {
    let area = (2 * l * w) + (2 * l * h) + (2 * w * h)
    let volume = l * w * h
    let arr = [area, volume]
    return arr
}

// ---Test cases:---
console.log(getSize(4, 2, 6)) // [88, 48]
console.log(getSize(10, 10, 10)) // [600, 1000]
