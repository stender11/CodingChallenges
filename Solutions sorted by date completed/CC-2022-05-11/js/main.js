// Implement a function which multiplies two numbers.

// const multiply = (n1, n2) => n1 * n2


// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//     if (d >= 7) {
//         return (d * 40) - 50
//     } else if (d >= 3 && d < 7) {
//         return (d * 40) - 20
//     } else {
//         return d * 40
//     }
// }

// console.log(rentalCarCost(9))


// Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// const stringToArray = string => string.split(" ")

// console.log(stringToArray("Robin Singh"))


// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let points = 0
    games.map(elem => {
        if (elem[0] > elem[2]) {
            points += 3
        } else if (elem[0] == elem[2]) {
            points++
        } else if (elem[0] < elem[2]) {
            points += 0
        }
    })
    return points
}

console.log(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']))
