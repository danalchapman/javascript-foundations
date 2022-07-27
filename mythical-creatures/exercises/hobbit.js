class Hobbit {
  constructor(hobbitInfo) {
    this.name = hobbitInfo.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age >= 101) {
      this.adult = true;
      this.old = true;
    } else if (this.age >= 33) {
      this.adult = true;
    }
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      return "You can't have it!";
    }
  }
}

module.exports = Hobbit;
