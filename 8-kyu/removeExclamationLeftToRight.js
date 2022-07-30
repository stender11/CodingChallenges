// ---Instructions:---
// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// ---Submitted Solution:---
function remove(s,n) {
    for(i = 1; i <= n; i++) {
        s = s.replace("!", "")
    }
    return s
}

// ---Test cases:---
console.log(remove("Hi!",1)) // "Hi"
console.log(remove("Hi!",100)) // "Hi"
console.log(remove("Hi!!!",1)) // "Hi!!"
console.log(remove("Hi!!!",100)) // "Hi" 
console.log(remove("!Hi",1)) // "Hi"
console.log(remove("!Hi!",1)) // "Hi!"
console.log(remove("!Hi!",100)) // "Hi"
console.log(remove("!!!Hi !!hi!!! !hi",1)) // "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",3)) // "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",5)) // "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi",100)) // "Hi hi hi"
