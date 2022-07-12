class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.drink = function(newDrank) {
      this.thirsty = false;
    };
    this.ouncesDrank = 0;
  }
}

module.exports = Vampire;
