class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    // this.drink = function() {
    //   if (this.drink === true) {
    //     this.thirsty = false;
    //   } else (
    //     this.thirsty = true
    //   )
    // }
  }
}

module.exports = Vampire;
