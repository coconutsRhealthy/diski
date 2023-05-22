import { Directive } from "@angular/core";

import { DataDirective } from './data.directive';

@Directive({
  selector: 'app-data'
})
export class ArchiveDataDirective {

  public static getDataArrayArchive() {
    return this.dataArrayArchive;
  }

  public static getCompanyFromBaseInputLine(baseInputLine) {
    return DataDirective.getCompanyFromBaseInputLine(baseInputLine);
  }

  public static getDiscountCodeFromBaseInputLine(baseInputLine) {
    return DataDirective.getDiscountCodeFromBaseInputLine(baseInputLine);
  }

  public static getInfluencerFromBaseInputLine(baseInputLine) {
    return DataDirective.getInfluencerFromBaseInputLine(baseInputLine);
  }

  public static getDateFromBaseInputLine(baseInputLine) {
    return DataDirective.getDateFromBaseInputLine(baseInputLine);
  }

  public static getPosition(string, subString, index) {
    return DataDirective.getPosition(string, subString, index);
  }

  static dataArrayArchive = [
    "shein, SMF0653, 15, apolloniallewellyn, 04-29",
    "gymshark, ANON, 10, theanongymgirl, 04-29",
    "nakdfashion, PARISDELAURA, 15, lesparisdelaura, 04-29",
    "otrium, FINALDAYS, 25, otrium, 04-29",
    "desenio, XDAIRY, 10, kleinpepertje, 04-29",
    "divain, BBRADIANT, 5, kleinpepertje, 04-29",
    "heyestrid, MAXIME2FOR1, , janedoe, 04-29",
    "heyestrid, lemonadecasefree, , janedoe, 04-29",
    "shein, 15ANIQA, 15, littlebitofaniqa, 04-29",
    "nakdfashion, jules, 15, juleseliana, 04-29",
    "gutsgusto, CLAUDIA15, 15, claudiaskop, 04-29",
    "gutsgusto, ROSEMARIJN15, 15, xrosemarijnelise, 04-29",
    "nakdfashion, anaelisa, 15, ana_elisa_, 04-29",
    "myproteinnl, MANONNL, 10, manonurselmann, 04-29",
    "veromoda, TILDAJ20, 20, tildajobrantt, 04-29",
    "ginatricot, NINA20, 20, ninanna_, 04-29",
    "wearglas, DIAN20, 20, ageingcolourfully, 04-29",
    "bjornborg, Charlotte20, 20, charliecarlen, 04-29",
    "monicavinader, MVINSIDER20-116C, 20, katies_kasa, 04-29",
    "safira, BBLOVEGLAM, 20, _lina_marleen_, 04-29",
    "chiquelle, BLUESKY, 30, chiquelle, 04-29",
    "stronger, 20Anna20, 20, annamatkovich, 04-29",
    "icaniwill, ROSA20, 20, rosacasita, 04-29",
    "veromoda, alicelarsdotter20, 20, alicelarsdotter, 04-29",
    "jumpxlamersfoort, BRITTJXL10, 10, brittwijnne, 04-29",
    "sparkleanddream.nl, LUCA10, 10, lucaaa.xx, 04-29",
    "emmiol_store, CRDR20, 20, crdr.samira, 04-29",
    "lookfantasticnl, MARTIKALF, 10, itsjusttix, 04-29",
    "loungeunderwear, ISA10, 10, isaluna, 04-29",
    "stronger, kelly15, 15, kellyhamelijnck, 04-29",
    "hellofreshnl, HELLOFLEUR85, €85, fleurdijkstra_, 04-29",

    "shein, 23sw633, 15, gabita_grigorasofficial, 04-27",
    "asos, SURPRISE, 20, asos, 04-27",
    "otrium, MARINA20, 20, marinamitrakos, 04-27",
    "loavies, PAULINESPRING, 20, paulinedebaere, 04-27",
    "nakdfashion, adriana, 15, nanajorge_, 04-27",
    "gutsgusto, ELLY15, 15, itsaboutellly, 04-27",
    "idealofsweden, BBROYAL, 15, kleinpepertje, 04-27",
    "desenio, XORANJE, 10, kleinpepertje, 04-27",
    "myproteinnl, THALISSA, 8, lisstilemans, 04-27",
    "chiquelle, KELLY25, 25, kelly.van.rossum, 04-27",
    "veromoda, PLATOV20, 20, elina.pltv, 04-27",
    "shein, loveshein382, 15, zelibrodrick, 04-27",
    "madlady, NADJAEV, 15, rabattk, 04-27",
    "ginatricot, ROOS20, 20, rabattk, 04-27",
    "ginatricot, SALIBA20, 20, rabattk, 04-27",
    "nakdfashion, maia, 15, maia_andrews, 04-27",
    "nakdfashion, verena, 15, verena.friederich, 04-27",
    "otrium, ADEDAYO20, 20, dayotage, 04-27",
    "otrium, SOPHIE20, 20, zantobe, 04-27",
    "burga, SAVEERXNL, 15, saveer.edelbroek, 04-27",
    "bjornborg, JELENA20, 20, jelena.gewoon.gezond, 04-27",
    "safira, BB20DA, 20, rabattk, 04-27",
    "chiquelle, CHANTAL25, 25, cwrekenhorst, 04-27",
    "gutsgusto, LONNEKE15, 15, lonnekevdv, 04-27",
    "stronger, Odby20, 20, catrinodby, 04-27",
    "stronger, Petra20, 20, pskiold, 04-27",
    "icaniwill, Fitelena25, 25, fitmitelena, 04-27",
    "veromoda, WESTLUND20, 20, rabattk, 04-27",
    "smartphoto.nl, ROBIN40, 40, thepastelsuitcase, 04-27",
    "coloursuits, ISABELKR10, 10, xisabel.kr, 04-27",
    "hellofreshnl, HELLODEMI85, €85, deminugteren, 04-27",
    "_toddycares, 3xToddy25%, 25, naadines, 04-27",
    "padelshop.com, DAPHNE10, 10, daphnesonneveld, 04-27",
    "safira, BBEDARIA, 20, daschabeu, 04-27",
    "ynot.nl, Kelly5, 5, kelly.van.rossum, 04-27",

    "shein, SWS71, 15, _ellee_______, 04-25",
    "nakdfashion, floor, 15, countlessshades, 04-25",
    "loavies, SILKE20, 20, silke.carpentier, 04-25",
    "shein, MHD1324, 15, lavya2107, 04-25",
    "veromoda, ROCHELLEH20, 20, rochellehondijk, 04-25",
    "idealofsweden, BBNOBLE, 15, kleinpepertje, 04-25",
    "desenio, XJOYFUL, 10, kleinpepertje, 04-25",
    "gutsgusto, KANUNGO15, 15, bellykanungo, 04-25",
    "loavies, SHELCY20, 20, shelcycarpentier, 04-25",
    "jdsports, king20, 20, d.iscount, 04-25",
    "otrium, ARCHIVE27, 27, otrium, 04-25",
    "snuggs, ELIZEBEEN, 20, elizebeen, 04-25",
    "burga, SAMXNL, 15, samsmitts, 04-25",
    "burga, LISANNEXNL, 15, lisanne.blonk, 04-25",
    "nakdfashion, kimb, 15, kimberly_bru, 04-25",
    "nakdfashion, TERRA, 15, terra.van.tol, 04-25",
    "wearglas, COTTON20, 20, pleatedcotton, 04-25",
    "myproteinnl, danthe, 10, danthescholtenx, 04-25",
    "bjornborg, LIS20, 20, lis.poot, 04-25",
    "safira, BBTVHTOF, 20, _lina_marleen_, 04-25",
    "stronger, LINDNER20, 20, julielindner, 04-25",
    "stronger, Lies20, 20, lieskemps, 04-25",
    "icaniwill, JEANETTS20, 20, pt_jeanett, 04-25",
    "veromoda, COOLS20, 20, norecools, 04-25",
    "nakdfashion, annarike, 15, annarikeroberte, 04-25",
    "ginatricot, OLIVIA20, 20, rabattk, 04-25",
    "nickis, Teske15, 15, teskedeschepper, 04-25",
    "rebelle.amsterdam, LISA20, 20, lisahoogendoorn, 04-25",
    "outfitzbyzoe, bo10, 10, bomink_, 04-25",
    "leolive, MAXIMEmom, 10, mascha.danique, 04-25",
    "ynot.nl, Jeneh5, 5, jenehknoopp, 04-25",
    "rihoas, FEMKEZOE, 20, femkezoe, 04-25",
    "madlady, ONLYAGIRL, 15, only.a.girl__, 04-25",

    "zalando, LENTE23, 20, zalando, 04-23",
    "asos, STYLES, 40, asos, 04-23",
    "shein, SNC680, 15, jaihaydx, 04-23",
    "shein, SSPR4105, 15, asiavalentereal, 04-23",
    "loavies, ELINEXO20, 20, adalla.99, 04-23",
    "nakdfashion, lise, 15, lisesandbeerg, 04-23",
    "desenio, XMERCY, 10, kleinpepertje, 04-23",
    "editedofficial, 20MRAP, 20, moderosaofficial, 04-23",
    "vilixthelabel, VICKY10, 10, vickydorhoutmees, 04-23",
    "mae.nailsofficial, MAE10, 10, kyradelouw, 04-23",
    "hunkemoller, honey-df234t4fvq3y4, 12, honey, 04-23",
    "loavies, EXTRA25, 25, loavies, 04-23",
    "loavies, LAYLAXO20, 20, laylaeyers, 04-23",
    "stronger, miesmeals20, 20, miesmeals, 04-23",
    "veromoda, SABRINAP20, 20, rabattk, 04-23",
    "nakdfashion, anaissve, 15, anaissve, 04-23",
    "famousstore, Misha10, 10, mishakasteleinx, 04-23",
    "merodacosmetics, MERODANOA20, 20, xnoarichter, 04-23",
    "hellofreshnl, 85HELLOMICHELLE, €85, michelle_bollen, 04-23",
    "loavies, JULLESPRING, 20, eiljntrc, 04-23",
    "danielwellington, DWBBR43, 15, rentishehu, 04-23",
    "newfysic, Leslie25, 25, leslie_keijzer, 04-23",
    "ginatricot, AMANDA20, 20, rabattk, 04-23",
    "nakdfashion, lenka, 15, lenka.vanhemelryck, 04-23",
    "nakdfashion, noooms, 15, nooomsworld, 04-23",
    "otrium, WEEKEND25, 25, otrium, 04-23",
    "snuggs, ESME20, 20, lifeasesme, 04-23",
    "myproteinnl, Marjolein, 8, marjoleinvelthuizen, 04-23",
    "chiquelle, SHELCY25, 25, shelcycarpentier, 04-23",
    "safira, BBSAMME, 20, rabattk, 04-23",
    "stronger, Sarah15, 15, gelukzaaiers, 04-23",
    "icaniwill, HENRIETTEL20, 20, henriettelubbe, 04-23",

    "shein, SMF0137, 15, zoechinloy, 04-21",
    "loavies, FEST-AMBER20, 20, amberdhaan, 04-21",
    "nakdfashion, carvalho, 15, filipaacarvalho, 04-21",
    "asos, SPRING, 20, asos, 04-21",
    "airup, AIRAUDREY, 10, audrey_marshmaloo, 04-21",
    "gutsgusto, Carrie15, 15, janedoe, 04-21",
    "gutsgusto, ANGELINA15, 15, angelina_haupt, 04-21",
    "shein, FITJacqueline, 15, oh.hellojackie, 04-21",
    "gymshark, BRIAN, 10, brian_neyugn, 04-21",
    "myproteinnl, kim, 8, fit_kim, 04-21",
    "chiquelle, HELLOSUN, 30, chiquelle, 04-21",
    "veromoda, FASHIONC20, 20, fashionchick, 04-21",
    "veromoda, FILIPPAALEXEN20, 20, filippaalexen, 04-21",
    "loavies, FEST-DAPHNE20, 20, daphnevanbuerink, 04-21",
    "nakdfashion, daphne, 15, daphnevanbuerink, 04-21",
    "snuggs, MINILIEFDE20, 20, miniliefde, 04-21",
    "ginatricot, DAYANA20, 20, rabattk, 04-21",
    "safira, BB20SU, 20, rabattk, 04-21",
    "loavies, FEST-JULIE20, 20, julievandooren, 04-21",
    "nakdfashion, Cirkeline, 15, cirkelinebergan, 04-21",
    "burga, LIANAXNL, 15, lianaadenise, 04-21",
    "burga, MIACX10Cash, €10, miaclancy02, 04-21",
    "stronger, moa20, 20, moasundstrm, 04-21",
    "stronger, TAMI20, 20, tami_sattler, 04-21",
    "icaniwill, ANNEWER20, 20, anne__wer, 04-21",
    "greenchefnl, CHEFBRITT90, €90, brittwijnne, 04-21",
    "denederlandsekluis.nl, KIM3, 25, kimjacobs, 04-21",
    "stronger, NONSTOP15, 15, nonstopnikki.nl, 04-21",
    "hellofreshnl, HELLOSMIT85, €85, moniquesmit_insta, 04-21",
    "drsmile.nl, Sofie300, €300, sofiegraafland, 04-21",
    "fashyoonnl, Ayla, 10, xmylifeasayla, 04-21",
    "uwantisell, WENDIEXX, 10, wendievlaar, 04-21",
    "tamaris_official, MARIA10, 10, mariatailor, 04-21",
    "greenchefnl, CHEFWIL, €90, wilvantien, 04-21",
    "fourseasonmusthaves, rachel10, 10, by.rachellx, 04-21",
    "greenchefnl, CHEFJIPP, €90, jippheldoorn, 04-21",
    "burga, STACEYX15, 15, staceeyyx, 04-21",

    "shein, SWS147, 15, allthatjazzxoxo, 04-19",
    "loavies, FEST-DEMI20, 20, demiteeuwissen, 04-19",
    "nakdfashion, Basma, 15, basma_bada, 04-19",
    "idealofsweden, BBVENUS, 15, kleinpeperte, 04-19",
    "shein, BASICSsylvermary, 15, sylver_mary, 04-19",
    "desenio, XFLORA, 10, kleinpeperte, 04-19",
    "loavies, ELISESPRING, 20, elisetricarico, 04-19",
    "veromoda, KIMBERLYZ20, 20, kimzk__, 04-19",
    "myproteinnl, JOYCEB, 30, joycebltrstt, 04-19",
    "snuggs, NOELLE20, 20, noellesomogyi, 04-19",
    "madlady, KENDRABI, 15, kendrabianque, 04-19",
    "bjornborg, RAAD20, 20, rabattk, 04-19",
    "ginatricot, DARIA20, 20, rabattk, 04-19",
    "loavies, FEST-IRIS20, 20, irismarkerink, 04-19",
    "loavies, LENKAXO20, 20, lenka.vanhemelryck, 04-19",
    "gutsgusto, MIRTHE15, 15, mirthe, 04-19",
    "nakdfashion, LISAP, 15, lisaapijnacker, 04-19",
    "nakdfashion, URBASIL, 15, lisadeboraa, 04-19",
    "ginatricot, RIKKE20, 20, rikkewesterboe, 04-19",
    "burga, KYRAJXNL, 15, kyrajanssenn, 04-19",
    "safira, BBSLAY20, 20, liinasjourney, 04-19",
    "stronger, Tamara15, 15, tamarahermans_, 04-19",
    "icaniwill, MSOYLAND25, 25, monicasoyland, 04-19",
    "veromoda, MELLAA20, 20, mellaadema, 04-19",
    "hofvansalland, MAIKE10, 10, maikebeunk, 04-19",
    "jewelleryspatti, DILIANE15, 15, diliane.kwadijk, 04-19",
    "veromoda, LE20, 20, laylaeyers, 04-19",
    "burga, LINDSAYX15, 15, lindsaywouterse, 04-19",
    "geurwolkje, CYNTHIA10, 10, cynthiavandoorn, 04-19",
    "otrium, FLOOR20, 20, countlessshades, 04-19",
    "yvettesports, Floor15, 15, countlessshades, 04-19",
    "livialune.nl, DEMI20, 20, xdemi___x, 04-19",
    "lightinthebox, LISA20, 20, lisajkoster, 04-19",
    "leolive, EVELIENmom, 10, anthonisevelien, 04-19",
    "geurwolkje, RACHEL10, 10, by.rachellx, 04-19",
    "studiobipu, kheeell15, 15, kheeell, 04-19",
    "bathandbodyworksnl, FLEUR20, 20, fleurdijkstra_, 04-19",
    "armedangels, TIENVANWIL15, 15, tienvanwil, 04-19",

    "shein, SWS427, 15, baenece, 04-17",
    "nakdfashion, tangpedersen, 15, michelletangpedersen, 04-17",
    "veromoda, NOAR20, 20, xnoarichter, 04-17",
    "chiquelle, PETERINA25, 25, xpeterinabroers, 04-17",
    "lookfantasticnl, DANTHELF, 10, danthescholtenx, 04-17",
    "idealofsweden, BBFAIRY, 15, kleinpepertje, 04-17",
    "desenio, XCURLS, 10, kleinpepertje, 04-17",
    "nakdfashion, xkimberly, 15, kimberly_hmn, 04-17",
    "shein, ktlouise15, 15, ktlouise.97, 04-17",
    "madlady, DINABI, 15, dinabirkenes, 04-17",
    "bjornborg, Rosa20, 20, rosahereman, 04-17",
    "divain, BBSWEET, 5, kleinpepertje, 04-17",
    "madlady, ANNALA, 15, annamariaeveliinaa, 04-17",
    "lyko, monchilita20, 20, monchilita, 04-17",
    "ginatricot, YT23Gt0203, 20, rabattk, 04-17",
    "nakdfashion, lindi, 15, lindivh, 04-17",
    "veromoda, RS20, 20, regina_steinhauer, 04-17",
    "gocashmere, MARIEKE15, 15, mariekekazen, 04-17",
    "otrium, CHRISSY20, 20, chrissyovergoor, 04-17",
    "burga, GLOREEX10Cash, €10, jedamoh, 04-17",
    "myproteinnl, anthony, 30, anthonykruijver, 04-17",
    "safira, BB4433, 20, mademoiselle5374, 04-17",
    "chiquelle, KIM25, 25, kim.dejonghe, 04-17",
    "stronger, Emma20, 20, emmawagenius, 04-17",
    "stronger, MISSU30, 30, rabattk, 04-17",
    "icaniwill, ALICIAE20, 20, aliciaaedlund, 04-17",
    "plantenhanger, jaimy.blom, 20, jaimy.blom, 04-17",
    "hellofreshnl, HELLOSOPHIE85, €85, sophieousri, 04-17",
    "danielwellington, DWBBDR22, 15, rentishehu, 04-17",
    "bathandbodyworksnl, LARISSA20, 20, larissaverbon, 04-17",

    "asos, HOI20, 20, asos, 04-16",
    "nakdfashion, nova, 15, nova__vv, 04-16",

    "shein, SNC693, 15, lifewithmeandpea, 04-15",
    "zalando, ELLE23, 20, elle, 04-15",
    "h&m, ELLE, 20, elle, 04-15",
    "loavies, SUMMERX20, 20, summermonteny, 04-15",
    "nakdfashion, jaimy, 15, jaimyruys, 04-15",
    "zonnebrillencom, ELLE23, 20, elle, 04-15",
    "vila, ELLE2023, 15, elle, 04-15",
    "veromoda, ELLE23, 20, elle, 04-15",
    "shein, SWS429, 15, zelibrodrick, 04-15",
    "stevemaddeneu, ELLE25, 25, elle, 04-15",
    "pieces, ELLE23, 20, elle, 04-15",
    "only, ELLE23, 20, elle, 04-15",
    "osloskinlab, ESSD, 10, elle, 04-15",
    "otrium, ELLE25, 25, elle, 04-15",
    "lookfantastic, ELLELF, 11, elle, 04-15",
    "hunkemoller, ELLE@HKM2023, 20, elle, 04-15",
    "hellofreshnl, ELLE2023, €25, elle, 04-15",
    "ginatricot, YT23Gt0203, 15, rabattk, 04-15",
    "nakdfashion, patricia, 15, patricia.lacher, 04-15",
    "myproteinnl, MATIC, 30, maticfit, 04-15",
    "safira, BBAPRIL20, 20, dilara.muz99, 04-15",
    "gutsgusto, WEEKEND, 15, gutsgusto, 04-15",
    "stronger, thalissa20, 20, lisstilemans, 04-15",
    "icaniwill, SUNNIVAL20, 20, rabattk, 04-15",
    "cusboutique, yamaika10, 10, inspiredbyyam, 04-15",
    "naifcare, LAURAXNAIF, 20, lauraponticorvo, 04-15",
    "leolive, RACHELmom, 10, by.rachellx, 04-15",
    "emmasleepnl, ORANJELENTE, 13, kellycaresse, 04-15",

    "shein, kasia001, 15, kate.ing, 04-14",
    "asos, STYLES, 20, asos, 04-14",
    "nakdfashion, shula, 15, shularoose, 04-14",
    "myproteinnl, ISABELLA, 30, isabellakok, 04-14",
    "desenio, XGLOWY, 10, kleinpepertje, 04-14",
    "otrium, ELLE25, 25, otrium, 04-14",
    "otrium, SOPHIEY20, 20, zantobe, 04-14",
    "shein, SWS551, 15, dubai_mom_life, 04-14",
    "voltairesneakers, NIJBACKER10, €10, fleurnijbacker, 04-14",
    "zonnebrillencom, ANNELOES, 15, asmolenaarr, 04-14",
    "snuggs, CHARLIE15, 15, charlie_s_kitchen, 04-14",
    "snuggs, LISAGOES, 15, lisagoesvegan, 04-14",
    "nakdfashion, anneloes, 15, asmolenaarr, 04-14",
    "burga, BRIDGETXNL, 15, bridgetdekker, 04-14",
    "nakdfashion, BRING, 15, rabattk, 04-14",
    "bjornborg, PABLO20, 20, il_barboncino__, 04-14",
    "safira, BBEND, 20, rabattk, 04-14",
    "gutsgusto, STYLESSA15, 15, stylessa__, 04-14",
    "stronger, lindsey20, 20, lindseybeljaars, 04-14",
    "stronger, BEAU15, 20, beaugoudbeek, 04-14",
    "icaniwill, VIKTORIAL20, 20, viktorialindbak, 04-14",
    "danielwellington, DWBBSAMME, 15, rabattk, 04-14",
    "emmasleepnl, STIJN, 10, stijn_fransen, 04-14",
    "rihoas, michelle, 15, michellemiddelman, 04-14",
    "bathandbodyworksnl, ROBIN20, 20, thepastelsuitcase, 04-14",
    "by.gnd.fashion, AYLA10, 10, xmylifeasayla, 04-14",
    "newbella, NBMZN18, 18, countlessshades, 04-14",
    "snuggs, JANICEBLOK, 15, janiceblok, 04-14",
    "sapphlingerie, INDIA15, 15, indiasuy, 04-14",
    "luxuryforprincess, DAMIET, 15, damiet, 04-14",
    "luamaya, Charline30, 30, charlyyneb, 04-14",

    "shein, SSPR4116, 15, bloggerlifestyle90, 04-12",
    "nakdfashion, FEMKE, 15, femkezoe, 04-12",
    "bjornborg, CARO20, 20, sautercaro, 04-12",
    "kidsbrandstore, Familjen20, 20, julia_frohlich, 04-12",
    "desenio, XTRUST, 10, kleinpepertje, 04-12",
    "idealofsweden, BBCLOUD, 15, kleinpepertje, 04-12",
    "shein, SWS126, 15, oliviazglitz, 04-12",
    "chiquelle, PHAEDRA25, 25, phaedramertens, 04-12",
    "gutsgusto, DIANA15, 15, dianaerisir, 04-12",
    "veromoda, visjonie20, 20, jonievis, 04-12",
    "veromoda, LSCHMIDT20, 20, luucy.schmidt, 04-12",
    "nakdfashion, margarida, 15, fgmargarida, 04-12",
    "nakdfashion, Karoline, 15, karolinedueholm, 04-12",
    "snuggs, ESMEEVL15, 15, esmeevanleijden, 04-12",
    "snuggs, SHELING15, 15, shelingcynthia, 04-12",
    "burga, JULIAXNL, 15, juliavkatwijk, 04-12",
    "burga, MANONxNL, 33, manonnjanssen, 04-12",
    "myproteinnl, MYPVERA, 20, veradokter, 04-12",
    "safira, BBJENIA94, 20, jenia_94_, 04-12",
    "stronger, mindgains20, 20, mindgains_, 04-12",
    "stronger, MIA20, 20, mia_artistry, 04-12",
    "icaniwill, IDAH20, 20, idacarolinehansen, 04-12",
    "naampuzzel.nl, naampuzzel_diane, 10, dianegroenhof, 04-12",
    "armedangels, paulienmullaertx15, 15, paulienmullaertx, 04-12",
    "gutsgusto, MARIEYOU15, 15, marieyou__, 04-12",
    "repeatcashmere, GABRIELA15, 15, gabrieladegraaf, 04-12",
    "wiredesign, ROBIN10, 10, robinhenneke.jpeg, 04-12",
    "veromoda, nathaliewittendorp20, 20, nathalieejw, 04-12",
    "geurwolkje, TRYNEWTHINGS, 15, rochellehondijk, 04-12",
    "famousstore, jill10, 10, jillvd.h, 04-12",
    "madlady, VIOLAMA, 15, rabattk, 04-12",

    "shein, SWS513, 15, stanzie.star, 04-10",
    "zalando, 15DELUXE, 15, zalando, 04-10",
    "nakdfashion, CHANTALB, 15, chantbaltes, 04-10",
    "idealofsweden, BBJOYFUL, 15, kleinpepertje, 04-10",
    "desenio, XDANCE, 10, kleinpepertje, 04-10",
    "shein, Browngirl15, 15, browngirlstyles, 04-10",
    "burga, KAYLEIGHxNL, €15, kayleighmkp, 04-10",
    "nakdfashion, pauline, 15, paulinepain_, 04-10",
    "nakdfashion, kimshirin, 15, kim.lbs, 04-10",
    "veromoda, jamieleeverjans20, 20, jamieleeverjans, 04-10",
    "burga, ELLENHX10Cash, €10, hopeellenxx, 04-10",
    "myproteinnl, DANEWEN, 40, janedoe, 04-10",
    "myproteinnl, RISHI, 25, rishibehari, 04-10",
    "bjornborg, RAUTIAINEN20, 20, lottarautiainen, 04-10",
    "safira, BB20SA, 20, rabattk, 04-10",
    "chiquelle, HALFPRICE, 50, chiquelle, 04-10",
    "stronger, FANNIE20, 20, fasojo, 04-10",
    "stronger, rani15, 15, ranicoomans, 04-10",
    "icaniwill, AHANNA20, 20, athletichanna, 04-10",
    "madlady, LYRABL, 15, lyra.isabelle, 04-10",
    "madlady, INES, 15, rabattk, 04-10",
    "ginatricot, KLARA20, 20, rabattk, 04-10",
    "armedangels, thepastelsuitcase15, 15, thepastelsuitcase, 04-10",
    "terstal, MONIQUE10, 10, moniquesmit_insta, 04-10",
    "chiquelle, EVA25, 25, eef_dgn, 04-10",
    "bjornborg, DEBBIE20, 20, debbiedhillon, 04-10",
    "danielwellington, DWBBRR44, 15, rentishehu, 04-10",
    "studiobipu, kheeell20, 20, kheeell, 04-10",
    "famousstore, isa10, 10, isamegens_, 04-10",

    "shein, SWS227, 15, callmebojana, 04-07",
    "loavies, mariskaxo20, 20, mariska.van.es, 04-07",
    "nakdfashion, isabela, 15, isaantelmo, 04-07",
    "aimnsportswear, SPRING25, 25, aimnsportswear, 04-07",
    "desenio, XGEMS, 10, kleinpepertje, 04-07",
    "gutsgusto, VERONIKA15, 15, veronika.sndnr, 04-07",
    "snuggs, SERENA20, 20, serenaverbon, 04-07",
    "loavies, -OFF20-NOEMI, 20, noemizadra_, 04-07",
    "nakdfashion, mirthedij, 15, mirthedijkstra_, 04-07",
    "veromoda, MOONC20, 20, rabattk, 04-07",
    "chiquelle, EASTER, 35, chiquelle, 04-07",
    "chiquelle, Margaux25, 25, margaux.deckers, 04-07",
    "glamouryourhair, SABRINA10, 10, yourfairysister, 04-07",
    "loavies, ZARA20-OFF, 20, zaravlx, 04-07",
    "nakdfashion, sanches, 15, emilysanches, 04-07",
    "zaful, lamnight19, 19, lamnight, 04-07",
    "madlady, CAMILLAKO, 15, camillakoht, 04-07",
    "myproteinnl, JESSICANL, 25, jessicakuijpers, 04-07",
    "bjornborg, HELBERG20, 20, helenehelberg, 04-07",
    "safira, BB4466, 20, mademoiselle5374, 04-07",
    "stronger, KRISSY20, 20, krissyotn, 04-07",
    "stronger, Wendt20, 20, hannaalexandraw_, 04-07",
    "icaniwill, ILKA20, 20, ilka.me, 04-07",
    "lyko, misalena20, 20, malenahamzic, 04-07",
    "shein, SSPR573, 15, unzaso10_, 04-07",
    "lookfantastic, ROBINLF, 10, thepastelsuitcase, 04-07",
    "danielwellington, dwbb6qzzbl, 15, athomewithcharmaine, 04-07",
    "bathandbodyworksnl, SYLVANA20, 20, sylvana.elling, 04-07",
    "paulie__pocket, BO20, 20, bowilkes, 04-07",

    "shein, SWS446, 15, claratorres55, 04-05",
    "nakdfashion, LEABROC, 15, leabroc, 04-05",
    "loavies, SPRING25, 25, loavies, 04-05",
    "loavies, -OFF20JILL-, 20, jillangell, 04-05",
    "veromoda, EVAM20, 20, evahelenameijer, 04-05",
    "gutsgusto, MARITZ15, 15, mari_tz1, 04-05",
    "otrium, REY20, 20, rey.steezy, 04-05",
    "nakdfashion, bo, 15, bo.blankestein, 04-05",
    "nakdfashion, TRICARICO, 15, elisetricarico, 04-05",
    "idealofsweden, BBWORTHY, 15, kleinpepertje, 04-05",
    "desenio, XPURITY, 10, kleinpepertje, 04-05",
    "safira, BBVAL, 20, rabattk, 04-05",
    "ginatricot, Sabina20, 20, rabattk, 04-05",
    "merodacosmetics, 20KORTING, 20, maximetruijen, 04-05",
    "lozo.jewelry, NOAH10, 10, nootjee120, 04-05",
    "sunweb, BEMOREUNICORN2023, €50, bemoreunicorn.nl, 04-05",
    "zonnebrillencom, KIMSIENNA, 20, kim__sienna, 04-05",
    "meetmethere.nl, HAPPY15, 15, janedoe, 04-05",
    "shein, 23SW283, 15, caterinaes, 04-05",
    "myproteinnl, KATERYNA, 25, janedoe, 04-05",
    "madlady, ELLAAA, 15, ellaaltonenn, 04-05",
    "burgaofficial, acotswoldmamax10cash, €10, acotswoldmama, 04-05",
    "rich.meals, Rahm10, 10, rahmpanday, 04-05",
    "stronger, 20GYM, 20, gym_boutique, 04-05",
    "icaniwill, AURORAS20, 20, aurorasalonenn, 04-05",
    "lyko, 15all, 15, rabattk, 04-05",
    "veromoda, STEFANIEONAC20, 20, _stefanie.oc, 04-05",
    "veromoda, AMBERW20, 20, amberweyn, 04-05",
    "luvletteofficial, luvmiddelman, 15, michellemiddelman, 04-05",
    "wiredesign, sylvana10, 10, sylvana.elling, 04-05",
    "zonnebrillencom, DEWI, 20, dewipijnacker, 04-05",
    "armedangels, WILVANTIEN15, 15, wilvantien, 04-05",
    "urbanrevivo, URCASS, 10, cassndras, 04-05",
    "bangerhead, JENEH10, 10, jenehknoopp, 04-05",
    "zonnebrillencom, SHULAROOSE, 20, shularoose, 04-05",

    "nakdfashion, demit, 15, demiteeuwissen, 04-03",
    "loavies, -OFF20VALERIE-, 20, valeriequirijns, 04-03",
    "shein, SSPR1794, 15, jodieleighking, 04-03",
    "shein, SSPR2401, 15, amelia_glass, 04-03",
    "veromoda, LAMPINEN20, 20, homebyhenna, 04-03",
    "nakdfashion, CRISTINA, 15, cristinalii, 04-03",
    "idealofsweden, BBUBBLE, 15, kleinpepertje, 04-03",
    "desenio, XSPIRIT, 10, kleinpepertje, 04-03",
    "nakdfashion, Hannahp, 15, hannah.peyrot, 04-03",
    "bjornborg, emiliaeddie20, 20, emiliaholmgreen, 04-03",
    "madlady, MARIAWOS, 15, mariiawos, 04-03",
    "burga, BOXNL, 15, bovluijtelaar, 04-03",
    "wearglas, JEN20, 20, jenliujones, 04-03",
    "myproteinnl, JoeyLau, 25, janedoe, 04-03",
    "famousstore, susan10, 10, susangorz_, 04-03",
    "stronger, Jay20, 20, jay_yogini, 04-03",
    "icaniwill, TOVAO20, 20, tovaostlundd, 04-03",
    "bylashbabe, discount15, 15, d.iscount, 04-03",
    "ginatricot, marijn20, 20, rabattk, 04-03",
    "womensbest, KLEIJN, 10, manonkleijnx, 04-03",
    "remington(via bol), Monique20, 20, moniquesmit_insta, 04-03",
    "bjornborg, ISALUNA20, 20, isaluna, 04-03",
    "hellofreshnl, HELLOCHANNAH85, €85, channahkoerten, 04-03",
    "womensbest, NENCIE, 10, nenciesway, 04-03",
    "samfriday, Stacey10, 10, staceeyyx, 04-03",
    "bodyandfit_nl, FLEURGRAAF, 10, fleuerr, 04-03",

    "nakdfashion, Abi, 15, abiwebb_xx, 04-02",
    "shein, AMF315, 15, marinadrgram, 04-02",
    "asos, XTRA, 15, asos, 04-02",
    "shein, SSPR1455, 15, olivialucytraynor, 04-02",
    "loavies, -OFF20NOA-, 20, xnoarichter, 04-02",
    "bjornborg, JELENA20, 20, jelena.gewoon.gezond, 04-02",
    "snuggs, LISALOEB, 15, lisaloeb_, 04-02",
    "veromoda, fashionkittenandlawyer20, 20, fashionkittenandlawyer, 04-02",
    "gymshark, CHARLOTTEL, 10, lottiealicelamb, 04-02",
    "burga, jessicalouisex10cash, €10, jessicalouise.home, 04-02",
    "myproteinnl, SILKE, 25, tilemanssilke, 04-02",
    "loavies, -OFF20ROBIN-, 20, robincatharina, 04-02",
    "nakdfashion, ysaline, 15, ysalinefr, 04-02",
    "nakdfashion, laroutinefood, 15, laroutinefood, 04-02",
    "lookfantastic, LFVIBE, 20, lookfantastic, 04-02",
    "safira, BB20SUT, 20, rabattk, 04-02",
    "stronger, esmeralda20, 20, esmeraldaattema, 04-02",
    "stronger, CLAUDIA15, 15, vanavermaetclaudia, 04-02",
    "icaniwill, nata20, 20, nata.bkl, 04-02",
    "hairlust, MICHELLE15, 15, michelle_bollen, 04-02",
    "zonnebrillencom, LISAPIJNACKER, 20, lisaapijnacker, 04-02",
    "bodyandfit_nl, MVDKIEFT, 10, michellevdkieft, 04-02",
    "marleyspoonnl, MARIA, €75, mariatailor, 04-02",
    "bodyandfit_nl, KORTINGKIM, 10, kimandthekids, 04-02",
    "foreveryoungtheshow, Lucky27, €22, lizzyvdligt, 04-02",
    "cocunat, ROSALIAGUZMAN9, 5, rosalia_guzman_9, 04-02",
  ];
}
