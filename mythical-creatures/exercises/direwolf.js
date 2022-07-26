class Direwolf {
  constructor(wolfName, wolfHome, wolfSize) {
    this.name = wolfName;
    this.home = wolfHome || "Beyond the Wall";
    this.size = wolfSize || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    if (this.starksToProtect.length > 1) {
      return
    }

    if (this.home === stark.location) {
      stark.safe = true;
      this.starksToProtect.push(stark);
      this.huntsWhiteWalkers = false;
    }
  }
  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i].name === stark.name) {
        stark.safe = false;
        this.starksToProtect.splice(i, 1);
      }
    }
  }
}

module.exports = Direwolf;
