// ---Instructions:---
// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// ---P.R.E.P.---
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// ---Submitted Solution:---
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// ---Test cases:---
console.log(validatePIN("1")); // false
console.log(validatePIN("123")); // false
console.log(validatePIN("12345")); // false
console.log(validatePIN("1234567")); // false
console.log(validatePIN("-1234")); // false
console.log(validatePIN("1.234")); // false
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("00000000")); // false
console.log(validatePIN("0000")); // true
console.log(validatePIN("1111")); // true
console.log(validatePIN("123456")); // true
console.log(validatePIN("098765")); // true
