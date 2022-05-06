// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

const min = (list) => Math.min(...list)
const max = (list) => Math.max(...list)

console.log(min([2,56,1,538,0,546,13,005]))
console.log(max([2,56,1,538,0,546,13,005]))
