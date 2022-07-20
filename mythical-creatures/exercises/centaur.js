class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name;
    this.breed = centaurInfo.type;
    this.cranky = false;
    this.standing = true;
  }
  shootBow() {
    return "Twang!!!"
  }
  run() {
    return "Clop clop clop clop!!!"
  }
}

module.exports = Centaur;
