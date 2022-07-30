class Fairy {
  constructor(fairName) {
    this.name = fairName;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = "Good natured";
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) { //Array
    this.clothes.dresses.push(...flowers)
  }
  becomeProvoked() {
    this.disposition = "Vengeful";
  }
  replaceInfant(infant) {
    if (this.becomeProvoked()) {
      infant.disposition = "Malicious";
    }
  }
}

module.exports = Fairy;
