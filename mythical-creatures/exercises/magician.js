class Magician {
  constructor(magiDetails) {
    this.name = `The Great ${magiDetails.name}`;
    this.assistant = magiDetails.assistant;
    this.favoriteAccessory = magiDetails.clothing || "top hat";
    this.confidencePercentage = 10;
  }
  performIncantation(incantation) {
    // if passed an argument should be able to uppercase that argument
    return `${incantation.toUpperCase()}!` //method to uppercase a string
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }
  performShowStopper() {
    if (this.confidencePercentage === 100) {
      return "WOW! The magician totally just sawed that person in half!";
    } else {
      return "Oh no, this trick is not ready!";
    }
  }
}

module.exports = Magician;
