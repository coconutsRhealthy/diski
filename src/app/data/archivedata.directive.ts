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

  public static getUniqueWebshops(): string[] {
    const webshopsSet = new Set<string>();

    this.dataArrayArchive.forEach(entry => {
      const webshop = entry.split(',')[0].trim();
      webshopsSet.add(webshop);
    });

    return Array.from(webshopsSet).sort();
  }

  static dataArrayArchive = [
    "shein, 24q3sophiexx, 15, __sophie.louisee, 09-26",
    "nakdfashion, deler, 20, mdeler, 09-26",
    "loavies (iig 26sep), FLEUR20, 20, fleurnijbacker, 09-26",
    "desenio, XGELD, 30+10, wgk, 09-26",
    "ginatricot, amber20, 20, amberbartelings_tiktok, 09-26",
    "lasisters, fleurnijbacker, 10, fleurnijbacker_tiktok, 09-26",
    "gutsgusto, PERCH15, 15, mrs.perch, 09-26",
    "bodyandfit.com, BBMAE10, 10, living.mae.life, 09-26",
    "lookfantastic, VERONIKA, 11, beauty.co_test, 09-26",
    "gymshark, JAMNJAR, 10, jam_n_jar, 09-26",
    "merodacosmetics, ELLE20, 20, merodacosmetics, 09-26",
    "photowall_sweden, DIESNALOOMANS20, 20, diesnaloomans, 09-26",
    "otrium, SORRYPM20, 20, honey, 09-26",
    "loopearplugs, LOOPXJAMI15, 15, thejamijones, 09-26",
    "esn, Michi, 10, michel_witting, 09-26",
    "ginatricot, mirthe20, 20, mirthe.postma_tiktok, 09-26",
    "maniacnails, CAITLIN15, 15, caitlindevisser, 09-26",
    "geurwolkje, romy15, 15, rcvdl, 09-26",
    "quotrell, CURTISFOX10, 10, curtissfoxx, 09-26",
    "getdrezzed, 10manon, 10, manonkleijnx, 09-26",
    "emmasleepnl, FLORINE, 10, florinehofstee, 09-26",
    "nakdfashion, Bourtsin, 20, bourtsin_, 09-26",
    "aybl, SAS, 10, sashascholtens, 09-26",
    "maniacnails, LEONIE15, 15, lterveld, 09-26",
    "mockberg, ZOE15, 15, zoeoerlemans_tiktok, 09-26",
    "gutsgusto, AMELIE15, 15, amelie_weissenberger, 09-26",
    "gutsgusto, LOUISA15, 15, louisasth, 09-26",
    "famousstore, Lize10, 10, lizevanderburg, 09-26",
    "emmasleepnl, JEROENH, 10, jeroenhertzberger, 09-26",
    "esn, CERYS, 10, healthycerys, 09-26",
    "emmasleepnl, AMANDA10, 10, polderliving, 09-26",
    "bjornborg, KIONA20, 20, kiona_amelia, 09-26",
    "paulie__pocket, Jennifer15, 15, binnenkijkenbij_jendezwart, 09-26",
    "emmasleepnl, EMMASAMANTHA10, 10, interior.by.samantha, 09-26",
    "lightofthemoon.nl, ELINE10, 10, elineelansinkk_tiktok, 09-26",
    "geurwolkje, vanhaasteren15, 15, karinvanhaasteren, 09-26",
    "strongeaglewear.nl, VALERY, 10, http._valery, 09-26",
    "koro-shop.nl, Mindgains, 5, mindgains_, 09-26",
    "ginatricot, LAVI20, 20, rabattkodernorway, 09-26",
    "ginatricot, victoria20, 20, victoriasstil, 09-26",
    "gymshark, CHARLOTTEL, 10, lottiealicelamb, 09-26",
    "bjornborg, HENRIK20, 20, henrikutne, 09-26",
    "goedgemerkt, GG-FP10, 10, favoriete_plekje, 09-26",
    "feminine-store.nl, FLOOR15, 15, floorkraay_tiktok, 09-26",
    "bjornborg, evelien20, 20, anthonisevelien, 09-26",
    "famousstore, Shirleyx10, 10, shirleyvzx, 09-26",
    "paulie__pocket, BEATE15, 15, beateofficial, 09-26",
    "gutsgusto, jasmin15, 15, allaboutjjas, 09-26",
    "gutsgusto, CLAUDIA15, 15, claudiaskop, 09-26",
    "shein, caterina324, 15, caterinaes, 09-26",
    "noo.ma, KEE15FALL, 15, keekshuis, 09-26",
    "padsandsecrets.com, EMVROUWERMENT, 10, emvrouwerment, 09-26",
    "versani.nl, debbie15, 15, debbiedhillon, 09-26",
    "ladolcebella.nl, manon15, 15, manonkleijnx, 09-26",
    "panterstore.nl, Marg20, 20, hetismarg, 09-26",
    "verdurgymwear, esmee, 5, esmeelenferink, 09-26",
    "horze.nl, Feline10, 10, felinehoi, 09-26",
    "changelaserclinic, NINA, 40, ninaschotpoort, 09-26",

    "meetmethere, NORWAY15, 15, rabatta, 09-24",
    "shein, ing03, 15, kate.ing, 09-24",
    "nakdfashion, friberg, 20, hannafriberg, 09-24",
    "idealofsweden, BBTEASE, 3f2+15, wgk, 09-24",
    "sellpy, MARIE15, 15, marie_cay, 09-24",
    "desenio, XCENT, 4f2+10, kleinpepertje, 09-24",
    "hunkemoller (> €25), honey-df234t4fvq3y4, 12, honey, 09-24",
    "fashiontiger.nl, shoppingtigerkaylian, 15, kusjeskaylianx_tiktok, 09-24",
    "arket, ARKET14, 14, honey, 09-24",
    "ginatricot, lindsaystacey20, 20, stacceyyx_tiktok, 09-24",
    "gutsgusto, MARINA15, 15, allaboutmaerry, 09-24",
    "hollandandbarrett, LEEFHEBBERS20Q3, 20, laura_dierckx, 09-24",
    "subdued (24sep), FALL20, 20, privemishx_tiktok, 09-24",
    "bodyandfit.com, BBS, 10, step_fit, 09-24",
    "mimamsterdam, XFLOORKRAAY20, 20, floorkraay_tiktok, 09-24",
    "lookfantastic, STUDENTBEANSNL, 13, rabatta, 09-24",
    "gymshark, EMILYSHARP, 10, emilysharp.fitness, 09-24",
    "loopearplugs, LOOPXBEE, 10, mood.kandi, 09-24",
    "flink (va €20 / 1st order), LISAC10, €10, lisa.christinax_tiktok, 09-24",
    "flink (va €20 / 1st order), NOUR10, €10, nourdemirr_tiktok, 09-24",
    "wildrefill, BEUKERS, 20, kellybeukers, 09-24",
    "nakdfashion, xnathalie, 20, nathaliefuerst, 09-24",
    "esn, FITCOACH, 10, fitcoach_michael, 09-24",
    "greenchef.nl, NOORDZIJCHEF, €95, junoordzij, 09-24",
    "myproteinnl, NATH, 34, nathaliehelmer, 09-24",
    "mockberg, LISANNE15, 15, lisanne.blonk, 09-24",
    "geurwolkje, liefslian15, 15, liefslian, 09-24",
    "hellofresh.nl, HF110AARN, €110, aarnsrianne, 09-24",
    "bodyandfit.com, BB10, 10, marit_vermeer_fit, 09-24",
    "aybl, BRANGIE, 10, bradsalem_, 09-24",
    "famousstore, Yoni10, 10, yonivanlooy, 09-24",
    "ginatricot, LUNDGREN20, 20, rabattkodersverige, 09-24",
    "snuggs, LTV25, 25, lterveld, 09-24",
    "secretsales.nl, JOLINE, 10, yuppielifestyle, 09-24",
    "emmasleepnl, ️ANGELA, 10, angelamalestein, 09-24",
    "famousstore, Femkex10, 10, femkedevalk, 09-24",
    "gutsgusto, AUTUMN, vzk, gutsgusto, 09-24",
    "gutsgusto, MYSTYLE15, 15, mystylefiles_, 09-24",
    "gutsgusto, TAMMI15, 15, tammiliko, 09-24",
    "shein, 24hbesha, 15, _esha.x, 09-24",
    "stronger, ESMERALDA20, 20, esmeraldaattema, 09-24",
    "bjornborg, FANNI20, 20, rabattkodersverige, 09-24",
    "parfumado, HOUSTON50, €8, ninahouston_tiktok, 09-24",
    "wildrefill, WILDMARGO, 20, hetismarg, 09-24",
    "shein, 24fwoona, 15, oona_d, 09-24",
    "cloudpillo.nl, SARAHVBH25, 25, sarah_vbh, 09-24",
    "mayafreya.nl, Margo20, 20, hetismarg, 09-24",
    "feminine-store.nl, ELINE15, 15, elineelansinkk_tiktok, 09-24",
    "thecandledust.com, Linda20, 20, lavielalinda, 09-24",

    "zalando, COZYUP15, 15, zalando, 09-22",
    "lookfantastic (22sep), ZONDAG, 25, lookfantastic, 09-22",
    "shein, sugarfw24, 15, blacksugarrrrr, 09-22",
    "otrium (iig 22sep), 25EXTRA, 25, otrium, 09-22",
    "nakdfashion, hesseling, 20, lolahesseling_tiktok, 09-22",
    "idealofsweden, BBSTEEF, 3f2+15, wgk, 09-22",
    "fashiontiger.nl, backtoschoolhannah, 15, hanlouwers_tiktok, 09-22",
    "ginatricot, parel20, 20, pareljansen_tiktok, 09-22",
    "nagelstad.nl, ELINE10, 10, elineelansinkk_tiktok, 09-22",
    "gutsgusto, ANNIKA15, 15, annikasofiie, 09-22",
    "bodyandfit.com, bbjanna19, 10, janna_tlifestyle, 09-22",
    "prozis, PEPER, 10, kleinpepertje, 09-22",
    "gymshark, OLIVIAS, 10, olivia__sophie, 09-22",
    "rienthelabel, EMMAGARDESLEN, 10, emmagardeslen, 09-22",
    "veromoda, JELNL20, 20, jel_nl, 09-22",
    "topbloemen, TOPCLAUDIA, €3.50, beafitmom.nl, 09-22",
    "nakdfashion, Stellaa, 20, stellaelena, 09-22",
    "esn, ERIN, 10, erinnfitness, 09-22",
    "ginatricot, MAJA20, 20, rabatt.inspo, 09-22",
    "mockberg, MAYC15, 15, may_cate, 09-22",
    "flaatch.nl, BENTE20, €20, itsmebenteee_tiktok, 09-22",
    "ginatricot, LINN20, 20, rabattkode.norge, 09-22",
    "shein, 24q3shob, 15, shobizstyle, 09-22",
    "topbloemen, TOPnicolekevin, €3.50, lifeoftripletgirls, 09-22",
    "myproteinnl, SAVANNAH, 34, savannahprez, 09-22",
    "trendcarpet, CASANOVI20, 20, casa.novi_, 09-22",
    "achateshop.com, SARAH20, 20, sarahliebregts, 09-22",
    "geurwolkje, Harberhouse15, 15, harberhouse_1, 09-22",
    "aybl, HUDA, 10, hudabubbaaa, 09-22",
    "burga, CHERRYSMXNL, 15, cherriemommie, 09-22",
    "bjornborg, LOTTE20, 20, mama.lotje, 09-22",
    "finaste.nl, SHOP15, 15, finaste.nl, 09-22",
    "mayafreya.nl, Rose20, 20, roseklerenzooi, 09-22",
    "didis-boutique.nl, KAYLIAN20, 20, kusjeskaylianx_tiktok, 09-22",
    "lamptwist, LIEK5, 5, lieks_home, 09-22",

    "iciparisxl, NLD-FFSEPTEMBER20, 20, iciparisxl, 09-20",
    "meetmethere, GERMANY15, 15, wgk, 09-20",
    "nakdfashion, ninajellinatkt, 20, nina.jellina_tiktok, 09-20",
    "shein, abidrinkellq3, 15, abidrinkell, 09-20",
    "ginatricot, NOORO20, 20, noor.oostenveld_tiktok, 09-20",
    "gutsgusto, THEGIRL15, 15, thegirlcalledsophie, 09-20",
    "bodyandfit.com, pien10, 10, pienhersman, 09-20",
    "lookfantastic, ELLELF, 11, rabatta, 09-20",
    "neonail (unique), lekkerweekend, 20, elisemilou, 09-20",
    "desenio, XSTAAT, 4f2+10, kleinpepertje, 09-20",
    "wildlands emmen, wilentien25, 25, tienvanwil, 09-20",
    "gymshark, GLJ, 10, gljfitnessuk, 09-20",
    "bijoubrigitte, Noor, 20, noordegroot, 09-20",
    "paulaschoice.nl, ANNA20, 20, annanooshin, 09-20",
    "esn, EMR, 10, ellamaerayner, 09-20",
    "snuggs, JUDITH25, 25, judithvanderwijst, 09-20",
    "topbloemen, TOPROMY, €3.50, romykoldenhof_, 09-20",
    "myproteinnl, MARISKA, 34, _spaghettinoodlesmaris_, 09-20",
    "factormeals_nl, 40factorchannah, 25, channahkoerten, 09-20",
    "famousstore, willemijn10, 10, willemijnsb_tiktok, 09-20",
    "quotrell, NAOMI10, 10, naomivaneeren_, 09-20",
    "skinforskin.nl, MANON15, 15, manon_kool, 09-20",
    "nakdfashion, wittek, 20, rabattkodersverige, 09-20",
    "otrium (> €60), WEARIT, 25, honey, 09-20",
    "aybl, sunee, 10, nurse_sunee, 09-20",
    "fittasticsportswear, Naomib10, 25, naomi.borghart_, 09-20",
    "snuggs, MYRA20, 20, myraofficieel, 09-20",
    "ginatricot, ENGLAFELICIA20, 20, gratispandan, 09-20",
    "famousstore, Bonita10, 10, bonita.edk, 09-20",
    "ginatricot, IVARSSON20, 20, josefineiivarsson, 09-20",
    "ginatricot, MARIAS20, 20, mariasalibaa, 09-20",
    "myproteinnl, ANNICK, 12, annickzeldenrijk, 09-20",
    "burga, JITSKEX15, 15, jitskeschaap_tiktok, 09-20",
    "stronger, veronique20, 20, veroniquevalkenburg, 09-20",
    "skinforskin.nl, ELIANNE15, 15, eliannezweipfenning, 09-20",
    "begolden, ELENA20, 20, elenavanvoorst__tiktok, 09-20",
    "novalora.nl, WELKOM10, 10, novalora.cosmetics_tiktok, 09-20",
    "fitpreps.nl, ANNEBEL, 10, annebelvisscher, 09-20",
    "rovey.nl, KAYLIAN10, 10, kusjeskaylianx_tiktok, 09-20",
    "cmyclothes.store, FAMKE10, 10, famkehanna_tiktok, 09-20",
    "b-extra.eu, Marit10, 10, marit_vermeer_fit, 09-20",
    "emodest.org, seyda15, 15, seydaakcaaa, 09-20",
    "daily-image.nl, JANINE15, 15, janine_lomulder, 09-20",
    "fashion-rebels.nl, myra15, 15, myraofficieel, 09-20",

    "tessv (19 sep), TESSV15, 15, linda_meiden, 09-19",

    "shein, 24q3alicia, 15, aliciacrowe_x, 09-18",
    "asos, LAYERS, 30, asos, 09-18",
    "nakdfashion, visanji, 20, themonoclemuse, 09-18",
    "martvisser.nl, ANOUSKA10, 10, anouskawink, 09-18",
    "desenio, XMENU, 40+10, kleinpepertje, 09-18",
    "fashiontiger.nl, backtoschoolfamke, 15, famkehanna_tiktok, 09-18",
    "ginatricot, EMANUPP20, 20, rabattkodersverige, 09-18",
    "gutsgusto, THUNG15, 15, thu.ngyn, 09-18",
    "bodyandfit.com, Daryl10, 10, darylgoesgym, 09-18",
    "mimamsterdam, marlijneversmim20, 20, marlijn.evers, 09-18",
    "just4kira.com, MYRTHE20, 20, myrthebogie_tiktok, 09-18",
    "snuggs, JUDITH20, 20, judithvanderwijst, 09-18",
    "gymshark, FATIMA, 10, fatima.unia, 09-18",
    "loopearplugs, LOOPXBELLA15, 15, isabelladavis6, 09-18",
    "esn, KONNI, 20, konrad_dyrschka, 09-18",
    "mockberg, KARI15, 15, karivdheide, 09-18",
    "hellofresh.nl, 110HFSARAH, €110, sarah_vbh, 09-18",
    "greenchef.nl, LEONIECHEF, €95, lterveld, 09-18",
    "greenchef.nl, CHEFMONIQUE, €95, moniquenoell, 09-18",
    "myproteinnl, INSA, 10, insaalea, 09-18",
    "only, MYLENE12, 12, mylenefw, 09-18",
    "hellofresh.nl, HF110LAVIE, €110, laviesanne, 09-18",
    "hellofresh.nl, HFNADINE110, €110, interieurfanaad, 09-18",
    "aybl, BRANGIE, 10, angiefit17, 09-18",
    "famousstore, YVON10, 10, yvonnn__tiktok, 09-18",
    "loopearplugs, LOOPXWIL, 15, wilvantien, 09-18",
    "gutsgusto, NATÜRLICH15, 15, natuerlichnele, 09-18",
    "gutsgusto, ELLYM15, 15, itsaboutellly, 09-18",
    "gutsgusto, TINASON15, 15, tinason__, 09-18",
    "myjewellery, MYLISA15, 15, lisaifi, 09-18",
    "otrium (> €150), EXTRA25, 25, otrium, 09-18",
    "gutsgusto, TASMIN15, 15, tasmin.devi, 09-18",
    "bjornborg, HUMLAN20, 20, gratispandan, 09-18",
    "squla, MICHELLEBOLLEN5, €5, michelle_bollen, 09-18",
    "shein, shyanq3, 15, shyanhazel, 09-18",
    "callistaa.nl, Kayleigh10, 10, kayleighkooi_tiktok, 09-18",
    "voxactivewear, MANDY, 10, mandy.koetsier, 09-18",
    "deplay.nl, Celine10, 10, nicefamily_, 09-18",
    "lomabeauty.eu, SARAHL30, 30, sarahliebregts, 09-18",
    "rostig.nl, Charlotte30, €30, charlottejanssen94, 09-18",
    "tezzafashion, megan20, 20, meganveerman, 09-18",
    "lionfitgymwear.com, Lizzy10, 10, lizzylieverst_tiktok, 09-18",
    "mockberg, REENA15, 15, reenajagram_tiktok, 09-18",
    "feminine-store.nl, JULIA15, 15, juliaabuijs_tiktok, 09-18",
    "keyjewels.nl, Eline10, 10, elineelansinkk_tiktok, 09-18",
    "by-kie.nl, jackie15, 15, kusjesvanjackie_tiktok, 09-18",
    "brandbybo.com, Lilly15, 15, lillypink.albers_tiktok, 09-18",
    "viervoeter-shop.nl, EVA10, 10, bengals_dgn, 09-18",

    "zalando, HERFSTVIBE, 15, zalando, 09-16",
    "aimn, STEP25, 25, rabattkode.norge, 09-16",
    "shein, 24q3liana, 15, carolinaleoa, 09-16",
    "nakdfashion, kayleethepass, 20, kayleethepass, 09-16",
    "pinkgellac (16sep), LINDA20, 20, linda_meiden, 09-16",
    "snuggs, ELIZEBEEN, 20, elizebeen, 09-16",
    "ginatricot, ROOSA20, 20, roosamononen, 09-16",
    "gutsgusto, MAREN15, 15, leonie.maren, 09-16",
    "bodyandfit.com, BBilse, 10, ilse_drx, 09-16",
    "mimamsterdam, LUNATVM20, 20, lunatvm_, 09-16",
    "gymshark, PHODI, 10, coach_phod, 09-16",
    "weightworld, WWLEUK, 15, kleinpepertje, 09-16",
    "esn, ANNASOFIA, 20, annasofiaaa___, 09-16",
    "lafaves.nl, VEERLE10, 10, veerlejodieke_tiktok, 09-16",
    "myproteinnl, LUKARSKI, 10, kevinlukarski, 09-16",
    "maniacnails, DENISE15, 15, iamtheknees, 09-16",
    "achateshop.com, MAXIME20, 20, maximemeiland, 09-16",
    "nakdfashion, Deenykae, 20, deeny_kae_, 09-16",
    "nakdfashion, eliane, 20, elianescwfr, 09-16",
    "queentarzi, SHAN20, 20, shandiracorielle_tiktok, 09-16",
    "nakdfashion, luisa, 20, luisa.snd, 09-16",
    "achateshop.com, Mokkels20, 20, sanneghislaine, 09-16",
    "pixum, KIMBERLY20, 20, curlymomm, 09-16",
    "maniacnails, SAVANNAH15, 15, savannahhamming, 09-16",
    "famousstore, schoolready10, 10, julisahulleman, 09-16",
    "secretsales.nl, FASH10, 10, fashionistasdaily.nl, 09-16",
    "hellofresh.nl, HFKELLY110, €110, kellyheruer, 09-16",
    "hellofresh.nl, HF110BOLLEN, €110, michelle_bollen, 09-16",
    "emmasleepnl, RAMSEY10, 10, rda.400mh, 09-16",
    "ginatricot, GABY20, 20, rabatt.inspo, 09-16",
    "berlook, klein22, 22, kleinpepertje, 09-16",
    "ginatricot, toremo20, 20, gratispandan, 09-16",
    "terstal, JEANINE10, 10, bzzonder, 09-16",
    "aliexpress (> €29), FSNL03, €3, aliexpress, 09-16",
    "aliexpress (> €69), FSNL08, €8, aliexpress, 09-16",
    "snuggs, ELYSE20, 20, liefselyse, 09-16",
    "burga, VERENAFXNL, 15, verena.friederich, 09-16",
    "terstal, ESMEE10, 10, esmeevanleijden, 09-16",
    "bjornborg, VANESSA20, 20, vanessa.reinicke, 09-16",
    "bjornborg, IVARSSON20, 20, gratispandan, 09-16",
    "famousstore, Febe10, 10, febeleenen, 09-16",
    "famousstore, Rosanna10, 10, rosanna.jt, 09-16",
    "mimamsterdam, SHOPTINA, 10, mimamsterdam, 09-16",
    "gutsgusto, MARIEYOU15, 15, marieyou__, 09-16",
    "stronger, Alexandra20, 20, golf.alexandra, 09-16",
    "shein, caro7, 15, carolinaleoa, 09-16",
    "burga, catharinax15, 15, catharinaebbing__tiktok, 09-16",
    "otrium (> €150), EXTRA40, €40, otrium, 09-16",
    "emmasleepnl, CATHELIJNE10, 10, cathelijne1twee_tiktok, 09-16",
    "bjornborg, michelle20, 20, michelle_bollen, 09-16",
    "madlady, 9TRBS, 15, murdy__tiktok, 09-16",
    "lightofthemoon.nl, LOTTE10, 10, lottekln_tiktok, 09-16",
    "paulie__pocket, ANOUSKA15, 15, anouskawink, 09-16",
    "resortmolenwaard, JudithMolenwaard5, 5, judith.keijsers, 09-16",
    "coblo.eu, despeelfee10, 10, de_speelfee, 09-16",
    "sieraadmoppie.nl, ANNABEL10, 10, annabelarienne_tiktok, 09-16",
    "veneux, KARLIJN40, 40, karlijn_s_tiktok, 09-16",
    "yoursurprise.nl, YSPMARIT15, 15, marit.anthonissen_tiktok, 09-16",
    "favez.nl, LAUNCH20, 20, jayanna_linsey, 09-16",
    "vialuxury.com, EMMA2024, €10, emmagrootx, 09-16",

    "zalando, GET15OFF, 15, zalando, 09-01",
    "shein, 24q3karine, 15, kkarinnexx, 09-01",
    "ginatricot, TORNBERG20, 20, rabatt.inspo, 09-01",
    "idealofsweden, BBSTU, 15, wgk, 09-01",
    "desenio, XEVER, 40+10, kleinpepertje, 09-01",
    "gutsgusto, ANGELINA15, 15, angelina_haupt, 09-01",
    "nakdfashion, AURELIEP, 20, _aurep, 09-01",
    "pinkgellac, ZARA8, 10, zara.esme_tiktok, 09-01",
    "albelli, KELLYZOMER25, 25, kellybeukers, 09-01",
    "olcaygulsenbeauty, Jeltje20, 20, jel_nl, 09-01",
    "arket, ARKETFRANK, 15+15, honey, 09-01",
    "bodyandfit.com, BFbobbybuilder, 10, bobbybuilder_, 09-01",
    "lookfantastic, SARAVLF, 11, saraverwoerd_tiktok, 09-01",
    "gymshark, KATB, 10, katboesenberg_fit, 09-01",
    "esn, SPIRIT, 20, davidbalevski, 09-01",
    "womensbest, JESSICACG, 10, jesssicagarner, 09-01",
    "dutchies.com, ROWAN10, 10, rowaneckhardt, 09-01",
    "flaatch.nl, FAMKE20, €20, famkehanna_tiktok, 09-01",
    "nakdfashion, andraa, 20, andraantn, 09-01",
    "myproteinnl, JESSICA, 37, jessicakok.nl, 09-01",
    "clearsmile.nl, Dina15, 15, dina.aitbibi_tiktok, 09-01",
    "nakdfashion, ginasch, 20, gina_schneider, 09-01",
    "kaptenandson, BDAY5, 50+5, mira___sofia, 09-01",
    "kaptenandson, BIRTHDAY5, 50+5, niebomatki, 09-01",
    "bodyandfit.com, BBetter, 10, joym._wi, 09-01",
    "ginatricot, GREEN20, 20, rabattkodersverige, 09-01",
    "ginatricot, cvic20, 20, laracvic, 09-01",
    "kaptenandson, FELOISE5, 50+5, feloise_aimee, 09-01",
    "ginatricot, SALIBA20, 20, mariasalibaa, 09-01",
    "gutsgusto, LOLANNA15, 15, lolannaa, 09-01",
    "geurwolkje, Budget15, 15, budgethome, 09-01",
    "aybl, MEGAN10, 10, meganfiit, 09-01",
    "smartphoto.nl, MONIEK35, 35, madebymowie, 09-01",
    "gutsgusto, belly15, 15, bellykanungo, 09-01",
    "gutsgusto, LEONIE15, 15, leonacathrina, 09-01",
    "dutchies.com, NATALIE10, 10, natalievijfhuizen, 09-01",
    "dutchhomelabel, MANON10, 10, stylingbymanonb, 09-01",
    "gutsgusto, VALENTINA15, 15, valentinaa.hc, 09-01",
    "burga, JANICEDXNL, 15, janicechantel, 09-01",
    "gutsgusto, MICHELLE15, 15, m7mmichelle, 09-01",
    "otrium (iig 1sep), SPECIAL30, 30, otrium, 09-01",
    "gutsgusto, LAURABRIJDE15, 15, laurabrijde, 09-01",
    "shein, bmpt09, 15, beatrizmartinsssc, 09-01",
    "stronger, charlotte20, 20, tripwithcharlotte, 09-01",
    "shein, karlijnweek, 15, karlijn_s_tiktok, 09-01",
    "womensbest, CATHY, 10, cat.fds, 09-01",
    "bjornborg, angela20, 20, angelaceline, 09-01",
    "celiqe (airstyler), KIKI40, 40, kikirolfess_tiktok, 09-01",
    "sallandshoeve.nl, kinderkoopjesjager10, 10, kinderkoopjesjager.nl, 09-01",
    "ochama, MARIT, €5, marit.anthonissen_tiktok, 09-01",
    "coblo.eu, huisvoltestosteron10, 10, huis.vol.testosteron, 09-01",
    "bytrendy.nl, Rosan15, 15, rosanneliene_tiktok, 09-01",
    "childrenofthewater, DEE15, 15, dee, 09-01",

    "asos, 25OFF, 25, asos, 08-29",
    "nike (> €100), BTS24, 20, nike, 08-29",
    "shein, gracewearsq3, 15, grace_wears_, 08-29",
    "nakdfashion, nileh, 20, n.ileh, 08-29",
    "desenio, XPRET, 30+10, wgk, 08-29",
    "idealofsweden, BBSAP, 15, wgk, 08-29",
    "ginatricot, JASMIN20, 20, rabattkode.norge, 08-29",
    "gutsgusto, LENIKIND15, 15, lenikind, 08-29",
    "bjornborg, EBBA20, 20, ebbaisacson, 08-29",
    "bodyandfit.com, Francis10, 10, fkweldam, 08-29",
    "pinkgellac, PAMELA8, 10, pamelakroes, 08-29",
    "burga, ESMEEGX15, 15, esmeealissageel_tiktok, 08-29",
    "gymshark, DREAMER, 10, yemiifbbpro, 08-29",
    "loopearplugs, LOOPXJONTE, 10, jontepaviel, 08-29",
    "esn, RYANFLAIR, 20, movewithryanflair, 08-29",
    "lyko, ESMEE25, 25, esmeecox_tiktok, 08-29",
    "bearswithbenefits, MANDYS20, 20, mandyyeganeh, 08-29",
    "myproteinnl, FITGIRL, 37, fitgirlfie, 08-29",
    "ginatricot, Lizzy20, 20, lizzyvdligt, 08-29",
    "bykiefashionstore, NOORTJE15, 15, noortje.derijk_tiktok, 08-29",
    "nakdfashion, alinamaze, 20, alina_maze, 08-29",
    "nakdfashion, katiepeake, 20, _katiepeake, 08-29",
    "loopearplugs, loopxkaseykarlsen, 10, kaseykarlsen, 08-29",
    "terstal, MANON10, 10, manon_kool, 08-29",
    "quotrell, ELINE10, 10, elineelansinkk_tiktok, 08-29",
    "geurwolkje, robinvdkraats15, 15, robbbvdk, 08-29",
    "bjornborg, STINE20, 20, stineroll, 08-29",
    "gutsgusto, AMELIE15, 15, amelie_weissenberger, 08-29",
    "gutsgusto, VERONIKA15, 15, veronika.sndnr, 08-29",
    "stronger, GUUSJE20, 20, guusjewm, 08-29",
    "gutsgusto, SARAHD15, 15, sarah.dmry, 08-29",
    "aybl, EDWARD, 10, edwardgg, 08-29",
    "paulvalentine, LUISA, 33, luisa.snd, 08-29",
    "stronger, CHARISSA20, 20, charissabellamorae, 08-29",
    "shein, abidrinkellq3, 15, abidrinkell, 08-29",
    "terstal, JEL10, 10, jel_nl, 08-29",
    "otrium (app), APP25, 25, otrium, 08-29",
    "finaste.nl, SUN15, 15, finaste.nl, 08-29",
    "paulie__pocket, Marlon-15, 15, allinfashionmusthaves, 08-29",
    "ochama, MANON30, €5, manon.delang_tiktok, 08-29",
    "edgardcooper (1st order), SOPHIE20, 20, sophieousri, 08-29",
    "fashionomi, LILLY10, 10, lillypink.albers_tiktok, 08-29",
    "bissel, LARISSA20, 20, larissaverbon, 08-29",
    "yfood, NOELL-INSTA, 10, noellvandreven, 08-29",
    "relativz.events, NAOMI, €5, naomivaneeren_tiktok, 08-29",
    "tempdrop, afemvrouwerment, 10, emvrouwerment, 08-29",
    "lecloset.fr, ROBIN50, €35, thepastelsuitcase, 08-29",

    "gutsgusto, Marina15, 15, allaboutmaerry, 08-27",
    "shein, parelbts, 15, pareljansen_tiktok, 08-27",
    "albelli, MAIKE25, 25, maikekd, 08-27",
    "nakdfashion, morenabtz, 20, morenabtz, 08-27",
    "desenio, XAWAY, 40+10, kleinpepertje, 08-27",
    "nakdfashion (app) , APP30, 30, rabatt.inspo, 08-27",
    "ibizamode, ibzmodezoey, 10, zoey_looij, 08-27",
    "heyestrid, 2FOR1Guusje, 2f1, guusjewm, 08-27",
    "ginatricot, EMILIA20, 20, rabatt.inspo, 08-27",
    "bodyandfit.com, strongersophie, 10, strongersophie, 08-27",
    "mimamsterdam, LOTTEKLEIN20, 20, lottekln_tiktok, 08-27",
    "lookfantastic, JOY, 11, rabatta, 08-27",
    "vitakruid, NUGGET, 10, wgk, 08-27",
    "gymshark, LISAVANDERVALK, 10, bellavalks, 08-27",
    "mimamsterdam, XKAYLEIGHx20, 20, kayleigh.boom_tiktok, 08-27",
    "esn, NATALIE, 10, fit_fitness_mum, 08-27",
    "esn, MR, 10, maxi_lifts_, 08-27",
    "lookfantastic, LFSALLNNCRG, 11, llnncrg, 08-27",
    "weightworld, WWBE, 15, kleinpepertje, 08-27",
    "ginatricot, TORNEGREN20, 20, victoriatornegren, 08-27",
    "gutsgusto, IMAN_15, 15, iman_90_, 08-27",
    "shein, MQ3courtney, 15, officialcourt_x, 08-27",
    "otrium, PMSORRY20, 20, honey, 08-27",
    "shein, 24q3shanxx, 15, shanlouise_14, 08-27",
    "esn, LISAVANDERVALK, 10, bellavalks, 08-27",
    "lyko, GUUSJE25, 25, guusjewm, 08-27",
    "anwbwinkel, GERALDINE10, 10, geraldine_kemper, 08-27",
    "greenchef.nl, CHEFCHANNAH, €95, channahkoerten, 08-27",
    "myproteinnl, STEFANIAFF, 35, stefani_getsfitt, 08-27",
    "aybl, danthe, 10, danthescholtenx, 08-27",
    "burga, CELESTECXNL, 15, celestecuperus, 08-27",
    "celiqe (airstyler), OMNEYA40, 40, omneyaaa.b_tiktok, 08-27",
    "fitshe.com, FITLINDSEY25, 25, lindseybeljaars_tiktok, 08-27",
    "koro-shop.nl, dikkeveganist, 5, dikkeveganist, 08-27",
    "pixum (app), CARLIJN20, 20, carlijnbras, 08-27",
    "yfood, ESRA-INSTA, 10, esralakap, 08-27",
    "peasmaker.nl, LXZ-ISVHSOM, €5, dikkeveganist, 08-27",
    "bissel, MINI20, 20, miniliefde, 08-27",
    "bestecanvas, ANGELIQUE20, 20, lieks_home, 08-27",

    "zalando, ROUTINE15NL, 15, zalando, 08-25",
    "meetmethere, FRANCE15, 15, wgk, 08-25",
    "shein, 015ing, 15, kate.ing, 08-25",
    "nakdfashion, aada, 20, aadavedenoja, 08-25",
    "idealofsweden, BBHAT, 15, wgk, 08-25",
    "ginatricot, NINAH20, 20, ninahouston_tiktok, 08-25",
    "gutsgusto, MYSTYLE15, 15, mystylefiles_, 08-25",
    "bodyandfit.com, BB10FLEUR, 10, fleur_fit_journey, 08-25",
    "mimamsterdam, 20XAMBERX, 20, amberbartelings_tiktok, 08-25",
    "lookfantastic, LFZOE, 11, zoeyung_, 08-25",
    "gymshark, SHACK, 10, ashleyshack, 08-25",
    "loopearplugs, LOOPXALLIEANDSAM, 15, allieandsam, 08-25",
    "mimamsterdam, NOORTJEX20, 20, noortje.derijk_tiktok, 08-25",
    "nakdfashion, KVAM, 20, ericakvam, 08-25",
    "veromoda, JELNL20, 20, jel_nl, 08-25",
    "esn, HANNAHW, 10, hannahwares, 08-25",
    "bodyandfit.com, BBGAVIN10, 10, gavin_luijendijk, 08-25",
    "famousstore, Misha10, 10, mishakasteleinx, 08-25",
    "flaatch.nl, SOOF20, €20, soof.rvw_tiktok, 08-25",
    "myproteinnl, BROWNEY, 37, stanbrowney, 08-25",
    "aybl, RUBY10, 10, rubesfit_, 08-25",
    "ginatricot, METTI20, 20, mettiforssell, 08-25",
    "stronger, FLEUR20, 20, fleurnijbacker, 08-25",
    "emmasleepnl, LIZZY10, 10, lizzyvdligt, 08-25",
    "ginatricot, FANNY20, 20, rabattkodersverige, 08-25",
    "gymshark, JULIAK, 10, firouz_michael_nad.deri, 08-25",
    "begolden, ESMEEBG20, 20, esmeealissageel_tiktok, 08-25",
    "gutsgusto, NIJMEGEN, 15, gutsgusto, 08-25",
    "shein, MELR15, 15, blissofmel, 08-25",
    "giesswein, KARI20, 20, karivdheide, 08-25",
    "paulie__pocket, DAPHNE15, 15, daphnbos_tiktok, 08-25",
    "pranamat, KARI, 20, karivdheide, 08-25",
    "fashionomi, Kayleigh10, 10, kayleigh.boom_tiktok, 08-25",
    "byemms.nl, Marit15, 15, marit.anthonissen_tiktok, 08-25",

    "airup, MERCIJOYCA, 15, honey, 08-23",
    "gutsgusto, NATÜRLICH15, 15, natuerlichnele, 08-23",
    "shein, 24q3cora, 15, coralaslund, 08-23",
    "desenio, XGUTS, 40+10, wgk, 08-23",
    "nakdfashion, kimberlybru, 20, kimberly_bru, 08-23",
    "nakdfashion (va 24aug), luisa, 20, luisa.snd, 08-23",
    "ginatricot, femke20, 20, femke.vermaas, 08-23",
    "bodyandfit.com, BFDAM, 15, nndamtotdamloop, 08-23",
    "gymshark, LUCY, 10, lucydavis_fit, 08-23",
    "drsmile.nl, ANNEMEREL300, €300, annemerelcom, 08-23",
    "ginatricot, veerman20, 20, meganveerman_tiktok, 08-23",
    "ginatricot, lois20, 20, loisblog, 08-23",
    "otrium, 27EXTRA, 27, otrium, 08-23",
    "drsmile.nl, KELLY300, €300, kellycaresse, 08-23",
    "loopearplugs, LOOPXASHRA, 15, ashralouisa, 08-23",
    "esn, JANINE, 10, janiine.fit, 08-23",
    "greenchef.nl, chefchar, €95, charlottejanssen94, 08-23",
    "myproteinnl, DORUNSAFF, 35, do_runs_, 08-23",
    "only, CYNTHIA12, 12, cynthiavandoorn, 08-23",
    "hellofresh.nl, HF110EFFI, €110, effi.sxx, 08-23",
    "geurwolkje, BTS24, 15, familie.kruys, 08-23",
    "bearswithbenefits, Ella20, 20, ella.en.co, 08-23",
    "aybl, JASMIJN, 10, jasmijnvz_, 08-23",
    "dfyne, PUCK, 10, puckvandrenth, 08-23",
    "pinkgellac, EVE8, 10, janedoe, 08-23",
    "parfumado, ROME50, €8, romereinders, 08-23",
    "cloudpillo.nl, JUDITH25, 25, judith.keijsers, 08-23",
    "goedgemerkt, GG-DEBBIE15, 15, debbiedhillon, 08-23",
    "amicicosmetics, allaboutkimberly20, 20, allaboutkimberly, 08-23",
    "ginatricot, mutsters20, 20, ninamutsters, 08-23",
    "loufstory.nl, Famke15, 15, famkehanna_tiktok, 08-23",
    "ginatricot, neele20, 20, neelejt, 08-23",
    "shein, 24q3robynsnestxo, 15, robynsnestxo, 08-23",
    "sneakerhype.eu, teddy5, €5, teddy_malipaard, 08-23",
    "holabb.nl, MAMALOTJE15, 15, mama.lotje, 08-23",
    "eyda, LOTTE25, 25, fitmetlotte_, 08-23",
    "tuftlab.nl, lifeofsy10, 10, lifeofsy, 08-23",
    "paulvalentine (bday), KIMBERLY33, 33, kimberly_bru, 08-23",
    "didierlab, MELISSA25, 25, gellakmelissa, 08-23",

    "shein, itscarmen, 15, itscarmenvlc, 08-21",
    "nakdfashion, tricarico, 20, elisetricarico, 08-21",
    "desenio, XWANDEN, 30+10, kleinpepertje, 08-21",
    "myproteinnl, KIMXMYP, 37, kim.bouwmann, 08-21",
    "tessv, SOFIEKLIJSX10, 10, sofieklijs_tiktok, 08-21",
    "olcaygulsenbeauty, JELTJE10, 10, jel_nl, 08-21",
    "ginatricot, amber20, 20, amberbartelings_tiktok, 08-21",
    "gutsgusto, FABIK15, 15, fabiennekro, 08-21",
    "albelli (fotoboek), NICEFAMILY25, 25, nicefamily_, 08-21",
    "bamboobasics.com, ESMEEINEZ20, 20, esmeevanleijden, 08-21",
    "bodyandfit.com, BBNOOR10, 10, noorindegym, 08-21",
    "lookfantastic, FANTASTICLF, 11, honey, 08-21",
    "gymshark, NOJO, 10, nojo.fitness, 08-21",
    "yesstyle, YESGIRL23, 10, kleinpepertje, 08-21",
    "aliexpress (> €29), 8BSNL3, €3, aliexpress, 08-21",
    "aliexpress (> €49), 8NL06, €6, aliexpress, 08-21",
    "aliexpress (> €19), 8NL02, €2, aliexpress, 08-21",
    "nakdfashion, fleur, 20, fleurnijbacker, 08-21",
    "loopearplugs, LOOPXAMY15, 15, amyenvoyage, 08-21",
    "esn, SASKIA, 20, sasiefit, 08-21",
    "ginatricot, ELVIRA20, 20, rabatt.inspo, 08-21",
    "greenchef.nl, CHEFSHULA, €95, shularoose, 08-21",
    "ginatricot, sylvana20, 20, sylvanamenke_tiktok, 08-21",
    "gutsgusto, MEGAN15, 15, meganveerman_tiktok, 08-21",
    "vqfit, SOPHIE, 10, sophie_bouts, 08-21",
    "uootd.com, Elena, 16, elenavanvoorst__tiktok, 08-21",
    "albelli (fotoboek), STEFANI25, 25, stefani_getsfit, 08-21",
    "nakdfashion, Bourtsin, 20, bourtsin_, 08-21",
    "aybl, EMMY, 10, emmyoldescholtenhuis, 08-21",
    "hellofresh.nl, HF110VONNEKE, €110, vonnekebonneke, 08-21",
    "bodyandfit.com, BBMARISKA10, 10, mariskasteenbergen, 08-21",
    "nakdfashion, MEIRA, 20, rabattkodsidan, 08-21",
    "aybl, LAURIE, 10, lrs_coaching, 08-21",
    "ginatricot, SARAH20, 20, rabattkodsidan, 08-21",
    "safira, VIP20, 20, rabatt.inspo, 08-21",
    "shein, julis15, 15, julisskaa_, 08-21",
    "vqfit, RACHEL, 10, rachel_miks, 08-21",
    "strengthen.store, nootje, 10, nootjee.120_tiktok, 08-21",
    "koro-shop.nl, TATUM5, 5, tuttitatum, 08-21",
    "lavijf.nl, manon15, 15, manonkleijnx, 08-21",
    "sieraadmoppie, sita10, 10, sitapynacker, 08-21",
    "kayasieraden.nl, KAY15, 15, kayleighkooi_tiktok, 08-21",
    "loufstory.nl, NOORTJE15, 15, noortje.derijk_tiktok, 08-21",
    "loveones.nl, NOORTJE10, 10, noortje.derijk_tiktok, 08-21",
    "pixum (app), MAARTJE20, 20, de_speelfee, 08-21",

    "zalando, STARTFRIS, 15, zalando, 08-19",
    "asos, SUMMER, 20, asos, 08-19",
    "meetmethere, NL15, 15, rabatta, 08-19",
    "shein, 24chiarait, 15, chiara.ferraraa, 08-19",
    "desenio, XFLAN, 4f2 + 10, kleinpepertje, 08-19",
    "idealofsweden, BBLEF, 15, wgk, 08-19",
    "nakdfashion, lauraflory, 20, laurasoflory, 08-19",
    "ginatricot, zoe20, 20, zoeoerlemans_tiktok, 08-19",
    "gutsgusto, MAREN15, 15, leonie.maren, 08-19",
    "bodyandfit.com, BBELINEILSE, 10, xsayaeline_, 08-19",
    "lookfantastic, NC25, 16, honey, 08-19",
    "gymshark, OLIVIAM, 10, oliviamcfarlane_fit, 08-19",
    "loopearplugs, LOOPXTIGERLILY, 10, djtigerlily, 08-19",
    "esn, NOORFIT, 20, fitt_noor, 08-19",
    "myproteinnl, GUUSJE, 37, guusje, 08-19",
    "ginatricot, KRAMER20, 20, maritkramer__tiktok, 08-19",
    "ginatricot, lindsaystacey20, 20, stacceyyx_tiktok, 08-19",
    "achateshop.com, TATIANA10, 10, drielingmoeder_tatiana, 08-19",
    "nakdfashion, ritter, 20, alexa.ritter, 08-19",
    "aybl, ARIANNE10, 10, arianne.deveau, 08-19",
    "cottonclub.nl, Isabelle10, 10, isabelleheijhoff, 08-19",
    "nakdfashion, olgaliber, 20, olgali.ber, 08-19",
    "smartphoto.nl, DEBBIE35, 35, debbiedhillon, 08-19",
    "meetmethere, dusties10, 10, rabatta, 08-19",
    "meetmethere, HAPPY10, 10, rabatta, 08-19",
    "loopearplugs, LOOPXALLY10, 10, agirlnamedally, 08-19",
    "loopearplugs, LOOPXKYDEN, 10, kyden.fire, 08-19",
    "shein, 24q3osayande, 15, janet.osayande, 08-19",
    "stronger, DANIQUE20, 20, danique.hosmar, 08-19",
    "paulie__pocket, MILOU15, 15, milou.pasman, 08-19",
    "worldpackers, LARADEJONG, €10, lara.dejong, 08-19",
    "bambinifashion, esme, 33, esmeraldaattema, 08-19",
    "kideo.store, ANDREA, 10, andrea.vd.meer, 08-19",
    "vanzus.nl, ANDREAVDMEER, 15, andrea.vd.meer, 08-19",
    "madlady (ook sale), 8i6YH, 15, amandasvalin, 08-19",
    "lionfitgymwear.com, Lizzy10, 10, lizzylieverst_tiktok, 08-19",
    "athleticbees.com, Kim, 10, kimbransen, 08-19",
    "thingsilikethingsilove, LOIS20, 20, loisblog, 08-19",
    "ehboviva.nl, MIRTHE10, 10, mirthe, 08-19",
    "thelekkercompany, LEKKER25, 25, junoordzij, 08-19",
    "siemphoto.com, LIFEOFSYXSIEM, 15, lifeofsy, 08-19",

    "ginatricot, PAREL20, 20, pareljansen_tiktok, 08-17",
    "fashiontiger.nl, SHOPWITHVEERLE, 15, veerlejodieke_tiktok, 08-17",
    "nakdfashion, alliee, 20, allieewyckoff, 08-17",
    "shein, 24Q3Femi, 15, _femi_xo_, 08-17",
    "idealofsweden, BBCAST, 15, wgk, 08-17",
    "colorfulstandard, BROCCOLICS10, 10, radicalbroccoli, 08-17",
    "gutsgusto, VALERIE15, 15, valerie_s_secret, 08-17",
    "bodyandfit.com, BBCRESCI, 10, crescicroes, 08-17",
    "america_today, AT20-Tom, 20, tomspierings_, 08-17",
    "mimamsterdam, XSARAH20, 20, sarah.paap, 08-17",
    "lookfantastic, VERONIKA, 11, beauty.co_test, 08-17",
    "gymshark, EMILYSHARP, 10, emilysharp.fitness, 08-17",
    "ginatricot, Willemijn20, 20, willemijnvreee_tiktok, 08-17",
    "colorfulstandard, ZOELEVENNCS10, 10, zoelevenn, 08-17",
    "colorfulstandard, ALICEINCS10, 10, aliceinrollerland, 08-17",
    "colorfulstandard, emmagardeslencs10, 10, emmagardeslen, 08-17",
    "nakdfashion, selinastyle, 20, selinabaliju, 08-17",
    "gutsgusto, LAUREN15, 15, laurenvansam, 08-17",
    "lampenlicht.nl, DEBBIE10, 10, debbiedhillon, 08-17",
    "lyko, Graas20, 20, rabattkoder.sverige, 08-17",
    "shein, 24Q3sophiegrace, 15, s0phiegrace, 08-17",
    "greenchef.nl, CHEFNOORDZIJ, €95, junoordzij, 08-17",
    "esn, VIENNA, 20, vienna.wachelder, 08-17",
    "myproteinnl, SIMONEXMYP, 30, simonevanzundert, 08-17",
    "maniacnails, AMY15, 15, amyrosedebruijn, 08-17",
    "geurwolkje, MELANIE10, 10, trendystyleinspire, 08-17",
    "aybl, ANOUK, 10, anoukifit, 08-17",
    "otrium (t/m 18aug), 27EXTRA, 27, otrium, 08-17",
    "burga, IPEKSXNL, 15, ipeksteenbeek, 08-17",
    "stronger, fasojo20, 20, fasojo, 08-17",
    "emmasleepnl, KOERTJES10, 10, channahkoerten, 08-17",
    "gymexclusive.com, ANOUK, 10, anoukifit, 08-17",
    "veneta.com, Danielle5, 5, daniellederidder, 08-17",
    "whimvoy.com, Jelynn, 20, xjelynnwensinkx_tiktok, 08-17",
    "betterme, FEMKE14, 2wk, femke.vermaas, 08-17",
    "macylifestyle.nl, MANON10, 10, manonkleijnx, 08-17",
    "maicazz.com, JANINE15, 15, janine_lomulder, 08-17",
    "fittfaves.nl, ANOUK, 10, anoukifit, 08-17",
  ];
}
