// ---Instructions:---
// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
// Objective
// Preloaded for you is a class Dog:
class Dog {
    constructor(name, age, gender, species, size, master, loyal) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.species = species;
      this.legs = 4;
      this.size = size;
      this.master = master;
      this.loyal = loyal;
    }
  }
  // You are then given a working class Labrador as your initial code.
  // class Labrador {
  //   constructor(name, age, gender, master) {
  //     this.name = name;
  //     this.age = age;
  //     this.gender = gender;
  //     this.species = "Labrador";
  //     this.legs = 4;
  //     this.size = "Large";
  //     this.master = master;
  //     this.loyal = true;
  //   }
  // }
  // Shorten it so that it meets the strict character count requirements for this Kata.
  // Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D
  
  // ---P.R.E.P.---
  
  // ---Submitted Solution:---
  class Labrador extends Dog {
      constructor(name, age, gender, master) {
          super(name, age, gender, "Labrador", "Large", master, true)
      }
  }
  
  // ---Test cases:---
  var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");
  console.log(spitsy.name, "Spitsy");
  console.log(spitsy.age, 10);
  console.log(spitsy.gender, "Male");
  console.log(spitsy.species, "Labrador");
  console.log(spitsy.legs, 4);
  console.log(spitsy.size, "Large");
  console.log(spitsy.master, "Donald");
  console.log(spitsy.loyal, true);
  var edward = new Labrador("Edward", 3, "Male", "Emma");
  console.log(edward.name, "Edward");
  console.log(edward.age, 3);
  console.log(edward.gender, "Male");
  console.log(edward.species, "Labrador");
  console.log(edward.legs, 4);
  console.log(edward.size, "Large");
  console.log(edward.master, "Emma");
  console.log(edward.loyal, true);
  