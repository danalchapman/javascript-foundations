var Victim = require('./victim');

class Werewolf {
  constructor(werewolfName) {
    this.name = werewolfName;
    this.form = "human";
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === "human") {
      this.form = "wolf";
      this.hungry = true;
      return "Aaa-Woooo!";
    } else if (this.form === "wolf") {
      this.form = "human";
      this.hungry = false;
      return "Where are I?"
    }
  }
  eatVictim(victim) {
    var newVictim = new Victim(victim.name);
    if (this.hungry === true) {
      victim.alive = false;
      this.form = "human";
      return `Yum, ${victim.name} was delicious.`
    } else if (this.form === "human") {
      return `No way am I eating ${victim.name}, I'd like a burger!`
    }
  }
}

module.exports = Werewolf;
