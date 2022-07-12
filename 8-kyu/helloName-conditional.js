// ---Instructions:---
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// ---Submitted Solution:---
function hello(name) {
    if (name == undefined || name == "") {
      return "Hello, World!"
    }
    let nameArr = name.toLowerCase().split("")
    nameArr[0] = nameArr[0].toUpperCase()
    return `Hello, ${nameArr.join("")}!`
}

// alternate (and better) solution using substring
// function hello(name){
//   if (name){
//     return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
//   } else {
//     return "Hello, World!";
//   }
// }

// ---Test cases:---
console.log(hello())
console.log(hello(""))
console.log(hello("joHN"))
