class Pirate {
  constructor(name, job, curse) {
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = curse || "false";
  }
}

module.exports = Pirate;
