
import AweConst from './Const';

var SUMMON_ID = 100; // DON'T CHANGE THIS VALUE!!! -- IT'S USED FOR PERSISTENCY
var INITIAL_SUMMON_ID = SUMMON_ID;

class Summon {

    constructor(_name) {
        this.id = SUMMON_ID++;
        this.name = _name;

        this.fairiesWrit(0);
        this.prismaticHorn(0);
        this.calamityGem(0);
        this.rainbowBloom(0);
        this.calamityWrit(0);
        this.divineCrystal(0);
    };

    id = 0;
    name = '';
    src = '';
    materials = [];

    setImage = function(_src) {
        this.src = _src;
        return this;
    };

    fairiesWrit = function(count) {
        this.materials[AweConst.FairiesWrit.id] = count;
        return this;
    };
    prismaticHorn = function(count) {
        this.materials[AweConst.PrismaticHorn.id] = count;
        return this;
    };
    calamityGem = function(count) {
        this.materials[AweConst.CalamityGem.id] = count;
        return this;
    };
    rainbowBloom = function(count) {
        this.materials[AweConst.RainbowBloom.id] = count;
        return this;
    };
    calamityWrit = function(count) {
        this.materials[AweConst.CalamityWrit.id] = count;
        return this;
    };
    divineCrystal = function(count) {
        this.materials[AweConst.DivineCrystal.id] = count;
        return this;
    };

    getMaterialCount = function(materialId) {
        return this.materials[materialId] || 0;
    };

    static getRandomSummonId = function() {
        return INITIAL_SUMMON_ID + 
            (Math.floor(Math.random() * (SUMMON_ID - INITIAL_SUMMON_ID)) | 0);
    }
}

export default Summon;