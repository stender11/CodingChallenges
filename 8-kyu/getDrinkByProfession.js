// ---Instructions:---
// Complete the function that receives as input a string, and produces outputs according to the following table: see test cases.
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// ---Submitted Solution:---
function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case "jabroni": {
            return "Patron Tequila"
        }
        case "school counselor": {
            return "Anything with Alcohol"
        }
        case "programmer": {
            return "Hipster Craft Beer"
        }
        case "bike gang member": {
            return "Moonshine"
        }
        case "politician": {
            return "Your tax dollars"
        }
        case "rapper": {
            return "Cristal"
        }
        default: {
            return "Beer"
        }
    }
}

// ---Test cases:---
console.log(getDrinkByProfession("Jabroni")) // 	    "Patron Tequila"
console.log(getDrinkByProfession("School Counselor")) // "Anything with Alcohol"
console.log(getDrinkByProfession("Programmer")) // 	    "Hipster Craft Beer"
console.log(getDrinkByProfession("Bike Gang Member")) // "Moonshine"
console.log(getDrinkByProfession("Politician")) // 	    "Your tax dollars"
console.log(getDrinkByProfession("Rapper")) // 	        "Cristal"
console.log(getDrinkByProfession("default")) //          "Beer"
