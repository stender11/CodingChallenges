// ---Instructions:---
// LeetCode 206 - Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// ---P.R.E.P.---
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []

// ---Submitted Solution:---
// class LinkedList {
//     constructor () {
//       this.head = this.tail = null
//     }
  
//     append(value) {
  
//       if (!this.tail) {
//         this.head = this.tail = new Node(value)
//       }
   
//       else {
//         let oldTail = this.tail
//         this.tail = new Node(value)
//         oldTail.next = this.tail
//       }
//     }
function reverseList(head){
    let current = head
    let prev = null
    while (current) {
       const temp = current.next
       current.next = prev
       prev = current
       current = temp
   }
   return prev
 }
//   }

//   class Node {
//     constructor (value, prev, next) {
//       this.value = value
//       this.next = next || null
//      }
//   }

// const list = new LinkedList()

// list.append(1)
// list.append(2)
// list.append(3)

/////////////////////////////////
// alternate condensed solution
// var reverseList = (head, prev = null) => {
//     while (head) [head.next, prev, head] = [prev, head, head.next];
//     return prev;
// };

// ---Test cases:---
console.log(reverseList([1,2,3,4,5])) // [5,4,3,2,1]
console.log(reverseList([1,2])) // [2,1]
console.log(reverseList([])) // []
