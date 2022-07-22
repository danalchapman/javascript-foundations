class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
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
    if (this.cranky === true) {
      return "NO!";
    }
    return "Twang!!!"
  }
  run() {
    this.checkCranky()
    if (this.cranky === true) {
      return "NO!";
    }
    return "Clop clop clop clop!!!"
  }
}

module.exports = Centaur;
