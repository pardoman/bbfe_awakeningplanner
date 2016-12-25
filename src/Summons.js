import Summon from './Summon';
import AweConst from './Const';


// IMPORTAN: ADD NEW SUMMONS TO THE BOTTOM !!!
// IMPORTAN: ADD NEW SUMMONS TO THE BOTTOM !!!
// IMPORTAN: ADD NEW SUMMONS TO THE BOTTOM !!!

const SUMMONS = {};

// IMPORTAN: ADD NEW SUMMONS TO THE BOTTOM !!!
// IMPORTAN: ADD NEW SUMMONS TO THE BOTTOM !!!
// IMPORTAN: ADD NEW SUMMONS TO THE BOTTOM !!!


import imgLightning from './images/summons/Lightning-6.png';
SUMMONS.LIGHTNING = new Summon('Lightning')
    .setImage(imgLightning)
    .setOrigin(AweConst.Origin.FF_XIII)
    .setWiki('https://exviuswiki.com/Lightning')
    .fairiesWrit(20)
    .rainbowBloom(10)
    .calamityGem(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgDelita from './images/summons/Delita-6.png';
SUMMONS.DELITA = new Summon('Delita')
    .setImage(imgDelita)
    .setOrigin(AweConst.Origin.FF_Tac)
    .setWiki('https://exviuswiki.com/Delita')
    .fairiesWrit(20)
    .rainbowBloom(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgRamza from './images/summons/Ramza-6.png';
SUMMONS.RAMZA = new Summon('Ramza')
    .setImage(imgRamza)
    .setOrigin(AweConst.Origin.FF_Tac)
    .setWiki('https://exviuswiki.com/Ramza')
    .fairiesWrit(20)
    .rainbowBloom(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgCecil from './images/summons/Cecil-6.png';
SUMMONS.CECIL = new Summon('Cecil')
    .setImage(imgCecil)
    .setOrigin(AweConst.Origin.FF_IV)
    .setWiki('https://exviuswiki.com/Cecil')
    .fairiesWrit(20)
    .prismaticHorn(10)
    .calamityGem(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;

import imgdkc from './images/summons/Dark_Knight_Cecil-6.png';
SUMMONS.DKC = new Summon('Dark Knight Cecil', 'dkc')
    .setImage(imgdkc)
    .setOrigin(AweConst.Origin.FF_IV)
    .setWiki('https://exviuswiki.com/Dark_Knight_Cecil')
    .calamityWrit(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;
    
import imgcod from './images/summons/Cloud_of_Darkness-6.png';
SUMMONS.COD = new Summon('Cloud of Darkness', 'cod')
    .setImage(imgcod)
    .setOrigin(AweConst.Origin.FF_III)
    .setWiki('https://exviuswiki.com/Cloud_of_Darkness')
    .calamityGem(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgRefia from './images/summons/Refia-6.png';
SUMMONS.REFIA = new Summon('Refia')
    .setImage(imgRefia)
    .setOrigin(AweConst.Origin.FF_III)
    .setWiki('https://exviuswiki.com/Refia')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgLuneth from './images/summons/Luneth-6.png';
SUMMONS.LUNETH = new Summon('Luneth')
    .setImage(imgLuneth)
    .setOrigin(AweConst.Origin.FF_III)
    .setWiki('https://exviuswiki.com/Luneth')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgBartz from './images/summons/Bartz-6.png';
SUMMONS.BARTZ = new Summon('Bartz')
    .setImage(imgBartz)
    .setOrigin(AweConst.Origin.FF_V)
    .setWiki('https://exviuswiki.com/Bartz')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgExdeath from './images/summons/Exdeath-6.png';
SUMMONS.EXDEATH = new Summon('Exdeath')
    .setImage(imgExdeath)
    .setOrigin(AweConst.Origin.FF_V)
    .setWiki('https://exviuswiki.com/Exdeath')
    .calamityWrit(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgRain from './images/summons/Rain-6.png';
SUMMONS.RAIN = new Summon('Rain')
    .setImage(imgRain)
    .setWiki('https://exviuswiki.com/Rain')
    .fairiesWrit(15)
    .prismaticHorn(8)
    .calamityGem(5)
    .rainbowBloom(3)
    .divineCrystal(3)
    ;

import imgChizuru from './images/summons/Chizuru-6.png';
SUMMONS.CHIZURU = new Summon('Chizuru')
    .setImage(imgChizuru)
    .setWiki('https://exviuswiki.com/Chizuru')
    .calamityGem(20)
    .calamityWrit(10)
    .prismaticHorn(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgFirion from './images/summons/Firion-6.png';
SUMMONS.FIRION = new Summon('Firion')
    .setImage(imgFirion)
    .setOrigin(AweConst.Origin.FF_II)
    .setWiki('https://exviuswiki.com/Firion')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;
  
import imgLasswell from './images/summons/Lasswell-6.png';
SUMMONS.LASSWELL = new Summon('Lasswell')
    .setImage(imgLasswell)
    .setWiki('https://exviuswiki.com/Lasswell')
    .fairiesWrit(15)
    .prismaticHorn(8)
    .calamityGem(5)
    .rainbowBloom(3)
    .divineCrystal(3)
    ;

import imgwol from './images/summons/Warrior_of_Light-6.png';
SUMMONS.WOL = new Summon('Warrior of Light', 'wol')
    .setImage(imgwol)
    .setOrigin(AweConst.Origin.FF_I)
    .setWiki('https://exviuswiki.com/Warrior_of_Light')
    .fairiesWrit(20)
    .prismaticHorn(10)
    .calamityGem(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;

import imgGarland from './images/summons/Garland-6.png';
SUMMONS.GARLAND = new Summon('Garland')
    .setImage(imgGarland)
    .setOrigin(AweConst.Origin.FF_I)
    .setWiki('https://exviuswiki.com/Garland')
    .calamityGem(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgTerra from './images/summons/Terra-6.png';
SUMMONS.TERRA = new Summon('Terra')
    .setImage(imgTerra)
    .setOrigin(AweConst.Origin.FF_VI)
    .setWiki('https://exviuswiki.com/Terra')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgKefka from './images/summons/Kefka-6.png';
SUMMONS.KEFKA = new Summon('Kefka')
    .setImage(imgKefka)
    .setOrigin(AweConst.Origin.FF_VI)
    .setWiki('https://exviuswiki.com/Kefka')
    .calamityWrit(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgVaan from './images/summons/Vaan-6.png';
SUMMONS.VAAN = new Summon('Vaan')
    .setImage(imgVaan)
    .setOrigin(AweConst.Origin.FF_XII)
    .setWiki('https://exviuswiki.com/Vaan')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgSnow from './images/summons/Snow-6.png';
SUMMONS.SNOW = new Summon('Snow')
    .setImage(imgSnow)
    .setOrigin(AweConst.Origin.FF_XIII)
    .setWiki('https://exviuswiki.com/Snow')
    .prismaticHorn(20)
    .calamityGem(10)
    .fairiesWrit(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgGilgamesh from './images/summons/Gilgamesh-6.png';
SUMMONS.GILGAMESH = new Summon('Gilgamesh')
    .setImage(imgGilgamesh)
    .setOrigin(AweConst.Origin.FF_V)
    .setWiki('https://exviuswiki.com/Gilgamesh')
    .calamityGem(20)
    .calamityWrit(10)
    .prismaticHorn(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgAce from './images/summons/Unit-Ace-6.png';
SUMMONS.ACE = new Summon('Ace')
    .setImage(imgAce)
    .setOrigin(AweConst.Origin.FF_T0)
    .setWiki('https://exviuswiki.com/Ace')
    .rainbowBloom(20)
    .prismaticHorn(10)
    .fairiesWrit(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;
    
import imgSeven from './images/summons/Unit-Seven-6.png';
SUMMONS.SEVEN = new Summon('Seven')
    .setImage(imgSeven)
    .setOrigin(AweConst.Origin.FF_T0)
    .setWiki('https://exviuswiki.com/Seven')
    .prismaticHorn(20)
    .rainbowBloom(10)
    .fairiesWrit(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgNine from './images/summons/Unit-Nine-6.png';
SUMMONS.NINE = new Summon('Nine')
    .setImage(imgNine)
    .setOrigin(AweConst.Origin.FF_T0)
    .setWiki('https://exviuswiki.com/Nine')
    .calamityGem(20)
    .calamityWrit(10)
    .fairiesWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;
    
import imgQueen from './images/summons/Unit-Queen-6.png';
SUMMONS.QUEEN = new Summon('Queen')
    .setImage(imgQueen)
    .setOrigin(AweConst.Origin.FF_T0)
    .setWiki('https://exviuswiki.com/Queen')
    .calamityWrit(20)
    .calamityGem(10)
    .fairiesWrit(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgMercedes from './images/summons/Unit-Mercedes-6.png';
SUMMONS.MERCEDES = new Summon('Mercedes')
    .setImage(imgMercedes)
    .setWiki('https://exviuswiki.com/Mercedes')
    .rainbowBloom(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgLuka from './images/summons/Unit-Luka-6.png';
SUMMONS.LUKA = new Summon('Luka')
    .setImage(imgLuka)
    .setWiki('https://exviuswiki.com/Luka')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgDarkFina from './images/summons/Unit-Dark_Fina-6.png';
SUMMONS.DARKFINA = new Summon('Dark Fina')
    .setImage(imgDarkFina)
    .setWiki('https://exviuswiki.com/Dark_Fina')
    .calamityGem(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgOrlandu from './images/summons/Unit-Orlandu-6.png';
SUMMONS.ORLANDU = new Summon('Orlandu')
    .setImage(imgOrlandu)
    .setOrigin(AweConst.Origin.FF_Tac)
    .setWiki('https://exviuswiki.com/Orlandu')
    .fairiesWrit(20)
    .rainbowBloom(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgNoctis from './images/summons/Unit-Noctis-6.png';
SUMMONS.NOCTIS = new Summon('Noctis')
    .setImage(imgNoctis)
    .setOrigin(AweConst.Origin.FF_XV)
    .setWiki('https://exviuswiki.com/Noctis')
    .calamityGem(20)
    .calamityWrit(10)
    .prismaticHorn(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;
    
import imgMedius from './images/summons/Unit-Medius-6.png';
SUMMONS.MEDIUS = new Summon('Medius')
    .setImage(imgMedius)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exviuswiki.com/Medius')
    .prismaticHorn(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;
    
import imgCerius from './images/summons/Unit-Cerius-6.png';
SUMMONS.CERIUS = new Summon('Cerius')
    .setImage(imgCerius)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exviuswiki.com/Cerius')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;
    
    

// IMPORTANT: ADD NEW SUMMONS JUST OVER THIS COMMENT, AFTER ALL OTHER EXISTING SUMMONS !!!
// IMPORTANT: ADD NEW SUMMONS JUST OVER THIS COMMENT, AFTER ALL OTHER EXISTING SUMMONS !!!
// IMPORTANT: ADD NEW SUMMONS JUST OVER THIS COMMENT, AFTER ALL OTHER EXISTING SUMMONS !!!


Summon.internal_setNextSummonId(2001);

import imgWhiteWitchFina from './images/summons/White_Witch_Fina-6.png';
SUMMONS.VLCFINA = new Summon('White Witch Fina', 'vlcfina')
    .setImage(imgWhiteWitchFina)
    .setWiki('https://exviuswiki.com/White_Witch_Fina')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgDracuLasswell from './images/summons/Dracu_Lasswell-6.png';
SUMMONS.DRACULASSWELL = new Summon('Dracu Lasswell')
    .setImage(imgDracuLasswell)
    .setWiki('https://exviuswiki.com/Dracu_Lasswell')
    .fairiesWrit(15)
    .prismaticHorn(8)
    .calamityGem(5)
    .rainbowBloom(3)
    .divineCrystal(3)
    ;

import imgDemonRain from './images/summons/Demon_Rain-6.png';
SUMMONS.DEMONRAIN = new Summon('Demon Rain')
    .setImage(imgDemonRain)
    .setWiki('https://exviuswiki.com/Demon_Rain')
    .fairiesWrit(15)
    .prismaticHorn(8)
    .calamityGem(5)
    .rainbowBloom(3)
    .divineCrystal(3)
    ;

import imgElza from './images/summons/Unit-Elza-6.png';
SUMMONS.ELZA = new Summon('Elza')
    .setImage(imgElza)
    .setOrigin(AweConst.Origin.FF_BF)
    .setWiki('https://exviuswiki.com/Elza')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgSantaRoselia from './images/summons/Unit-Santa_Roselia-6.png';
SUMMONS.SANTAROSELIA = new Summon('Santa Roselia')
    .setImage(imgSantaRoselia)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exviuswiki.com/Santa_Roselia')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgWhiteKnightNoel from './images/summons/Unit-White_Knight_Noel-6.png';
SUMMONS.WHITEKNIGHTNOEL = new Summon('White Knight Noel')
    .setImage(imgWhiteKnightNoel)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exviuswiki.com/White_Knight_Noel')
    .fairiesWrit(20)
    .prismaticHorn(10)
    .calamityGem(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;


// IMPORTANT: ADD EVENT-EXCLUSIVE SUMMONS JUST OVER THIS COMMENT !!!
// IMPORTANT: ADD EVENT-EXCLUSIVE SUMMONS JUST OVER THIS COMMENT !!!
// IMPORTANT: ADD EVENT-EXCLUSIVE SUMMONS JUST OVER THIS COMMENT !!!


// Generate Array with all Summons available
SUMMONS.ALL = [];
// AND 
// Map ids into Summon() object
for (var summonKey in SUMMONS) {
    if (SUMMONS.hasOwnProperty(summonKey)) {
        var data = SUMMONS[summonKey];
        SUMMONS[data.id] = data;
        SUMMONS.ALL.push(data);
    }
}

// Special Summon - Not displayed, used internally. 
SUMMONS.NONE = Summon.createUnknownSummon();
SUMMONS[ SUMMONS.NONE.id ] = SUMMONS.NONE;

export default SUMMONS;