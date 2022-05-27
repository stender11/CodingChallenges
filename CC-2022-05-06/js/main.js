// ---Instructions:---
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// ---Submitted Solution:---
function fakeBin(numStr) {
    let arr = numStr.split("").map(e => Number(e)).map(elem => {
        if (elem < 5) {
            return 0
        } else if (elem >= 5) {
            return 1
        }
    })
    return arr.join("")
}

// ---Test cases:---
console.log(fakeBin('45385593107843568')) //'01011110001100111'
console.log(fakeBin('509321967506747')) //'101000111101101'
console.log(fakeBin('366058562030849490134388085')) //'011011110000101010000011011'


// ---Instructions:---
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)

// ---Submitted Solution:---
function hero(bullets, dragons) {
    return bullets / 2 >= dragons ? true : false
}

// const hero = (bullets, dragons) => bullets / 2 >= dragons

// ---Test cases:---
console.log(hero(4, 5)) //false
console.log(hero(100, 40)) //true
console.log(hero(1500, 751)) //false
console.log(hero(0, 1)) //false


// ---Instructions:---
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// ---Submitted Solution:---
function paperwork(classMateCount, numOfPages) {
  if (classMateCount < 0 || numOfPages < 0) {
      return 0
  } else {
      return classMateCount * numOfPages
  }
}

// // const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0

// ---Test cases:---
console.log(paperwork(5, 5))
console.log(paperwork(-5, 5))
console.log(paperwork(5, -5))
console.log(paperwork(0, 5))


// ---Instructions:---
// Write function bmi that calculates body mass index (bmi = weight / height^2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// ---Submitted Solution:---
function bmi(weight, height) {
    let bmiNumber = weight / (height ** 2)
    if (bmiNumber <= 18.5) {
        return "Underweight"
    } else if (bmiNumber <= 25) {
        return "Normal"
    } else if (bmiNumber <= 30) {
        return "Overweight"
    } else if (bmiNumber > 30) {
        return "Obese"
    }
}

// ---Test cases:---
console.log(bmi(80, 1.8))
