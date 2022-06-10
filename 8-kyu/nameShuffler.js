// ---Instructions:---
// Write a function that returns a string in which firstname is swapped with last name.

// ---Submitted Solution:---
function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
}
  
// ---Test cases:---
console.log(nameSuffler("john McClane")) // --> "McClane john"
