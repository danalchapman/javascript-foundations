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
  makeDresses(flowers) {
    // take each element from the argument array
    // add it to the end of the clothes.dresses array at index 1
    // 
    }
  }

module.exports = Fairy;
