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
    gatherMaterials(keyName, amount) { // passing in 2 arguments
        if (this.materials === keyName) {
            this.materials[keyName] + amount
        }
    }
}

module.exports = Human;