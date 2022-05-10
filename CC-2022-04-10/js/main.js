// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0

function sumNums(arr) {
    let sum = 0
    arr.forEach(num => num > 0 && (sum += num))
    return sum
}

console.log(sumNums([1,-4,7,12]))
console.log(sumNums([]))
