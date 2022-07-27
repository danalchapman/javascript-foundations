class Fairy {
  constructor(fairName) {
    this.name = fairName;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  // makeDresses(flowers) {
  //   this.clothes.dresses.push(flowers);
  //   return this.clothes.dresses.join("-");
  // }
}

module.exports = Fairy;
