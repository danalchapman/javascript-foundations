class Stark {
  constructor(starkInfo) {
    this.name = starkInfo.name;
    this.location = starkInfo.area || "Winterfell";
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe === true) {
      return "The North Remembers";
    }
    return "Winter is Coming";
  }
}

module.exports = Stark;
