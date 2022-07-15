class Pirate {
  constructor(name, job, curse) {
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = curse || false;
    this.booty = 0;
  }
  robShip() {
    if (this.booty < 500) {
      this.booty += 100;
      return "YAARRR!"
    } else {
      this.cursed = true;
      return "ARG! I've been cursed!";
    }
  }
  liftCurse() {
    if (this.booty >= 300 && this.cursed) {
      this.cursed = false;
      this.booty -= 300;
      return "Your curse has been lifted!";
    } else {
      return "You don't need to lift a curse!";
    }
  }
}

module.exports = Pirate;
