// ---Instructions:---
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// PREP
// P: player 1, player 2, winning conditions
// R: return a string with the outcome of each game
// E:
// function rps(p1, p2) {
//     // conditional statement comparing player choices
//     // return string with outcome
// }
// P: function with 2 parameters representing each player choice
//  condtional inside function comparing each possible combination for the 3 possible outcomes
//  return a string for each outcome
//  function is called by code test in browser

// ---Submitted Solution:---
const rps = (p1, p2) => {
    if ((p1 == "rock" && p2 == "scissors") || (p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock")) {
        return "Player 1 won!"
    } else if ((p2 == "rock" && p1 == "scissors") || (p2 == "scissors" && p1 == "paper") || (p2 == "paper" && p1 == "rock")) {
        return "Player 2 won!"
    } else if (p1 == p2) {
        return "Draw!"
    }
}

// ---Test cases:---
console.log(rps("rock", "rock")) // Draw
console.log(rps("scissors", "rock")) // Player 2 wins
console.log(rps("paper", "rock")) // Player 1 wins
