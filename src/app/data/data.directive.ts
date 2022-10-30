import { Directive } from "@angular/core"

@Directive({
  selector: 'app-data'
})
export class DataDirective {

  public static getDataArray() {
    return this.dataArray;
  }

  public static getCompanyFromBaseInputLine(baseInputLine) {
    var company = baseInputLine.substring(0, baseInputLine.indexOf(","));
    return company;
  }

  public static getDiscountCodeFromBaseInputLine(baseInputLine) {
    var firstIndexOfComma = this.getPosition(baseInputLine, ", ", 1);
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var discountCode = baseInputLine.substring(firstIndexOfComma + 2, secondIndexOfComma);
    return discountCode;
  }

  public static getInfluencerFromBaseInputLine(baseInputLine) {
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var influencer = baseInputLine.substring(secondIndexOfComma + 2, thirdIndexOfComma);
    return influencer;
  }

  public static getDateFromBaseInputLine(baseInputLine) {
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var date = baseInputLine.substring(thirdIndexOfComma + 2, baseInputLine.length);
    return date;
  }

  public static getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  static dataArray = [
    "@nakdfashion, IRIS, irismarkerink, 2022-10-28",
    "@loavies, 20.rebeccavandenhoek, rebeccavandenhoek, 2022-10-28",
    "@desenio, XCUSE, janedoe, 2022-10-28",
    "@byrokko, TASKY, janedoe, 2022-10-28",
    "@idealofsweden, BBCHECKP, janedoe, 2022-10-28",
    "@veromoda, willeochfrejasmamma20, janedoe, 2022-10-28",
    "@bjornborg, NATTID20, janedoe, 2022-10-28",
    "@chiquelle, ONLINE30, chiquelle, 2022-10-28",
    "@sheinofficial, snx1213, janedoe, 2022-10-28",
    "@sheinofficial, magda001, janedoe, 2022-10-28",
    "@jotex, EMMAOCT22, janedoe, 2022-10-28",
    "@loavies, 20.WHATMISSDWEARS, whatmissdwears, 2022-10-28",
    "@loavies, 20.WHERELINDAGOES, wherelindagoes, 2022-10-28",
    "@nakdfashion, sidselkaiser, janedoe, 2022-10-28",
    "@nakdfashion, Lisatheking, janedoe, 2022-10-28",
    "@nakdfashion, KIRKES, janedoe, 2022-10-28",
    "@loavies, 20.DAISYPIRASXO, daisypirasxo, 2022-10-28",
    "@americatoday, Merle15, janedoe, 2022-10-28",
    "@kidsbrandstore, FRANZISKA-S20, janedoe, 2022-10-28",
    "@theofficialsafira, BBFANT, janedoe, 2022-10-28",
    "@theofficialsafira, BB2DR6H8, janedoe, 2022-10-28",
    "@chiquelle, LISANNE20, lisanne.blonk, 2022-10-28",
    "@stronger, JACCI10, janedoe, 2022-10-28",
    "@stronger, 10margot, janedoe, 2022-10-28",
    "@hunkemoller, BBHKMCODELAURA, janedoe, 2022-10-28",
    "@icaniwill, runanne20, janedoe, 2022-10-28",
    "@icaniwill, heinir20, janedoe, 2022-10-28",
    "@nakdfashion, CASSNDRAS, cassndras, 2022-10-28",
    "@loavies, LAMYNASPINDER.20, lamynaspinder, 2022-10-28",
    "@farfetch, 10LIE, liemeurs, 2022-10-28",
    "@nakdfashion, Lorainevanlog, lorainevanlog, 2022-10-28",
    "@geurwolkje, SABRINA15, sabrinaputrix, 2022-10-28",

    "@nakdfashion, stepsexnakd, janedoe, 2022-10-26",
    "@loavies, WOUAAAAHHXFALL20, janedoe, 2022-10-26",
    "@sheinofficial, ssv095, janedoe, 2022-10-26",
    "@veromoda, ronjapipke20, janedoe, 2022-10-26",
    "@idealofsweden, BBJOBE, janedoe, 2022-10-26",
    "@loungeunderwear, RIANNE10, rianne.meijer, 2022-10-26",
    "@desenio, XTRV, janedoe, 2022-10-26",
    "@stronger, SIEM20, janedoe, 2022-10-26",
    "@desenio, XCREA, janedoe, 2022-10-26",
    "@hunkemoller, BBHKM47, janedoe, 2022-10-26",
    "@idealofsweden, BBDEESY, janedoe, 2022-10-26",
    "@nakdfashion, lottev, lottevanvonderen, 2022-10-26",
    "@loavies, TESSAKRUIJS.20, tessakruijs, 2022-10-26",
    "@icaniwill, jzonathan20, janedoe, 2022-10-26",
    "@myproteinnl, Kim, janedoe, 2022-10-26",
    "@bjornborg, KRISTJAANA20, janedoe, 2022-10-26",
    "@nakdfashion, alexandraskr, janedoe, 2022-10-26",
    "@nakdfashion, karoline, janedoe, 2022-10-26",
    "@kidsbrandstore, ADAM-E20, janedoe, 2022-10-26",
    "@theofficialsafria, BB35D, janedoe, 2022-10-26",
    "@theofficialsafria, BBCMVLBZ, janedoe, 2022-10-26",
    "@chiquelle, shaznay20, st.tauran, 2022-10-26",
    "@stronger, glitter10, janedoe, 2022-10-26",
    "@icaniwill, wiss25, janedoe, 2022-10-26",
    "@veromoda, countlessshades20, janedoe, 2022-10-26",
    "@sheinofficial, snx1246, janedoe, 2022-10-26",
    "@hunkemoller, BBHKMMELIB, janedoe, 2022-10-26",
    "@nakdfashion, Zoey, zoey_looij, 2022-10-26",
    "@easytoys, abbeytess, abbeyhoes, 2022-10-26",
    "@hellofreshnl, HELLOMARLY75, marlyvd, 2022-10-26",
    "@farfetch, FFLIZZY, lizzyvdligt, 2022-10-26",
    "@divain_nl, BBJ813GA, crdr.samira, 2022-10-26",
    "@newfysic, NEWLESLIE, leslie_keijzer, 2022-10-26",
    "@famousstore, susan10, susangorz_, 2022-10-26",
    "@lyko, dirven20, dirven20, 2022-10-26",
    "@bellabarnett.official, 12MZ, itsjusttix, 2022-10-26",
    "@burgaofficial, BONITAX10EURNL, bonitabodden, 2022-10-26",

    "@nakdfashion, mathildecapp, janedoe, 2022-10-24",
    "@loavies, XNOARICHTER.20, janedoe, 2022-10-24",
    "@americatoday, Anna15, janedoe, 2022-10-24",
    "@bjornborg, WESTERMAN20, janedoe, 2022-10-24",
    "@nakdfashion, kellyh, kellyhamelijnck, 2022-10-24",
    "@burgaofficial, AYLAX10EURNL, xmylifeasayla, 2022-10-24",
    "@nakdfashion, Nova, nova__vv, 2022-10-24",
    "@hunkemoller, BBHKMT76, tessveldkampx, 2022-10-24",
    "@stronger, kleijn20, manonkleijnx, 2022-10-24",
    "@kidsbrandstore, DERMAN20, janedoe, 2022-10-24",
    "@theofficialsafira, BBF7, janedoe, 2022-10-24",
    "@theofficialsafira, BBNM, janedoe, 2022-10-24",
    "@chiquelle, kim20, kim.dejonghe, 2022-10-24",
    "@myprotein, malikaj, janedoe, 2022-10-24",
    "@gutsgusto, ITSCARO15, janedoe, 2022-10-24",
    "@stronger, otterud20, janedoe, 2022-10-24",
    "@icaniwill, toval20, janedoe, 2022-10-24",
    "@icaniwill, kristiang20, janedoe, 2022-10-24",
    "@veromoda, giuliathissen20, janedoe, 2022-10-24",
    "@veromoda, laylaeyers20, janedoe, 2022-10-24",
    "@sheinofficial, hw578, janedoe, 2022-10-24",
    "@sheinofficial, fw595, janedoe, 2022-10-24",
    "@hunkemoller, BBHKMOV, janedoe, 2022-10-24",
    "@desenio, XVT54, tessveldkampx, 2022-10-24",
    "@desenio, XOE, janedoe, 2022-10-24",
    "@hunkemoller, BBHKMTINN, tinkapell, 2022-10-24",
    "@nakdfashion, medina, medinaletica, 2022-10-24",

    "@nakdfashion, chamee, chameebarkmanx, 2022-10-22",
    "@loavies, gwenvanzijp.20, janedoe, 2022-10-22",
    "@sheinofficial, fw780, janedoe, 2022-10-22",
    "@veromoda, lunajohansen20, janedoe, 2022-10-22",
    "@idealofsweden, BBFLARE, janedoe, 2022-10-22",
    "@tessvfashion, CHIARA20, janedoe, 2022-10-22",
    "@chiquelle, shirley20, xshirleyp, 2022-10-22",
    "@loavies, 20.ROCHELLEHONDIJK, rochellehondijk, 2022-10-22",
    "@loavies, MARTINEMAUREEN.20, martinemaureen, 2022-10-22",
    "@hunkemoller, BBHKMSPOOKY, janedoe, 2022-10-22",
    "@nakdfashion, mariana, janedoe, 2022-10-22",
    "@nakdfashion, veroniquev, janedoe, 2022-10-22",
    "@americatoday, Jouke15, janedoe, 2022-10-22",
    "@americatoday, Milou15, janedoe, 2022-10-22",
    "@myproteinnl, NAKUL, janedoe, 2022-10-22",
    "@byrokko, jsvdm, janedoe, 2022-10-22",
    "@kidsbrandstore, DAPHNE20, janedoe, 2022-10-22",
    "@theofficialsafira, BBT25, janedoe, 2022-10-22",
    "@stronger, lottie20, janedoe, 2022-10-22",
    "@icaniwill, leidhammar20, janedoe, 2022-10-22",
    "@icaniwill, rk1tx, janedoe, 2022-10-22",
    "@sheinofficial, mamae15, janedoe, 2022-10-22",
    "@hunkemoller, BBHKMBB50, janedoe, 2022-10-22",
    "@desenio, XD102, janedoe, 2022-10-22",
    "@danielwellington, DWBBHB, janedoe, 2022-10-22",
    "@nemesis.thelabel, PETERINA15, xpeterinabroers, 2022-10-22",
    "@bambinifashion, cha, channahkoerten, 2022-10-22",
    "@desenio, KATJASCHUURMAN, katjaschuurman, 2022-10-22",
    "@onceuponapp, marlot25, jolielot, 2022-10-22",

    "@nakdfashion, lisap, janedoe, 2022-10-20",
    "@loavies, ambermeiresonnexo20, janedoe, 2022-10-20",
    "@gutsgusto, LORENA15, janedoe, 2022-10-20",

    "@sheinofficial, fw946, janedoe, 2022-10-20",
    "@chiquelle, chantal20, cwrekenhorst, 2022-10-20",
    "@bjornborg, lynn20, janedoe, 2022-10-20",
    "@stronger, MARIA20, mariatailor, 2022-10-20",
    "@veromoda, fleurverhoek20, janedoe, 2022-10-20",
    "@nakdfashion, milky, janedoe, 2022-10-20",
    "@nakdfashion, yanah, janedoe, 2022-10-20",
    "@theofficialsafira, BBBZVQQS, janedoe, 2022-10-20",
    "@hunkemoller, BBHKMKELL15, kellyhamelijnck, 2022-10-20",
    "@stronger, SIHAM20, janedoe, 2022-10-20",
    "@icaniwill, icwcw, janedoe, 2022-10-20",
    "@hunkemoller, BBHKMKF, janedoe, 2022-10-20",
    "@icaniwill, sgkor, janedoe, 2022-10-20",
    "@lyko, michellevsm20, janedoe, 2022-10-20",
    "@veromoda, valeriebeckx20, janedoe, 2022-10-20",
    "@sheinofficial, 15nicoleee, janedoe, 2022-10-20",
    "@kidsbrandstore, LUCY-P20, janedoe, 2022-10-20",
    "@hunkemoller, BBHKMSUCI15, janedoe, 2022-10-20",
    "@desenio, X4R, janedoe, 2022-10-20",
    "@desenio, XO5, janedoe, 2022-10-20",
    "@bamboo.basics, BB-EVA-15!, janedoe, 2022-10-20",
    "@nakdfashion, remke, janedoe, 2022-10-20",
    "@emmasleepnl, MARIT, fitwithmarit, 2022-10-20",
    "@emmasleepnl, ROOS, moderosaofficial, 2022-10-20",
    "@hellofreshnl, SARAH75HELLO, sarahchronis, 2022-10-20",
    "@nakdfashion, kelly, kheeell, 2022-10-20",
    "@nakdfashion, XBBBZT, benthe.2803, 2022-10-20",
    "@chiquelle, DEMI20, deemmx._, 2022-10-20",
    "@burgaofficial, EFFIX10EURNL, effi.sxx, 2022-10-20",
    "@burgaofficial, MACYX10EURNL, macyymichelle, 2022-10-20",
    "@onceuponapp, MONIQUE25, moniquesmit_insta, 2022-10-20",
    "@womensbest, NENCIE20, nenciesway, 2022-10-20",

    "@nakdfashion, lauri, lauri.style, 2022-10-19",
    "@loavies, CASSNDRASXFALL20, cassndras, 2022-10-19",
    "@idealofsweden, BB3QOMDC, janedoe, 2022-10-19",
    "@bjornborg, LINDI20, lindivh, 2022-10-19",
    "@chiquelle, 20fleur, fleurdijkstra_, 2022-10-19",
    "@lyko, LUNAW20, lunaweerman, 2022-10-19",
    "@hellofreshnl, HELLOPASTEL75, thepastelsuitcase, 2022-10-19",
    "@mystoov, WilxStoov, wilvantien, 2022-10-19",

    "@loavies, ENRRS_XFALL20, janedoe, 2022-10-18",
    "@nakdfashion, lauramaria30, janedoe, 2022-10-18",
    "@nakdfashion, frederikke, janedoe, 2022-10-18",

    "@sheinofficial, fw3464, janedoe, 2022-10-18",
    "@asos, BIG50, janedoe, 2022-10-18",
    "@loavies, BBOFDADDYXFALL20, janedoe, 2022-10-18",
    "@chiquelle, donna20, donnadaizy, 2022-10-18",
    "@bjornborg, KAI20, janedoe, 2022-10-18",
    "@stronger, Ivarsson20, janedoe, 2022-10-18",
    "@veromoda, lisamabecker20, janedoe, 2022-10-18",
    "@bjornborg, TAUTS20, janedoe, 2022-10-18",
    "@nakdfashion, tricarico, janedoe, 2022-10-18",
    "@nakdfashion, comeback, janedoe, 2022-10-18",
    "@kidsbrandstore, EVA-B20, janedoe, 2022-10-18",
    "@theofficialsafira, BB22C, janedoe, 2022-10-18",
    "@leolive, CINDERELLI10OFF, janedoe, 2022-10-18",
    "@hunkemoller, BBHKMDY6, janedoe, 2022-10-18",
    "@theofficialsafira, BBVICAUTUMN, janedoe, 2022-10-18",
    "@sheinofficial, shm399, janedoe, 2022-10-18",
    "@chiquelle, sophie20, sophievangeetxo, 2022-10-18",
    "@stronger, Annapaola10, janedoe, 2022-10-18",
    "@icaniwill, flo25, janedoe, 2022-10-18",
    "@icaniwill, joakimy25, janedoe, 2022-10-18",
    "@lyko, 20esxhsan, janedoe, 2022-10-18",
    "@veromoda, beau20, janedoe, 2022-10-18",
    "@hunkemoller, BBHKMVG, janedoe, 2022-10-18",
    "@hunkemoller, BBHKMSOPHIEM, janedoe, 2022-10-18",
    "@desenio, XSTOKES, janedoe, 2022-10-18",
    "@desenio, XJ7USGF, janedoe, 2022-10-18",
    "@nakdfashion, henriettelubbe, janedoe, 2022-10-18",
    "@nakdfashion, lisap, lisaapijnacker, 2022-10-18",
    "@onceuponapp, debbie25, debbiedhillon, 2022-10-18",
    "@nakdfashion, felicialou, janedoe, 2022-10-18",
    "@chiquelle, KIMBERLY20, xkiimberly, 2022-10-18",
    "@carmen_nederland, Wendie15, wendievlaar, 2022-10-18",
    "@chiquelle, kindofb20, kind_of_b, 2022-10-18",

    "@nakdfashion, gxsia30, janedoe, 2022-10-16",
    "@loavies, 20xpaulienmullaertx, janedoe, 2022-10-16",
    "@sheinofficial, spws8, janedoe, 2022-10-16",
    "@asos, QUICK, janedoe, 2022-10-16",
    "@chiquelle, kelly20, kelly.van.rossum, 2022-10-16",
    "@nakdfashion, tamarax30, janedoe, 2022-10-16",
    "@hunkemoller, BBHKMVIKKIVV, janedoe, 2022-10-16",
    "@idealofsweden, BBTREE, janedoe, 2022-10-16",
    "@idealofsweden, BBYFXVD7, janedoe, 2022-10-16",
    "@veromoda, charlottewestlund20, janedoe, 2022-10-16",
    "@otensien.nl, GIRLSMOM10, janedoe, 2022-10-16",
    "@loavies, 20ELISETRICARICO, janedoe, 2022-10-16",
    "@loavies, chameebarkmanx.20, janedoe, 2022-10-16",
    "@theofficialsafira, BBS90, janedoe, 2022-10-16",
    "@myproteinnl, MANON36, manonkleijnx, 2022-10-16",
    "@theofficialsafira, BBUP, janedoe, 2022-10-16",
    "@byrokko, RABATT, janedoe, 2022-10-16",
    "@kidsbrandstore, WIETSKE20, wietskeijpma, 2022-10-16",
    "@chiquelle, sam20, samsmitts, 2022-10-16",
    "@stronger, SANDRA20, janedoe, 2022-10-16",
    "@icaniwill, FITNESSTHESS25, janedoe, 2022-10-16",
    "@icaniwill, 4m8o5, janedoe, 2022-10-16",
    "@sheinofficial, fw3305, janedoe, 2022-10-16",
    "@icaniwill, lisabr20, janedoe, 2022-10-16",
    "@desenio, XXXK, janedoe, 2022-10-16",
    "@desenio, XV8, janedoe, 2022-10-16",
    "@womensbest, KLEIJN20, manonkleijnx, 2022-10-16",
    "@mycustomized, MYNISA, nisavanbaelen, 2022-10-16",
    "@knowfashionstyle, Lisa13, lisajkoster, 2022-10-16",

    "@loavies, ODEMODE_.20, janedoe, 2022-10-14",
    "@nakdfashion, brittip, janedoe, 2022-10-14",
    "@sheinofficial, fw1316, janedoe, 2022-10-14",
    "@idealofsweden, BBEZOF, janedoe, 2022-10-14",
    "@gutsgusto, MARI15, janedoe, 2022-10-14",
    "@chiquelle, larissa20, larissaelene, 2022-10-14",
    "@veromoda, Zarasund20, janedoe, 2022-10-14",
    "@loavies, SANNEGHISLAINE.20, sanneghislaine, 2022-10-14",
    "@hunkemoller, BBHKMPURPLE1, janedoe, 2022-10-14",
    "@vedder.vedder, MAXIME20, maximemeiland, 2022-10-14",
    "@loungeunderwear, JUULTJE10, juultjetieleman, 2022-10-14",
    "@loavies, 20XJENNYUTRI, janedoe, 2022-10-14",
    "@nakdfashion, jolien, janedoe, 2022-10-14",
    "@nakdfashion, autumnstyles, janedoe, 2022-10-14",
    "@armedangels, WILVANTIEN_15, wilvantien, 2022-10-14",
    "@bjornborg, TEELE20, janedoe, 2022-10-14",
    "@kidsbrandstore, LEWIS20, janedoe, 2022-10-14",
    "@theofficialsafira, BB2SARA0, janedoe, 2022-10-14",
    "@loavies, lottevanvonderen.20, lottevanvonderen, 2022-10-14",
    "@theofficialsafira, BB22D, janedoe, 2022-10-14",
    "@chiquelle, arrivals30, chiquelle, 2022-10-14",
    "@rihoas_official, paulien, paulienmullaertx, 2022-10-14",
    "@stronger, 20LILO20, janedoe, 2022-10-14",
    "@stronger, carla20, janedoe, 2022-10-14",
    "@veromoda, mirtevanderlinden20, janedoe, 2022-10-14",
    "@icaniwill, NATHALIEE21, janedoe, 2022-10-14",
    "@desenio, XD44, janedoe, 2022-10-14",
    "@icaniwill, paulial20, janedoe, 2022-10-14",
    "@sheinofficial, mariavibr, janedoe, 2022-10-14",
    "@hunkemoller, BBHKMOKTINA, tinkapell, 2022-10-14",
    "@desenio, XV2, janedoe, 2022-10-14",
    "@hellofreshnl, FRESHMASCHA75, maschaduijn, 2022-10-14",
    "@hellofreshnl, HELLOLINDSEY75, lindseybeljaars, 2022-10-14",
    "@nakdfashion, Robin, robinhenneke.jpeg, 2022-10-14",
    "@fashionbymzlanie, LINDSAY&STACEY10, staceeyyx, 2022-10-14",
    "@nakdfashion, staceyw, staceeyyx, 2022-10-14",

    "@myjewellery, Julia15, julia.kammerer, 2022-10-12",
    "@loavies, JENEHKNOOPP.20, janedoe, 2022-10-12",
    "@nakdfashion, xbbsor7, janedoe, 2022-10-12",
    "@gutsgusto, MYSTYLE15, janedoe, 2022-10-12",

    "@loavies, ginnyvandenengel.20, janedoe, 2022-10-12",
    "@loavies, YUNG.DEMI.20, yung.demi, 2022-10-12",
    "@hunkemoller, BBHKMTF5, tessveldkampx, 2022-10-12",
    "@myproteinnl, JESSICANL, jessicakuijpers, 2022-10-12",
    "@chiquelle, ROMY20, rrromy_, 2022-10-12",
    "@nakdfashion, lina, janedoe, 2022-10-12",
    "@stronger, lottie20, janedoe, 2022-10-12",
    "@theofficialsafira, BBL25BL5, janedoe, 2022-10-12",
    "@stronger, shan20, janedoe, 2022-10-12",
    "@loavies, myrthevanderluijt.20, myerthevanderluijt, 2022-10-12",
    "@lyko, karrie20, janedoe, 2022-10-12",
    "@armedangels, DAPHNEMH_15, daphne.m.h, 2022-10-12",
    "@kidsbrandstore, JELTE20, janedoe, 2022-10-12",
    "@icaniwill, jannik20, janedoe, 2022-10-12",
    "@icaniwill, kallberg20, janedoe, 2022-10-12",
    "@lyko, zeta20, janedoe, 2022-10-12",
    "@theofficialsafira, BBRABATTKODE, janedoe, 2022-10-12",
    "@hunkemoller, BBHKMISSYADAMO, janedoe, 2022-10-12",
    "@hunkemoller, BBHKMAUTUMNHEY, janedoe, 2022-10-12",
    "@desenio, XTF7, tessveldkampx, 2022-10-12",
    "@onceuponapp, robin25, thepastelsuitcase, 2022-10-12",
    "@bybiehl, 20%marta, martaswiggers, 2022-10-12",
    "@hellofreshnl, FRESHFLEUR75, fleurdijkstra_, 2022-10-12",
    "@lightinthebox, LSK, lisajkoster, 2022-10-12",
    "@chiquelle, LUCA20, lucaaa.xx, 2022-10-12",

    "@loavies, JULIACATHARINAX.20, juliacatharinax, 2022-10-11",
    "@nakdfashion, MARTINEMAUREEN, martinemaureen, 2022-10-11",
    "@idealofsweden, BBFREDE, janedoe, 2022-10-11",
    "@sheinofficial, FW733, michellemiddelman, 2022-10-11",
    "@chiquelle, 20HANNAH, hannahdb_, 2022-10-11",
    "@loavies, IRISEIGENHUIS.20, iriseigenhuis, 2022-10-11",
    "@veromoda, rosanneheslingax20, janedoe, 2022-10-11",
    "@nakdfashion, Cocochloe, cocochloe__, 2022-10-11",
    "@armedangels, PAULIENMULLAERTX_15, paulienmullaertx, 2022-10-11",
    "@myproteinnl, CHARLOTTEJ, charlottejanssen94, 2022-10-11",
    "@hunkemoller, BBHKMMASDA9, mascha.danique, 2022-10-11",
    "@desenio, XSUPERSALG, janedoe, 2022-10-11",
    "@sheinofficial, liafailw15, liafailwijnen, 2022-10-11",

    "@nakdfashion, bennigsen, janedoe, 2022-10-10",
    "@loavies, anthoniarochusxo20, janedoe, 2022-10-10",
    "@idealofsweden, BBSTARTFALL, chloefrancone, 2022-10-10",
    "@nakdfashion, xbb1t8v, janedoe, 2022-10-10",
    "@jotex, josviggoct22, janedoe, 2022-10-10",
    "@loavies, LISANNE.BLONK.20, lisanne.blonk, 2022-10-10",
    "@loavies, DANTHE20, danthescholtenx, 2022-10-10",
    "@nakdfashion, eliseh, janedoe, 2022-10-10",
    "@sheinofficial, ssa1180, janedoe, 2022-10-10",
    "@veromoda, demiteeuwissen20, demiteeuwissen, 2022-10-10",
    "@chiquelle, BENTHE20, benthe.2803, 2022-10-10",
    "@bjornborg, NTC20, janedoe, 2022-10-10",
    "@hunkemoller, BBHKM617, janedoe, 2022-10-10",
    "@stronger, elien20, janedoe, 2022-10-10",
    "@theofficialsafira, BBSAFIRA20G, janedoe, 2022-10-10",
    "@stronger, TRANINGSRESA20, janedoe, 2022-10-10",
    "@icaniwill, jasminmelina25, janedoe, 2022-10-10",
    "@lyko, styletrends20, janedoe, 2022-10-10",
    "@loavies, MEDINALETICA.20, medinaletica, 2022-10-10",
    "@icaniwill, kkxfi, janedoe, 2022-10-10",
    "@lyko, devilsdee20, janedoe, 2022-10-10",
    "@sheinofficial, fw1245, janedoe, 2022-10-10",
    "@hunkemoller, BBHKMELUISAISA, janedoe, 2022-10-10",
    "@desenio, XT4, janedoe, 2022-10-10",
    "@kidsbrandstore, LENIEMILIA20, janedoe, 2022-10-10",
    "@desenio, XV4, janedoe, 2022-10-10",
    "@carmen_nederland, Sofie15, sofiegraafland, 2022-10-10",
    "@emmasleepnl, STIJN, stijn_fransen, 2022-10-10",
    "@danielwellington, DWBBZ84, rentishehu, 2022-10-10",
    "@yvettesports_official, Floor10, countlessshades, 2022-10-10",

    "@nakdfashion, wornbymolly, wornbymolly, 2022-10-09",
    "@nakdfashion, ninanna, ninanna_, 2022-10-09",
    "@loavies, 20OIHANEEGEA, oihane_egea, 2022-10-09",
    "@stronger, 20VICTORIA, janedoe, 2022-10-09",
    "@chiquelle, EVA20, eef_dgn, 2022-10-09",

    "@nakdfashion, lakatyfox, janedoe, 2022-10-08",
    "@loavies, 20XNAOMILIZUNDIA, naomilizundia, 2022-10-08",
    "@nakdfashion, TOREMO, janedoe, 2022-10-08",
    "@bjornborg, ANET20, janedoe, 2022-10-08",
    "@lyko, xlisanneb20, lisanne.blonk, 2022-10-08",
    "@loavies, 20-LAURAXDAMS, lauraxdams, 2022-10-08",
    "@chiquelle, DYONNE20, xdyonnex, 2022-10-08",
    "@wearglas, BRIDGET20, bridgetmaasland, 2022-10-08",
    "@theofficialsafira, BBSAFIRA20T, janedoe, 2022-10-08",
    "@kidsbrandstore, ROMEE-S20, romeescholtenx, 2022-10-08",
    "@lyko, reneenatassja20, reneenatassja, 2022-10-08",
    "@mystoov, SaskiaXStoov, saskiaweerstand, 2022-10-08",

    "@myjewellery, Shopping15, amelie_weissenberger, 2022-10-07",
    "@nakdfashion, demi, deminugteren, 2022-10-07",
    "@loavies, rmdnbs.20, rmdnbs, 2022-10-07",
    "@chiquelle, OFF35, chiquelle, 2022-10-07",
    "@tessvfashion, daphne10, janedoe, 2022-10-07",
    "@loavies, KHEEELL.20, kheeell, 2022-10-07",
    "@veromoda, julieaamand20, janedoe, 2022-10-07",
    "@bjornborg, MEISI20, janedoe, 2022-10-07",
    "@wearglas, EMMA20, janedoe, 2022-10-07",
    "@hunkemoller, BBHKMRO, janedoe, 2022-10-07",
    "@sheinofficial, fw3445, janedoe, 2022-10-07",
    "@loavies, INSPIREDBYYAM.20, inspiredbyyam, 2022-10-07",
    "@kidsbrandstore, Siennalois20, janedoe, 2022-10-07",
    "@theofficialsafira, JANNIKE20, janedoe, 2022-10-07",
    "@stronger, WENDYS20, janedoe, 2022-10-07",
    "@icaniwill, mariaeg20, janedoe, 2022-10-07",
    "@icaniwill, michelletp20, janedoe, 2022-10-07",
    "@theofficialsafira, BBAUTUMN20, janedoe, 2022-10-07",
    "@stronger, MEVISSEN20, janedoe, 2022-10-07",
    "@divain_nl, BBFT6, tessveldkampx, 2022-10-07",
    "@hunkemoller, BBHKMACD, janedoe, 2022-10-07",
    "@desenio, XBCOHLH, janedoe, 2022-10-07",
    "@desenio, XV9, janedoe, 2022-10-07",
    "@puckababy, KELLY10, kellycaresse, 2022-10-07",
    "@bonprix, SARAH, sarahrebeccanl, 2022-10-07",
    "@otensien.nl, Debbie10, debbiedhillon, 2022-10-07",
    "@superrichkids, naomi10, naomivaneeren_, 2022-10-07",
    "@sheinofficial, rosalia915, rosalia_guzman_9, 2022-10-07",
    "@geurwolkje, ROCHELLE15, rochellehondijk, 2022-10-07",

    "@nakdfashion, ANNE, anneepedersen, 2022-10-06",
    "@danielwellington, DWBBSS5, rentishehu, 2022-10-06",

    "@editedofficial, OCT20R, moderosaofficial, 2022-10-05",
    "@loavies, XSAM_XM.20, xsam_xm, 2022-10-05",
    "@chiquelle, PAULIEN20, paulienmullaertx, 2022-10-05",
    "@gutsgusto, TESSA20, janedoe, 2022-10-05",
    "@bjornborg, JENNIE20, janedoe, 2022-10-05",
    "@loavies, TESSVELDKAMP.20, tessveldkampx, 2022-10-05",
    "@hunkemoller, BBHKMKESHIA, janedoe, 2022-10-05",
    "@burgaofficial, STACEYAENLINSAYX15, staceeyyx, 2022-10-05",
    "@loavies, WENDY20, wendyvsoest, 2022-10-05",
    "@stronger, KRACHT20, janedoe, 2022-10-05",
    "@sheinofficial, fw2470, janedoe, 2022-10-05",
    "@loavies, 20NOSINMIANA, nosinmiana, 2022-10-05",

    "@desenio, XMV5, tessveldkampx, 2022-10-05",
    "@kidsbrandstore, MATILDA-J20, janedoe, 2022-10-05",
    "@theofficialsafira, BBG9, janedoe, 2022-10-05",
    "@theofficialsafira, BBD8, janedoe, 2022-10-05",
    "@stronger, curlykiet20, janedoe, 2022-10-05",
    "@icaniwill, alexia25, janedoe, 2022-10-05",
    "@icaniwill, HULK20, janedoe, 2022-10-05",
    "@sheinofficial, fw3351, janedoe, 2022-10-05",
    "@hunkemoller, BBHKMDEGROOT, janedoe, 2022-10-05",
    "@ilmaha.handmade, SOFIE15, sofiegraafland, 2022-10-05",
    "@prozis, JES10, jessicakuijpers, 2022-10-05",
    "@bybiehl, 20%jaimy, jaimy.blom, 2022-10-05",
    "@famme, wendievlaar25, wendievlaar, 2022-10-05",
    "@geurwolkje, KIMBERLY15, xkiimberly, 2022-10-05",
    "@leolive, Anthonisevelien10, anthonisevelien, 2022-10-05",

    "@loavies, STULINAXO20, janedoe, 2022-10-03",
    "@famousstore, isa10, janedoe, 2022-10-03",
    "@gutsgusto, ISABELLE20, janedoe, 2022-10-03",
    "@sheinofficial, fw3040, janedoe, 2022-10-03",
    "@stronger, ANINAS20, janedoe, 2022-10-03",
    "@hunkemoller, BBHKMPU, janedoe, 2022-10-03",
    "@loavies, 20XCCLAUDIAGLEZ, janedoe, 2022-10-03",
    "@icaniwill, vikjulie25, janedoe, 2022-10-03",

    "@desenio, X55B, janedoe, 2022-10-03",
    "@keunehaircosmetics, EEF_DGN15, eef_dgn, 2022-10-03",
    "@kidsbrandstore, MARLON-M20, janedoe, 2022-10-03",
    "@theofficialsafira, BBSARASEP, janedoe, 2022-10-03",
    "@lyko, LSCHREPPERS20, janedoe, 2022-10-03",
    "@gutsgusto, MICHELLEFLEUR20, michellefleur, 2022-10-03",
    "@sheinofficial, fw3161, janedoe, 2022-10-03",
    "@hunkemoller, BBHKMSAIRA, janedoe, 2022-10-03",
    "@loavies, AUKJEBERGMAN.20, aukjebergman, 2022-10-03",
    "@photowall_sweden, joyce20, joycebloemendaal, 2022-10-03",

    "@loavies, 20XLIFEASPIRES, lifeaspires, 2022-10-02",
    "@famousstore, Jill10, janedoe, 2022-10-02",
    "@nakdfashion, COMEBACK, dunno, 2022-10-02",
    "@chiquelle, NEWFLASH, janedoe, 2022-10-02",
    "@gutsgusto, CLAUDIA15, janedoe, 2022-10-02",
    "@sheinofficial, fw2706, jandoe, 2022-10-02",
    "@loavies, JOSE_DUINKERKEN.20, jose_duinkerken, 2022-10-02",
    "@loavies, 20XMORGANE.MOOD, morgane.mood, 2022-10-02",
    "@bjornborg, NIKKI20, nonstopnikki.nl, 2022-10-02",
    "@kidsbrandstore, QUAN20, janedoe, 2022-10-02",
    "@theofficialsafira, BBGVFTGD, janedoe, 2022-10-02",
    "@kidsbrandstore, danielle-v20, janedoe, 2022-10-02",
    "@stronger, donna20, janedoe, 2022-10-02",
    "@theofficialsafira, BBUR, janedoe, 2022-10-02",
    "@hunkemoller, BBHKMRW115, jandoe, 2022-10-02",
    "@desenio, xq2, janedoe, 2022-10-02",
    "@stronger, zabrina10, janedoe, 2022-10-02",
    "@icaniwill, kukka20, jandoe, 2022-10-02",
    "@icaniwill, elila25, jandoe, 2022-10-02",
    "@sheinofficial, hw605, jandoe, 2022-10-02",
    "@hunkemoller, BBHKMZHUOCT, janedoe, 2022-10-02",
    "@desenio, xv6, janedoe, 2022-10-02",
    "@mimamsterdam, MAASFLEUR20, fleurmaas_, 2022-10-02",
    "@farfetch, ANNAPARIS, annanooshin, 2022-10-02",

    "@loavies, HANNAHDB_.20, hannahdb_, 2022-10-01",
    "@loavies, 20XCLARAMATSE, claramatse, 2022-10-01",
    "@stronger, SHULA20, shularoose, 2022-10-01",
    "@burgaofficial, LINDINLX10, lindivh, 2022-10-01",
    "@thehappysoaps, SENTA20, sentajanssen, 2022-10-01",
    "@lyko, byrachel20, by.rachellx, 2022-10-01",
    "@byrokko, BYROKKOMASDA2, mascha.danique, 2022-10-01",
    "@hellofreshnl, HELLONADINE75, naadines, 2022-10-01",

    "@loavies, LUCAAA.XX.20, lucaaa.xx, 2022-09-30",
    "@nakdfashion, poli20, melissa_poli, 2022-09-30",
    "@chiquelle, LISANNE20, lisanne.blonk, 2022-09-30",
    "@gutsgusto, ANGELAJAKAJ20, janedoe, 2022-09-30",
    "@loavies, GIULIAROSABO.20, giuliarosabo, 2022-09-30",
    "@loavies, VALERYRIEMENS.20, janedoe, 2022-09-30",
    "@hunkemoller, BBHKMHF, janedoe, 2022-09-30",
    "@kaptenandson, ABBEY5, abbeyhoes, 2022-09-30",
    "@theofficialsafira, BBS7, janedoe, 2022-09-30",
    "@gutsgusto, KIRA15, janedoe, 2022-09-30",
    "@stronger, BYTESS20, janedoe, 2022-09-30",
    "@icaniwill, vanessare20, janedoe, 2022-09-30",
    "@sheinofficial, fw289, janedoe, 2022-09-30",
    "@loavies, DAGMARTACKXO20, janedoe, 2022-09-30",
    "@kidsbrandstore, LAILA-Z20, janedoe, 2022-09-30",
    "@theofficialsafira, BB0M3T35, janedoe, 2022-09-30",
    "@chiquelle, julia20, juliaverbij, 2022-09-30",
    "@icaniwill, jzonathan20, janedoe, 2022-09-30",
    "@sheinofficial, fw1671, janedoe, 2022-09-30",
    "@hunkemoller, BBHKMMLB0F1, janedoe, 2022-09-30",
    "@desenio, XB9, janedoe, 2022-09-30",
    "@desenio, XF6, tessveldkampx, 2022-09-30",

    "@nakdfashion, remke20, remke_4l, 2022-09-29",
    "@loavies, Cocochloe__.20, cocochloe__, 2022-09-29",
    "@stronger, DIESNA20, diesnaloomans, 2022-09-29",
    "@azukanl, FALL20, azukanl, 2022-09-29",
    "@bjornborg, Michelle20, michelle_bollen, 2022-09-29",
    "@luxuryforprincess, DAMIET, damiet, 2022-09-29",
    "@hellofreshnl, HELLOKATJA75, katjaschuurman, 2022-09-29",
    "@lyko, xsam20, xsam_xm, 2022-09-29",
    "@lyko, michelletl20, michelleterlinden, 2022-09-29",
    "@divain_nl, BBVANDENHOEK, rebeccavandenhoek, 2022-09-29",
    "@hunkemoller, BBHKMSUNSEA, martaswiggers, 2022-09-29",
    "@leolive, DEMI10OFF, _demivanandel, 2022-09-29",
    "@vedder.vedder, BIBI20, bibibreijman, 2022-09-29",

    "@nakdfashion, lottev20, lottevanvonderen, 2022-09-28",
    "@loavies, 20XMIRISLOVE, miriss.love, 2022-09-28",
    "@loavies, 20CRISTYCV, cristycv, 2022-09-28",
    "@gutsgusto, daisyoppelaar20, daisydoppelaar, 2022-09-28",
    "@chiquelle, marel20, marelhaanepen, 2022-09-28",
    "@stronger, vonderen20, lottevanvonderen, 2022-09-28",
    "@nakdfashion, filledusudx20, filledusudxx, 2022-09-28",
    "@nakdfashion, lauraaaknx20, lauraaakvdv, 2022-09-28",
    "@sheinofficial, fw1441, victoria_wal, 2022-09-28",
    "@farfetch, NOOSHINFF10, annanooshin, 2022-09-28",
    "@hunkemoller, BBHKMFALLTP, brendannm, 2022-09-28",
    "@posterstore, PSDIANA21, dianaper_, 2022-09-28",
    "@byrokko, DIANA36, dianaper_, 2022-09-28",
    "@nakdfashion, lonajkx20, lonajk22, 2022-09-28",
    "@icaniwill, SAETRE25, saetrestr, 2022-09-28",
    "@stronger, 20GYM, gymnast39, 2022-09-28",
    "@farfetch, FFMODEROSA, moderosaofficial, 2022-09-28",
    "@lyko, liyasfamily20, liyasfamilyxx, 2022-09-28",
    "@icaniwill, EMELIEN20, emely99, 2022-09-28",
    "@danielwellington, DWBBDIANAPER2, dianaper_, 2022-09-28",
    "@keunehaircosmetics, XSAM_XM15, xsam_xm, 2022-09-28",
    "@kidsbrandstore, RICK-VA20, rickvveen30, 2022-09-28",
    "@theofficialsafira, BBSAA, saavivi, 2022-09-28",
    "@theofficialsafira, BBMARIAGELK1, mariagelkiy, 2022-09-28",
    "@gutsgusto, kailey20, kailybloomx, 2022-09-28",
    "@lyko, BRITT20, brittdev, 2022-09-28",
    "@sheinofficial, fw3107, thex889, 2022-09-28",
    "@hunkemoller, BBHKMSUNSEA, joycejoy85, 2022-09-28",
    "@desenio, XV5, biribi_xx, 2022-09-28",
    "@desenio, XL66, steef_40, 2022-09-28",
    "@naifcare, naiflovelauraP, lauraponticorvo, 2022-09-28",
    "@nakdfashion, ANNARIKE20, annarikeroberte, 2022-09-28",
    "@idealofsweden, BBELLISE, elliselbersen, 2022-09-28",

    "@loavies, 20_YUNG.DEMI, yung.demi, 2022-09-27",
    "@nakdfashion, Zoey20, zoey_looij, 2022-09-27",
    "@hunkemoller, BBHKMMASDA7, mascha.danique, 2022-09-27",
    "@nakdfashion, 20floor, countlessshades, 2022-09-27",
    "@hunkemoller, BBHKMFALLTP, tinkapell, 2022-09-27",
    "@farfetch, FFISAYA, elaisaya, 2022-09-27",
    "@craftsportswear, MARIT25, fitwithmarit, 2022-09-27",
    "@remington (bol.com), Bo15, bowilkes, 2022-09-27",
    "@uwantisell, WENDIEXX, wendievlaar, 2022-09-27",
    "@ginatricot, DJUNA20, djunabdatthijn, 2022-09-27",
    "@veromoda, kelly15, kheeell, 2022-09-27",

    "@nakdfashion, KATIEPENNY20, katiepenny, 2022-09-26",
    "@loavies, FLEURDIJKSTRA_.20, fleurdijkstra_, 2022-09-26",
    "@veromoda, rochellehondijk15, rochellehondijk, 2022-09-26",
    "@loavies, MARLIE_XX.20, marlie_xx, 2022-09-26",
    "@nakdfashion, MARGARIDA20, margarigues, 2022-09-26",
    "@chiquelle, EVA20, eef_dgn, 2022-09-26",
    "@gutsgusto, WILVANTIEN20, wilvantien, 2022-09-26",
    "@idealofsweden, Manon95, manonrozema, 2022-09-26",
    "@loavies, lottevanvonderen.20, lottevanvonderen, 2022-09-26",
    "@idealofsweden, 15countless, countlessshades, 2022-09-26",
    "@hellofreshnl, CHEFRIANNE, rianne.meijer, 2022-09-26",
    "@danielwellington, DWBBS2, rentishehu, 2022-09-26",
    "@twistshakebaby, 20dianegroenhof, dianegroenhof, 2022-09-26",

    "@loavies, MAIKE20, maikebeunk, 2022-09-25",
    "@nakdfashion, brownandrose20, brownandrose, 2022-09-25",
    "@gutsgusto, DEBBIEDHILLON20, debbiedhillon, 2022-09-25",
    "@veromoda, Melanievandijk15, xmelanievandijk, 2022-09-25",
    "@sheinofficial, fw766, sara_park, 2022-09-25",
    "@leolive, CINDERELLI10, __cinderelli, 2022-09-25",
    "@loavies, mariska.van.esxo20, mariska.van.es, 2022-09-25",
    "@loavies, IRISEIGENHUIS.20, iriseigenhuis, 2022-09-25",
    "@nakdfashion, myrthek20, myrthek, 2022-09-25",
    "@byrokko, diana36, diana_per, 2022-09-25",
    "@nakdfashion, tuesday20, tuesdaysomers, 2022-09-25",
    "@theofficialsafira, BB9SARA, sara_kni, 2022-09-25",
    "@idealofsweden, bb989, dunno, 2022-09-25",
    "@hellofreshnl, FRESHBRITT75, brittwijnne, 2022-09-25",
    "@stronger, 10sen, sensen_x, 2022-09-25",
    "@geurwolkje, SENTA15, sentajanssen, 2022-09-25",
    "@stronger, abicollins10, abicollins, 2022-09-25",
    "@loavies, 20XCARMENTERESA, carmenteresa, 2022-09-25",
    "@icaniwill, AILEENB25, aileen_inst, 2022-09-25",
    "@icaniwill, ALBA20, alba.p, 2022-09-25",
    "@kidsbrandstore, LEONPHARELLE20, leonpharr, 2022-09-25",
    "@kidsbrandstore, LYNN-SC20, lynndi_x, 2022-09-25",
    "@theofficialsafira, BBXUX2T1, dunno, 2022-09-25",
    "@gutsgusto, daniellederidder20, daniellederidder, 2022-09-25",
    "@veromoda, charlie15, charlievangorkumm, 2022-09-25",
    "@veromoda, Sophiemaria15, sophiemaria, 2022-09-25",
    "@sheinofficial, hw550, dunno, 2022-09-25",
    "@hunkemoller, BBHKMJARA2022, jaraboss, 2022-09-25",
    "@hunkemoller, BBHKMWZJC60, dunno, 2022-09-25",
    "@desenio, XMICHEL20, michelleterlinden, 2022-09-25",
    "@desenio, x5566, stella55, 2022-09-25",
    "@idealofsweden, bb36, claire_prin, 2022-09-25",
    "@twistshakebaby, 20familiehummel, familiehummel, 2022-09-25",
    "@hellofreshnl, HELLOPASTEL75, thepastelsuitcase, 2022-09-25",

    "@nakdfashion, angeladirven20, angelllllllllllllllll, 2022-09-23",
    "@loavies, ITSJUSTTIX.20, itsjusttix, 2022-09-23",
    "@chiquelle, larissa20, larissaselene, 2022-09-23",
    "@nakdfashion, 20xbbkr2, monimarin_, 2022-09-23",
    "@nakdfashion, maude20, maudelesscher, 2022-09-23",
    "@superdry, SDRYKO, giuliarosabo, 2022-09-23",
    "@sheinofficial, FW673, ilmondodiluli, 2022-09-23",
    "@idealofsweden, BBFG6, tessveldkampx, 2022-09-23",
    "@loavies, NONSTOPNIKKI.NL.20, nonstopnikki.nl, 2022-09-23",
    "@loavies, AMBERDHAAN.20, amberdhaan, 2022-09-23",
    "@loavies, fleur20, fleurnijbacker, 2022-09-23",
    "@hunkemoller, BBHKMANNAPINK, dunno, 2022-09-23",
    "@chiquelle, LUCA20, lucaaa.xx, 2022-09-23",
    "@veromoda, lauriendeprez15, lauriendeprez, 2022-09-23",
    "@desenio, XFT7, tessveldkampx, 2022-09-23",
    "@stronger, ELVIRALUNA20, elviraluna, 2022-09-23",
    "@icaniwill, SARIANNAS20, sariannas, 2022-09-23",
    "@icaniwill, OONAK20, o_onak, 2022-09-23",
    "@stronger(zwart), BLCK25, renirasihase, 2022-09-23",
    "@kidsbrandstore, MIYA-LARA20, miyalara, 2022-09-23",
    "@theofficialsafira, BB3CJI2L, emily_tree, 2022-09-23",
    "@theofficialsafira, BBXUX2T1, dunno, 2022-09-23",
    "@veromoda, yannaifaye15, yannaifaye, 2022-09-23",
    "@sheinofficial, SXA411, sylver_mary, 2022-09-23",
    "@hunkemoller, BBHKMUV, muvie_25, 2022-09-23",
    "@desenio, XXDIANE, dianegroenhof, 2022-09-23",
    "@geurwolkje, SABRINA15, sabrinaputrix, 2022-09-23",
    "@womensbest, kleijn20, manonkleijnx, 2022-09-23",
    "@idealofsweden, BBDARIAX, daschabeu, 2022-09-23",
    "@hellofreshnl, HELLOROBIN, robinhenneke.jpeg, 2022-09-23",

    "@nakdfashion, geyshasx20, geyshas, 2022-09-22",
    "@loavies, LISANNE.BLONK.20, lisanne.blonk, 2022-09-22",
    "@loavies, DAPHNEVANBUERINK.20, daphnevanbuerink, 2022-09-22",
    "@famousstore, jasmijn10, jasmijnmarcus, 2022-09-22",
    "@womensbest, NENCIE20, nenciesway, 2022-09-22",
    "@emmasleepnl, SARAHREBECCA, sarahrebeccanl, 2022-09-22",

    "@nakdfashion, DaphneS20, daphnesonneveld, 2022-09-21",
    "@myjewellery, JOTTI15, jottiverbruggen, 2022-09-21",
    "@chiquelle, noa20, noareijnen, 2022-09-21",
    "@loavies, LAURAHORDIJK__20, laurahordijk_, 2022-09-21",
    "@veromoda, WILLEMIE15, willemie_q, 2022-09-21",
    "@gutsgusto, IAMTHEKNEES20, iamtheknees, 2022-09-21",
    "@nakdfashion, 20XBBMBH, mayarondou_, 2022-09-21",
    "@sheinofficial, liafailw15, liafailwijnen, 2022-09-21",
    "@nakdfashion, 20XBBSYI, juliavkatwijk, 2022-09-21",
    "@theofficialsafira, bbalexiaxv1x, alexia_90, 2022-09-21",
    "@chiquelle, julia20, juliaverbij, 2022-09-21",
    "@gutsgusto, michellebollen20, michelle_bollen, 2022-09-21",
    "@stronger, VERONIQUE20, veronique_vb, 2022-09-21",
    "@icaniwill, PHIA20, phiaphi, 2022-09-21",
    "@icaniwill, ROOSA25, roos_rose, 2022-09-21",
    "@stronger, 20NINA20, ninax_x, 2022-09-21",
    "@stronger, ARIANA20, arianaabedini, 2022-09-21",
    "@veromoda, JOELLEKROES15, joellekroes_, 2022-09-21",
    "@hunkemoller, BBHKME30WOC, mandyvdstee, 2022-09-21",
    "@desenio, XXN3DSX, dunno, 2022-09-21",
    "@desenio, XS3, aaf_mb, 2022-09-21",
    "@idealofsweden, BBKK2, dunno, 2022-09-21",
    "@kidsbrandstore, leonpharelle20, leonpharelle, 2022-09-21",
    "@idealofsweden, BBIDEAL7, clauda_b, 2022-09-21",
    "@idealofsweden, VAU15, vua_fash, 2022-09-21",
    "@bjornborg, WILKES20, bowilkes, 2022-09-21",
    "@cocunat, ROSALIA_GUZMAN_9, rosalia_guzman_9, 2022-09-21",
    "@farfetch, DILAN10FF, dilansabah, 2022-09-21",
    "@nakdfashion, 20anna, a_deruijterx, 2022-09-21",
    "@danielwellington, DWBBZ4, rentishehu, 2022-09-21",
    "@bjornborg, LINDSEY20, lindseybeljaars, 2022-09-21",
    "@gymsupply, BRITT20, brittmink_, 2022-09-21",
    "@holzkernwatches, paulien15, paulienmullaertx, 2022-09-21",
    "@stayokayhostels, SASKIA, saskiaweerstand, 2022-09-21",
    "@burgaofficial, ROCHELLEX10, rochellehondijk, 2022-09-21",
    "@nakdfashion, femkezoe20, femkezoe, 2022-09-21",
    "@byzindzi, Demi15, deminugteren, 2022-09-21",
  ];
}
