// ---Instructions:---
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// ---Submitted Solution:---
function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage
}

// ---Test cases:---
console.log(combat(100, 20)) // 80
console.log(combat(84, 42))  // 42
console.log(combat(20, 30))  // 0
