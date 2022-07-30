var Human = require("./human");

class Ogre {
    constructor(ogreInfo) {
        this.name = ogreInfo.name;
        this.home = ogreInfo.abode || "Swamp";
        this.swings = 0;
    }
    encounter(human) {
        human.encounterCounter += 1;
    }
    swingAt(human) {
        this.swings += 1;
    }
}

module.exports = Ogre;