class Dragon {
  constructor(dragName, dragRider) {
    this.name = dragName;
    this.rider = dragRider;
    this.hungry = true;
    this.count = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.count += 1;
    if (this.count >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
