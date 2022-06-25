// ---Instructions:---
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// 1 I love you
// 2 a little
// 3 a lot
// 4 passionately
// 5 madly
// 6 not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// ---Submitted Solution:---
function howMuchILoveYou(nbPetals) {
  const arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ]
  for (let i = 0; i < nbPetals; i++) {
    if (i == nbPetals - 1) {
      return arr[i % 6]
      }
  }
}

// best solution from codewars
// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]
// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length] 
// }

// ---Test cases:---
console.log(howMuchILoveYou(7)) // "I love you"
console.log(howMuchILoveYou(3)) // "a lot"
console.log(howMuchILoveYou(6)) // "not at all"
console.log(howMuchILoveYou(428)) // "a little"
