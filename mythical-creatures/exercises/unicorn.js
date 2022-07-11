class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  };
  isWhite() {
    return false;
  }
  says(say) {
    return `**;* ${say} *;**`
  }
}

module.exports = Unicorn;
