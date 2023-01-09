// ---Instructions:---
/*
  4. Sorting Objects
  Write a function that takes in an array of objects as the first argument and a string as the second.
  Return the array of objects sorted in ascending order by the field name denoted by the string argument.
  You can assume that all objects in the array will have the field name that was passed in the string argument.
  Example:
  let users = [
    { name: 'Tim', age: 32 },
    { name: 'Linda', age: 31 },
    { name: 'Dorothy', age: 33 }
  ];
  let sorted = sortObjects(users, 'age');
  console.log(sorted); // [{name: 'Linda', age: 31}, {name: 'Tim', age: 32}, {name: 'Dorothy', age: 33}]
*/

// ---P.R.E.P.---

// ---Submitted Solution:---
function sortObjects (users = [], sortBy) {
    if (users.length < 1) {
        return "users must contain data to be sorted!";
    }
    if (!Array.isArray(users)) {
        return "users must be an array!";
    }
    if (typeof sortBy !== "string") {
        return "sortBy must be a string!";
    }
    return users.sort((a, b) => a[sortBy] - b[sortBy] || a.name.localeCompare(b.name));
}

// ---Test cases:---
console.log(sortObjects([{ name: 'Tim', age: 32 }, { name: 'Linda', age: 31 }, { name: 'Dorothy', age: 33 }], "age")) // Answer: [{name: 'Linda', age: 31}, {name: 'Tim', age: 32}, {name: 'Dorothy', age: 33}]
console.log(sortObjects([{ name: 'Tim', age: 32 }, { name: 'Linda', age: 31 }, { name: 'Dorothy', age: 33 }], "name")) // Answer: [{name: 'Dorothy', age: 33}, {name: 'Linda', age: 31}, {name: 'Tim', age: 32}]
console.log(sortObjects([{ name: 'Tim', age: 32 }, { name: 'allen', age: 32 }, { name: 'Dorothy', age: 33 }, { name: 'Linda', age: 31 }], "name")) // Answer: [{ name: 'allen', age: 32 }, {name: 'Dorothy', age: 33}, { name: 'Linda', age: 31 }, {name: 'Tim', age: 32}, {name: 'Tim', age: 32}]
console.log(sortObjects([{ name: 'Tim', age: 32 }, { name: 'Allen', age: 32 }, { name: 'Dorothy', age: 33 }, { name: 'Linda', age: 31 }], "age")) // Answer: [{ name: 'Linda', age: 31 }, { name: 'Allen', age: 32 }, {name: 'Tim', age: 32}, {name: 'Dorothy', age: 33}]
console.log(sortObjects([{ name: 'tim', age: 32 }, { name: 'aLLEn', age: 32 }, { name: 'Dorothy', age: 33 }, { name: 'Linda', age: 31 }], "")) // Answer: [{ name: 'aLLEn', age: 32 }, {name: 'Dorothy', age: 33}, { name: 'Linda', age: 31 }, {name: 'tim', age: 32}]
console.log(sortObjects([{}], "age")) // Answer: {}
console.log(sortObjects([{}], "name")) // Answer: {}
console.log(sortObjects([{}], "42")) // Answer: {}
console.log(sortObjects([{}], 42)) // Answer: "sortBy must be a string!"
console.log(sortObjects([], "age")) // Answer: "Users must contain data to be sorted!"
console.log(sortObjects()) // Answer: "Users must contain data to be sorted!"
console.log(sortObjects("age", "age")) // Answer: "users must be an array!"
console.log(sortObjects([{ name: "Tim", age: !32 }, { name: '&@^&$@', age: 32 }, { name: '!!!!!!!!!!!', age: 33 }, { name: '?>>?', age: 31 }], "name")) // Answer: [{ name: 'allen', age: 32 }, {name: 'Dorothy', age: 33}, { name: 'Linda', age: 31 }, {name: 'Tim', age: 32}, {name: 'Tim', age: 32}]
