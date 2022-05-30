// ---Instructions:---
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// PREP
// P: arr as function parameter/argument, remove every second element
// R: return arr with elements removed
// E:
    // function removeEveryOther(arr){
    // for loop with some function or splice/filter
    // return arr
    //   }
// P:
  // declare function and one parameter which should be an array
  // do the loop or array method
  // return the array
  // function call in code tester

// ---Submitted Solution:---
function removeEveryOther(arr){
  return arr.filter((e, i) => i % 2 <= 0)
}

// ---Test cases:---
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) //['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //[1, 3, 5, 7, 9])
