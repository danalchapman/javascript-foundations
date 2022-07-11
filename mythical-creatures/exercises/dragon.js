class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.greet = function() {
      return `Hi, ${rider}!`
    };
    this.hungry = true;
    this.count = 0;
    this.eat = function() {
      this.count += 1;
      if (this.count === 3) {
        this.hungry = false;
      } else {
        this.hungry = true
      }
    }
  }
}



module.exports = Dragon;
