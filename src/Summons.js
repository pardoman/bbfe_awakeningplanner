import Summon from './Summon';

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
    .setWiki('https://exviuswiki.com/Snow')
    .fairiesWrit(20)
    .rainbowBloom(10)
    .calamityGem(10)
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

export default SUMMONS;