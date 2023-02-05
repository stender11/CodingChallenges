// ---Instructions:---
/* INPUT DATA */
const people = Object.freeze([
    {
      name: 'Bob Ross',
      job: 'Artist',
      age: 61
    },
    {
      name: 'M. C. Escher',
      job: 'Artist',
      age: 45
    },
    {
      name: 'Al Pacino',
      job: 'Actor',
      age: 79
    }
  ]);

// ---P.R.E.P.---

// ---Submitted Solution:---
// function groupDataBy (arr, groupBy, values) {
//     let output = { [groupBy]: {} }
//     let existingGroups = []
//     for (let i = 0; i < arr.length; i++) {
//         let currentElement = arr[i]
//         let currentGroup = currentElement[groupBy]
//         let targetValue = currentElement[values]
//         if (!existingGroups.includes(currentGroup)) {
//             output[groupBy][currentGroup] = []
//             existingGroups.push(currentGroup)
//         }
//         output[groupBy][currentGroup].push(targetValue)
//     }
//     return output
// }

function groupDataBy(arr, groupBy, values) {
    const output = {
        [groupBy]: {} 
    };
    const existingGroups = [];
    for (const currentElement of arr) {
        const currentGroup = currentElement[groupBy];
        const targetValue = currentElement[values];
        if (!existingGroups.includes(currentGroup)) {
        output[groupBy][currentGroup] = [];
        existingGroups.push(currentGroup);
        }
        output[groupBy][currentGroup].push(targetValue);
    };
    return output;
}

// ---Test cases:---
/* TESTS */
function expect (value) {
return {
    toEqual: function (expectation) {
    const valid = JSON.stringify(expectation) === JSON.stringify(value);
    if (valid) {
        console.log('Success');
    } else {
        console.log('Failure');
    }
    }
};
}

expect(groupDataBy(people, 'job', 'name'))
.toEqual({
    job: {
    Artist: ['Bob Ross', 'M. C. Escher'],
    Actor: ['Al Pacino']
    }
});

expect(groupDataBy(people, 'job', 'age'))
.toEqual({
    job: {
    Artist: [61, 45],
    Actor: [79]
    }
});

expect(groupDataBy(people, 'age', 'name'))
.toEqual({
    age: {
    61: ['Bob Ross'],
    45: ['M. C. Escher'],
    79: ['Al Pacino']
    }
});