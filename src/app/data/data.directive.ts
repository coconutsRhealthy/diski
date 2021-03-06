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
    "@nakdfashion, 20XBB4N6, fernanda_reads, 2022-07-18",
    "@loavies, CHIARASUMX20, chiaramusone, 2022-07-18",
    "@gutsgusto, YVONNEKWAKKEL20, yvonne_kwakkel, 2022-07-18",
    "@gutsgusto, NICOLINA20, nicolina.fit, 2022-07-18",
    "@hunkemoller, BBHKMGA, laurasrayy, 2022-07-18",
    "@nakdfashion, VITACLEO20, vita.cleo, 2022-07-18",
    "@lyko, XCAMPBELL20, campbellblairr, 2022-07-18",
    "@veromoda, paulienmullaert15, paulienmullaertx, 2022-07-18",
    "@azukanl, GIOIA10, gioia.x, 2022-07-18",
    "@nakdfashion, 20XBBK3B, gioia.x, 2022-07-18",
    "@stronger, BELJAARS20, lindseybeljaars, 2022-07-18",
    "@nakdfashion, loisb20, loisbeekhuizen, 2022-07-18",
    "@loavies, DEEMMX._-20, deemmx._, 2022-07-18",
    "@myproteinnl, LARISSA, larissavanmeerten, 2022-07-18",
    "@editedofficial, R20JULY, moderosaofficial, 2022-07-18",
    "@idealofsweden, bbsz, dunno, 2022-07-18",
    "@luxuryforprincess, DAMIET, damiet, 2022-07-18",
    "@loavies, 20-XDYONNEX, xdyonnex, 2022-07-18",

    "@loavies, LUCAAA.XX-20, lucaaa.xx, 2022-07-17",
    "@nakdfashion, goncalves20, anagoncalves__, 2022-07-17",
    "@nakdfashion, Noorx20, noortje.smit, 2022-07-17",
    "@tessvfashion, rosa10, rosameulendijk, 2022-07-17",
    "@theofficialsafira, BBYOVAL9, mandyvdstee, 2022-07-17",
    "@chiquelle, flashfriday25, chiquelle, 2022-07-17",
    "@gutsgusto, NOOROOSTENVELD20, noor.oostenveld, 2022-07-17",
    "@gutsgusto, ANNEMARIE20, thehome.and.thekid, 2022-07-17",
    "@stronger, olia20, olia_chicago, 2022-07-17",
    "@icaniwill, cilleb10, cilleborup, 2022-07-17",
    "@icaniwill, WU3E7, giannasophie, 2022-07-17",
    "@veromoda, marthe15, marthe_teerlynck, 2022-07-17",
    "@sheinofficial, SSFR141, onlymel13, 2022-07-17",
    "@hunkemoller, BBHKMKDYLAN, kimvdpols, 2022-07-17",
    "@hunkemoller, BBHKMLKN4FT, mademoiselle5374, 2022-07-17",
    "@desenio, xnn45, nati_blogger, 2022-07-17",
    "@desenio, XCA, nic__bsl, 2022-07-17",
    "@idealofsweden, ROBINJULI, robinhenneke.jpeg, 2022-07-17",
    "@nakdfashion, inge20, ingewildenberg, 2022-07-17",
    "@loavies, LINDSEYBELJAARS-20, lindseybeljaars, 2022-07-17",
    "@loavies, MELANIEVANDIJK-20, xmelanievandijk, 2022-07-17",

    "@loavies, 20-EVAOFFICIALNL, evaofficialnl, 2022-07-16",
    "@rihoas_official, samira, crdr.samira, 2022-07-16",
    "@loavies, CHARLYNESUMMER20, charlyyneb, 2022-07-16",
    "@yvettesports_official, Floor10, countlessshades, 2022-07-16",
    "@nakdfashion, ANNELOES20, asmolenaarr, 2022-07-16",
    "@smartphoto.nl, ROBIN20, thepastelsuitcase, 2022-07-16",
    "@nakdfashion, 20debbie, debbiedhillon, 2022-07-16",
    "@lyko, xxkimberly20, xkiimberly, 2022-07-16",
    "@veromoda, martaswiggers15, martaswiggers, 2022-07-16",
    "@mariatailor_hq, SUMMER20???, mariatailor, 2022-07-16",
    "@idealofsweden, Lorainevl15, lorainevanlog, 2022-07-16",
    "@loavies, VERENA.FRIEDERICH-20, verena.friederich, 2022-07-16",
    "@freciousslowjuice, MARIT20, fitwithmarit, 2022-07-16",
    "@idealofsweden, 2022Mar15, marleen.hekkert, 2022-07-16",
    "@loavies, ROSALIA_GUZMAN_9X20, rosalia_guzman_9, 2022-07-16",
    "@loavies, kae20, kaesutherland, 2022-07-16",

    "@loavies, A_DERUIJTERX-20, a_deruijterx, 2022-07-15",
    "@nakdfashion, Ameele20, laurenceameele, 2022-07-15",
    "@nakdfashion, 20XBB3YL, sandyhrvl, 2022-07-15",
    "@idealofsweden, BB876, tessveldkampx, 2022-07-15",
    "@loavies, XMYLIFEASAYLA-20, xmylifeasayla, 2022-07-15",
    "@loavies, TESSVELDKAMP-20, tessveldkampx, 2022-07-15",
    "@loavies, MERIMOSTLOVED20, mgsus19, 2022-07-15",
    "@kidsbrandstore, ROMY-NIE20, romy.nx, 2022-07-15",
    "@theofficialsafira, BBSUMSALE, lara.muz17, 2022-07-15",
    "@stronger, CRISTINE20, cristine_rigaud, 2022-07-15",
    "@icaniwill, ALBA10, albabostrm, 2022-07-15",
    "@veromoda, Jamey15, jamey.nl, 2022-07-15",
    "@sheinofficial, BYJILL55, byjillyt, 2022-07-15",
    "@desenio, XRUEN4I, ani_daushvili, 2022-07-15",
    "@idealofsweden, BB399, azratopuz97, 2022-07-15",
    "@naifcare, Naiflovestien, tienvanwil, 2022-07-15",
    "@loavies, MARTASWIGGERSX20, martaswiggers, 2022-07-15",
    "@olcaygulsenbeauty, OLCAY20, olcay, 2022-07-15",
    "@hunkemoller, BBHKM22TP, tinkapell, 2022-07-15",

    "@nakdfashion, 20XBBXWK, carolinetmm__, 2022-07-14",
    "@gutsgusto, DAPHNEVANBUERINK20, daphnevanbuerink, 2022-07-14",
    "@gutsgusto, MARIEYOU20, marieyou__, 2022-07-14",
    "@loavies, 20-FLEURDIJKSTRA_, fleurdijkstra_, 2022-07-14",
    "@nakdfashion, 20XBB9JO, maggy_wave, 2022-07-14",
    "@loavies, NOELLIASUMMER20, soy.lyaa, 2022-07-14",
    "@tessvfashion, MANDY10, mandyluttermann, 2022-07-14",
    "@theofficialsafira, BBYAREN5, itsxyaren, 2022-07-14",
    "@veromoda, lisanne15, lisanne.blonk, 2022-07-14",
    "@gutsgusto, KINDOFB20, kind_of_b, 2022-07-14",
    "@photowall_sweden, Valerienl25, http.littledaylight, 2022-07-14",
    "@superdry, NOCHTLI15, nochtlii, 2022-07-14",
    "@azukanl, SUMMER20, azukanl, 2022-07-14",
    "@romwe, FTW113, michellemiddelman, 2022-07-14",
    "@mysweetstore.nl, marit15, marit.roelofs_, 2022-07-14",
    "@canonnederland, SASKIAPX, saskiaweerstand, 2022-07-14",
    "@kruuofficial, LIES, lies_zhara, 2022-07-14",
    "@iconica.wear, JOYCE20, joycebloemendaal, 2022-07-14",

    "@nakdfashion, sylvanae20, sylvana.elling, 2022-07-13",
    "@loavies, XZOELOVED20, zoeoerlemans, 2022-07-13",
    "@loavies, 20-ELLISELBERSEN, elliselbersen, 2022-07-13",
    "@gutsgusto, DAILYDUTCHY20, thedailydutchy, 2022-07-13",
    "@gutsgusto, BEAUTYBYDENIES20, beautybydenies, 2022-07-13",
    "@idealofsweden, BBFRPBCP, emilie.terloo, 2022-07-13",
    "@lyko, Michelletl20, michelleterlinden, 2022-07-13",
    "@hunkemoller, BBHKMBISW99, _bittersweet_99, 2022-07-13",
    "@nakdfashion, DAELO20, daelostylo, 2022-07-13",
    "@icaniwill, WENDIE10, wendievlaar, 2022-07-13",
    "@nakdfashion, susangorzx20, susangorz_, 2022-07-13",
    "@otriumofficial, FLOOR20, countlessshades, 2022-07-13",
    "@sellpy, Teske2, teskedeschepper, 2022-07-13",
    "@frame, AMAKAHK20, amaka.hamelijnck, 2022-07-13",
    "@america_today, AT15, xmylifeasayla, 2022-07-13",
    "@theofficialsafira, BBM2, maria.gelk, 2022-07-13",
    "@nakdfashion, patikurekx20, pati.kurek, 2022-07-13",
    "@nakdfashion, Nvandercraatsx20, nvandercraats, 2022-07-13",
    "@loavies, 20-DJUNABDATTHIJN, djunabdatthijn, 2022-07-13",
    "@nakdfashion, maschadaniquex20, mascha.danique, 2022-07-13",
    "@loavies, SHELCYLOVED20, shelcycarpentier, 2022-07-13",
    "@shop_solado, SHELCYC15, shelcycarpentier, 2022-07-13",
    "@loavies, RMDNBS-20, rmdnbs, 2022-07-13",
    "@loavies, 20ANGELA, angelllllllllllllllll, 2022-07-13",

    "@ginatricot, ANNARIKE20, annarikeroberte, 2022-07-12",
    "@stylelies.nl, mascha, maschaduijn, 2022-07-12",
    "@ginatricot, JANICE20, janicechantel, 2022-07-12",
    "@idealofsweden, Charlievan_gorkum15, charlievangorkumm, 2022-07-12",
    "@elisestore, ANGELA15, angelllllllllllllllll, 2022-07-12",
    "@geurwolkje, MEL10, mln_.x, 2022-07-12",
    "@snuggs, WILL, wilvantien, 2022-07-12",
    "@womensbest, kleijn20, manonkleijnx, 2022-07-12",
    "@stronger, kelly20, kellyvanderminne, 2022-07-12",
    "@veromoda, macyymichelle15, macyymichelle, 2022-07-12",
    "@hunkemoller, BBHKMNAOMIV15, naomi_veenvliet, 2022-07-12",
    "@leolive, CELINESMIT15, celinesmit, 2022-07-12",
    "@nakdfashion, Adalla20, adalla.99, 2022-07-12",
    "@womensbest, NENCIE20, nenciesway, 2022-07-12",
    "@popsockets_europe, BBCREATE10, rebeccavandenhoek, 2022-07-12",

    "@nakdfashion, fashionela20, fashionela_, 2022-07-11",
    "@loavies, JENEHKNOOPP-20, jenehknoopp, 2022-07-11",
    "@idealofsweden, BBIR09, tessveldkampx, 2022-07-11",
    "@desenio, XIR98, tessveldkampx, 2022-07-11",
    "@idealofsweden, 15chaa, charlotteaarstad, 2022-07-11",
    "@desenio, X555X, ann_norland_, 2022-07-11",
    "@icaniwill, ESMEE10, esmeedekorte, 2022-07-11",
    "@theofficialsafira, BBROSSI, renkabenka, 2022-07-11",
    "@theofficialsafira, BBMISS, klaraasworld, 2022-07-11",
    "@kidsbrandstore, SHAE-LYNNENDEENA20, adamdeena2000, 2022-07-11",
    "@kidsbrandstore, Jade-V20, jade.lauren_2girls, 2022-07-11",
    "@veromoda, ilse15, ilsebloemendal, 2022-07-11",
    "@hunkemoller, BBHKMKIMMIE15, kimvdpols, 2022-07-11",
    "@hunkemoller, BBHKMRU, measstime, 2022-07-11",
    "@tessvfashion, FLEUR10, fleurelisabethh, 2022-07-11",
    "@tessvfashion, VERONIQUE10, veroniquevalkenburg, 2022-07-11",
    "@gutsgusto, VIVIENNE20, madelinevivienne, 2022-07-11",
    "@mimamsterdam, MAASFLEUR20, fleurmaas_, 2022-07-11",
    "@nakdfashion, naomi20, naomivaneeren_, 2022-07-11",
    "@nakdfashion, lottew20, lotte.wullink, 2022-07-11",
    "@nakdfashion, Mira20, miraennen, 2022-07-11",

    "@loavies, MARTHACSUMMER20, officialmarthac, 2022-07-10",
    "@gutsgusto, JANELLE20, janelle_framery, 2022-07-10",
    "@nakdfashion, annemiek20, annemiekhummelink, 2022-07-10",
    "@nakdfashion, CAMILLEM20, camillemontagnac, 2022-07-10",
    "@nakdfashion, missaljel20, missaljel, 2022-07-10",
    "@bellini.fashion, PASCALLE10, kuss.pas, 2022-07-10",
    "@themusthaves, Hannah15, hannahdb_, 2022-07-10",
    "@sheinofficial, liafailw15, liafailwijnen, 2022-07-10",
    "@loavies, MEDINALETICA-20, medinaletica, 2022-07-10",
    "@lleajewels, LOUISE10, louisevandermeijs, 2022-07-10",
    "@loavies, MILLY.EMM-20, milly.emm, 2022-07-10",
    "@loavies, LORAINEVANLOG-20, lorainevanlog, 2022-07-10",
    "@wasgeluk, PATRICIA10, patricia_paay, 2022-07-10",
    "@loavies, 20-NATHALIE, nathalieejw, 2022-07-10",

    "@nakdfashion, bloemendal20, ilsebloemendal, 2022-07-09",
    "@nakdfashion, bennett20, rosettabennett, 2022-07-09",
    "@gutsgusto, VALERIE20, valerie_s_secret, 2022-07-09",
    "@gutsgusto, Elmessa20, elmessa__, 2022-07-09",
    "@loavies, COUNTLESSSHADES-20, countlessshades, 2022-07-09",
    "@hellofreshnl, HELLOKIMBERLY75, kimandthekids, 2022-07-09",
    "@loavies, 20-ITSJUSTTIX, itsjusttix, 2022-07-09",
    "@nakdfashion, Lindivh20, lindivh, 2022-07-09",
    "@loavies, LOTTE.WULLINK-20, lotte.wullink, 2022-07-09",
    "@trendhim, RACHEL15, by.rachellx, 2022-07-09",
    "@loavies, ELINESUM20, adalla.99, 2022-07-09",
    "@idealofsweden, BBBDARIA, daschabeu, 2022-07-09",
    "@layzin_skin, Emilie15, emilie.terloo, 2022-07-09",
    "@desenio, XLILY45, dianegroenhof, 2022-07-09",
    "@loavies, 20AUKJEBERGMAN, aukjebergman, 2022-07-09",
    "@idealofsweden, Dil15, diliane.kwadijk, 2022-07-09",
    "@kidsbrandstore, chamee20, chameebarkmanx, 2022-07-09",
    "@loavies, XMELANIEVANDIJK-20, xmelanievandijk, 2022-07-09",
    "@loavies, MARLIE_XX-20, marlie_xx, 2022-07-09",
    "@dlsport, JASMIJNK15, jasmijnkremer, 2022-07-09",
    "@nakdfashion, Annefloor20, annefloorx, 2022-07-09",
    "@aladdindemusicalnl, LOTTE15, liefslotte, 2022-07-09",

    "@icaniwill, JESSICAK20, jessicakuijpers, 2022-07-08",
    "@nakdfashion, 20XBB53K, sylvana.elling, 2022-07-08",
    "@loavies, JULLELOVED20, eiljntrc, 2022-07-08",
    "@lovingtanofficial, KIMBERLYLOVE, xkiimberly, 2022-07-08",
    "@nakdfashion, medina20, medinaletica, 2022-07-08",
    "@stronger, DANIQUE20, wanderwithdanique, 2022-07-08",
    "@sheinofficial, Fabiennex15, stephaniefabiennex, 2022-07-08",
    "@loavies, BESTOFJAY_-20, bestofjay_, 2022-07-08",
    "@veromoda, lunavdbosch15, lunavdbosch_, 2022-07-08",
    "@tessvfashion, SAM10, xsam_xm, 2022-07-08",
    "@loavies, LISANNE-20, lisanne.blonk, 2022-07-08",
    "@beautoday_official_store, ROSALIA10, rosalia_guzman_9, 2022-07-08",
    "@nakdfashion, ninaa20, ninaa_mk, 2022-07-08",
    "@osloskinlab, lizzy, lizzyvdligt, 2022-07-08",
    "@veromoda, sheranie15, sheraniex, 2022-07-08",
    "@loavies, FLEURDIJKSTRA-20, fleurdijkstra_, 2022-07-08",
    "@idealofsweden, SENTA, sentajanssen, 2022-07-08",
    "@hunkemoller, BBHKMTINNK, tinkapell, 2022-07-08",
    "@stronger, kleijn20, manonkleijnx, 2022-07-08",
    "@loavies, Mariskaloved, mariska.van.es, 2022-07-08",
    "@nakdfashion, mariska20, mariska.van.es, 2022-07-08",
    "@loavies, LOTTEVANVONDEREN, lottevanvonderen, 2022-07-08",
    "@uwantisell, WENDIEXX, wendievlaar, 2022-07-08",
    "@nakdfashion, jasmijn20, jasmijnmarcus, 2022-07-08",

    "@nakdfashion, CAMPBELL20, campbellblairr, 2022-07-07",
    "@idealofsweden, BBMARTAEXTRA, martaswiggers, 2022-07-07",
    "@nakdfashion, marteyh20, marteyh, 2022-07-07",
    "@geurwolkje, ROBIN10, robinhenneke.jpeg, 2022-07-07",
    "@loavies, XSILKELOVED20, silke.carpentier, 2022-07-07",
    "@beaybl, DEMI, demivthuil, 2022-07-07",
    "@hellofreshnl, HELLOCHARLOTTE, charlottejanssen94, 2022-07-07",
    "@softtonesnl, MICHELLE10, michelleterlinden, 2022-07-07",
    "@gutsgusto, WILENTIEN20, tienvanwil, 2022-07-07",
    "@foradelie, LOVEELISE, elise.bak, 2022-07-07",
    "@hellofreshnl, HELLOCLAUDINE75, claudinebuisman, 2022-07-07",
    "@loavies, ROCHELLE-20, rochellehondijk, 2022-07-07",
    "@sunny.cords, GABRIELA20, gabrieladegraaf, 2022-07-07",
    "@loavies, XMELANIEVANDIJK20, xmelanievandijk, 2022-07-07",
    "@natuurlijkpresteren.nl, Melanie10, mln_.x, 2022-07-07",
    "@sheinofficial, JulieeD15, eiljntrc, 2022-07-07",
    "@sunny.cords, FEMKE20, femke.vermaas, 2022-07-07",
    "@becreativemakeup, NLD-KAE-BE, kaesutherland, 2022-07-07",
    "@lyko, zoey20, zoey_looij, 2022-07-07",
    "@joomnl, joomnl, cheyennech.x, 2022-07-07",

    "@loavies, DAPHNEAHR-20, daphneahr, 2022-07-06",
    "@nakdfashion, vollzeitmami20, twinannii, 2022-07-06",
    "@gutsgusto, ALINA20, alinaa_slz, 2022-07-06",
    "@loavies, ROMYREINDERS_-20, romyreinders_, 2022-07-06",
    "@nakdfashion, 20XBBR4G, theburguesinha, 2022-07-06",
    "@loavies, LISANNE.BLONK-20, lisanne.blonk, 2022-07-06",
    "@curlystar_products, Laura10, curlystar_products, 2022-07-06",
    "@hellofreshnl, HELLOPASTEL75, thepastelsuitcase, 2022-07-06",
    "@haarspullen.nl, MAIKE5, maikebeunk, 2022-07-06",
    "@loavies, MERLEAMANDA-20, merleamanda, 2022-07-06",
    "@valachi.nl, BYRACHELXVALACHI, by.rachellx, 2022-07-06",
    "@withasmileveneers, michellem50, michellemiddelman, 2022-07-06",
    "@idealofsweden, rmdnbs10, rmdnbs, 2022-07-06",
    "@seafancy_official, robinhenneke.jpeg-7, robinhenneke.jpeg, 2022-07-06",
    "@loavies, COCOCHLOE__-20, cocochloe__, 2022-07-06",

    "@loavies, FLEURDIJKSTRA_-20, fleurdijkstra_, 2022-07-05",
    "@nakdfashion, 20XBBWXT, hazalkalkan_, 2022-07-05",
    "@chiquelle, NINA20, ninaa_mk, 2022-07-05",
    "@gutsgusto, GESSICA20, gessimec, 2022-07-05",
    "@loavies, YAELISABELLE-20, yael.isabelle, 2022-07-05",
    "@loavies, 20XITSJUSTTIX, itsjusttix, 2022-07-05",
    "@nakdfashion, BENEDICTETUNLID20, benedictetunliid, 2022-07-05",
    "@gutsgusto, DAGMARHAARHUIS15, dagmarhaarhuis, 2022-07-05",
    "@loavies, CHAMEEBARKMANX-20, chameebarkmanx, 2022-07-05",
    "@ylor.nl, Britt30, brittwijnne, 2022-07-05",
    "@returntosender_nl, Katja-RTS15, katjaschuurman, 2022-07-05",
    "@nakdfashion, kellyx20, kheeell, 2022-07-05",
    "@theofficialsafira, BBMONOCHROME, martaswiggers, 2022-07-05",

    "@loavies, ROCHELLEHONDIJK-20, rochellehondijk, 2022-07-04",
    "@lyko, xdemi20, deminugteren, 2022-07-04",
    "@roetzbikes, saskiaweerstand&roetz, saskiaweerstand, 2022-07-04",
    "@nakdfashion, kellyh20, kellyhamelijnck, 2022-07-04",
    "@tessvfashion, kelly10, kheeell, 2022-07-04",
    "@nakdfashion, louwaars20, michellelouwaars, 2022-07-04",
    "@nakdfashion, Emiliet20, emilie.terloo, 2022-07-04",
    "@berlookofficial, Femke15, femkezoe, 2022-07-04",
    "@violaspatisserie, TESKE15, teskedeschepper, 2022-07-04",
    "@geurwolkje, EVA10, eef_dgn, 2022-07-04",
    "@sheinofficial, SKrosalia, rosalia_guzman_9, 2022-07-04",
    "@tally_weijl, TW4BDC, rosalia_guzman_9, 2022-07-04",
    "@defensiv.nl, RACHEL15, by.rachellx, 2022-07-04",

    "@myjewellery, 15-FABIENNE, fabiennedavelaar, 2022-07-03",
    "@nakdfashion, Evelien20, anthonisevelien, 2022-07-03",
    "@gutsgusto, SARAHRUTH20, its_sarahruth, 2022-07-03",
    "@idealofsweden, zoex10, zoeoerlemans, 2022-07-03",
    "@nakdfashion, ANNARIKE20, annarikeroberte, 2022-07-03",
    "@loavies, DIANAPER20, dianaper_, 2022-07-03",
    "@hunkemoller, HKMBBHKELLY15, kellyhamelijnck, 2022-07-03",
    "@rihoas_official, michelle, michellemiddelman, 2022-07-03",
    "@tessvfashion, DAPHNE10, daphnevanbuerink, 2022-07-03",
    "@loavies, IRISEIGENHUIS-20, iriseigenhuis, 2022-07-03",
    "@hunkemoller, BBHKMTIP, tinkapell, 2022-07-03",
    "@leolive, NONSTOPNIKKI15, nonstopnikki.nl, 2022-07-03",
    "@tessvfashion, NIKKI10, nonstopnikki.nl, 2022-07-03",
    "@hellofreshnl, HELLODIANE75, dianegroenhof, 2022-07-03",
    "@loavies, LAMYNASPINDER-20, lamynaspinder, 2022-07-03",

    "@zaful, beach5, evaofficialnl, 2022-07-02",
    "@loavies, CHARLIEVANGORKUMM-20, charlievangorkumm, 2022-07-02",
    "@stronger, ROSALIE, rosalie, 2022-07-02",
    "@loavies, SHELCYCARPENTIERX20, shelcycarpentier, 2022-07-02",
    "@noppiesofficial, ZOMER15, kimmkroes, 2022-07-02",
    "@zaful, mvd30, xmelanievandijk, 2022-07-02",
    "@stronger, DAPHNEMH20, daphne.m.h, 2022-07-02",
    "@philotesofficial, ANNARIKE20, annarikeroberte, 2022-07-02",
    "@australiangoldeurope, AG10, xkiimberly, 2022-07-02",
    "@nakdfashion, dyonne20, xdyonnex, 2022-07-02",
    "@loavies, 20XFEMKEZOE, femkezoe, 2022-07-02",
    "@satinbeautycollection, bonitabodden15, bonitabodden, 2022-07-02",
    "@loavies, Anthonisevelienx20, anthonisevelien, 2022-07-02",
    "@lyko, brittw20, brittwijnne, 2022-07-02",
    "@idealofsweden, pastel10, thepastelsuitcase, 2022-07-02",

    "@nakdfashion, ismerveu20, ismerveu, 2022-07-01",
    "@gutsgusto, MARITKRAMER20, maritkramer_, 2022-07-01",
    "@gutsgusto, MARI20, mari_tz1, 2022-07-01",
    "@loavies, 20XFLEURDIJKSTRA_, fleurdijkstra_, 2022-07-01",
    "@nakdfashion, 20XBBCTG, rute_barreto, 2022-07-01",
    "@nakdfashion, 20XBBAS7, dsslight, 2022-07-01",
    "@icaniwill, MANONK20, manonkleijnx, 2022-07-01",
    "@romwe, michellem, michellemiddelman, 2022-07-01",
    "@canonnederland, CANONFRENDZ, mariska.van.es, 2022-07-01",
    "@tessvfashion, MERLE10, merleamanda, 2022-07-01",
    "@itslovaly, itslovaly20, lorainevanlog, 2022-07-01",
    "@hellofreshnl, FRESHANGELA75, angela_aydin_diyar, 2022-07-01",
    "@sheinofficial, SSV3576, zoey_looij, 2022-07-01",
    "@veromoda, 20rmdnbs, rmdnbs, 2022-07-01",

    "@oralb_nederland, MASCHAIO, beautygloss, 2022-06-30",
    "@idealofsweden, SUYINDIA10, indiasuy, 2022-06-30",
    "@loavies, MANONMOSTLOVED20, manondelang, 2022-06-30",
    "@sisifulofficial_, ROSALIA, rosalia_guzman_9, 2022-06-30",
    "@micas.official, Rosal??a12, rosalia_guzman_9, 2022-06-30",
    "@veromoda, Lisapijnacker20, lisaapijnacker, 2022-06-30",
    "@emmiol_store, crdr18, crdr.samira, 2022-06-30",
    "@parfumado, BO50, bowilkes, 2022-06-30",
    "@loavies, Mariskaloved20, mariska.van.es, 2022-06-30",
    "@loavies, DEMIMOSTXLOVED20, yung.demi, 2022-06-30",
    "@hunkemoller, BBHKMHKELLY15, kellyhamelijnck, 2022-06-30",
    "@daily7kids, DEBBIE25, debbiedhillon, 2022-06-30",
    "@tessvfashion, MARTINE10, martinemaureen, 2022-06-30",

    "@nakdfashion, BURKE20, nxdineburke, 2022-06-21",
    "@gutsgusto, MARLIE20, marlie_xx, 2022-06-21",
    "@myjewellery, 15-RENEE, reneenatassja, 2022-06-21",
    "@loavies, COCOCHLOE__X20, cocochloe__, 2022-06-21",
    "@naturesfinest, CHARLOTTEJ20, charlottejanssen94, 2022-06-21",
    "@nakdfashion, Nugteren20, deminugteren, 2022-06-21",
    "@icaniwill, JESSICAK10, jessicakuijpers, 2022-06-21",
    "@loavies, STACEEYYXX20, staceeyyx, 2022-06-21",
    "@loavies, ROSALIALOVED20, rosalia_guzman_9, 2022-06-21",
    "@babezonlineboutique.nl, Sofie15, sofiegraafland, 2022-06-21",
    "@icaniwill, Demivt10, demivthuil, 2022-06-21",
    "@lievely.nl, jasmijn15, jasmijnmarcus, 2022-06-21",

    "@nakdfashion, zolaamsen20, zolaamsen, 2022-06-20",
    "@loavies, LAURAHORDIJK_X20, laurahordijk_, 2022-06-20",
    "@loavies, 20SANNEMOSTLOVED, sannvandijk, 2022-06-20",
    "@myjewellery, 15-janelle, janelle_framery, 2022-06-20",
    "@chiquelle, LUCA20, lucaaa.xx, 2022-06-20",
    "@gutsgusto, MADELEINE20, li_madeleine, 2022-06-20",
    "@gutsgusto, LIEKEDEB20, liekedeb.nl, 2022-06-20",
    "@gutsgusto, CASSY20, cassy_smn, 2022-06-20",
    "@loavies, EVELIENLOVED20, anthonisevelien, 2022-06-20",
    "@nakdfashion, xmylifeasaylax20, xmylifeasayla, 2022-06-20",
    "@simplystyle_co, Summer2022, mascha.danique, 2022-06-20",
    "@nakdfashion, friederich20, verena.friederich, 2022-06-20",
    "@ginatricot, ANNARIKE20, annarikeroberte, 2022-06-20",
    "@lingadore_official, FLEUR15, fleurmaas_, 2022-06-20",
    "@idealofsweden, BBWIETSKANNA, wietske.ypma, 2022-06-20",
    "@editedofficial, R20JUNE, moderosaofficial, 2022-06-20",
    "@veromoda, joycebloemendaal20, joycebloemendaal, 2022-06-20",
    "@divain_nl, BBDIANE5, dianegroenhof, 2022-06-20",
    "@nakdfashion, LOESJE20, loesjerambaldo, 2022-06-20",
    "@fksports.nl, DANTHE10, danthescholtenx, 2022-06-20",
    "@tessvfashion, HANNAN10, hannahdb_, 2022-06-20",
    "@luxuryforprincess, DAMIET, damiet, 2022-06-20",

    "@loavies, 20ANNAMOSTLOVED, annastokkel, 2022-06-19",
    "@nakdfashion, clarafrcs20, claraa.frcs, 2022-06-19",
    "@myjewellery, 15-SHANIA, shania_merien, 2022-06-19",
    "@nakdfashion, 20XBB4AA, renaciuki, 2022-06-19",
    "@loavies, CHAMEEMOSTLOVED20, chameebarkmanx, 2022-06-19",
    "@kidsbrandstore, BIRTE20, birtedirksx, 2022-06-19",
    "@gutsgusto, ANGELAJAKAJ20, angelajakaj, 2022-06-19",
    "@sheinofficial, Miche15off, michellemiddelman, 2022-06-19",
    "@hofvansalland, MAIKE10, maikebeunk, 2022-06-19",
    "@loavies, FLEURDIJKSTRA_X20, fleurdijkstra_, 2022-06-19",
    "@idealofsweden, greenshades, countlessshades, 2022-06-19",
    "@littlelegendsnl, CHANNAH, channahkoerten, 2022-06-19",
    "@farfetch, NOOSHIN10, annanooshin, 2022-06-19",
    "@veromoda, Melanievandijk20, xmelanievandijk, 2022-06-19",

    "@nakdfashion, rosaliaguzmanx20, rosalia_guzman_9, 2022-06-18",
    "@loavies, KANILURE20, kanilure, 2022-06-18",
    "@chiquelle, DJUNA20, djunabdatthijn, 2022-06-18",
    "@gutsgusto, VERONIKA20, veronika.sndnr, 2022-06-18",
    "@gutsgusto, MOMLIFE20, jasmin_momlife, 2022-06-18",
    "@loavies, Cass20, cassndras, 2022-06-18",
    "@sheinofficial, SSV3558, romeescholtenx, 2022-06-18",
    "@myjewellery, 15-ELLIS, elliselbersen, 2022-06-18",
    "@nakdfashion, cassandrapolito20, cassandra_polito, 2022-06-18",
    "@myproteinnl, LARISSA, larissavanmeerten, 2022-06-18",
    "@nakdfashion, 20XBBUSJ, vlada_rodikevich, 2022-06-18",
    "@idealofsweden, BBDIANE10, dianegroenhof, 2022-06-18",
    "@desenio, XDI, dianegroenhof, 2022-06-18",
    "@desenio, xtiff2022, familiehummel, 2022-06-18",
    "@idealofsweden, bblenteww, familiehummel, 2022-06-18",
    "@twistshakebaby, 20dianegroenhof, dianegroenhof, 2022-06-18",
    "@paulie__pocket, Leslie15, leslie_keijzer, 2022-06-18",
    "@ikeanederland (trolleys), Florine22, florinecmh, 2022-06-18",
    "@theofficialsafira, BBNVEENVLIET, naomi_veenvliet, 2022-06-18",

    "@loavies, ANNABEL20, annabelpesant, 2022-06-17",
    "@gutsgusto, SHIRLEYMETS20, shirleymets.nl, 2022-06-17",
    "@nakdfashion, evaofficial20, evaofficialnl, 2022-06-17",
    "@gutsgusto, MOMANDBOYS20, mom.and3boys, 2022-06-17",
    "@nakdfashion, RobinH20, robinhenneke.jpeg, 2022-06-17",
    "@sheinofficial, SSV182, xisabel.kr, 2022-06-17",
    "@idealofsweden, BBBDARIA, daschabeu, 2022-06-17",
    "@nakdfashion, Zoey20, zoey_looij, 2022-06-17",
    "@nakdfashion, chantalb20, chantbaltes, 2022-06-17",
    "@hairlust, 20KIM, kimjacobs, 2022-06-17",
    "@maxicosi_eu, JOSH10, joshveldhuizen, 2022-06-17",
    "@nakdfashion, Cheyennechx20, cheyennech.x, 2022-06-17",
    "@loavies, AUKJEBERGMAN20, aukjebergman, 2022-06-17",
    "@armedangels, ROSALIE_15, rosalie, 2022-06-17",

    "@gutsgusto, KINDOFB20, kind_of_b, 2022-06-16",
    "@nakdfashion, zoeoerlemansx20, zoeoerlemans, 2022-06-16",
    "@loavies, 20JANICE, janicechantel, 2022-06-16",
    "@idealofsweden, Dianapereira, dianaper_, 2022-06-16",
    "@chiquelle, CHANTAL20, cwrekenhorst, 2022-06-16",
    "@nakdfashion, lisanneblonkx20, lisanne.blonk, 2022-06-16",
    "@hellofreshnl, HELLOLINDSEY75, lindseybeljaars, 2022-06-16",
    "@nakdfashion, sylvanadj20, sylvanadejong, 2022-06-16",
    "@loavies, LUNALISSENS20, lunalissens, 2022-06-16",
    "@nakdfashion, Jaimyblomx20, jaimy.blom, 2022-06-16",
    "@nakdfashion, millyemmx20, milly.emm, 2022-06-16",
    "@nakdfashion, yasminmerseX20, yasminmerse, 2022-06-16",
    "@icaniwill, KARAV20, karavrielink, 2022-06-16",
    "@nakdfashion, 20XBB4ES, daschabeu, 2022-06-16",
    "@bolt, SABRINA10, sabrinaputrix, 2022-06-16",
    "@saywhatbottles, MELANIE20, melanie_baeten_, 2022-06-16",
    "@idealofsweden, 10VANDENHOEK, rebeccavandenhoek, 2022-06-16",
    "@hunkemoller, BBHKMKELLYH15, kellyhamelijnck, 2022-06-16",
    "@nakdfashion, Macyymichellex20, macyymichelle, 2022-06-16",
    "@thehappysoaps, ANGELA20, angela_aydin_diyar, 2022-06-16",
    "@nakdfashion, naomiekampingax20, naomiekampinga, 2022-06-16",
    "@gostudent_bijles, Diesna10X, diesnaloomans, 2022-06-16",
    "@loavies, lottevanvonderen20, lottevanvonderen, 2022-06-16",

    "@nakdfashion, sorhelenex20, sorhelene, 2022-06-15",
    "@myjewellery, 15-HANBYUL, hanbyulx_, 2022-06-15",
    "@loavies, MANONDELANG20, manondelang, 2022-06-15",
    "@loavies, CHELSEYMOSTLOVED20, chelseyemily__, 2022-06-15",
    "@kibafashion, Maxine15, maxinerouwendal, 2022-06-15",
    "@loavies, ZOEOERLEMANS20, zoeoerlemans, 2022-06-15",
    "@nakdfashion, MEDINA20, medinaletica, 2022-06-15",
    "@superdry, SOPHIE15, sophiemilzink, 2022-06-15",
    "@gutsgusto, KAMILA20, kamilasara_k, 2022-06-15",
    "@loavies, SHELCYCARPENTIER20, shelcycarpentier, 2022-06-15",
    "@myjewellery, 15Fabienne, fabienne.bethmann, 2022-06-15",
    "@mvmtforher, SHARONVDW15, sharonvdw__, 2022-06-15",
    "@posterstore, Brittwijnne, brittwijnne, 2022-06-15",
    "@canonnederland, KELLYPX, kellycaresse, 2022-06-15",
    "@womensbest, kleijn20, manonkleijnx, 2022-06-15",

  ];
}
