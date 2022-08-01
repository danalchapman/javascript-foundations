class Snowman {
    constructor(snowInfo) {
        this.carrots = snowInfo.carrots;
        this.coal = snowInfo.coal;
        this.buttons = snowInfo.buttons;
        this.snowballs = snowInfo.snowballs;
        this.magicHat = false;
    }
    canWearMagicHat() {
        if (this.coal >=2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
            this.magicHat = true;
        }
    }
}

module.exports = Snowman;