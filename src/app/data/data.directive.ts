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

  public static getUniqueWebshops(): string[] {
    const webshopsSet = new Set<string>();

    this.dataArray.forEach(entry => {
      const webshop = entry.split(',')[0].trim();
      webshopsSet.add(webshop);
    });

    return Array.from(webshopsSet).sort();
  }

  static dataArray = [
    "shein, MelanieS15, 15, melaniestinstra_tiktok, 08-07",
    "airup, MERCIJOYCA, 15, honey, 08-07",
    "doonails, KLEINPEPERTJE, 20, kleinpepertje, 08-07",
    "myproteinnl, SILKE, 35, tilemanssilke, 08-07",
    "nakdfashion, pamresende, 50+10, _pamelaresende, 08-07",
    "temu, apu12458, €100, wgk, 08-07",
    "bylashbabe, STARLASH, 10, wgk, 08-07",
    "desenio, XSTER, 40+10, wgk, 08-07",
    "vitakruid, DANSJE, 10, wgk, 08-07",
    "idealofsweden, BBVLAM, 15, wgk, 08-07",
    "sapph, wiegeeftkorting20, 60+20, wgk, 08-07",
    "hunkemoller, honey-df234t4fvq3y4, 12, honey, 08-07",
    "bodyandfit.com, Daryl10, 10, darylgoesgym, 08-07",
    "gutsgusto, JULIA15, 15, julia_grgcaa, 08-07",
    "gymshark, AMYLIFTS, 10, amy_envision, 08-07",
    "lauthelabel.nl, ZOMERKORTING, €10, famkehanna_tiktok, 08-07",
    "loopearplugs, LOOPXBETH10, 10, bethsandland, 08-07",
    "stronger, CASSYVERSE20, 20, sarah_hjko, 08-07",
    "stronger (sale), EXTRA10, 10, stronger, 08-07",
    "shein, curveluciaq3, 15, ucantwearthat, 08-07",
    "greenchef.nl, CHEFVITA, €95, vita.cleo, 08-07",
    "esn, Jakob, 20, jakob_klaus22, 08-07",
    "flaatch.nl, LILLY20, €20, lillypink.albers_tiktok, 08-07",
    "nakdfashion, daniela, 50+10, adanielarocha, 08-07",
    "leolive, CHELSEAvacayA, 10, chelseavanhoutte, 08-07",
    "gymshark, HEALTHYCERYS, 10, healthycerys, 08-07",
    "geurwolkje, iloon, 10, by_iloon, 08-07",
    "mashionofficial.nl, BENTE15, 15, itsmebenteee_tiktok, 08-07",
    "shein, 015cristina, 15, sorinaceugea, 08-07",
    "fuelyourbody, ROBERT10, 10, robertbrandsmaaa, 08-07",
    "flaatch.nl, OMNEYA20, €20, omneyaaa.b_tiktok, 08-07",
    "cutehart.com, CHSANNE, 10, sanne_vander, 08-07",
    "didi.nl, Summervibe15, 15, lifeof.nadine, 08-07",
    "prozis, PEPER, 10, kleinpepertje, 08-07",
    "geurwolkje, JENNIFER, 10, binnenkijkenbij_jendezwart, 08-07",
    "aybl, MAISIEV10, 10, maisieellenfitness, 08-07",
    "leolive, MICAELATTT10, 10, micaela_tiktok_tiktok, 08-07",
    "burga, AMBERVAXNL, 15, ambervstannaland, 08-07",
    "emmasleepnl, LIEKEVM, 10, lieke__vm, 08-07",
    "lyko, 15ALL, 15, rabatt.inspo, 08-07",
    "finaste.nl, kayleigh15, 15, kayleighkooi_tiktok, 08-07",
    "deplay.nl, LIEKE10, 10, liekedeb.nl, 08-07",
    "biggreensmile.nl, deveganmoeder10, 10, deveganmoeder, 08-07",
    "zelesta.nl, HUIZE20, 20, huize1870, 08-07",
    "gimeau.com, AIMEE15, 15, aimeevanderpijl, 08-07",
    "shellac4u.nl, AMBER10, 10, nagels.a, 08-07",

    "asos, 20OFF, 20, asos, 08-06",

    "shein, 24q3oliviaa, 15, alysoliviaa, 08-05",
    "nakdfashion, ninajellina, 50+10, nina.jellina_tiktok, 08-05",
    "zalando (jeans / 5aug), JEANS50, 50 op 2e, zalando, 08-05",
    "desenio, XVANAF, 50+10, kleinpepertje, 08-05",
    "vitakruid, NUGGET, 10, wgk, 08-05",
    "idealofsweden, BBGRAS, 15, wgk, 08-05",
    "bodyandfit.com, thegrind, 15, thegrind, 08-05",
    "gutsgusto, PRINCI15, 15, rosaprinci, 08-05",
    "mimamsterdam, XBENTEX20, 20, itsmebenteee_tiktok, 08-05",
    "gymshark, BRE, 10, bresocker, 08-05",
    "bearswithbenefits, Osquare20, 20, by.osquare, 08-05",
    "eyerim.nl, OL20, 20, by.osquare, 08-05",
    "lauthelabel.nl, LIZ10, 10, lizbentvelzen, 08-05",
    "hellofresh.nl, HFkleinpepertje110, €110, kleinpepertje, 08-05",
    "maniko-nails.nl, SARAHJULI20, 20, sarahliebregts, 08-05",
    "greenchef.nl, CHEFMAMALOTJE, €95, mama.lotje, 08-05",
    "nakdfashion, laurenabarber, 50+10, laurenabarber, 08-05",
    "esn, ANNALOUISE, 20, annalouisegille, 08-05",
    "nakdfashion, ambernova, 50+10, ambernovakoenen, 08-05",
    "strengthen.store, FRANCES, 10, frances.devisser, 08-05",
    "monokel-eyewear.com, osquare10, 10, by.osquare, 08-05",
    "myproteinnl, MAARTJEMP, 37, maartjerandag, 08-05",
    "leolive, EvelienVacay, 10, anthonisevelien, 08-05",
    "aybl, NOOR10, 10, nooralexandra.fit, 08-05",
    "shein, 24q3phoebe, 15, phoebebartlettx, 08-05",
    "leolive, SAMANTHAvacay, 10, samantha__xsx, 08-05",
    "otrium (> €60), WEARIT, 25, honey, 08-05",
    "burga, JAMIENUXNL, 15, jamienuijen, 08-05",
    "stronger, 20kelly, 20, kellyhamelijnck, 08-05",
    "upfront.nl, danique, 10, danique.hosmar_, 08-05",
    "fotocadeau.nl (canvas), felinehoi70, 70, felinehoi, 08-05",
    "lauthelabel.nl, ANNA10, 10, annagabriellaugc, 08-05",
    "celiqe (airstyler), Maria40, 40, maria.bootsma_tiktok, 08-05",
    "skagenclothing.nl, Mar15, 15, maerleflorentina_tiktok, 08-05",
    "fashionomi, Elvira10, 10, elvirazevenbergen_tiktok, 08-05",

    "pinkgellac, TIANY10, 10, tianykirilove, 08-04",
    "asos, SAVE, 30, asos, 08-04",
    "meetmethere, LXZ-DWPE752, €5, kortingsc0des, 08-04",
    "shein, sugar02, 15, blacksugarrrrr, 08-04",
    "vitakruid, VENUS, 10, wgk, 08-04",
    "idealofsweden, BBCAST, 15, wgk, 08-04",
    "nakdfashion, oryelle, 50+10, o_r_y_e_l_l_e, 08-04",
    "bodyandfit.com, BBCINDY, 10, cgwj_hendriks, 08-04",
    "gutsgusto, ELLYM15, 15, itsaboutellly, 08-04",
    "ginatricot, FUFU20, 20, rabattkode.norge, 08-04",
    "cocunat, NAT, 10, kleinpepertje, 08-04",
    "mimamsterdam, LOTTEK20, 20, lotte.kln, 08-04",
    "fittasticsportswear, kaylian10, 10, kusjeskaylianx_tiktok, 08-04",
    "gymshark, ABI, 10, anabolic.abi, 08-04",
    "stronger, curly20, 20, curly.iris, 08-04",
    "weightworld, WWBE, 15, kleinpepertje, 08-04",
    "shein, DebzQ3, 15, debzlouiseblog, 08-04",
    "maniacnails (startset), S15, 15, saskiaaugustin, 08-04",
    "reginajewelry, BBLET, 30, kleinpepertje, 08-04",
    "esn, JUDI, 20, fitjudi, 08-04",
    "myproteinnl, BENTEFIT, 15, bentefit, 08-04",
    "only, JCD12, 12, jamilya.2009.official, 08-04",
    "edgardcooper, ZEUS20, 20, zeusthelittlesausage, 08-04",
    "geurwolkje, mariskavdwal, 10, mariskavanderwal_, 08-04",
    "aybl, PIPER10, 10, pipertenquist, 08-04",
    "leolive, LINDSAYvacay, 10, xlinnxr, 08-04",
    "berlook, Jelynn20, 20, xjelynnwensinkx_tiktok, 08-04",
    "burga, LISANNEBXNL, 15, lisanne.blonk, 08-04",
    "emmasleepnl, XSAAR, 10, xsaarofficial, 08-04",
    "stronger, SHEILAS20, 20, wondershei, 08-04",
    "lomabeauty.eu, SARAHL30, 30, sarahliebregts, 08-04",
    "novalora.nl, BEDANKT10, 10, novalora.cosmetics_tiktok, 08-04",
    "yumiprint.com, Jahlyssia20, 20, jahlyssiawithagen_tiktok, 08-04",
    "t-juffie.nl, NADINE15, 15, lifeof.nadine, 08-04",
    "sallandshoeve.nl, dutchlifestyle10, 10, dutchlifestyle.nl, 08-04",
    "noyellowteeth.nl, ESMEE15, 15, esmeelenferink, 08-04",

    "fashiontiger.nl, fashiontigerxkaylian, 15, kusjeskaylianx_tiktok, 08-02",
    "shein, curvysideq3, 15, thecurvysideofme, 08-02",
    "tessv, PARELJANSENX10, 10, pareljansen_tiktok, 08-02",
    "nakdfashion, birkeland, 50+10, emiliebirkeland, 08-02",
    "desenio, XDAU, 40+10, kleinpepertje, 08-02",
    "bodyandfit.com, BBLORE, 10, lore_buelens, 08-02",
    "airup (steel bottle), STEELTHESUMMER, 20, honey, 08-02",
    "gutsgusto, ANGELINA15, 15, angelina_haupt, 08-02",
    "ginatricot, POSTMA20, 20, mirthe.postma_tiktok, 08-02",
    "gymshark, ELLAK, 10, stayfit_ellak, 08-02",
    "otrium, EXTRA25, 25, otrium, 08-02",
    "photowall_sweden, ELIZE20NL, 20, mylifeaselize, 08-02",
    "lampenlicht.nl, IG-DEBBIE10, 10, debbiedhillon, 08-02",
    "rosental-organics.nl, KORTINGNL, 25, wgk, 08-02",
    "nakdfashion, nashita, 50+10, nashitasultanana, 08-02",
    "greenchef.nl, CHEFNATHALIE, €90, nathalieejw, 08-02",
    "leolive, DEMIvacayA, 10, demivanlankveld, 08-02",
    "shein, bwpilar, 15, pilarchica1, 08-02",
    "didi.nl, Amanda15, 15, mijnhuisje_, 08-02",
    "esn, MARKUS, 20, fit.markusschmidbauer, 08-02",
    "flaatch.nl, ELINE20, €20, elinenagelkerke_tiktok, 08-02",
    "myproteinnl, MAXFIT, 15, max_fit98, 08-02",
    "geurwolkje, nienkefeddema, 10, nienkefeddema, 08-02",
    "aybl, MISH10, 10, miissshy, 08-02",
    "leolive, BRITTvacay, 10, brittmink_, 08-02",
    "burga, IPEKSXNL, 15, ipeksteenbeek, 08-02",
    "emmasleepnl, KAREN, 10, karensmittt, 08-02",
    "stronger, JANINE20, 20, joliejanine, 08-02",
    "marcyjoan.nl, Megan15, 15, meganveerman_tiktok, 08-02",
    "nkgellak, LAKT10, 10, lisanne.lakt, 08-02",
    "jetjepailletje.nl, Marit15, 15, marit.anthonissen, 08-02",
    "selenichast.com, Eline26, 26, elineadalla99_tiktok, 08-02",
    "liftr-fitness.com, ZORANA10, 10, zorana.dkmns_tiktok, 08-02",
    "callistaa.nl, kayleigh10, 10, kayleighkooi_tiktok, 08-02",
    "indylashes.nl, SAAR20, 20, saraverwoerd_tiktok, 08-02",
    "edgardcooper (1st order), HEY20, 20, jamey.nl, 08-02",
    "bestel.beren.nl, BZDIESNA20, 20, diesnaloomans, 08-02",
    "rainup.nl, leonie10, 10, lterveld, 08-02",

    "nakdfashion, estellevan, 50+10, estellevantschip, 07-31",
    "shein, 24q3amel, 15, wakeupamel, 07-31",
    "myjewellery (tot 4 aug), krijg code via https://www.my-jewellery.com/nl-nl/friends-of-my-jewellery, 20, myjewellery, 07-31",
    "asos, HURRY, 20, asos, 07-31",
    "meetmethere, TIKTOK, 10, janedoe, 07-31",
    "desenio, XSTRANDJE, 40+10, wgk, 07-31",
    "puma (deals), DEAL, 15, puma, 07-31",
    "bodyandfit.com, BFJB, 10, jannaborsboom, 07-31",
    "gutsgusto, DEMET15, 15, demetzta, 07-31",
    "ginatricot, CHRISTIANSEN20, 20, rabattkodersverige, 07-31",
    "mimamsterdam, INDYB20, 20, indyvandenburg, 07-31",
    "lookfantastic, STEPHANIE, 10, stephanie.in.wonderland, 07-31",
    "gymshark, JOEY, 10, joeyawalashaw, 07-31",
    "loopearplugs, LOOPXJULIANA, 10, juliaaannnaaaaaa, 07-31",
    "lyko, Zoe25, 25, zoenevaeh__tiktok, 07-31",
    "pinkgellac (startset), SET30, €30, pinkgellac, 07-31",
    "finaste.nl, MAAIKE15, 15, maaikevdeuveren_tiktok, 07-31",
    "veromoda, JELNL20, 20, jel_nl, 07-31",
    "esn, KATE, 20, kate.herta, 07-31",
    "nakdfashion, yana, 50+10, yanaaaaaak, 07-31",
    "myproteinnl, MYPKARIN, 15, karinpolstra, 07-31",
    "cabaulifestyle, MISSYOU20, 20, janedoe, 07-31",
    "queentarzi, SHAN20, 20, shandiracorielle_tiktok, 07-31",
    "nakdfashion, victoria, 50+10, victoriatornegren, 07-31",
    "gutsgusto, SARAHD15, 15, sarah.dmry, 07-31",
    "geurwolkje, MIRJAM, 10, texelshuisje.vol.liefde, 07-31",
    "aybl, DIANA, 10, diana.inspires, 07-31",
    "shein, scarlett7, 15, scarlettdaisy_xox, 07-31",
    "famousstore, Amber10, 10, ambervdax, 07-31",
    "snuggs, emvrouwerment, 15, asha.shayna, 07-31",
    "burga, JENNYWEXNL, 15, jennyxo_love, 07-31",
    "emmasleepnl, JIP10, 10, jippheldoorn, 07-31",
    "stronger, EMILIA20, 20, emiliajoyyy, 07-31",
    "womensbest, MEZDHA, 10, mezdhaa, 07-31",
    "finaste.nl, BENTE15, 15, itsmebenteee_tiktok, 07-31",
    "paulie__pocket, KICKIE-15, 15, kickiedeklijn, 07-31",
    "celia-jewelry.nl, Jenny10, 10, jennyvaassen_tiktok, 07-31",
    "visionperformancewear, DAVXDLIFTS, 10, daveisbenching, 07-31",

    "shein, amelie24Q3, 15, ameliefleur_, 07-29",
    "nakdfashion, shularo, 50+10, shularoose, 07-29",
    "aybl, JANINEFIT10, 60+10, janiine.fit, 07-29",
    "desenio, XPARK, 40+10, wgk, 07-29",
    "xlash, SUMMER, 25+10, gratispandan, 07-29",
    "bodyandfit.com, BBMarit, 10, marit_vermeer_fit, 07-29",
    "gutsgusto, KSENIA15, 15, kseni_wolter, 07-29",
    "gymshark, freya, 10, freyaxfit, 07-29",
    "foreo, MF20BODY, 20, manoafestation, 07-29",
    "esn, HEATHY, 20, maxheathy, 07-29",
    "finaste.nl, SUMMER15, 15, finaste.nl, 07-29",
    "myproteinnl, DENISEANNA, 12, deniseanna, 07-29",
    "bodylab.nl, CESAR, 27, cesar.hendrix, 07-29",
    "veganboost.nl, OP=OP, 25, michelle.en.hicham_tiktok, 07-29",
    "inprintwetrust, BENTE10, 10, itsmebenteee_tiktok, 07-29",
    "queentarzi, Jahlyssia20, 20, jahlyssiawithagen_tiktok, 07-29",
    "nakdfashion, JLKNNIFER, 50+10, jlknnifer, 07-29",
    "nakdfashion, vivian, 50+10, vivianvandebunt, 07-29",
    "geurwolkje, CVDBRA, 10, cvdbra, 07-29",
    "leolive, MACYtiktok10, 10, youcancallmemace__tiktok, 07-29",
    "fitpreps.nl, Kyara10, 10, kyarase, 07-29",
    "fitpreps.nl, Francis, 10, fkweldam, 07-29",
    "smartphoto.nl, INGRID20, 20, mama.sven.tess, 07-29",
    "leolive, MAYASUN24, 10, mayamaianh, 07-29",
    "emmasleepnl, JAMIE10, 10, jamie_faber, 07-29",
    "gutsgusto, BRIDGET15, 15, bridgetxloren, 07-29",
    "otrium (> €75), SUMMER, 25, otrium, 07-29",
    "shein, 15nikae, 15, nikaefff, 07-29",
    "burga, FELICIALOXNL, 15, felicia.louhenapessy, 07-29",
    "emmasleepnl, LANA10, 10, lanacuvelier, 07-29",
    "stronger, ZOE20, 20, zoeyung_, 07-29",
    "finaste.nl, FLOORX15, 15, floorkraay_tiktok, 07-29",
    "paulie__pocket, ANOUSKA15, 15, anouskawink, 07-29",
    "ochama, NOUR, €5, nourdemirr_tiktok, 07-29",
    "fitpreps.nl, MELVIN10, 10, melvin.pt, 07-29",
    "nlkluis, ZENEQUY4, 4mnd, zenequy, 07-29",
    "lavijf.nl, JOLIEN15, 15, jolien.laatjewatzien, 07-29",

    "asos, 30LOVE, 30, asos, 07-28",

    "douglas, extra10isadee, 10, isadeejansen, 07-26",
    "shein, 24q3courtney, 15, officialcourt_x, 07-26",
    "nakdfashion, amanda, 50+10, amandaastrand, 07-26",
    "desenio, XHAY, 40+10, wgk, 07-26",
    "idealofsweden, BBLACH, 50+10, wgk, 07-26",
    "arket, ARKETFRANK, 14, honey, 07-26",
    "bodyandfit.com, BFBIG, 10, malek_helali_fit, 07-26",
    "gutsgusto, LOLANNA15, 15, lolannaa, 07-26",
    "ginatricot, FRIDA20, 20, gratispandan, 07-26",
    "lookfantastic, SARAVLF, 10, saraverwoerd_tiktok, 07-26",
    "gymshark, CHLOEB, 10, chloebrebner, 07-26",
    "otrium, EXTRA25, 25, otrium, 07-26",
    "jewelleries.nl, PAREL20, 20, pareljansen_tiktok, 07-26",
    "sunweb, CAR50, €50, bemoreunicorn.nl, 07-26",
    "flink (va €20 / nw klnt), MANDANNA, €10, janedoe, 07-26",
    "flaatch.nl, FAMKE20, €20, famkehanna_tiktok, 07-26",
    "leolive, JULIAtiktok10, 10, juliaabuijs_tiktok, 07-26",
    "esn, MYRTHE, 20, fitwithmyr, 07-26",
    "lightofthemoon.nl, KARLIJN10, 10, karlijn_s_tiktok, 07-26",
    "nakdfashion, stauran, 50+10, st.tauran, 07-26",
    "leolive, LOUNAvacay, 10, lounap_, 07-26",
    "myproteinnl, JESSICANL, 15, jessicakuijpers, 07-26",
    "sellpy, MARIE15, 15, marie_cay, 07-26",
    "factormeals_nl, CHANNAHFACTOR40, 40, channahkoerten, 07-26",
    "pinkgellac, CYNTHIA10, 10, cynthiapuntnl, 07-26",
    "bodyandfit.com, BBSUUS, 10, fitbysuus, 07-26",
    "gutsgusto, AMELIE15, 15, amelie_weissenberger, 07-26",
    "dreamandperform.nl, DOOTJE, 10, dominiquebothhhx_tiktok, 07-26",
    "skinforskin.nl, ROME15, 15, romereinders, 07-26",
    "geurwolkje, KELLYCOLLYNS, 10, kelly_collyns, 07-26",
    "secretsales.nl, LISANNE, 10, __lisanne_s, 07-26",
    "aybl, FFION10, 10, ffionowenxfit, 07-26",
    "leolive, LISANNEvacay, 10, __lisanne_s, 07-26",
    "snuggs, Jodi20, 20, liefthuis, 07-26",
    "bodyandfit.com, BBELINEILSE, 10, xsayaeline_, 07-26",
    "burga, RIANNEAXNL, 15, aarnsrianne, 07-26",
    "emmasleepnl, ZENEQUY, 10, zenequy, 07-26",
    "burga, ISAR1XNL, 15, isaroelofs_, 07-26",
    "squla, DS82BAF5YG, €10, jandoe, 07-26",
    "parfumado, FLEURMAXIME50, €8, fleurmaxiime, 07-26",
    "paulie__pocket, COCO-15, 15, cocochloe__, 07-26",
    "gutsgusto, CLAUDIA15, 15, claudiaskop, 07-26",
    "ochama, JANILLA, €5, xjanilla___tiktok, 07-26",
    "lightofthemoon.nl, ELINE10, 10, elineelansinkk_tiktok, 07-26",
    "gutsgusto, MICHELLE15, 15, m7mmichelle, 07-26",
    "cloudpillo.nl, lizet25, 25, lizetgreve, 07-26",
    "shein, 24q3imo, 15, missnutter95, 07-26",
    "salontopper.nl, olympics10, 10, janedoe, 07-26",
    "prowallet, Lisanne15, 15, __lisanne_s, 07-26",
    "shein, Elinebts, 15, elineadalla99_tiktok, 07-26",
    "gutsgusto, rebecca15, 15, rebeccadvg, 07-26",
    "fulloffashion.nl, JACKIE20, 20, kusjesvanjackie_tiktok, 07-26",

    "loavies, SUMMER20, 20, loavies, 07-24",
    "asos, YES20, 20, asos, 07-24",
    "douglas, extra10widya, 10, widyassoraya, 07-24",
    "shein, andreea005, 15, andreeacoziltea, 07-24",
    "idealofsweden, BBGOUD, 50+15, wgk, 07-24",
    "desenio, XMAAK, 40+10, kleinpepertje, 07-24",
    "nakdfashion, talea, 50+10, taleasophiarogel, 07-24",
    "bodyandfit.com, ESMEEDEKORTEX, 10, esmeedekorte, 07-24",
    "gutsgusto, Marina15, 15, allaboutmaerry, 07-24",
    "gutsgusto (sale), SUMMERSALE15, 15, gutsgusto, 07-24",
    "leolive, CAROvacay, 10, caro.verbinnen, 07-24",
    "leolive, ILSEtiktok10, 10, xilsevisser_tiktok, 07-24",
    "mimamsterdam, noajoya20, 20, noa.joya.official, 07-24",
    "gymshark, CROM, 10, itscarl.romero, 07-24",
    "bodyandfit.com, BBNOHEMIE10, 10, gymwithnoh, 07-24",
    "otrium, PMSORRY20, 20, honey, 07-24",
    "burga, CELESTECXNL, 15, celestecuperus, 07-24",
    "gutsgusto, CARMEN15, 15, carmenvanweersel, 07-24",
    "loopearplugs, LOOPXDJJULIET, 10, djjulietfox, 07-24",
    "esn, SASKIA, 10, sasiefit, 07-24",
    "shein, oonajuly, 15, oona_d, 07-24",
    "nakdfashion, FLEUR, 50+10, fleurnijbacker_tiktok, 07-24",
    "myproteinnl, CARLIEN, 15, carlienschouman, 07-24",
    "only, STEFFIE12, 12, steffieleijten, 07-24",
    "oduree.nl, ZEYNEP10, 10, 3fova_tiktok, 07-24",
    "geurwolkje, ZINNIG, 10, wendy_studiozinnig, 07-24",
    "pinkgellac, CHELSEASHINE, 10, chelseavanhoutte, 07-24",
    "aybl, COURT10, 10, courteney.fitness, 07-24",
    "leolive, KIMBERLYsun24A, 10, allaboutkimberly, 07-24",
    "hesterpro.nl, EVA10, 10, eef_dgn, 07-24",
    "amirobeauty.com, SANNE50, €50, sanne_vander, 07-24",
    "bissel hydrost (via bol), WILANDTIEN, 20, wilvantien, 07-24",
    "snuggs, AMBER15, 15, amberw3g, 07-24",
    "burga, NOORGRXNL, 15, noorgroendijk, 07-24",
    "begolden, FREEDOM20, 20, begolden, 07-24",
    "womensbest, CHRISTA, 10, christayun, 07-24",
    "parfumado, LTERVELD50, €8, lterveld, 07-24",

    "shein, black015, 15, blacksugarrrrr, 07-22",
    "lookfantastic, daykota, 10, daykotadee, 07-22",
    "airup, CANCAN, 15, candiice_fan, 07-22",
    "nakdfashion, tristina, 50+10, iamtristina, 07-22",
    "desenio, XDEZE, 40+10, kleinpepertje, 07-22",
    "idealofsweden, BBWEER, 50+10, wgk, 07-22",
    "bodyandfit.com, BBKAY, 10, kayyleighhs, 07-22",
    "gutsgusto, MYSTYLE15, 15, mystylefiles_, 07-22",
    "ginatricot, LOVA20, 20, rabatt.inspo, 07-22",
    "mimamsterdam, JACKIEXMIM, 20, kusjesvanjackie_tiktok, 07-22",
    "gymshark, ZOEDAVIS, 10, zoeidavis, 07-22",
    "lampgigant, DREAMHOUSE10, 10, dreamhouse.18, 07-22",
    "hellofresh.nl, HFJULIA110, €110, drielingmama.julia, 07-22",
    "pearle, linda20, 20, linda, 07-22",
    "maniko-nails.nl, ROSEJULI, 20, roseklerenzooi, 07-22",
    "yehwang_wholesale, Klein20, 20, kleinpepertje, 07-22",
    "nakdfashion, negin, 50+10, negin.sey, 07-22",
    "esn, CARLA, 10, carla.rise, 07-22",
    "nakdfashion, celiamalena, 50+10, celiamalena, 07-22",
    "esteelauder (> €100), linda25, 25, linda, 07-22",
    "iciparisxl (haar / members), NLD-MEMBERDEAL07, 25, iciparisxl, 07-22",
    "morrowandmint, KYAHVW, 15, kyahvw, 07-22",
    "myproteinnl, BAKER, 10, theobaker_, 07-22",
    "sellpy, LAURA15, 15, lauraceliav, 07-22",
    "geurwolkje, YELDA, 10, yelda.cskn, 07-22",
    "leolive, CREMONAsummer24, 10, haycette_, 07-22",
    "gutsgusto, TINASON15, 15, tinason__, 07-22",
    "emmasleepnl, DIANEVANES, 10, dianevanes, 07-22",
    "shein, Lovv15, 15, natalia.kozlovvska, 07-22",
    "leolive, FERENAsummer24, 10, ferenavandalenx_tiktok, 07-22",
    "shein, 17x, 15, emila.17x, 07-22",
    "snuggs, LOTTE20, 20, liefslotte, 07-22",
    "emmasleepnl, FLORINE, 10, florinehofstee, 07-22",
    "madlady, 7i1pn, 15, gratispandan, 07-22",
    "moodsgellac, LAKT10, 10, lisanne.lakt, 07-22",
    "veneta.com, MONIQUE5, 5, moniquenoell, 07-22",
    "celenesbysweden, LindaCelenes24, 40, linda, 07-22",

    "zalando, MY15OFF, 15, zalando, 07-21",
    "shein, trpt07, 15, itstatianarose, 07-21",
    "fashiontiger.nl, fashiontigerxmicaela, 15, micaela_tiktok_tiktok, 07-21",
    "nakdfashion, daphnes, 50+10, daphnesonneveld, 07-21",
    "pinkgellac, SELENASHINE, 10, selenadinexz, 07-21",
    "idealofsweden, BBDEPAY, 50+10, wgk, 07-21",
    "bodyandfit.com, BFS, 10, step_fit, 07-21",
    "gutsgusto, MARIEYOU15, 15, marieyou__, 07-21",
    "otrium (21jul), EXTRA25, 25, otrium, 07-21",
    "ginatricot, aurora20, 20, rabattkoder.sverige, 07-21",
    "sunweb (last minute), ELIZE50, €50, mylifeaselize, 07-21",
    "nakdfashion, saartje, 50+10, saartjebakker, 07-21",
    "gymshark, EMILYSHARP, 10, emilysharp.fitness, 07-21",
    "nakdfashion, eliane, 50+10, elianescwfr, 07-21",
    "leolive, IRENESUMMER24, 10, irenefior_, 07-21",
    "lampgigant, Lindaathome10, 10, linda.at.home, 07-21",
    "mimamsterdam, SUMMERBREAK, 20, mimamsterdam, 07-21",
    "lyko, annika25, 25, aniikapika, 07-21",
    "queentarzi, AITBIBI20, 20, dina.aitbibi_tiktok, 07-21",
    "clearsmile.nl, LAATSTE30, 30, dina.aitbibi_tiktok, 07-21",
    "ochama, NOOR2, €5, noor.oostenveld_tiktok, 07-21",
    "deuv.nl, FLOOR10, 10, floorkraay_tiktok, 07-21",
    "fashionbylins.nl, MARIT20, 20, marit.anthonissen_tiktok, 07-21",
    "moonglowjewellery.eu, MAYCATEMOON, 10, may_cate, 07-21",
    "buvanha.nl, MIJNHUISJE15, 15, mijnhuisje_, 07-21",
    "greenchef.nl, CHEFDIJKSTRA, €90, fleurdijkstra_, 07-21",
    "shein, isabwlle15, 15, isabwllesoares, 07-21",
    "esn, BAMIFIT, 10, bamifit, 07-21",
    "myproteinnl, LOTTE, 12, lottleeuw, 07-21",
    "geurwolkje, SVENTESS, 10, mama.sven.tess, 07-21",
    "aybl, kimya10, 10, kimyanajafi, 07-21",
    "leolive, SOFIEtiktok10, 10, sofieklijs_tiktok, 07-21",
    "famousstore, micaela10, 10, micaela_tiktok_tiktok, 07-21",
    "smartphoto.nl, DEBBIE35, 35, debbiedhillon, 07-21",
    "gustileder, lindseybeljaars10, 10, lindseybeljaars, 07-21",
    "burga, MANONKLXNL, 15, maisondemanon, 07-21",
    "lomabeauty.eu, DEMI30, 30, demivanwijngaarden, 07-21",

    "aimnsportswear, SUMMER15, 15, aimn, 07-18",
    "shein, 15ing, 15, kate.ing, 07-18",
    "nakdfashion, CHIARARO, 50+10, chiararomana, 07-18",
    "desenio, XEARN, 40+10, kleinpepertje, 07-18",
    "temu (gratis producten), frr376659, gifts, wgk, 07-18",
    "bodyandfit.com, BBYAMILLA, 10, yamillapoort, 07-18",
    "gutsgusto, FABIENNE15, 15, fabi_dmn, 07-18",
    "ginatricot, LINDSAYSTACEY20, 20, stacceyyx_tiktok, 07-18",
    "gymshark, ANDRE, 10, dre3003, 07-18",
    "leolive, LISANNEvacayA, 10, lisannekoning, 07-18",
    "esn, MIKE, 10, mrd_fit, 07-18",
    "bijou-brigitte, DAYKOTA, 20, daykotadee, 07-18",
    "xxlnutrition (kleding), XXLWENDIE10, 10, wendievlaar, 07-18",
    "nakdfashion, allaboutmaerry, 50+10, allaboutmaerry, 07-18",
    "maniacnails, MELANIE15, 15, uncut_salon, 07-18",
    "leolive, JULIAsummer24A, 10, juliacatharinax, 07-18",
    "snuggs, JUDITH25, 25, judithvanderwijst, 07-18",
    "myproteinnl, THALISSA, 12, lisstilemans, 07-18",
    "shein, sskaa15, 15, julisskaa_, 07-18",
    "shein, Eline3, 15, elineadalla99_tiktok, 07-18",
    "geurwolkje, novi_interieur, 10, casa.novi_, 07-18",
    "aybl, magnimise10, 10, magnimise, 07-18",
    "leolive, IRISKTIKTOK10, 10, iriskrd_tiktok, 07-18",
    "snuggs, Ferena15, 15, ferenavandalenx_tiktok, 07-18",
    "burga, BRITTKXNL, 15, brittlivk, 07-18",
    "begolden, BEAU20, 20, beauvwees, 07-18",
    "paulie__pocket, MARGOT-15, 15, margot.hanekamp, 07-18",
    "tylko, dappermaentje40, 40, dappermaentje, 07-18",
    "lightofthemoon.nl, JULIA10, 10, juliaabuijs_tiktok, 07-18",
    "rostig.nl, ELIZE30, €30, elizebeen, 07-18",
    "plumpcare, Ferena15, 15, ferenavandalenx_tiktok, 07-18",
    "laveen.nl, esmeevanleijden20, 20, esmeevanleijden, 07-18",
    "fitpiggy.nl, AmsMokkels10, 10, amsterdamsemokkels, 07-18",

    "asos, GET20, 20, asos, 07-17",

    "shein, 24q3summer, 15, summerkaybuckwell, 07-16",
    "airup, FLAMBY, 15, honey, 07-16",
    "nakdfashion, TRICARICO, 50+10, elisetricarico, 07-16",
    "desenio, XSNEL, 40+10, wgk, 07-16",
    "idealofsweden, BBLEG, 50+10, wgk, 07-16",
    "ginatricot, WILLEMIJN20, 20, willemijnvreee_tiktok, 07-16",
    "fashiontiger.nl, HITIGER10, 10, janedoe, 07-16",
    "bodyandfit.com, BBCRESCI, 10, crescicroes, 07-16",
    "gutsgusto, MRSPINAY15, 15, mrspinay, 07-16",
    "mimamsterdam, BREGJE20, 20, bregjeverkennis, 07-16",
    "gutsgusto, MAREN15, 15, leonie.maren, 07-16",
    "shein, 24q3emilyj, 15, justemilyjane, 07-16",
    "emmasleepnl, DIONE, 10, dionehousheer, 07-16",
    "photowall_sweden, WALLS15, 15, photowall_sweden, 07-16",
    "airup, Miniliefde10, 10, miniliefde, 07-16",
    "nakdfashion, MARITK, 50+10, maritkramer__tiktok, 07-16",
    "nakdfashion, veroniquev, 50+10, veroniquevalkenburg, 07-16",
    "nakdfashion, ANTONIA, 50+10, isabelleantonial, 07-16",
    "gymshark, HOLLIES, 10, holliefitx, 07-16",
    "aliexpress (> €169), GDNL20, €20, wgk, 07-16",
    "aliexpress (> €239), GDNL30, €30, wgk, 07-16",
    "nakdfashion, aylinend, 50+10, aylin.end, 07-16",
    "esn, EMMA, 10, workoutsbyem, 07-16",
    "aybl, EMMA, 10, workoutsbyem, 07-16",
    "newfysic, MONIQUE25, 25, moniquesmit_insta, 07-16",
    "leolive, LAURYNVACAY, 10, laurynstadhouder, 07-16",
    "leolive, NINASUMMER24, 10, ninasemotions, 07-16",
    "myproteinnl, MERIJN, 15, merijn, 07-16",
    "bodyandfit.com, BBCHRISTIAN, 10, christianvarweg, 07-16",
    "secretsales.nl, JOLINE, 10, yuppielifestyle, 07-16",
    "geurwolkje, WIL10, 10, wonenopnummer11, 07-16",
    "snuggs, SELENADINE15, 15, selenadinexz, 07-16",
    "leolive, MEGANVtiktok10, 10, meganveerman_tiktok, 07-16",
    "paulie__pocket, Laure15, 15, laure.dierckx, 07-16",
    "farmcamps.com, INFC24SF, €30, de_speelfee, 07-16",
    "snuggs, LIFEASESME, 20, lifeasesme, 07-16",
    "burga, CHERRYSMXNL, 15, cherriemommie, 07-16",
    "paulie__pocket, MIRIAM-15, 15, seebymiriam, 07-16",
    "lorluxury.nl, laure15, 15, laure.dierckx, 07-16",
    "loubana.nl, Anne10, 10, mijn.nieuw_jaar, 07-16",

    "zalando, SPORTIEF15, 15, zalando, 07-14",
    "shein, q3macarena, 15, macarenasilvats, 07-14",
    "loungeunderwear, MICHELLEF10, 10, michellefleur, 07-14",
    "airup, Melisspieters10, 10, melisspieters, 07-14",
    "nakdfashion, kimberlybru, 50+10, kimberly_bru, 07-14",
    "desenio, XPLEASE, 40+10, kleinpepertje, 07-14",
    "christineleduc (> €50), Danique10, €10, daniquehogguer, 07-14",
    "bodyandfit.com, BBERKY10, 10, haagse_edje_, 07-14",
    "famousstore, summer15, 15, famousstore, 07-14",
    "mimamsterdam, JILl20x, 20, jillvd.h, 07-14",
    "gutsgusto, TASMIN15, 15, tasmin.devi, 07-14",
    "ginatricot, GINA20, 20, rabatt.inspo, 07-14",
    "stronger, ISABEL_25, 25, isabelolsson, 07-14",
    "lookfantastic, SALEZUSJESLF, 10, salezusjes, 07-14",
    "ginatricot, elinandreaj20, 20, rabattkodersverige, 07-14",
    "ginatricot, KRAMER20, 20, maritkramer__tiktok, 07-14",
    "nakdfashion, Lucaaa, 50+10, luca.schalkwijk, 07-14",
    "shein, hammarby123, 15, hammarby_prastgard, 07-14",
    "gymshark, FRANKLIN, 10, the.franklin, 07-14",
    "berlook, Flavia20, 20, kleinpepertje, 07-14",
    "lampenlicht.nl, IG-ROMY10, 10, romykoldenhof_, 07-14",
    "loopearplugs, LOOPXMICHELLE10, 10, michelle_bollen, 07-14",
    "esn, MR, 25, maxi_lifts_, 07-14",
    "maniacnails, ROSEMARIJN15, 15, xrosemarijnelise, 07-14",
    "myproteinnl, BRITT, 12, fit.brittje, 07-14",
    "only, ROSANNE12, 12, roosbolleboos333, 07-14",
    "geurwolkje, FASHION, 10, fashionistasdaily.nl, 07-14",
    "aybl, MARY, 10, maryw.fit, 07-14",
    "leolive, RANIVACAYY, 10, raniivdb, 07-14",
    "burga, CINDYCOLXNL, 15, xcinn__, 07-14",
    "womensbest, JULIECFS, 10, julie_cfs, 07-14",

    "airup, LIEKE10, 10, liekedeb.nl, 07-12",
    "shein, 01queen, 15, queeneliz_, 07-12",
    "ginatricot, LIV20, 20, gratispandan, 07-12",
    "nakdfashion, femke, 50+10, femkezoe, 07-12",
    "bodyandfit.com, ROS10, 10, buffsko, 07-12",
    "gutsgusto, TAMMI15, 15, tammiliko, 07-12",
    "ginatricot, TALE20, 20, rabattkodsidan, 07-12",
    "gymshark, KATERINAR, 10, mar.riahmcmanus, 07-12",
    "greenchef.nl, CHEFMAMALOTJE, €95, mama.lotje, 07-12",
    "esn, SOMMER, 25, romansommer.sportphysio, 07-12",
    "maniko-nails.nl, JUDITHJULI, 20, judith.keijsers, 07-12",
    "myproteinnl, DAAN, 12, daanvgeelen, 07-12",
    "geurwolkje, ambervstannaland, 10, ambervstannaland, 07-12",
    "cleothelabel.nl, DEWI10, 10, dewimichellee_tiktok, 07-12",
    "aybl, RUBY10, 10, rubesfit_, 07-12",
    "safira, SALE5, tot 70+5, rabatt.inspo, 07-12",
    "maniko-nails.nl, SARAHJULI, 20, sarahliebregts, 07-12",
    "nakdfashion, kremer, 50+10, sophiekremer, 07-12",
    "famousstore, kayleigh10, 10, kayleighkooi_tiktok, 07-12",
    "maniko-nails.nl, ROMYJULI, 20, romykoldenhof_, 07-12",
    "aybl, ARIANNE10, 10, arianne.deveau, 07-12",
    "esn, FOODHUNTER, 25, lowcalorie_foodhunter, 07-12",
    "snuggs, LTV25, 25, lterveld, 07-12",
    "ginatricot, BYB20, 20, bybenedicthe, 07-12",
    "burga, CELINEEXNL, 15, celinedekkerr, 07-12",
    "ginatricot, ELISA20, 20, elisanwh_tiktok, 07-12",
    "otrium (> €50), LUCKYYOU, €10, honey, 07-12",
    "shein, 24q3hsarah, 15, hart_sarah5, 07-12",
    "emmasleepnl, JEROENH, 10, jeroenhertzberger, 07-12",
    "mewmews, Veramm20, 20, vera.vanderlinden_tiktok, 07-12",
    "vitaminfit.eu, Kari10, 10, karivdheide, 07-12",
    "laukisieraden, ISA15, 15, vlogjes..vanisa_tiktok, 07-12",
    "cleothelabel.nl, 50NIETRETOUR, 50, cleothelabel.nl, 07-12",
    "posterstore, JULIA45, 40+5, juliavandenbrom_tiktok, 07-12",
    "treasurejewels.nl, Jill15, 15, jillverbaalx_tiktok, 07-12",
    "alpacavorstenbosch, INFC24SF, €30, de_speelfee, 07-12",
    "mayafreya.nl, margo20, 20, hetismarg, 07-12",

    "shein, amyss, 15, amyroodbol, 07-10",
    "sapphlingerie, SAPPHISBACK, 50+20, sapphlingerie, 07-10",
    "nakdfashion, demi, 50+10, deminugteren, 07-10",
    "ginatricot, Sher20, 20, rabattkoder.sverige, 07-10",
    "desenio, XGURU, 40+10, kleinpepertje, 07-10",
    "gutsgusto, PRINCI15, 15, rosaprinci, 07-10",
    "bodyandfit.com, BBRobert10, 10, robertbrandsmaaa, 07-10",
    "fashiontiger.nl, fashiontigerxveerle, 15, veerlejodieke_tiktok, 07-10",
    "gymshark, SOFCREED, 10, sofcreedfit, 07-10",
    "loopearplugs, LOOPXFITMELOTTE, 10, fitmetlotte_, 07-10",
    "lyko, roos25, 25, roosdelwig, 07-10",
    "lyko, wahida25, 25, wahidanasira_tiktok, 07-10",
    "shein, noell, 15, janedoe, 07-10",
    "shein, 24q3jane, 15, janeofbucks, 07-10",
    "nakdfashion, Betuel, 50+10, betulakbaba, 07-10",
    "esn, FINN, 10, finnbunnfit, 07-10",
    "maniko-nails.nl, SARAHVBHJULI, 20, sarah_vbh, 07-10",
    "myproteinnl, FITGIRL, 37, fitgirlfie, 07-10",
    "geurwolkje, MANONBRACKE, 10, manonbracke, 07-10",
    "nakdfashion, asayla, 50+10, xmylifeasayla, 07-10",
    "lyko, 20ALL, 20, rabatt.inspo, 07-10",
    "pinkgellac, AMBERSHINEA, 10, nagels.a, 07-10",
    "pinkgellac, FLAVIASHINE, 10, kleinpepertje, 07-10",
    "aybl, SASKIA, 10, sasiefit, 07-10",
    "cargoroobike, NATALIEVDLET, , natalievdlet, 07-10",
    "leolive, DYARAtiktok10, 10, dyara.rachel_tiktok, 07-10",
    "ginatricot, AMBERB20, 20, amberbartelings, 07-10",
    "snuggs, Elyse25, 25, liefselyse, 07-10",
    "terstal, ANNDOMINIQUE10, 10, anndominique, 07-10",
    "hellofresh.nl, HELLOPINAR110, €110, pinar.donmez, 07-10",
    "burga, ROMYGXNL, 15, romygrijzenhout, 07-10",
    "stronger, WHAELSE20, 20, whaelse, 07-10",
    "nooma_design, KEEK15, 15, keekshuis, 07-10",
    "paulie__pocket, NOOR-15, 15, noorgroendijk, 07-10",
    "voltairesneakers, TIKTOK10, €10, voltairesneakers, 07-10",
    "koro-shop.nl, MINDGAINS, 5, mindgains_, 07-10",
    "lomabeauty.eu, SARAH30, 30, sarahrebeccanl, 07-10",
    "mollersomega3, moniek30, 30, madebymowie, 07-10",
    "joseeberbeauty.com, mel10, 10, blissofmel, 07-10",

    "asos, SAVE20, 20, asos, 07-09",
  ];
}
