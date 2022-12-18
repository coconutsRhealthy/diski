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

  public static getDiscountPercentageFromBaseInputLine(baseInputLine) {
    var secondIndexOfComma = this.getPosition(baseInputLine, ", ", 2);
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var discountCode = baseInputLine.substring(secondIndexOfComma + 2, thirdIndexOfComma);
    return discountCode;
  }

  public static getInfluencerFromBaseInputLine(baseInputLine) {
    var thirdIndexOfComma = this.getPosition(baseInputLine, ", ", 3);
    var fourthIndexOfComma = this.getPosition(baseInputLine, ", ", 4);
    var influencer = baseInputLine.substring(thirdIndexOfComma + 2, fourthIndexOfComma);
    return influencer;
  }

  public static getDateFromBaseInputLine(baseInputLine) {
    var fourthIndexOfComma = this.getPosition(baseInputLine, ", ", 4);
    var date = baseInputLine.substring(fourthIndexOfComma + 2, baseInputLine.length);
    return date;
  }

  public static getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  static dataArray = [
    "@nakdfashion, lolagllt, 15, lolagllt_, 12-18",
    "@loavies, inspiredbyyamxx20, 20, inspiredbyyam, 12-18",
    "@hunkemoller, BBHKMCUTE, 15, wgk, 12-18",
    "@myjewellery, JOTTI-15, 15, jottiverbruggen, 12-18",
    "@meetmethere.nl, HEYYOU10, 10, meetmethere, 12-18",
    "@idealofsweden, BBPREXMAS, 15, wgk, 12-18",
    "@shein, SGF4249, 15, janedoe, 12-18",
    "@posterstore, PSFROST, 10, wgk, 12-18",
    "@byrokko, BEAU, 20, wgk, 12-18",
    "@desenio, XSTP, 10, wgk, 12-18",
    "@loavies, NATHALIEEJWXX20, 20, nathalieejw, 12-18",
    "@myproteinnl, JOYCEB, 25, janedoe, 12-18",
    "@kidsbrandstore, ANOEK20, 20, janedoe, 12-18",
    "@safira, BB6EY7KL, 20, janedoe, 12-18",
    "@chiquelle, HOLIDAY40, 40, chiquelle, 12-18",
    "@gutsgusto, NINA15, 15, high__5__, 12-18",
    "@stronger, 20KATHA20, 20, janedoe, 12-18",
    "@stronger, Jay20, 20, janedoe, 12-18",
    "@icaniwill, ROMEO20, 20, janedoe, 12-18",
    "@shein, jonica15, 15, janedoe, 12-18",
    "@nakdfashion, jenny, 15, janedoe, 12-18",
    "@collegestylenl, ROBINCS15, 15, thepastelsuitcase, 12-18",
    "@nakdfashion, mariska, 15, mariska.van.es, 12-18",
    "@mvmt, lisaapijnacker15, 15, lisaapijnacker, 12-18",
    "@bangerhead, Nikki10, 10, xnikkiverhoef, 12-18",
    "@fksports.nl, WENDIE10, 10, wendievlaar, 12-18",
    "@loavies, BENTHEXX20, 20, benthe.2803, 12-18",
    "@loavies, AICHA-20OFF, 20, aichaverheye, 12-18",
    "@loavies, MARLIEXX20, 20, marlie_xx, 12-18",

    "@nakdfashion, chantalb, 15, chantbaltes, 12-16",
    "@loavies, LENKA-20OFF, 20, allaboutlenks, 12-16",
    "@myjewellery, Verena-15, 15, verena_ahmann, 12-16",
    "@hunkemoller, BBHKMSPARK, 15, wgk, 12-16",
    "@idealofsweden, BBDAS, 15, wgk, 12-16",
    "@popsockets, BBSANTA, 15, wgk, 12-16",
    "@posterstore, PSDEC, 10, wgk, 12-16",
    "@desenio, XDEAR, 10, wgk, 12-16",
    "@jotex, 423499, 20, rabattkodersverige, 12-16",
    "@stronger, 20GYM, 20, gym_boutique, 12-16",
    "@stronger, FRANZI20, 20, franzi_steinwender, 12-16",
    "@chiquelle, CHANTAL25, 25, cwrekenhorst, 12-16",
    "@lyko, sarahlife20, 20, sarah_about_life, 12-16",
    "@icaniwill, ENPUUSTINEN20, 20, ellinoorapuustinen, 12-16",
    "@veromoda, KELLYVDENBROEK20, 20, kellyvdenbroek, 12-16",
    "@veromoda, ANGELINAERS20, 20, angelina.ers, 12-16",
    "@nakdfashion, julievd, 15, julievandooren, 12-16",
    "@safira, BBYYK, 20, itsxyaren, 12-16",
    "@gutsgusto, KIRA15, 15, kirabejaoui, 12-16",
    "@icaniwill, NSCHULZ20, 20, nadine_muscleup, 12-16",
    "@shein, Boxingtracy, 15, tracykissdotcom, 12-16",
    "@emmasleepnl, STIJN, 10, stijn_fransen, 12-16",
    "@plantb_nl, LOTTE15, 15, liefslotte, 12-16",
    "@kaptenandson, DECEMBER15, 15, maikebeunk, 12-16",
    "@kidsbrandstore, chamee20, 20, chameebarkmanx, 12-16",
    "@swarovski, WONDER15, 15, queenofjetlags, 12-16",
    "@loavies, chameebarkmanxxx20, 20, chameebarkmanx, 12-16",
    "@myproteinnl, LARISSA, 25, larissavanmeerten, 12-16",
    "@manfield_shoes, 15MICHELLE, 15, michelle_bollen, 12-16",
    "@loavies, dewipijnackerxx20, 20, dewipijnacker, 12-16",
    "@nakdfashion, hannahp, 15, hannah.peyrot, 12-16",
    "@nakdfashion, claire, 15, clairepronk, 12-16",
    "@dutchcosmetx, NAOMI10, 10, naomivaneeren_, 12-16",
    "@hellofreshnl, HELLONADINE75, €75, naadines, 12-16",
    "@leolive, BY.RACHELLXXO10, 10, by.rachellx, 12-16",
    "@luxuryforprincess, DAMIET, 15, damiet, 12-16",
    "@bybiehl, 30%marta, 30, martaswiggers, 12-16",
    "@bytessvs, HANNAH20, 20, hannahdb_, 12-16",
    "@ravi.giftboxes, LIAFAIL10, 10, liafailwijnen, 12-16",
    "@hellofreshnl, HELLOCHARLOTTE, €75, charlottejanssen94, 12-16",
    "@onlinestarregister, FEMKE10, 10, femkezoe, 12-16",

    "@nakdfashion, Henriettelubbe, 15, henriettelubbe, 12-14",
    "@myjewellery, MARIJE15, 15, marijezuurveld, 12-14",
    "@loavies, LUCAAAX20, 20, lucaaa.xx, 12-14",
    "@hunkemoller, BBHKMGRAB, 15, wgk, 12-14",
    "@posterstore, PSLOVELY, 10, wgk, 12-14",
    "@desenio, XPRE, 10, wgk, 12-14",
    "@shein, SGF4839, 15, iamanjuyadav, 12-14",
    "@myproteinnl, ROMY, 25, fitgurlromy, 12-14",
    "@bjornborg, INGER20, 20, ingerindubai, 12-14",
    "@veromoda, LIS20, 20, lis.poot, 12-14",
    "@bjornborg, JOLIEN20, 20, thatgirlwithherblog, 12-14",
    "@nakdfashion, poli, 15, melissa_poli, 12-14",
    "@nakdfashion, camille, 15, camille.mast, 12-14",
    "@kidsbrandstore, EVELIN-F20, 20, evelin_kidmodel, 12-14",
    "@safira, BB17OPYU, 20, mandyvdstee, 12-14",
    "@bylashbabe, MARIEKERIJK, 10, janedoe, 12-14",
    "@safira, BB3658C4, 20, thingsilovethemost26, 12-14",
    "@chiquelle, XMASRUSH, 30, chiquelle, 12-14",
    "@stronger, BEAU20, 20, beaugoudbeek, 12-14",
    "@stronger, CHIARA20, 20, chiaradrooij, 12-14",
    "@icaniwill, IDA20, 20, idajemina, 12-14",
    "@icaniwill, JEANETTS20, 20, pt_jeanett, 12-14",
    "@veromoda, JANNIEANOEK20, 20, janoekjissink, 12-14",
    "@shein, Valderramaj, 15, valentina_valderrama30, 12-14",
    "@ginatricot, annarike20, 20, annarikeroberte, 12-14",
    "@int.esncom, demi, 15, demivthuil, 12-14",
    "@nakdfashion, medina, 15, medinaletica, 12-14",
    "@nakdfashion, lisap, 15, lisaapijnacker, 12-14",
    "@moonycollections, daphne10, 10, daphnevanbuerink, 12-14",
    "@nakdfashion, floor, 15, countlessshades, 12-14",
    "@ukshopbyashley, SALEZUSJES15, 15, salezusjes, 12-14",
    "@badjasparadijs, kerst15, 15, jriienn_x, 12-14",
    "@snuggs, KELLYC, 15, kellycaresse, 12-14",
    "@essenzahome, WIL&TIEN20, 20, tienvanwil, 12-14",

    "@nakdfashion, berry, 15, washed_out_denim, 12-12",
    "@veromoda, HENNA20, 20, homebyhenna, 12-12",
    "@shein, SGF5768, 15, fierceyez, 12-12",
    "@bjornborg, MARGGAV20, 20, janedoe, 12-12",
    "@safira, BBSNOW, 20, eliane.vanes, 12-12",
    "@gutsgusto, Tinason15, 15, tinason__, 12-12",
    "@stronger, elien20, 20, elienvandenbrande, 12-12",
    "@icaniwill, Roosa20, 20, janedoe, 12-12",
    "@icaniwill, EMMARAVN20, 20, janedoe, 12-12",
    "@lyko, romyxlyko20, 20, janedoe, 12-12",
    "@veromoda, MEJAENGDAHL20, 20, mejaengdahlpetersson, 12-12",
    "@shein, SGF4313, 15, mysashaofficial, 12-12",
    "@nakdfashion, Annajo, 15, annabjorkjohansson, 12-12",
    "@nakdfashion, chamee, 15, chameebarkmanx, 12-12",
    "@kidsbrandstore, LYNETTE20, 20, lynette.trompert, 12-12",
    "@hairswipe, Zoe10, 10, zoegijzen_, 12-12",
    "@maxicosi_eu, SARAHREBECCA10, 10, sarahrebeccanl, 12-12",
    "@fotocadeau.nl, JORIEN70, 70, jriienn_x, 12-12",
    "@gutsgusto, MICHELLEFLEUR15, 15, michellefleur, 12-12",
    "@nakdfashion, ROBIN, 15, robinhenneke.jpeg, 12-12",
    "@kaptenandson, DECEMBER15, 15, mtotheilou, 12-12",
    "@madladyse, MELANIEVD, 15, xmelanievandijk, 12-12",
    "@edikted, FLEUR10, 10, fleurdijkstra_, 12-12",
    "@10watchesnl, FLEUR10, 10, fleurmaas_, 12-12",
    "@myproteinnl, CHARLOTTEJ, 25, charlottejanssen94, 12-12",

    "@myjewellery, NINA-20, 20, ninawarink, 12-11",
    "@chiquelle, LISANNE25, 25, lisanne.blonk, 12-11",
    "@loavies, JUULTJE20, 20, juultjetieleman, 12-11",
    "@nakdfashion, Rachael, 15, rachaela_, 12-11",
    "@shein, liafailw15, 15, liafailwijnen, 12-11",
    "@hunkemoller, BBHKMDROP, 15, wgk, 12-11",
    "@desenio, XBRRT, 10, wgk, 12-11",
    "@popsockets, BBCHICK, 15, wgk, 12-11",
    "@posterstore, PSPRY, 10, wgk, 12-11",
    "@myproteinnl, JANINE, 25, janiine.fit, 12-11",
    "@kidsbrandstore, JOLIE-V20, 20, jolieteddy10, 12-11",
    "@safira, BBOPHZPK, 5, carolinetmm__, 12-11",
    "@safira, BBADVENTDEAL, 5, zorana.dkmns, 12-11",
    "@icaniwill, DIELISA20, 20, _dielisa25, 12-11",
    "@icaniwill, JOSEFINM20, 20, jossefinast, 12-11",
    "@veromoda, LARAVANBOM20, 20, laravanbom, 12-11",
    "@nakdfashion, DaphneP, 15, peetersdaphne, 12-11",
    "@nakdfashion, Ketsia, 15, kekedesaffaires, 12-11",
    "@shein, sgf4211, 15, michellemiddelman, 12-11",
    "@topochicohs, TOPOCHICO10, 10, macyymichelle, 12-11",
    "@voltairesneakers, LOTH10, €10, suuslothmann, 12-11",
    "@greenchefnl, CHEFTESKE, 20, teskedeschepper, 12-11",
    "@chiquelle, EVA25, 25, eef_dgn, 12-11",
    "@kruidvat(foto), Debbie30, 30, debbiedhillon, 12-11",
    "@danielwellington, DWBBZ35, 15, rentishehu, 12-11",
    "@womensbest, NENCIE20, 20, nenciesway, 12-11",
    "@nakdfashion, hannahdb, 15, hannahdb_, 12-11",
    "@loavies, 20XXROCHELLE, 20, rochellehondijk, 12-11",
    "@bjornborg, WILKES20, 20, bowilkes, 12-11",

    "@myjewellery, marie15, 20, schmeets, 12-10",

    "@loavies, EMILIE-X20, 20, emilie.terloo, 12-09",
    "@hunkemoller, BBHKMFEEST, 15, wgk, 12-09",
    "@idealofsweden, BBORANJE, 15, wgk, 12-09",
    "@posterstore, PSGO, 10, wgk, 12-09",
    "@desenio, XGREAT, 10, wgk, 12-09",
    "@shein, SGF9103, 15, magda_lene_, 12-09",
    "@loavies, ZEYNEP-X20, 20, janedoe, 12-09",
    "@loavies, LUDIVINEFAVESX20, 20, janedoe, 12-09",
    "@loavies, KAE20, 20, kaesutherland, 12-09",
    "@shein, 5nana, 15, lemonde2nana_, 12-09",
    "@bylashbabe, DREAMLASH, 10, janedoe, 12-09",
    "@famousstore, YARA10, 10, yara.lambregtse, 12-09",
    "@kidsbrandstore, LUCY-P20, 20, _lucy_model, 12-09",
    "@safira, BBNONFBH, 20, mandyvdstee, 12-09",
    "@safira, BBSCHMUCK20, 20, liinasjourney, 12-09",
    "@chiquelle, ROMY25, 25, romyvandenbergh_, 12-09",
    "@gutsgusto, ITSCARO15, 15, itscaroo, 12-09",
    "@stronger, lottie20, 20, hshshdjjdjdjsjs, 12-09",
    "@icaniwill, Steffibf20, 20, steffi_bikiniathletin, 12-09",
    "@icaniwill, SANNAHAVELIN20, 20, sannahavelin, 12-09",
    "@icaniwill, KALLBERG20, 20, cath.kallberg, 12-09",
    "@veromoda, AMYM20, 20, amy_m._, 12-09",
    "@veromoda, LAYLAE20, 20, laylaeyers, 12-09",
    "@nakdfashion, tamara, 15, carrieslifestyle, 12-09",
    "@asos, WARMUP, 25, asos, 12-09",
    "@nakdfashion, IdaC, 15, idacelinemadsen, 12-09",
    "@greenchefnl, CHEFMASCHA, 20, beautygloss, 12-09",
    "@myproteinnl, danthe, 25, danthescholtenx, 12-09",
    "@smartphoto.nl, Robin20, 20, thepastelsuitcase, 12-09",
    "@nakdfashion, suus, 15, suuslothmann, 12-09",
    "@sonos, KIMK20, 20, kimkotter, 12-09",
    "@snuggs, MARIT15, 15, fitwithmarit, 12-09",
    "@cusboutique, ABBEY20, 20, abbeyhoes, 12-09",
    "@nakdfashion, anneloes, 15, asmolenaarr, 12-09",
    "@bjornborg, MICHELLE20, 20, michelle_bollen, 12-09",
    "@nakdfashion, lottev, 15, lottevanvonderen, 12-09",
    "@snurkamsterdam, DEBBIE15, 15, debbiedhillon, 12-09",
    "@zonnebrillencom, NIKKI, 15, nonstopnikki.nl, 12-09",
    "@mbnutrition_, WENDIE15, 15, wendievlaar, 12-09",
    "@leolive, anthonisevelienxo10, 10, anthonisevelien, 12-09",
    "@armedangels, WILVANTIEN15, 15, wilvantien, 12-09",
    "@jurkjescom, Hannahxjurkjes15, 15, hannahdb_, 12-09",
    "@hellofreshnl, HELLOMARLY75, €75, marlyvd, 12-09",
    "@edikted, sam10, 10, xsam_xm, 12-09",

    "@nakdfashion, ANNE, 15, anneepedersen, 12-06",
    "@loavies, 20XXAMBER, 20, wgk, 12-06",
    "@shein, SGF4360, 15, ayman_and_nada, 12-06",
    "@hunkemoller, BBHKMHOT, 15, wgk, 12-06",
    "@idealofsweden, BBPARTY, 15, wgk, 12-06",
    "@popsockets, BBFLY, 15, wgk, 12-06",
    "@posterstore, PSBLT, 10, wgk, 12-06",
    "@desenio, XCLD, 10, wgk, 12-06",
    "@loavies, ANEKSHAFAVESX20, 20, wgk, 12-06",
    "@snuggs, BEAUTYGLOSS, 15, beautygloss, 12-06",
    "@nakdfashion, lenka, 15, allaboutlenks, 12-06",
    "@nakdfashion, Melissa, 15, melissa_nh, 12-06",
    "@snuggs, SARAH15, 15, sarahrebeccanl, 12-06",
    "@jouwbox, jouwbox5, €5, cynthiavandoorn, 12-06",
    "@nakdfashion, outfitreport, 15, outfitreport, 12-06",
    "@belvilla, AMAKA22, 22, amaka.hamelijnck, 12-06",
    "@shein, SGF4816, 15, r0neiyelsayeed, 12-06",
    "@veromoda, yam20, 20, inspiredbyyam, 12-06",
    "@onceuponapp, Fien25, 25, fienvermeulen, 12-06",
    "@loavies, 20XXCLAIRE, 20, wgk, 12-06",
    "@loavies, LUDIVINEFAVESX20, 20, wgk, 12-06",
    "@veromoda, LINDAHILLEN20, 20, huisjemetgeluk, 12-06",
    "@stronger, AMBER20, 20, janedoe, 12-06",
    "@stronger, MAUREEN20, 20, maureeneveraert, 12-06",
    "@stronger, KATIRA20, 20, katiravibes, 12-06",
    "@icaniwill, KRISTIANG20, 20, kristian_grohn, 12-06",
    "@myproteinnl, ROWENA, 25, theycallmerowttv, 12-06",
    "@kidsbrandstore, Lewis20, 20, _lewis_k_, 12-06",
    "@safira, BB20CERO, 20, janedoe, 12-06",
    "@safira, BBI22X01, 20, mandyvdstee, 12-06",

    "@nakdfashion, kellyv, 15, kelly.van.rossum, 12-04",
    "@hunkemoller, BBHKMLIGHT, 15, wgk, 12-04",
    "@posterstore, PSCHECK, 10, wgk, 12-04",
    "@desenio, XKLAAS, 10, wgk, 12-04",
    "@idealofsweden, BBFLOCK, 15, wgk, 12-04",
    "@asos, COOKIE, 20, janedoe, 12-04",
    "@shein, SNX1204, 15, jamielunamodels, 12-04",
    "@nakdfashion, floorkoster, 15, fffffloor, 12-04",
    "@gutsgusto, TILBURG, 15, gutsgusto, 12-04",
    "@shein, SGF188, 15, heileenmartin, 12-04",
    "@icaniwill, ARLENA20, 20, arlenaoona, 12-04",
    "@timelessinspiration, SPECIAAL, 15, timeless_inspiration8, 12-04",
    "@loavies, 20.lisahoogendoorn, 20, lisahoogendoorn, 12-04",
    "@icaniwill, SRINTALA20, 20, sselinamaria, 12-04",
    "@myproteinnl, SNOEPGEZOND, 25, snoepgezond, 12-04",
    "@kidsbrandstore, AMANDA-ER20, 20, amanda.eroglu, 12-04",
    "@safira, LUISA, 20, luisa.snd, 12-04",
    "@safira, BB1LOVE, 20, ninasemotions, 12-04",
    "@chiquelle, GIFT, 25, chiquelle, 12-04",
    "@loavies, 20.DEMIBIJOUX, 20, demibijoux, 12-04",
    "@lovelywholesale, Lisa15, 15, lisamberr, 12-04",
    "@albelli_nl, SANNE25, 25, laviesanne, 12-04",
    "@nakdfashion, friederich, 15, verena.friederich, 12-04",
    "@danielwellington, DWBBU54, 20, rentishehu, 12-04",
    "@loftymanner, LIZZY10, 10, lizzyvdligt, 12-04",
    "@wondr.care, thewondrofgifting, €5, dayenneritchi, 12-04",
    "@albelli_nl, BIBI25, 25, bibibreijman, 12-04",
    "@nakdfashion, Felicia, 15, felicia.louhenapessy, 12-04",
    "@shein, SGF522, 15, liafailwijnen, 12-04",
    "@loavies, LAURE-X20, 20, laurelanoo, 12-04",
    "@loavies, 20XXSAM, 20, xsam_xm, 12-04",
    "@popsocket, BBUBBLE, 15, janedoe, 12-04",

    "@nakdfashion, nori, 15, noorgoendijk, 12-02",
    "@nakdfashion, nataschalike, 15, nataschalike, 12-02",
    "@hunkemoller, BBHKMLASH, 15, wgk, 12-02",
    "@posterstore, PSVAUX, 10, wgk, 12-02",
    "@desenio, XSANT, 10, wgk, 12-02",
    "@asos, RANDO, 30, asos, 12-02",
    "@wearglas, HETTYASH20, 20, hettyash, 12-02",
    "@myproteinnl, RISHI, 25, rishibehari, 12-02",
    "@kidsbrandstore, shae-lynnendeena20, 20, shaelynn_dejonge, 12-02",
    "@safira, BBBSCHMUCK, 20, mandyvdstee, 12-02",
    "@safira, BBI22X01, 20, allaboutkybra, 12-02",
    "@impre.nl, CK20, 20, kimkotter, 12-02",
    "@hunkemoller, BBHKMLIKE, 15, wgk, 12-02",
    "@lyko, xmedina20, 20, medinaletica, 12-02",
    "@veromoda, DANI20, 20, danikoetsier, 12-02",
    "@albelli_nl, SARAH25, 25, sarahrebeccanl, 12-02",
    "@wefashionstories, WEXBOERS, 15, eliseboers, 12-02",
    "@monicavinader, MVINSIDER20-36EB, 20, lisanne.blonk, 12-02",
    "@loavies, YUNGDEMI20, 20, yung.demi, 12-02",
    "@mrandmrsgreen.hq, evelien15, 15, anthonisevelien, 12-02",
    "@sandrasflowers, Lindsey15, 15, lindseybeljaars, 12-02",
    "@bestecanvas_nl, JB10, 10, joycebloemendaal, 12-02",
    "@hellofresh, LAURAHELLO75, €75, lauraxdams, 12-02",
    "@farfetch, JOLIE, 10, jolielot, 12-02",
    "@shein, SGF4603, 15, moryarreaza, 12-02",
    "@shein, SGF9165, 15, ralizabeth, 12-02",
    "@zaful, lamnight, 22, lamnight, 12-02",

    "@nakdfashion, iris, 15, irismarkerink, 11-30",
    "@airup, AUDREYKDO, 15, janedoe, 11-30",
    "@loavies, DAPHNEVB20, 20, daphnevanbuerink, 11-30",
    "@nakdfashion, lina, 15, janedoe, 11-30",
    "@chiquelle, 25DEMI, 25, deemmx., 11-30",
    "@posterstore, PSGREAT, 10, wgk, 11-30",
    "@desenio, XBREEZE, 10, wgk, 11-30",
    "@romwe, RSS303, 15, michellemiddelman, 11-30",
    "@loavies, 20.femkezoe, 20, femkezoe, 11-30",
    "@veromoda, SINAEXTRA10, 10, janedoe, 11-30",
    "@shein, baejiayi, 15, janedoe, 11-30",
    "@shein, SHM587, 15, janedoe, 11-30",
    "@loavies, 20ANGELADIRVEN, 20, angelllllllllllllllll, 11-30",
    "@womensbest, kleijn20, 20, manonkleijnx, 11-30",
    "@flink, MART15, €15, martinemaureen, 11-30",
    "@yvettesports_official, Floor15, 15, countlessshades, 11-30",
    "@snuggs, LINDSEY15, 15, lindseybeljaars, 11-30",
    "@loavies, therougevelvetxparty20, 20, janedoe, 11-30",
    "@loavies, 20.FLEURDIJKSTRA, 20, fleurdijkstra_, 11-30",
    "@wearglas, Lotta20, 20, lotta__bergkvist__, 11-30",
    "@myproteinnl, JESSICANL, 43, janedoe, 11-30",
    "@kidsbrandstore, STELLA-P20, 20, janedoe, 11-30",
    "@safira, BB1LOVE, 20, janedoe, 11-30",
    "@safira, BBLOW, 20, janedoe, 11-30",
    "@icaniwill, karoliinaskantsi20, 20, janedoe, 11-30",
    "@icaniwill, TIINAS20, 20, janedoe, 11-30",
    "@farfetch, TWINFF, 10, janedoe, 11-30",
    "@xouxou, XXDIANA32, 20, janedoe, 11-30",

    "@nike, GOBIG22, 25, janedoe, 11-28",
    "@zalando, CYBERMONDAY, 20, janedoe, 11-28",
    "@gymshark, EXTRATWENTY, 20, janedoe, 11-28",
    "@chiquelle, CYBER40, 40, janedoe, 11-28",
    "@bjornborg, VANESSA10, 10, janedoe, 11-28",
    "@xlash, BLACK, 10, janedoe, 11-28",
    "@idealofsweden, BBFLEX, 50, wgk, 11-28",
    "@idealofsweden, BBFFD, 50, janedoe, 11-28",
    "@hunkemoller, BBHKMYEP, 20, wgk, 11-28",
    "@desenio, XGSTA, 10, wgk, 11-28",
    "@shein, SGF4139, 15, janedoe, 11-28",
    "@shein, SGF6319, 15, janedoe, 11-28",
    "@oliveandmint, SIMONE15, 15, liefs.siem, 11-28",
    "@edikted, xsam10, 10, xsam_xm, 11-28",
    "@rihoas, LiBeljaars, 15, lindseybeljaars, 11-28",
    "@wearglas, STUDIOTARRY20, 20, janedoe, 11-28",
    "@myproteinnl, GINO, 43, janedoe, 11-28",
    "@kidsbrandstore, MAYAJOLIE20, 20, janedoe, 11-28",
    "@posterstore, PSWALL, 10, wgk, 11-28",
    "@safira, BBSAFIRACOOL, 5, janedoe, 11-28",
    "@safira, BBFORME1, 5, janedoe, 11-28",
    "@icaniwill, annikakre10, 10, janedoe, 11-28",
    "@naturesfinestfoods, LISANNEB20, 20, lisanne.blonk, 11-28",

    "@idealofsweden, BBDRE, 50, janedoe, 11-27",
    "@shein, sgf4269, 15, janedoe, 11-27",
    "@shein, sgf4585, 15, janedoe, 11-27",
    "@leolive, anthonisevelienxo10, 10, anthonisevelien, 11-27",
    "@azukanl, BLACK25, 25, azukanl, 11-27",
    "@emmasleepnl, BIBI, 10, bibibreijman, 11-27",
    "@veromoda, AMBEREXTRA10, 10, janedoe, 11-27",
    "@burga, JAMIEX5, 5, mrsjamieli, 11-27",
    "@myproteinnl, STACEY, 43, staceeyyx, 11-27",
    "@chiquelle, BLACK50, 50, janedoe, 11-27",
    "@idealofsweden, BBSTR, 50, janedoe, 11-27",
    "@hellofreshnl, HELLOCOZY85, €85, thepastelsuitcase, 11-27",
    "@farfetch, FFNOOSHIN, 10, annanooshin, 11-27",
    "@moonycollections, BLACKWEEKEND, 15, chantbaltes, 11-27",
    "@safira, BBFABI55, 5, janedoe, 11-27",
    "@wearglas, LIFE40UP20, 20, janedoe, 11-27",
    "@myproteinnl, JUDITH, 43, janedoe, 11-27",
    "@kidsbrandstore, AMBER-V20, 20, janedoe, 11-27",
    "@safira, BBXJULIE5, 5, janedoe, 11-27",
    "@stronger, Catharina10, 10, janedoe, 11-27",
    "@icaniwill, nicoline10, 10, janedoe, 11-27",
    "@veromoda, SARAHZEXTRA10, 10, janedoe, 11-27",
    "@icaniwill, IVARSSON10, 10, janedoe, 11-27",

    "@shein, sgf5208, 15, janedoe, 11-25",
    "@veromoda, AMBEREXTRA10, 10, janedoe, 11-25",
    "@chiquelle, BLACK50, 50, chiquelle, 11-25",
    "@shein, hw550, 15, janedoe, 11-25",
    "@nakdfashion, larissa40, 40, janedoe, 11-25",
    "@hunkemoller, BBHKMSTY, 15, wgk, 11-25",
    "@posterstore, PSCASH, 10, wgk, 11-25",
    "@desenio, XCROS, 10, wgk, 11-25",
    "@idealofsweden, BBSPY, 50, wgk, 11-25",
    "@halfromancelingerie, Zoe, 15, zoegijzen_, 11-25",
    "@snuggs, KIMJACOBS, 15, kimjacobs, 11-25",
    "@greenchefnl, CHEFMARIT, 20, fitwithmarit, 11-25",
    "@otriumofficial, JULIAC20, 20, juliacatharinax, 11-25",
    "@wildrefill, WILLEMIJN, 25, wilvantien, 11-25",
    "@colourfulrebel, REBEL20, 20, charlotteannasophie, 11-25",
    "@emmasleepnl, MRSKEIZER, 10, mrskeizer, 11-25",
    "@bodyandfit_nl, KIMBERLY10, 10, kimandthekids, 11-25",
    "@hellofreshnl, HELLOTIEN85, €85, tienvanwil, 11-25",
    "@wearglas, ERICAEKLUND20, 20, janedoe, 11-25",
    "@myproteinnl, MICHELLE, 43, janedoe, 11-25",
    "@kidsbrandstore, DERMAN20, 20, janedoe, 11-25",
    "@safira, BBFORMARIA2, 5, janedoe, 11-25",
    "@safira, BBERLETA, 5, janedoe, 11-25",
    "@stronger, BW10, 10, janedoe, 11-25",
    "@icaniwill, nicoline10, 10, janedoe, 11-25",
    "@icaniwill, NSARRAF10, 10, janedoe, 11-25",
    "@veromoda, KIMZKEXTRA10, 10, janedoe, 11-25",
    "@safira, BBEXTRAA5, 5, janedoe, 11-25",

    "@nakdfashion, donnag40, 40, donnadaizy, 11-23",
    "@desenio, XPREBLACK, 10, wgk, 11-23",
    "@shein, SGF6327, 15, janedoe, 11-23",
    "@veromoda, SARAHZEXTRA10, 10, janedoe, 11-23",
    "@chiquelle, BLACK40, 40, janedoe, 11-23",
    "@icaniwill, ronjannikaa10, 10, janedoe, 11-23",
    "@jurkjescom, hannahxjurkjes15, 15, hannahdb_, 11-23",
    "@oliviakate.nl, blackfriday25, 25, staceeyyx, 11-23",
    "@icaniwill, JENNIINA10, 10, janedoe, 11-23",
    "@hunkemoller, BBHKMDOLL, 15, wgk, 11-23",
    "@posterstore, PSLASH, 10, wgk, 11-23",
    "@wearglas, LEUKWONEN20, 20, janedoe, 11-23",
    "@myproteinnl, ADDOJR, 40, janedoe, 11-23",
    "@kidsbrandstore, LEONPHARELLE20, 20, janedoe, 11-23",
    "@safira, BBLACK5, 5, janedoe, 11-23",
    "@safira, BBWK, 5, janedoe, 11-23",
    "@veromoda, michellevsmextra10, 10, janedoe, 11-23",
    "@shein, ceces15, 15, janedoe, 11-23",
    "@rihoas_official, michelle, 20, michellemiddelman, 11-23",
    "@notyourbabycom, BFJANICE30, 30, janiceblok, 11-23",
    "@albelli_nl, WIL30, 30, wilvantien, 11-23",
    "@otriumofficial, CHARLOTTEA20, 20, charlotteannasophie, 11-23",
    "@azukanl, BLACK25, 25, azukanl, 11-23",
    "@wellaprobnl, INDIA10, 10, indiasuy, 11-23",
    "@bylashbabe, SHULA15, 15, shularoose, 11-23",
    "@pixum_europe, EVA-PP22, 22, eva_invalencia, 11-23",
    "@underyourskinsthlm, BLACK20, 20, janedoe, 11-23",
    "@twistshake, 30RKS, 30, janedoe, 11-23",

    "@nakdfashion, Iris40, 40, irisamber, 11-21",
    "@desenio, XMST, 10, wgk, 11-21",
    "@idealofsweden, BBSTR, 50, janedoe, 11-21",
    "@wearglas, EVELINA20, 20, janedoe, 11-21",
    "@myproteinnl, daiily, 40, janedoe, 11-21",
    "@kidsbrandstore, NELLY20, 20, janedoe, 11-21",
    "@gutsgusto, CLAUDIA15, 15, janedoe, 11-21",
    "@posterstore, PSPTY, 10, wgk, 11-21",
    "@hunkemoller, BBHKMDST, 20, wgk, 11-21",
    "@veromoda, STIENEXTRA10, 10, janedoe, 11-21",
    "@veromoda, EMILYEXTRA10, 10, janedoe, 11-21",
    "@shein, sgf7747, 15, janedoe, 11-21",
    "@bellabarnett, OMIC15, 15, michellemiddelman, 11-21",
    "@shoesme.nl, ROBIN10, 10, thepastelsuitcase, 11-21",
    "@photowall_sweden, BLACKWEEK25, 25, mamaopsneakers, 11-21",
    "@shop_solado, SHELCYC20, 20, janedoe, 11-21",
    "@int.esncom, nochtli, 40, janedoe, 11-21",
    "@shein, SGF522, 15, janedoe, 11-21",
    "@beautypillow, BLACKWEEK25, 25, janedoe, 11-21",
    "@icaniwill, IVARSSON10, 10, janedoe, 11-21",
    "@icaniwill, VITA10, 10, janedoe, 11-21",
    "@safira, BBLACKMONDAY, 5, janedoe, 11-21",
    "@safira, EMELIEHG, 30, janedoe, 11-21",
    "@chiquelle, BLACK40, 40, janedoe, 11-21",
    "@veromoda, LUNAHJEXTRA10, 10, janedoe, 11-21",
    "@safira, BB5EXTRABW, 5, janedoe, 11-21",

    "@shein, snx1365, 15, janedoe, 11-20",
    "@xlash, ANTONIJA, 11, janedoe, 11-20",
    "@nakdfashion, leabroc40, 40, janedoe, 11-20",
    "@bellabarnett, OLJ15, 15, lisajkoster, 11-20",
    "@divain, bbv76, 5, rebeccavandenhoek, 11-20",
    "@revamp, SHULA20, 20, shularoose, 11-20",
    "@danielwellington, DWBBNOVV, 15, janedoe, 11-20",
    "@veromoda, YAMEXTRA10, 10, janedoe, 11-20",
    "@veromoda, ROSANEXTRA10, 10, janedoe, 11-20",
    "@wearglas, SOFI20, 20, janedoe, 11-20",
    "@myproteinnl, BRITT, 40, janedoe, 11-20",
    "@kidsbrandstore, LAURA-OF20, 20, janedoe, 11-20",
    "@safira, BBWEEK30, 20, janedoe, 11-20",
    "@safira, BB9PKTA6, 20, janedoe, 11-20",
    "@shein, sgf2842, 15, janedoe, 11-20",
    "@nakdfashion, 40XBBGNR, 40, janedoe, 11-20",
    "@nakdfashion, zoep40, 40, janedoe, 11-20",
    "@nakdfashion, 40XBBYTG, 40, janedoe, 11-20",
    "@chiquelle, PREOFFER, 33, chiquelle, 11-20",
    "@stronger, Catharina10, 10, janedoe, 11-20",
    "@icaniwil, MAXIWB10, 10, janedoe, 11-20",
    "@icaniwil, JZONATHAN10, 10, janedoe, 11-20",

    "@nakdfashion, zoeoerlemansx40, 40, zoeoerlemans, 11-18",
    "@nakdfashion, lisap40, 40, lisaapijnacker, 11-18",
    "@hunkemoller, BBHKMFLY, 15, wgk, 11-18",
    "@idealofsweden, BBCLY, 50, wgk, 11-18",
    "@posterstore, PSXTR, 10, wgk, 11-18",
    "@desenio, XBFF, 10, wgk, 11-18",
    "@asos, FAVES25, 25, asos, 11-18",
    "@madladyse, ZOEOE, 25+5, zoeoerlemans, 11-18",
    "@nakdfashion, mellaademax40, 40, mellaadema, 11-18",
    "@nakdfashion, xpeterinabroersx40, 40, xpeterinabroers, 11-18",
    "@veromoda, REGINAEXTRA10, 10, janedoe, 11-18",
    "@shein, sgf7729, 15, janedoe, 11-18",
    "@shein, SGF5288, 15, janedoe, 11-18",
    "@nakdfashion, maschadaniquex40, 40, mascha.danique, 11-18",
    "@nakdfashion, campbell40, 40, campbellblairr, 11-18",
    "@nakdfashion, lottev40, 40, lottevanvonderen, 11-18",
    "@rihoas, FEMKEZOE, 15, femkezoe, 11-18",
    "@wearglas, MARJ20, 20, janedoe, 11-18",
    "@myproteinnl, LUKARSKI, 35, janedoe, 11-18",
    "@kidsbrandstore, AIMEE-L20, 20, janedoe, 11-18",
    "@safira, BB5E, 20, janedoe, 11-18",
    "@safira, BBANANOV, 20, janedoe, 11-18",
    "@stronger, tara10, 10, janedoe, 11-18",
    "@icaniwill, mikaeljs20, 20, janedoe, 11-18",
    "@icaniwill, romeo10, 10, janedoe, 11-18",
    "@hellofreshnl, HELLOCOZY85, €85, janedoe, 11-18",
    "@snuggs, LOTTE15, 15, janedoe, 11-18",
    "@danielwellington, dwbbz45, 15, janedoe, 11-18",
    "@twistshake, 30familiehummel, 30, janedoe, 11-18",
    "@hetmuizenhuis, MICHELLE15, 15, janedoe, 11-18",
  ];
}
