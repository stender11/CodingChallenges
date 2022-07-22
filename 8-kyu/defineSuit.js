// ---Instructions:---
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


// ---Submitted Solution:---
function defineSuit(card) {
    switch (card.charAt(card.length - 1)) {
        case "♣": return "clubs";
        case "♦": return "diamonds";
        case "♥": return "hearts";
        case "♠": return "spades";
        default: return "Invalid input."
    }
}

// ---Test cases:---
console.log(defineSuit('3♣')) // return 'clubs'
console.log(defineSuit('Q♦')) // return 'diamonds'
console.log(defineSuit('7♥')) // return 'hearts'
console.log(defineSuit('10♠')) // return 'spades'
