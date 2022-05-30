// Works in browser but not on codewars because replaceAll is not supported in the older version of Node.js that codewars used for the challenge
// function noSpace(x){
//     return x.replaceAll(" ", "")
// }

const noSpace = x => x.split(" ").join("")

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(noSpace('8aaaaa dddd r     '))
