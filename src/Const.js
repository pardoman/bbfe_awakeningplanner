
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

}

export default ( new AweConsts() );