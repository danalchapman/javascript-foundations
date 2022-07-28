var Statue = require("./statue");
var Person = require("./person");

class Medusa {
  constructor(medusaName) {
    this.name = medusaName;
    this.statues = [];
  }
  // need to write a method to push a
  // Person into the this.statues array
  // thereby instatiating a new Statue
  // with the victim argument passed (.name)
  // through the gazeAtVictim method

  // With the test, the medusa.statues.
  // length will have 2 elements added in
  // and they will be Instances of Statue
  // with the names Robbie and Bob

  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    this.statues.push(newStatue);
    if (this.statues.length > 3) {
      var statue = this.statues[0];
      this.statues.shift();
      var freePerson = new Person(statue.name);
      freePerson.mood = "relieved";
      return freePerson;
    }
  }
}

module.exports = Medusa;
