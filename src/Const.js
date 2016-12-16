
import fairiesWrit  from './images/mats/29px-Icon-Fairies_Writ.png';
import horn         from './images/mats/32px-Icon-Prismatic_Horn.png';
import calamityGem  from './images/mats/32px-Icon-Calamity_Gem.png';
import bloom        from './images/mats/32px-Icon-Rainbow_Bloom.png';
import calamityWrit from './images/mats/32px-Icon-Calamity_Writ.png';
import crystal      from './images/mats/32px-Icon-Divine_Crystal.png';

class AweConsts {

    /// Materials ///

    FairiesWrit = {
        id: 0,
        name: "Fairies' Writ",
        src: fairiesWrit
    };
    PrismaticHorn = {
        id: 1,
        name: "Prismatic Horn",
        src: horn
    };
    CalamityGem = {
        id: 2,
        name: "Calamity Gem",
        src: calamityGem
    };
    RainbowBloom = {
        id: 3,
        name: "Rainbow Bloom",
        src: bloom
    };
    CalamityWrit = {
        id: 4,
        name: "Calamity Writ",
        src: calamityWrit
    };
    DivineCrystal = {
        id: 5,
        name: "Divine Crystal",
        src: crystal
    };

    materials = [
        this.FairiesWrit,   // 0
        this.PrismaticHorn, // 1
        this.CalamityGem,   // 2
        this.RainbowBloom,  // 3
        this.CalamityWrit,  // 4
        this.DivineCrystal, // 5
    ];

    Origin = {
        FF_I:   { name: 'FF I',   id:  1 },
        FF_II:  { name: 'FF II',  id:  2 },
        FF_III: { name: 'FF III', id:  3 },
        FF_IV:  { name: 'FF IV',  id:  4 },
        FF_V:   { name: 'FF V',   id:  5 },
        FF_VI:  { name: 'FF VI',  id:  6 },
        FF_VII: { name: 'FF VII', id:  7 },
        FF_VIII:{ name: 'FF VIII',id:  8 },
        FF_IX:  { name: 'FF IX',  id:  9 },
        FF_X:   { name: 'FF X',   id: 10 },
        FF_XI:  { name: 'FF XI',  id: 11 },
        FF_XII: { name: 'FF XII', id: 12 },
        FF_XIII:{ name: 'FF XIII',id: 13 },
        FF_XIV: { name: 'FF XIV', id: 14 },
        FF_XV:  { name: 'FF XV',  id: 15 },

        FF_BE:  { name: 'FF BE',          id: 99 },
        FF_BF:  { name: 'Brave Frontier', id: 97 },
        FF_Tac: { name: 'FF Tactics',     id: 98 },
        FF_T0:  { name: 'FF Type-0',      id: 90 },
    };

    getOriginName = function(id) {
        var origins = this.Origin;
        for (var key in origins) {
            if (origins[key].id === id) {
                return origins[key].name;
            }
        }
        return this.Origin.FF_BE.name; // Default to FFBE
    };

}

export default ( new AweConsts() );