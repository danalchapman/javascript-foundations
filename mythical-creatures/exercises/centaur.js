class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCounter = 0;
  }
  checkCranky() {
    this.crankyCounter += 1;
    if (this.crankyCounter === 3) {
      this.cranky = true;
    }
  }
  shootBow() {
    this.checkCranky()
    if (this.cranky === true || this.standing === false) {
      return "NO!";
    }
    return "Twang!!!";
  }
  run() {
    this.checkCranky()
    if (this.cranky === true || this.standing === false) {
      return "NO!";
    }
    return "Clop clop clop clop!!!";
  }
  sleep() {
    if (this.standing === true) {
      return "NO!";
    } else {
      this.cranky = false;
      return "ZZZZ";
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    this.checkCranky()
    if (this.cranky === true) {
      this.cranky = false;
    } else if (this.standing === false) {
      return "Not while I'm laying down!"
    }
  }
}

module.exports = Centaur;
