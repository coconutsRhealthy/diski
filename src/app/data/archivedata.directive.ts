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
    "nike, SHINE23, 25, nike, 05-10",
    "shein, 23sw1055, 15, itstammaria, 05-10",
    "loavies, AICHASWIM, 20, aichaverheye, 05-10",
    "asos, MYSTERIE, 25, asos, 05-10",
    "nakdfashion, louisasth, 30, louisasth, 05-10",
    "idealofsweden, BBHEELS, 15, wgk, 05-10",
    "desenio, XLACEY, 10, wgk, 05-10",
    "myproteinnl, CARMEN, 26, carmenketelaar_, 05-10",
    "heyestrid, UNICASE, , honey, 05-10",
    "otrium, LYA20, 20, lyamariella, 05-10",
    "nakdfashion, SILJE, 15, siljekristiansen, 05-10",
    "nakdfashion, FEMKE, 15, femkezoe, 05-10",
    "gutsgusto, LOLANNA15, 15, lolannaa, 05-10",
    "gutsgusto, Lenawxsm10, 15, lena.wxsm, 05-10",
    "malelions, ISABEL10, 10, xisabel.kr, 05-10",
    "snuggs, AIMEE20, 20, aimeevanderpijl, 05-10",
    "burga, JULIAXNL, 15, juliavkatwijk, 05-10",
    "bjornborg, ZANNA20, 20, zannahofstede, 05-10",
    "safira, BB20SUMM, 20, rabattk, 05-10",
    "chiquelle, 25ZOE, 25, zoekarelsx, 05-10",
    "madlady, MAD7880, 15, pernilleoverland, 05-10",
    "ginatricot, YAASO20, 20, yaaso___, 05-10",
    "stronger, Annabell20, 20, annabell_erika, 05-10",
    "danielwellington, DWBBDUVET, 15, rabattk, 05-10",
    "shein, SMF1063, 15, virgotrendz, 05-10",
    "divain, BBLUSH, 5, wgk, 05-10",
    "danielwellington, DWBBDIAN, 15, zarastreetstyleitaly_, 05-10",
    "stronger, TRICARICO20, 20, elisetricarico, 05-10",
    "icaniwill, SUVIM20, 20, suveyy, 05-10",
    "ylor.nl, britt10, 10, brittwijnne, 05-10",
    "otrium, FLOOR20, 20, countlessshades, 05-10",
    "myproteinnl, WENDIE, 10, wendievlaar, 05-10",
    "leolive, Evelienmom, 10, anthonisevelien, 05-10",
    "mysisterscloset.nl, SISTERS15, 15, clairepronk, 05-10",
    "womensbest, NENCIE, 10, nenciesway, 05-10",
    "armedangels, TIENVANWIL15, 15, tienvanwil, 05-10",
    "athletic.bee, STACEY20, 20, staceeyyx, 05-10",

    "shein, 23sw1308, 15, megan_jeanx, 05-08",
    "loavies, LAURASWIM, 20, lauravdee, 05-08",
    "nakdfashion, CRISTINA, 15, cristinalii, 05-08",
    "desenio, XHEELS, 10, wgk, 05-08",
    "airup, CK8X2D3Q98Y6, 10, honey, 05-08",
    "otrium, CELESTE20, 20, _celestemunoz, 05-08",
    "idealofsweden, BBCURLS, 15, wgk, 05-08",
    "gutsgusto, MARIEYOU15, 15, marieyou__, 05-08",
    "otrium, SHIVAM20, 20, shiv_1886, 05-08",
    "bylashbabe, STARLASH, 10, wgk, 05-08",
    "shein, loveshein362, 15, jilincic, 05-08",
    "nakdfashion, eigenhuis, 15, iriseigenhuis, 05-08",
    "nakdfashion, Annick, 15, annickkooiman_, 05-08",
    "snuggs, JUDITH20, 20, junoordzij, 05-08",
    "myproteinnl, MYRTHEB, 26, myrthebelov, 05-08",
    "bjornborg, Dione20, 20, dione.dv, 05-08",
    "safira, BBDGG20, 20, daisiesandglitter, 05-08",
    "stronger, WENDYS20, 20, wendys_lifestyle, 05-08",
    "stronger, YOGABYFRIDA20, 20, yogabyfrida, 05-08",
    "icaniwill, ILKA20, 20, ilka.me, 05-08",
    "veromoda, PAULINEDB20, 20, paulinedebaere, 05-08",
    "ginatricot, MATILDA20, 20, rabattk, 05-08",
    "madlady, SELINAHJ, 20, rabattk, 05-08",
    "newrebelsbags, Jenehknoopp23, 15, jenehknoopp, 05-08",
    "geurwolkje, MOEDERDAG23, 20, fleurdijkstra_, 05-08",
    "bathandbodyworks, MARLIE20, 20, marlie_xx, 05-08",
    "burga, LISANNEXNL, 15, lisanne.blonk, 05-08",
    "doonails, SOFIE10, 10, sofiegraafland, 05-08",
    "rihoas, CASSNDRAS, 20, cassndras, 05-08",
    "photowall_sweden, lindseyb20, 20, lindseybeljaars, 05-08",
    "noboringsuitcases, RACHEL20, 20, by.rachellx, 05-08",
    "stronger, laurah20, 20, laurahordijk_, 05-08",
    "danielwellington, DWBBDR44, 15, rentishehu, 05-08",
    "leolive, BRITTmomA, 10, brittmink_, 05-08",

    "zalando, VOORMAMA, 15, zalando, 05-07",
    "shein, 23sw1029, 15, versaceblonde, 05-07",
    "asos, PICKS, 20, asos, 05-07",
    "nakdfashion, ZoeW, 15, zozoewitherspoon, 05-07",
    "loavies, Remke20, 20, remke, 05-07",
    "idealofsweden, BBSNUGG, 15, wgk, 05-07",
    "desenio, XHIPPY, 10, wgk, 05-07",
    "otrium, chrissy20, 20, chrissyovergoor, 05-07",
    "gymshark, CHARLOTTEL, 10, lottiealicelamb, 05-07",
    "chiquelle, THIRTYOFF, 30, chiquelle, 05-07",
    "stevemaddeneu, JADE25, 25, jadeanna, 05-07",
    "veromoda, NANOEKDG20, 20, gewoonnanoek, 05-07",
    "myproteinnl, MARTIJN, 26, martijnfit, 05-07",
    "shein, SMF0051, 15, travelinstylewithdebs, 05-07",
    "snuggs, REBELS20, 20, rijneker_rebels, 05-07",
    "meetmethere, HAPPY15, 15, janedoe, 05-07",
    "nakdfashion, sarahstrm, 15, sarah_strm, 05-07",
    "popsockets, BBCAKE, 15, wgk, 05-07",
    "prozis, TOMS10, 10, tomspierings_, 05-07",
    "burga, ELLENHX10Cash, €10, hopeellenxx, 05-07",
    "wearglas, HETTYASH20, 20, hettyash, 05-07",
    "ginatricot, nina20, 20, _ninovaa, 05-07",
    "bjornborg, SARA20, 20, saraverwoerd, 05-07",
    "divain, BBPEARL, 5, wgk, 05-07",
    "ginatricot, PETRA20, 20, rabattk, 05-07",
    "madlady, MADAT0H, 15, rabattk, 05-07",
    "lookfantasticnl, LFSAABIW, 11, abiwebb_xx, 05-07",
    "stronger, VANJA20, 20, yoga_mum1, 05-07",
    "icaniwill, nadinereinhardt20, 20, nadine.fitnesstic, 05-07",

    "shein, 23SW700, 15, erika_deldurazno, 05-05",
    "asos, BLOESEM, 20, asos, 05-05",
    "nakdfashion, Zoila, 15, zoilazoe_, 05-05",
    "gymshark, LAURENN, 10, laurennicholefitness, 05-05",
    "idealofsweden, BBYUMMY, 15, wgk, 05-05",
    "desenio, XJEWEL, 10, wgk, 05-05",
    "otrium, GUUSJE20, 20, honey, 05-05",
    "hunkemoller, honey-df234t4fvq3y4, 12, honey, 05-05",
    "meetmethere, HEYYOU10, 10, meetmethere, 05-05",
    "famousstore, ESTE10, 10, estestam_, 05-05",
    "bjornborg, ISABEL20, 20, janedoe, 05-05",
    "posterstore, PSFLAIR, 10, wgk, 05-05",
    "popsockets, BBCAKE, 15, wgk, 05-05",
    "veromoda, MARIJET20, 20, rabattk, 05-05",
    "shein, loveshein469, 15, _lucy_model, 05-05",
    "chiquelle, PETERINA25, 25, xpeterinabroers, 05-05",
    "nakdfashion, MARGARIDA, 15, megmmorais, 05-05",
    "nakdfashion, melissan, 15, melissa_nh, 05-05",
    "myproteinnl, Zoila, 26, zoilazoe_, 05-05",
    "stronger, ANA20, 20, anpaulinas, 05-05",
    "stronger, 20madeleine, 20, madeleinemikaela, 05-05",
    "madlady, CELINEKR, 15, rabattk, 05-05",
    "lyko, kimberly20, 20, kimberlywsantos, 05-05",
    "veromoda, HENNAL20, 20, rabattk, 05-05",
    "ginatricot, FLEUR20, 20, rabattk, 05-05",
    "luamaya, Melissa30, 30, melissa_nh, 05-05",
    "bodyandfit.com, TSP10, 10, tomspierings_, 05-05",
    "myproteinnl, RISHI, 26, rishibehari, 05-05",
    "safira, BBX088, 20, mademoiselle5374, 05-05",
    "icaniwill, Evasophia20, 20, evasophia96, 05-05",

    "shein, SMF1026, 15, raising_ajs, 05-03",
    "nakdfashion, alessandra, 15, ladyales_journal, 05-03",
    "otrium, NINA20, 20, ninamutsters, 05-03",
    "loavies, KAYAXO20, 20, kayamaes, 05-03",
    "desenio, XTREASURE, 10, kleinpepertje, 05-03",
    "idealofsweden, BBDARLING, 15, kleinpepertje, 05-03",
    "gymshark, DEEDS, 10, janedoe, 05-03",
    "veromoda, KYRAECK20, 20, kyra.vaneck, 05-03",
    "christineleduc_, SERENA10, €10, serenaverbon, 05-03",
    "stevemaddeneu, NINA25, 25, ninawarink, 05-03",
    "only, NOA12, 12, xnoarichter, 05-03",
    "myproteinnl, JUDITH, 26, junoordzij, 05-03",
    "bjornborg, SELENA20, 20, selenadinexz, 05-03",
    "maenails.nl, juul20, 20, kyradelouw, 05-03",
    "veromoda, AMBERW20, 20, amberweyn, 05-03",
    "nakdfashion, CHLOJL, 15, chlojl_, 05-03",
    "madlady, KRISTINARI, 15, kristinaelinaaa, 05-03",
    "shein, s15chloe, 15, chloe200167, 05-03",
    "holzkernwatches, LOTTE15, 15, liefslotte, 05-03",
    "snuggs, ROMY20, 20, romykoldenhof_, 05-03",
    "snuggs, PERIOD20, 20, period.nl, 05-03",
    "burga, QUINCYXNL, 15, quincyheemskerk, 05-03",
    "burga, MERELXNL, 15, merel.christina, 05-03",
    "safira, BB20RAB, 20, rabattk, 05-03",
    "chiquelle, CHARLOTTE25, 25, charlottegoudkuil, 05-03",
    "emmasleepnl, MARIT, 10, fitwithmarit, 05-03",
    "moodsgellac, Coco10, 10, cocochloe__, 05-03",
    "wearglas, OLSEN20, 20, stylebyolsen, 05-03",
    "stronger, JANINA20, 20, nina_lovestyle, 05-03",
    "icaniwill, NATA20, 20, nata.bkl, 05-03",
    "hip.orgnl, HIPBRITT20, 20, brittwijnne, 05-03",

    "shein, SMF0012, 15, chiamamisarah, 05-01",
    "nakdfashion, chrissy, 15, chrissyovergoor, 05-01",
    "gutsgusto, KATHY15, 15, kathys.lookbook, 05-01",
    "idealofsweden, BBSEREN, 15, kleinpepertje, 05-01",
    "otrium, BELLE20, 20, bellehutt, 05-01",
    "desenio, XNOBLE, 10, kleinpepertje, 05-01",
    "divain, BBCHARM, 5, kleinpepertje, 05-01",
    "meetmethere, LXZ-DWPE752, €5, janedoe, 05-01",
    "famousstore, YARA10, 10, yarafelicex, 05-01",
    "veromoda, daniqueveenstra20, 20, daniqueveenstraa, 05-01",
    "shein, 23sw1168, 15, itsjackienina, 05-01",
    "airup, INOX, 15, honey, 05-01",
    "stronger, joline20, 20, yuppielifestyle, 05-01",
    "only, CYNTHIA12, 12, cynthiavandoorn, 05-01",
    "myproteinnl, PRIS, 8, losingitwithpris, 05-01",
    "bjornborg, LAURYN20, 20, regardslauryn, 05-01",
    "safira, BBKOS, 20, rabattk, 05-01",
    "zonnebrillen.com, LISAP, 20, lisaapijnacker, 05-01",
    "lelosi, FLOOR20, 20, countlessshades, 05-01",
    "swybrand, WENDIE, 30, wendievlaar, 05-01",
    "ginatricot, INGA20, 20, sunnyinga, 05-01",
    "madlady, SANNAHA, 15, sannahavelin, 05-01",
    "madlady, ELLAVU, 15, ellavuorinen, 05-01",
    "nakdfashion, ANNE, 15, anneepedersen, 05-01",
    "nakdfashion, Evelien, 15, anthonisevelien, 05-01",
    "madlady, MADCAST, 15, rabattk, 05-01",
    "icaniwill, LENEMARIEH20, 20, pt_lenehag, 05-01",
    "ginatricot, NIKKI20, 20, nonstopnikki.nl, 05-01",
    "ginatricot, MAUREEN20, 20, martinemaureen, 05-01",
    "hellofresh.nl, HELLOLINDSEY85, €85, lindseybeljaars, 05-01",
    "danielwellington, DWBBR42, 15, rentishehu, 05-01",
    "luamaya, Romy30, 30, rmdnbs, 05-01",
    "uwantisell, WEFX10, 10, djwef, 05-01",
    "hellofresh.nl, HELLOCHARLOTTE, €85, charlottejanssen94, 05-01",
    "burga, NOORTJEX15, 15, honey, 05-01",
    "safira, BB6600, 20, mademoiselle5374, 05-01",

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
    "hellofresh.nl, HELLOFLEUR85, €85, fleurdijkstra_, 04-29",

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
    "hellofresh.nl, HELLODEMI85, €85, deminugteren, 04-27",
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
    "hellofresh.nl, 85HELLOMICHELLE, €85, michelle_bollen, 04-23",
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
    "hellofresh.nl, HELLOSMIT85, €85, moniquesmit_insta, 04-21",
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
    "hellofresh.nl, HELLOSOPHIE85, €85, sophieousri, 04-17",
    "danielwellington, DWBBDR22, 15, rentishehu, 04-17",
    "bathandbodyworksnl, LARISSA20, 20, larissaverbon, 04-17",

    "asos, HOI20, 20, asos, 04-16",
    "nakdfashion, nova, 15, nova__vv, 04-16",

    "shein, SNC693, 15, lifewithmeandpea, 04-15",
    "zalando, ELLE23, 20, elle, 04-15",
    "h&m, ELLE, 20, elle, 04-15",
    "loavies, SUMMERX20, 20, summermonteny, 04-15",
    "nakdfashion, jaimy, 15, jaimyruys, 04-15",
    "zonnebrillen.com, ELLE23, 20, elle, 04-15",
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
    "hellofresh.nl, ELLE2023, €25, elle, 04-15",
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
    "zonnebrillen.com, ANNELOES, 15, asmolenaarr, 04-14",
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
  ];
}
