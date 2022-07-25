class Direwolf {
  constructor(wolfName, wolfHome, wolfSize) {
    this.name = wolfName;
    this.home = wolfHome || "Beyond the Wall";
    this.size = wolfSize || "Massive";
    this.starksToProtect = [];
  }
  protect(stark) {
    if (this.starksToProtect.length > 1) {
      return
    }

    if (this.home === stark.location) {
      stark.safe = true;
      this.starksToProtect.push(stark);
    }
  }
}

module.exports = Direwolf;
