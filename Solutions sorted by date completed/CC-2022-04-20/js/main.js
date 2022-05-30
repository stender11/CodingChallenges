// ---Instructions:---
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];

// ---Submitted Solution:---
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, val) => acc + val, 0)
}

// ---Test cases:---
console.log(countSheeps(array1))
