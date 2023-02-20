// ---Instructions:---
// Implementing a stack

// ---P.R.E.P.---


// ---Submitted Solution:---
class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
    }
    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    peek() {
        return this.storage[this.size]
    }
}

// ---Test cases:---
const stack = new Stack
stack.push('apple')
stack.push('banana')
stack.push('plum')
console.log(stack.storage); // {Obj}
stack.pop()
console.log(stack.peek()); // "banana"
stack.pop()
console.log(stack.peek()); // "apple"
