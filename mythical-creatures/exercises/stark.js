const Direwolf = require("./direwolf");

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
  callDirewolf(wolfName, wolfHome) {
    var direwolf = new Direwolf(wolfName, wolfHome);
    direwolf.home = this.location;
    direwolf.protect(this)
    return direwolf
  }
}

module.exports = Stark;
