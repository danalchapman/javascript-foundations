class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.drink = function() {
      this.thirsty = false;
      this.ouncesDrank = this.ouncesDrank + 10;
      // return "I'm too full to drink anymore!"
      // as a result of vampire.drink === 50;
    }
  }
}

module.exports = Vampire;
