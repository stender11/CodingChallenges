// ---Instructions:---
// LeetCode 876 - Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// ---P.R.E.P.---
// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// ---Submitted Solution:---
const middleNode = head => {
    slow = fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// ---Test cases:---
console.log(middleNode([1,2,3,4,5])) // [3,4,5]
console.log(middleNode([1,2,3,4,5,6])) // [4,5,6]
