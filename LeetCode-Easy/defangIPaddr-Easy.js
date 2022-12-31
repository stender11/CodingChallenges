// ---Instructions:---
// LeetCode 1108 - Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Constraints:
// The given address is a valid IPv4 address.

// ---P.R.E.P.---
// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// ---Submitted Solution:---
function defangIPaddr(ip) {
    return ip.replaceAll(".", "[.]")
    // return ip.split(".").join("[.]")
}

// ---Test cases:---
console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
console.log(defangIPaddr("")); // ""
