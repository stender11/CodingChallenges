// ---Instructions:---
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// ---P.R.E.P.---
// Parameters - take in a num that is a limit, find multiples of 3 or 5 under the num limit, if negative num = 0, only nums, count each multiple once
// Returns - return a num that is the sum of the multiples below the limit num
// Example - num = 10 -> 23
// Pseudocode - function solution(num) {
    // define variable for sum
    // for loop (i = 1, i < num; i++) {
        // conditional/ternary statement to find multiples of 3 and 5
    //  }
    // return sum of multiples as a num
    // }

// ---Submitted Solution:---
function solution(number) {
    const multiplesArr = []
    for (i = 1; i < number; i++) {
        if (i % 3 === 0) {
            multiplesArr.push(i)
        } else if (i % 5 === 0) {
            multiplesArr.push(i)
        }
    }
    return multiplesArr.reduce((cv, acc) => acc + cv, 0)
}

// ---Test cases:---
console.log(solution(10), 23) // Answer: 23
console.log(solution(20), 78) // Answer: 78
