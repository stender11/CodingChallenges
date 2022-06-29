// ---Instructions:---
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// ---Submitted Solution:---
function well(x){
  let goodOnes = x.filter(e => e === "good")
  console.log(goodOnes)
  if (goodOnes.length < 1) {
    return "Fail!"
  } else if (goodOnes.length >= 1 && goodOnes.length <= 2) {
    return "Publish!"
  } else if (goodOnes.length > 2) {
    return "I smell a series!"
  } else {
    return `Invalid input, ${x.length} must be >= to 0`
  }
}

// ---Test cases:---
console.log(well(['bad', 'bad', 'bad'])) // 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) // 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) // 'I smell a series!'
