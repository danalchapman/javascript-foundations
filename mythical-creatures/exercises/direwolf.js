class Direwolf {
  constructor(wolfName, wolfHome, wolfSize) {
    this.name = wolfName;
    this.home = wolfHome || "Beyond the Wall";
    this.size = wolfSize || "Massive";
    this.starksToProtect = [];
  }
  protect(stark) {
    this.starksToProtect.push(stark);
  }
}

module.exports = Direwolf;
