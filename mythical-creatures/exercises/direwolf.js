class Direwolf {
  constructor(wolfName, wolfHome, wolfSize) {
    this.name = wolfName;
    this.home = wolfHome || "Beyond the Wall";
    this.size = wolfSize || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      stark.safe = true;
      this.starksToProtect.push(stark)
      this.huntsWhiteWalkers = false;
    }
  }
  leave (stark) {
    stark.safe = false;
    for (var i = 0; i < this.starksToProtect.length; i++) {
      this.starksToProtect.splice(i, 1);
    }
  }
}

module.exports = Direwolf;