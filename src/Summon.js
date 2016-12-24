
import AweConst from './Const';

var SUMMON_ID = 100; // DON'T CHANGE THIS VALUE!!! -- IT'S USED FOR PERSISTENCY

class Summon {

    constructor(_name, _alias) {
        this.id = SUMMON_ID++;
        this.name = _name;
        this.alias = _alias || _name.toLocaleLowerCase();

        this.fairiesWrit(0);
        this.prismaticHorn(0);
        this.calamityGem(0);
        this.rainbowBloom(0);
        this.calamityWrit(0);
        this.divineCrystal(0);
    };

    id = 0;
    name = '';
    alias = '';
    src = '';
    materials = [];
    origin = AweConst.Origin.FF_BE.id; // assume FFBE by default

    setImage = function(_src) {
        this.src = _src;
        return this;
    };
    setWiki = function(_src) {
        this.wiki = _src;
        return this;
    };

    setOrigin = function(originObject) {
        this.origin = originObject.id;
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

    // Returns an Array with the ids of the 5 materials required for awakening.
    getMaterialIds = function() {
        var matIds = [];
        this.materials.forEach(function(count, id){
            if (count > 0) {
                matIds.push(id);
            }
        });
        return matIds;
    };

    static internal_setNextSummonId = function(value) {
        SUMMON_ID = value;
    }
}

export default Summon;