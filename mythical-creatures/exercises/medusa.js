var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    this.statues.push(newStatue);
    if (this.statues.length > 3) {
      var statue = this.statues[0];
      this.statues.shift();
      var freePerson = new Person(statue.name);
      freePerson.mood = "relieved";
      return freePerson
    }
  }
}


module.exports = Medusa;
