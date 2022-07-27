class Unicorn {
  constructor(uniName, uniColor) {
    this.name = uniName;
    this.color = uniColor || "white";
  }
  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }
  says(uniSays) {
    return `**;* ${uniSays} *;**`
  }
}

module.exports = Unicorn;
