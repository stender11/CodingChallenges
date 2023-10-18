// ---Instructions:---
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//     When positives and positives interact, they remain positive.
//     When negatives and negatives interact, they remain negative.
//     But when negatives and positives interact, they become neutral, and are shown as the number 0.
// The two strings will be the same length.

// ---P.R.E.P.---
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"
// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
// ("-++-", "-+-+") ➞ "-+00"

// ---Submitted Solution:---
const neutralise = (s1, s2) => {
    let output = "";

    for (i = 0; i < s1.length; i++) {
        if (s1[i] == s2[i]) output += s1[i];
        else output += "0";
    }

    return output;
}

// // ---Test cases:---
console.log(neutralise("--", "-+")); // "-0"
console.log(neutralise("-++", "+--")); // "000"
console.log(neutralise("++-++--++-", "-+++-++-++")); // "0+0+0000+0"
console.log(neutralise("-++-+-++-", "+-++++---")); // "00+0+000-"
console.log(neutralise("---++-+--", "-+++--++-")); // "-00+0-+0-"
console.log(neutralise("")); // ""
