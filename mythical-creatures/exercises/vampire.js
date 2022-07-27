class Vampire {
  constructor(vampName, vampPet) {
    this.name = vampName;
    this.pet = vampPet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
    } else {
      return "I'm too full to drink anymore!";
    }
  }
}

module.exports = Vampire;
