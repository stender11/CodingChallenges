// ---Instructions:---
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// ---P.R.E.P.---
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// ---Submitted Solution:---
function toCamelCase(str){
    let camelString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "_" || str[i] === "-") {
            camelString += str[i + 1].toUpperCase();
            i += 1;
        } else {
            camelString += str[i];
        }
    }
    return camelString;
}

// better solution from codewars
// function toCamelCase(str){
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//   }

// ---Test cases:---
console.log(toCamelCase('')); // ''
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"
