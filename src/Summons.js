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
    .setWiki('http://exvius.gamepedia.com/Lightning')
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
    .setWiki('http://exvius.gamepedia.com/Delita')
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
    .setWiki('http://exvius.gamepedia.com/Ramza')
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
    .setWiki('http://exvius.gamepedia.com/Cecil')
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
    .setWiki('http://exvius.gamepedia.com/Dark_Knight_Cecil')
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
    .setWiki('http://exvius.gamepedia.com/Cloud_of_Darkness')
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
    .setWiki('http://exvius.gamepedia.com/Refia')
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
    .setWiki('http://exvius.gamepedia.com/Luneth')
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
    .setWiki('http://exvius.gamepedia.com/Bartz')
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
    .setWiki('http://exvius.gamepedia.com/Exdeath')
    .calamityWrit(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgRain from './images/summons/Rain-6.png';
SUMMONS.RAIN = new Summon('Rain')
    .setImage(imgRain)
    .setWiki('http://exvius.gamepedia.com/Rain')
    .fairiesWrit(15)
    .prismaticHorn(8)
    .calamityGem(5)
    .rainbowBloom(3)
    .divineCrystal(3)
    ;

import imgChizuru from './images/summons/Chizuru-6.png';
SUMMONS.CHIZURU = new Summon('Chizuru')
    .setImage(imgChizuru)
    .setWiki('http://exvius.gamepedia.com/Chizuru')
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
    .setWiki('http://exvius.gamepedia.com/Firion')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;
  
import imgLasswell from './images/summons/Lasswell-6.png';
SUMMONS.LASSWELL = new Summon('Lasswell')
    .setImage(imgLasswell)
    .setWiki('http://exvius.gamepedia.com/Lasswell')
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
    .setWiki('http://exvius.gamepedia.com/Warrior_of_Light')
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
    .setWiki('http://exvius.gamepedia.com/Garland')
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
    .setWiki('http://exvius.gamepedia.com/Terra')
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
    .setWiki('http://exvius.gamepedia.com/Kefka')
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
    .setWiki('http://exvius.gamepedia.com/Vaan')
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
    .setWiki('http://exvius.gamepedia.com/Snow')
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
    .setWiki('http://exvius.gamepedia.com/Gilgamesh')
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
    .setWiki('http://exvius.gamepedia.com/Ace')
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
    .setWiki('http://exvius.gamepedia.com/Seven')
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
    .setWiki('http://exvius.gamepedia.com/Nine')
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
    .setWiki('http://exvius.gamepedia.com/Queen')
    .calamityWrit(20)
    .calamityGem(10)
    .fairiesWrit(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgMercedes from './images/summons/Unit-Mercedes-6.png';
SUMMONS.MERCEDES = new Summon('Mercedes')
    .setImage(imgMercedes)
    .setWiki('http://exvius.gamepedia.com/Mercedes')
    .rainbowBloom(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgLuka from './images/summons/Unit-Luka-6.png';
SUMMONS.LUKA = new Summon('Luka')
    .setImage(imgLuka)
    .setWiki('http://exvius.gamepedia.com/Luka')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgDarkFina from './images/summons/Unit-Dark_Fina-6.png';
SUMMONS.DARKFINA = new Summon('Dark Fina')
    .setImage(imgDarkFina)
    .setWiki('http://exvius.gamepedia.com/Dark_Fina')
    .calamityGem(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgOrlandu from './images/summons/Unit-Orlandu-6.png';
SUMMONS.ORLANDU = new Summon('Orlandeau')
    .setImage(imgOrlandu)
    .setOrigin(AweConst.Origin.FF_Tac)
    .setWiki('http://exvius.gamepedia.com/Orlandeau')
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
    .setWiki('http://exvius.gamepedia.com/Noctis')
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
    .setWiki('http://exvius.gamepedia.com/Medius')
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
    .setWiki('http://exvius.gamepedia.com/Cerius')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;
    

import imgXiao from './images/summons/Unit-Xiao-6.png';
SUMMONS.XIAO = new Summon('Xiao')
    .setImage(imgXiao)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Xiao')
    .fairiesWrit(20)
    .rainbowBloom(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgLing from './images/summons/Unit-Ling-6.png';
SUMMONS.LING = new Summon('Ling')
    .setImage(imgLing)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Ling')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .prismaticHorn(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;
    
import imgYun from './images/summons/Unit-Yun-6.png';
SUMMONS.YUN = new Summon('Yun')
    .setImage(imgYun)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Yun')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgMarie from './images/summons/Unit-Marie-6.png';
SUMMONS.MARIE = new Summon('Marie')
    .setImage(imgMarie)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Marie')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgEmperor from './images/summons/Unit-Emperor-6.png';
SUMMONS.EMPEROR = new Summon('Emperor')
    .setImage(imgEmperor)
    .setOrigin(AweConst.Origin.FF_II)
    .setWiki('http://exvius.gamepedia.com/Emperor')
    .calamityWrit(20)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgOlive from './images/summons/Unit-Olive-6.png';
SUMMONS.OLIVE = new Summon('Olive')
    .setImage(imgOlive)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Olive')
    .divineCrystal(15)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .prismaticHorn(10)
    ;
    
import imgShine from './images/summons/Unit-Shine-6.png';
SUMMONS.SHINE = new Summon('Shine')
    .setImage(imgShine)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Shine')
    .calamityGem(20)
    .calamityWrit(10)
    .prismaticHorn(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgYshtola from "./images/summons/Unit-Y'shtola-6.png";
SUMMONS.YSHTOLA = new Summon("Y'shtola")
    .setImage(imgYshtola)
    .setOrigin(AweConst.Origin.FF_XIV)
    .setWiki('http://exvius.gamepedia.com/Y%27shtola')
    .fairiesWrit(10)
    .rainbowBloom(20)
    .prismaticHorn(5)
    .calamityWrit(10)
    ;


import imgMinfilia from "./images/summons/Unit-Minfilia-6.png";
SUMMONS.MINFILIA = new Summon("Minfilia")
    .setImage(imgMinfilia)
    .setOrigin(AweConst.Origin.FF_XIV)
    .setWiki('http://exvius.gamepedia.com/Minfilia')
    .fairiesWrit(10)
    .rainbowBloom(20)
    .prismaticHorn(5)
    .calamityWrit(10)
    ;

import imgSoleil from "./images/summons/Unit-Soleil-6.png";
SUMMONS.SOLEIL = new Summon("Soleil")
    .setImage(imgSoleil)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Soleil')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .prismaticHorn(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;

import imgFryevia from "./images/summons/Unit-Fryevia-6.png";
SUMMONS.FRYEVIA = new Summon("Fryevia")
    .setImage(imgFryevia)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Fryevia')
    .prismaticHorn(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .fairiesWrit(5)
    .divineCrystal(5)
    ;

import imgXon from "./images/summons/Unit-Xon-6.png";
SUMMONS.XON = new Summon("Xon")
    .setImage(imgXon)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Xon')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;
    
import imgTranceTerra from "./images/summons/Unit-Trance_Terra-6.png";
SUMMONS.TRANCE_TERRA = new Summon("Trance Terra")
    .setImage(imgTranceTerra)
    .setOrigin(AweConst.Origin.FF_VI)
    .setWiki('http://exvius.gamepedia.com/Trance_Terra')
    .prismaticHorn(20)
    .calamityWrit(10)
    .fairiesWrit(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgSetzer from "./images/summons/Unit-Setzer-6.png";
SUMMONS.SETZER = new Summon("Setzer")
    .setImage(imgSetzer)
    .setOrigin(AweConst.Origin.FF_VI)
    .setWiki('http://exvius.gamepedia.com/Setzer')
    .calamityWrit(20)
    .prismaticHorn(10)
    .fairiesWrit(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgAileen from "./images/summons/Unit-Aileen-6.png";
SUMMONS.AILEEN = new Summon("Aileen")
    .setImage(imgAileen)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Aileen')
    .prismaticHorn(20)
    .rainbowBloom(10)
    .fairiesWrit(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgSozhe from "./images/summons/Unit-Sozhe-6.png";
SUMMONS.SOZHE = new Summon("Sozhe")
    .setImage(imgSozhe)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Sozhe')
    .prismaticHorn(20)
    .rainbowBloom(10)
    .fairiesWrit(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgReberta from "./images/summons/Unit-Reberta-6.png";
SUMMONS.REBERTA = new Summon("Reberta")
    .setImage(imgReberta)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Reberta')
    .calamityGem(10)
    .calamityWrit(10)
    .rainbowBloom(10)
    .prismaticHorn(5)
    .divineCrystal(15)
    ;

import imgZyrus from "./images/summons/Unit-Zyrus-6.png";
SUMMONS.ZYRUS = new Summon("Zyrus")
    .setImage(imgZyrus)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Zyrus')
    .calamityWrit(10)
    .calamityGem(10)
    .prismaticHorn(10)
    .fairiesWrit(5)
    .divineCrystal(15)
    ;

import imgRem from "./images/summons/Unit-Rem-6.png";
SUMMONS.REM = new Summon("Rem")
    .setImage(imgRem)
    .setOrigin(AweConst.Origin.FF_T0)
    .setWiki('https://exvius.gamepedia.com/Rem')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgKing from "./images/summons/Unit-King-6.png";
SUMMONS.KING = new Summon("King")
    .setImage(imgKing)
    .setOrigin(AweConst.Origin.FF_T0)
    .setWiki('https://exvius.gamepedia.com/King')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;
    
import imgWilhelm from "./images/summons/Unit-Wilhelm-6.png";
SUMMONS.WILHELM = new Summon("Wilhelm")
    .setImage(imgWilhelm)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Wilhelm')
    .calamityGem(20)
    .calamityWrit(10)
    .prismaticHorn(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;
    
import imgGrace from "./images/summons/Unit-Grace-6.png";
SUMMONS.GRACE = new Summon("Grace")
    .setImage(imgGrace)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Grace')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;
    
import imgFohlen from "./images/summons/Unit-Fohlen-6.png";
SUMMONS.FOHLEN = new Summon("Fohlen")
    .setImage(imgFohlen)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Fohlen')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;
    
import imgIlias from "./images/summons/Unit-Ilias-6.png";
SUMMONS.ILIAS = new Summon("Ilias")
    .setImage(imgIlias)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Ilias')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .prismaticHorn(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;
    
import imgAmelia from "./images/summons/Unit-Amelia-6.png";
SUMMONS.AMELIA = new Summon("Amelia")
    .setImage(imgAmelia)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Amelia')
    .calamityGem(20)
    .calamityWrit(10)
    .prismaticHorn(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;
    
import imgFina from "./images/summons/Unit-Fina-6.png";
SUMMONS.FINA = new Summon("Fina")
    .setImage(imgFina)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('https://exvius.gamepedia.com/Fina')
    .rainbowBloom(15)
    .fairiesWrit(8)
    .calamityWrit(5)
    .prismaticHorn(3)
    .divineCrystal(3)
    ;

// IMPORTANT: ADD NEW SUMMONS JUST OVER THIS COMMENT, AFTER ALL OTHER EXISTING SUMMONS !!!
// IMPORTANT: ADD NEW SUMMONS JUST OVER THIS COMMENT, AFTER ALL OTHER EXISTING SUMMONS !!!
// IMPORTANT: ADD NEW SUMMONS JUST OVER THIS COMMENT, AFTER ALL OTHER EXISTING SUMMONS !!!


Summon.internal_setNextSummonId(2001);

import imgWhiteWitchFina from './images/summons/White_Witch_Fina-6.png';
SUMMONS.VLCFINA = new Summon('White Witch Fina', 'vlcfina')
    .setImage(imgWhiteWitchFina)
    .setWiki('http://exvius.gamepedia.com/White_Witch_Fina')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgDracuLasswell from './images/summons/Dracu_Lasswell-6.png';
SUMMONS.DRACULASSWELL = new Summon('Dracu Lasswell')
    .setImage(imgDracuLasswell)
    .setWiki('http://exvius.gamepedia.com/Dracu_Lasswell')
    .fairiesWrit(15)
    .prismaticHorn(8)
    .calamityGem(5)
    .rainbowBloom(3)
    .divineCrystal(3)
    ;

import imgDemonRain from './images/summons/Demon_Rain-6.png';
SUMMONS.DEMONRAIN = new Summon('Demon Rain')
    .setImage(imgDemonRain)
    .setWiki('http://exvius.gamepedia.com/Demon_Rain')
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
    .setWiki('http://exvius.gamepedia.com/Elza')
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
    .setWiki('http://exvius.gamepedia.com/Santa_Roselia')
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
    .setWiki('http://exvius.gamepedia.com/White_Knight_Noel')
    .fairiesWrit(20)
    .prismaticHorn(10)
    .calamityGem(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;

import imgPrimm from './images/summons/Unit-Primm-6.png';
SUMMONS.PRIMM = new Summon('Primm')
    .setImage(imgPrimm)
    .setOrigin(AweConst.Origin.FF_SoM)
    .setWiki('http://exvius.gamepedia.com/Primm')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;
    
import imgRandi from './images/summons/Unit-Randi-6.png';
SUMMONS.RANDI = new Summon('Randi')
    .setImage(imgRandi)
    .setOrigin(AweConst.Origin.FF_SoM)
    .setWiki('http://exvius.gamepedia.com/Randi')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgCupidArtemios from './images/summons/Unit-Cupid_Artemios-6.png';
SUMMONS.CUPID_ARTEMIOS = new Summon('Cupid Artemios')
    .setImage(imgCupidArtemios)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Cupid_Artemios')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgYda from './images/summons/Unit-Yda-6.png';
SUMMONS.YDA = new Summon('Yda')
    .setImage(imgYda)
    .setOrigin(AweConst.Origin.FF_XIV)
    .setWiki('http://exvius.gamepedia.com/Yda')
    .calamityWrit(20)
    .calamityGem(10)
    .fairiesWrit(10)
    .rainbowBloom(5)
    .divineCrystal(5)
    ;

import imgPapalymo from './images/summons/Unit-Papalymo-6.png';
SUMMONS.PAPALYMO = new Summon('Papalymo')
    .setImage(imgPapalymo)
    .setOrigin(AweConst.Origin.FF_XIV)
    .setWiki('http://exvius.gamepedia.com/Papalymo')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityGem(10)
    .calamityWrit(5)
    .divineCrystal(5)
    ;

import imgTilith from './images/summons/Unit-Tilith-6.png';
SUMMONS.TILITH = new Summon('Tilith')
    .setImage(imgTilith)
    .setOrigin(AweConst.Origin.FF_BF)
    .setWiki('http://exvius.gamepedia.com/Tilith')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .calamityWrit(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgMaxwell from './images/summons/Unit-Maxwell-6.png';
SUMMONS.MAXWELL = new Summon('Maxwell')
    .setImage(imgMaxwell)
    .setOrigin(AweConst.Origin.FF_BF)
    .setWiki('http://exvius.gamepedia.com/Maxwell')
    .calamityGem(20)
    .calamityWrit(10)
    .rainbowBloom(10)
    .prismaticHorn(5)
    .divineCrystal(5)
    ;

import imgVargas from './images/summons/Unit-Vargas-6.png';
SUMMONS.VARGAS = new Summon('Vargas')
    .setImage(imgVargas)
    .setOrigin(AweConst.Origin.FF_BF)
    .setWiki('http://exvius.gamepedia.com/Vargas')
    .prismaticHorn(20)
    .fairiesWrit(10)
    .rainbowBloom(10)
    .calamityGem(5)
    .divineCrystal(5)
    ;

import imgMoogle from './images/summons/Unit-Moogle-6.png';
SUMMONS.MOOGLE = new Summon('Moogle')
    .setImage(imgMoogle)
    .setOrigin(AweConst.Origin.FF_BE)
    .setWiki('http://exvius.gamepedia.com/Moogle')
    .rainbowBloom(20)
    .fairiesWrit(10)
    .prismaticHorn(10)
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