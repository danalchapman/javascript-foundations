var Snowman = require('./Snowman');

class Human {
    constructor(humanName) {
        this.name = humanName;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        };
    }
    gatherMaterials(materials, amount) { // passing in 2 arguments
            this.materials[materials] += amount;
    }
    buildASnowman() {
        var newSnowman = new Snowman(this.materials);
        return newSnowman;
    }
    placeMagicHat() {
        Snowman.canWearMagicHat;
        if (Snowman.magicHat) {
            return "I guess I didn't build it correctly."
        } else {
            return "Woah, this snowman is coming to life!";
        }
    }
}

module.exports = Human;