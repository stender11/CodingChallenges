// ---Instructions:---
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// ---P.R.E.P.---
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

// ---Submitted Solution:---
function generateRange(min, max, step) {
    const rangeArr = [];

    for (let i = min; i <= max; i += step) {
        rangeArr.push(i);
    }

    return rangeArr;
}

// ---Test cases:---
console.log(generateRange(2, 10, 2), [2,4,6,8,10]);
