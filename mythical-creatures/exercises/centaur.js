class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
    this.crankyCounter = 0;
  }
  shootBow() {
    this.crankyCounter += 1;
    if (this.crankyCounter === 3) {
      this.cranky = true;
      // lines 14-18 do not break code but does not progress 
    } if (this.cranky === true) {
      return "NO!";
    } else {
      return "Twang!!!"
    }
  }
  run() {
    this.crankyCounter += 1;
    return "Clop clop clop clop!!!"
  }
}

module.exports = Centaur;
