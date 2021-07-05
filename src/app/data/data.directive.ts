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
    "@amebalance, FLORIANNE20, florianne.charlotte, 2021-06-10",
    "@famousstore, Annefloor10, annefloorx, 2021-06-10",
    "@editedofficial, ROOS20JUNE, moderosaofficial, 2021-06-10",
    "@gardenoflifenl, MARTINE, martinemaureen, 2021-06-10",
    "@outfithustler, ROXY10, roxysshizzle, 2021-06-10",
    "@chiquelle, ROXY20, roxysshizzle, 2021-06-10",
    "@suitta.exclusive, CHARLOTTE15, charlottejanssen94, 2021-06-10",
    "@stronger, janssen20, charlottejanssen94, 2021-06-10",
    "@icaniwill, WENDIE20, wendievlaar, 2021-06-10",
    "@idealofsweden, BBSYLVANA15, sylvana.elling, 2021-06-10",
    "@stronger, ELIZEMOL20, elizemol, 2021-06-10",
    "@sheinofficial, Koster15, lisajkoster, 2021-06-10",
    "@romwe_fun, kosterA2, lisajkoster, 2021-06-10",
    "@cuccoofootwear, SC502, lisajkoster, 2021-06-10",
    "@zaful, WSA28, wietskeypmaa, 2021-06-10",
    "@nakdfashion, lucaaax20, lucaaa.xx, 2021-06-10",
    "@nakdfashion, 20XBB5LA, melissavijgen, 2021-06-10",
    "@bymusthaves, DONNA15, donnadaizy, 2021-06-10",
    "@idealofsweden, Kellyh15x, kellyhamelijnck, 2021-06-10",
    "@bydashbeautyfashion, DAMIET20, damiet, 2021-06-10",
    "@officialenrich, AYLA20, xmylifeasayla, 2021-06-10",
    "@bambook, VADERDAG15, sarahrebeccanl, 2021-06-10",
    "@blackbananasnl, LIE20, liemeurs, 2021-06-10",
    "@desenio, CHEY30, cheyennech.x, 2021-06-10",
    "@nakdfashion, sophieousri20, sophieousri, 2021-06-10",
    "@nakdfashion, chamee20, chameebarkmanx, 2021-06-10",
    "@officialenrich, VERENA20, verena.friederich, 2021-06-10",
    "@nakdfashion, Linndadonx20, linndadon, 2021-06-10",
    "@theofficialsafira, SAF93557, a_deruijterx, 2021-06-12",
    "@idealofsweden, BB15EMILIE, emilie.terloo, 2021-06-12",
    "@leolive, MFIG10, beautygloss, 2021-06-12",
    "@fortunateonestore, FREDLOVE, frederiqueligtvoet, 2021-06-12",
    "@hellofreshnl, FRESHCHAMEE45, chameebarkmanx, 2021-06-12",
    "@bangerhead, Chamee15, chameebarkmanx, 2021-06-12",
    "@hellofreshbe, PAULIENFRESH45, paulienmullaertx, 2021-06-12",
    "@kibafashion, VERENA15, verena.friederich, 2021-06-12",
    "@sheinofficial, esmeeq2, esmeemelissa, 2021-06-12",
    "@idealofsweden, NVB15, nisavanbaelen, 2021-06-12",
    "@nakdfashion, 20XBBRHR, lucaaa.xx, 2021-06-12",
    "@nakdfashion, louwaars20, michellelouwaars, 2021-06-12",
    "@nakdfashion, lottew20, lotte.wullink, 2021-06-12",
    "@nakdfashion, hannahdb20, hannahdb_, 2021-06-12",
    "@nakdfashion, claire20, clairepronk, 2021-06-12",
    "@biostimenl, Biostime50Kim, kimjacobs, 2021-06-12",
    "@silknnederland, Robin10, robinhenneke.jpeg, 2021-06-12",
    "@dicetees, SYLVANA10, sylvana.elling, 2021-06-12",
    "@sheinofficial, wietskeypmaaq2, wietskeypmaa, 2021-06-12",
    "@sheinofficial, LISATERQ2, lisaterhorstt, 2021-06-12",
    "@gittibeauty, michelle20, michelle_bollen, 2021-06-12",
    "@kisstherainbowshop, DANTHE10, danthescholtenx, 2021-06-14",
    "@nakdfashion, bibikleinenberg20, bibikleinenberg, 2021-06-14",
    "@lovingtanofficial, KIMBERLYGLOW, xkiimberly, 2021-06-14",
    "@getyourtoy.nl, Charlotte10, charlottejanssen94, 2021-06-14",
    "@olcaygulsenbeauty, Holiday30, olcay, 2021-06-14",
    "@merodacosmetics, shula20, shularoose, 2021-06-14",
    "@bymusthaves, MAIKE15, maikebeunk, 2021-06-14",
    "@nakdfashion, lindseyb20, lindseybeljaars, 2021-06-14",
    "@nakdfashion, donnagijsmanx20, donnadaizy, 2021-06-14",
    "@merodacosmetics, Michelle20, michellelouwaars, 2021-06-14",
    "@sheinofficial, VA858, femkezoe, 2021-06-14",
    "@juulsfavorites.nl, Sofie15, sofiegraafland, 2021-06-14",
    "@papilloncountryresort, Diesna10, diesnaloomans, 2021-06-14",
    "@nakdfashion, MARTINEMAUREEN20, martinemaureen, 2021-06-14",
    "@remington.benelux, BO20, bowilkes, 2021-06-14",
    "@idealofsweden, CHELSYDW15, chelsydewitte, 2021-06-14",
    "@nakdfashion, femke20, femke.vermaas, 2021-06-14",
    "@idealofsweden, 15mmacy, macyymichelle, 2021-06-14",
    "@iskovital, VERENA30, verena.friederich, 2021-06-14",
    "@nakdfashion, Lunahoogwerfx20, lunahoogwerf_, 2021-06-14",
    "@bara, ZOEG15, zoegijzen_, 2021-06-14",
    "@idealofsweden, BB15KELLYH, kellyhamelijnck, 2021-06-14",
    "@nakdfashion, chantalb25, chantbaltes, 2021-06-14",
    "@naifcare, NaiflovesNaomi, naomivanasofficial, 2021-06-16",
    "@nakdfashion, iris20, iriseigenhuis, 2021-06-16",
    "@sugarandspikes.shop, AYLA20, xmylifeasayla, 2021-06-16",
    "@lightinthebox, LSAK15, lisajkoster, 2021-06-16",
    "@idealofsweden, Emilie15off, emilie.terloo, 2021-06-16",
    "@lesjumelles.be, kimkotter, kimkotter, 2021-06-16",
    "@fittwear_official, FITTNATH15, nathalieejw, 2021-06-16",
    "@silkskin__, DJESSY30, djessyx, 2021-06-16",
    "@iskovital, MILOU30, milouhendriks, 2021-06-16",
    "@onceuponapp, NATALIE25, natalievijfhuizen, 2021-06-16",
    "@nakdfashion, kae25, kaesutherland, 2021-06-16",
    "@lolefashionnl, Lotte10, lotte.wullink, 2021-06-16",
    "@myproteinnl, FITWITHMARIT, fitwithmarit, 2021-06-16",
    "@tastea.eu, sylvana15, sylvana.elling, 2021-06-16",
    "@tastea.eu, BECOOL15, rebeccavandenhoek, 2021-06-16",
    "@nakdfashion, 25fleur, fleurnijbacker, 2021-06-16",
    "@nakdfashion, lis25, lisvanderwijst, 2021-06-16",
    "@nakdfashion, Adalla20, adalla.99, 2021-06-16",
    "@stronger, 20xemilie, emilie.terloo, 2021-06-16",
    "@idealofsweden, Mink15, brittmink_, 2021-06-16",
    "@villatent, #MONIQUE10, moniquesmit_insta, 2021-06-16",
    "@moostwanted, ISAYA15, elaisaya, 2021-06-16",
    "@theofficialsafira, ROXY15, roxysshizzle, 2021-06-16",
    "@blushbar_9700, PAULIEN15, paulienmullaertx, 2021-06-16",
    "@desenio, 25LUNAL, lunalissens, 2021-06-16",
    "@fittwear_official, ANNICKFITT15, a.nnickk_, 2021-06-16",
    "@nakdfashion, COCOCHLOE20, cocochloe__, 2021-06-16",
    "@nakdfashion, nooshin25, annanooshin, 2021-06-16",
    "@albelli_nl, KIMJACOBS, kimjacobs, 2021-06-16",
    "@the_m_bar, LIS15, lisvanderwijst, 2021-06-16",
    "@passionforyouu, janice10, janiceblok, 2021-06-22",
    "@hellofreshnl, HELLOFAJAH, fayaofficial, 2021-06-22",
    "@onceuponapp, katja25, katjaschuurman, 2021-06-22",
    "@bymusthaves, Eline15, adalla.99, 2021-06-22",
    "@margotbardot, HANNAH15, hannahdb_, 2021-06-22",
    "@agavefashio, LUCA20, lucaaa.xx, 2021-06-22",
    "@idealofsweden, NISAVB, nisavanbaelen, 2021-06-22",
    "@wietskeypmaa, BLACKBANANAS, wietskeypmaa, 2021-06-22",
    "@myproteinnl, FITENFLEX, marijnkuipers, 2021-06-22",
    "@juniqeartshop, BYYAM25, inspiredbyyam, 2021-06-22",
    "@gloryshopnl, JESSICA, jessicakuijpers, 2021-06-22",
    "@stronger, lottewullink20, lotte.wullink, 2021-06-22",
    "@itsmay.dk, amber15, amberdhaan, 2021-06-22",
    "@idealofsweden, Dilianex15, diliane.kwadijk, 2021-06-22",
    "@theofficialsafira, MACY15, macyymichelle, 2021-06-22",
    "@officialvicisupps, ROWENA10, rowenakonings_, 2021-06-22",
    "@hellofreshnl, HELLOSARAH45, sarahchronis, 2021-06-22",
    "@stronger, 20DEMI20, demiteeuwissen, 2021-06-22",
    "@remington.benelux, LAURA20, lauraponticorvo, 2021-06-22",
    "@chiquelle, DANIQUE20, daniqueschutjens, 2021-06-22",
    "@happysnackbox, cynthiavandoorn, cynthiavandoorn, 2021-06-22",
    "@blackbananasnl, india20, indiasuy, 2021-06-22",
    "@gutsgusto, KIYA20, kiya.vanrossum, 2021-06-24",
    "@flowshealth, FLORIANNE, florianne.charlotte, 2021-06-24",
    "@nakdfashion, 20XBBKNX, lunalissens, 2021-06-24",
    "@browboutiquebyfarah, Kellycaresse, kellycaresse, 2021-06-24",
    "@nakdfashion, dyonne20, xdyonnex, 2021-06-24",
    "@viteezynl, jipp10, jippheldoorn, 2021-06-24",
    "@stratingschoenen, Robin10, robinhenneke.jpeg, 2021-06-24",
    "@myproteinnl, Nochtli, nochtlii, 2021-06-24",
    "@nakdfashion, Valerie_20, valeriequirijns, 2021-06-24",
    "@nakdfashion, Annefloor20, annefloorx, 2021-06-24",
    "@desenio, DEMI10, xdemi___x, 2021-06-24",
    "@nakdfashion, 20sylvana, sylvana.elling, 2021-06-24",
    "@sooof.nl, STACY15, stacydriesen, 2021-06-24",
    "@makeupstudioamsterdam, ELIZE10, mylifeaselize, 2021-06-24",
    "@nakdfashion, milouh20, milouhendriks, 2021-06-24",
    "@nakdfashion, kellyx20, kheeell, 2021-06-24",
    "@idealofsweden, jasmijnkremer15, jasmijnkremer, 2021-06-24",
    "@leolive, KAE10, kaesutherland, 2021-06-24",
    "@stronger, beljaars20, lindseybeljaars, 2021-06-24",
    "@idealofsweden, kimberlybrands15, kimberlybrands_, 2021-06-24",
    "@armedangels, KELLYCARESSE_15, kellycaresse, 2021-06-24",
    "@bymusthaves, ROXY15, roxysshizzle, 2021-06-24",
    "@hellofreshnl, HELLOABBEY, abbeyhoes, 2021-06-24",
    "@nakdfashion, SHULA20, shularoose, 2021-06-24",
    "@zaful, DON18, donnadaizy, 2021-06-24",
    "@lasistersfashion, danthescholten, danthescholtenx, 2021-06-26",
    "@sheinofficial, dantheQ2, danthescholtenx, 2021-06-26",
    "@sheinofficial, VA1181, wietskeypmaa, 2021-06-26",
    "@organicup, VERA20, veracamilla, 2021-06-26",
    "@highline.designs, lies10, lies_zhara, 2021-06-26",
    "@kledingkut, kutluna, lunahoogwerf_, 2021-06-26",
    "@xlashscandinavia, danique20, daniquehogguer, 2021-06-26",
    "@loavies, 20MICHELLE, michellelouwaars, 2021-06-26",
    "@tastea.eu, BECOOL15, emilie.terloo, 2021-06-26",
    "@loavies, LAMYNA20, lamynaspinder, 2021-06-26",
    "@loavies, Eline-20, adalla.99, 2021-06-26",
    "@loavies, INGE20, ingewildenberg, 2021-06-26",
    "@famousstore, charlotte10, charlottejanssen94, 2021-06-26",
    "@esteelauder.nl, MASCHA25, beautygloss, 2021-06-26",
    "@stronger, claudinebuisman20, claudinebuisman, 2021-06-26",
    "@twistshakebaby, 55CLAUDINE, claudinebuisman, 2021-06-26",
    "@hellofreshbe, HELLOMARTA45, martaswiggers, 2021-06-26",
    "@idealofsweden, 15femkezoe, femkezoe, 2021-06-28",
    "@romwe_fun, lottewullink, lotte.wullink, 2021-06-28",
    "@gardenoflifenl, JASMIJN, jasmijnkremer, 2021-06-28",
    "@bara, Annick15, a.nnickk_, 2021-06-28",
    "@twistshakebaby, kimmusk55, kim.musk, 2021-06-28",
    "@neoblender, kim10, kim.musk, 2021-06-28",
    "@gutsgusto, LINDSEYBELJAARS15, lindseybeljaars, 2021-06-28",
    "@vandalen_schoenen, MoniqueSmitbyVanDalen30, moniquesmit_insta, 2021-06-28",
    "@desenio , LINDSAY10, lindsaywouterse, 2021-06-28",
    "@kims.treasures, AYLA15, xmylifeasayla, 2021-06-28",
    "@darenceparis, LIS25, lisvanderwijst, 2021-06-28",
    "@onetwomodel_official, Charlotte50, charlottejanssen94, 2021-06-28",
    "@popsocketsnl, BBPRIDEJUNE, martaswiggers, 2021-06-28",
    "@loavies, kae20, kaesutherland, 2021-06-30",
    "@gutsgusto, SERENAVERBON20, serenaverbon, 2021-06-30",
    "@stronger, 20hamelijnck, kellyhamelijnck, 2021-06-30",
    "@famousstore, dyonne10, xdyonnex, 2021-06-30",
    "@icaniwill, JULIAVB10, juliavanbergen, 2021-06-30",
    "@nakdfashion, NINAVIP, ninahouston, 2021-06-30",
    "@loavies, MAIKE20, maikebeunk, 2021-06-30",
    "@maccosmeticsnl, LAURA25, lauraponticorvo, 2021-06-30",
    "@icaniwill, JESSICAK10, jessicakuijpers, 2021-06-30",
    "@sellafashionstore, PAULIEN10, paulienmullaertx, 2021-06-30",
    "@hellofreshnl, HELLOMASCHA45, beautygloss, 2021-06-30",
    "@idealofsweden, mandyvdwardt15, mandyvanderwardt, 2021-06-30",
    "@hemnature, KELLY20, kellycaresse, 2021-06-30",
    "@colourfulrebel, iris15, irisamber, 2021-06-30",
    "@geurwolkje, zomervibes, macyymichelle, 2021-06-30",
    "@vichylaboratoires, STRES21SC, sarahchronis, 2021-06-30",
    "@disino.official, MELANIE15, melaniiev, 2021-06-30",
    "@icaniwill, ZOMER1, wendievlaar, 2021-06-30",
    "@myproteinnl, LARISSA, larissavanmeerten, 2021-06-30",
    "@tessvfashion, Annefloor10, annefloorx, 2021-06-30",
    "@evryjewels, WIETSKEY, wietskeypmaa, 2021-06-30",
    "@stronger, nadinekole20, nadinekole_, 2021-06-30",
    "@nakdfashion, Kirstenharenbergx20, kirstenharenberg, 2021-06-30",
    "@loavies, CHELSY20, chelsydewitte, 2021-07-01",
    "@leolive, deeig10, dee, 2021-07-01",
    "@vigiwatches, YAM25, inspiredbyyam, 2021-07-01",
    "@theofficialsafira, ANNICK15, a.nnickk_, 2021-07-01",
    "@freewheely, channah10, channahkoerten, 2021-07-01",
    "@hellofreshnl, HELLOXELLY45, xellycvk, 2021-07-01",
    "@koro_nl, EMILIE5, emilie.terloo, 2021-07-01",
    "@hairlust, SANNE20, laviesanne, 2021-07-01",
    "@myjewellery, MELANIE15, melanielatooy, 2021-07-01",
    "@larocheposay, stijntoleriane, stijn_fransen, 2021-07-01",
    "@nakdfashion, kimmuskx20, kim.musk, 2021-07-01",
    "@organictreatsnl, giveaway15, charlottejanssen94, 2021-07-01",
    "@lacelaboratory, JAMIE15, mrsjamieli, 2021-07-01",
    "@itsmay.dk, donnad15, donnadaizy, 2021-07-02",
    "@larocheposay, kimhyalub5, kimjacobs, 2021-07-02",
    "@outfithuster, CITYNAOMI10, naomi_veenvliet, 2021-07-02",
    "@byrokko, WIETSKE, wietskeypmaa, 2021-07-02",
    "@idealofsweden, LotteWullink15, lotte.wullink, 2021-07-02",
    "@own.wear.shop, famkoerten, channahkoerten, 2021-07-02",
    "@idealofsweden, CHELSYDW20, chelsydewitte, 2021-07-02",
    "@nakdfashion, 20XBBR8S, jonievis, 2021-07-02",
    "@idealofsweden, nadinekolex15, nadinekole_, 2021-07-02",
    "@lyko, SENTA20, sentajanssen, 2021-07-03",
    "@idealofsweden, 15vandenhoek, rebeccavandenhoek, 2021-07-03",
    "@outfithustler, CITYNAOMI10, naomi_veenvliet, 2021-07-04",
    "@madebylor, DONNA20, donnadaizy, 2021-07-04",
    "@mere_et_fille_nl, femkezoe15, femkezoe, 2021-07-04",
    "@femmefatalefashion.nl, MELANIE15, melaniiev, 2021-07-04",
    "@malelions, YARA10, yara.hendriks, 2021-07-04",
    "@idealofsweden, 15offemilie, emilie.terloo, 2021-07-04",
    "@nakdfashion, irisx20, iriseigenhuis, 2021-07-04",
    "@theofficialsafira, YAM15, inspiredbyyam, 2021-07-04",
    "@stronger, RACHELx20, kusslittlerachel, 2021-07-05",
    "@idealofsweden, Idealxloraine, lorainevanlog, 2021-07-05",
    "@sheinofficial, liafail12, liafailwijnen, 2021-07-05",
    "@loavies, RENEE20, reneenatassja, 2021-07-05",
    "@icaniwill, ZOMER2, manonkleijnx, 2021-07-05",
    "@juniqeartshop, BONITA25, bonitabodden, 2021-07-05",
    "@nakdfashion, 20XBBKYN, romygalx, 2021-07-05",
    "@nakdfashion, kae20, kaesutherland, 2021-07-05",
    "@biteaway.nl, Sanne15, laviesanne, 2021-07-05",
    "@nakdfashion, kellyh20, kellyhamelijnck, 2021-07-05",
  ];
}
