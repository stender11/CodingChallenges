// ---Instructions:---
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// ---Submitted Solution:---
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy"
  } else if (old < 18) {
    return "drink coke"
  } else if (old < 21) {
    return "drink beer"
  } else {
    return "drink whisky"
  }
}

// ---Test cases:---
console.log(peopleWithAgeDrink(13)) // --> "drink toddy"
console.log(peopleWithAgeDrink(17)) // --> "drink coke"
console.log(peopleWithAgeDrink(18)) // --> "drink beer"
console.log(peopleWithAgeDrink(20)) // --> "drink beer"
console.log(peopleWithAgeDrink(30)) // --> "drink whisky"
