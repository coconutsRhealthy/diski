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
    "shein, SBV802, 15, itsharonx, 06-19",
    "loavies, SUMMERCLEMNZI, 20, clemnzi, 06-19",
    "nakdfashion, hayleyanne, 15, thehayleyanne, 06-19",
    "vitakruid, DANSJE, 10, wgk, 06-19",
    "bylashbabe, STARLASH, 10, wgk, 06-19",
    "bodyandfit.com, KAZ10, 10, kazvanderwaard, 06-19",
    "zonnebrillen.com, CHARISSA, 20, charissabellamorae, 06-19",
    "divain, BBMEISJE, 5, kleinpepertje, 06-19",
    "idealofsweden, BBLOEM, 10, kleinpepertje, 06-19",
    "loavies, SUMMER-IPEK, 20, ipeksteenbeek, 06-19",
    "farfetch, POZE, €30, __poze._, 06-19",
    "nakdfashion, morganechd, 15, morganechd, 06-19",
    "ginatricot, roos20, 20, rabattkode.norge, 06-19",
    "aliexpress, JUNE9OT, €8, aliexpress, 06-19",
    "gutsgusto, RENEE15, 15, reneevdschoot, 06-19",
    "swipeupsneakers, TARA23, €7, tarastehmannx, 06-19",
    "rihoas, Catarin, 20, petitetreasures, 06-19",
    "geurwolkje, KUSUM10, 10, stylingbykusum, 06-19",
    "farfetch, ENNA30, €30, enna.h, 06-19",
    "pinkgellac, EVESUMMER, 10, unecitadinedansunbledpaume, 06-19",
    "otrium, WENYI20, 20, wenyiteong, 06-19",
    "snuggs, SHELING20, 20, shelingcynthia, 06-19",
    "gymshark, KIKI, 10, kikifitness_, 06-19",
    "burga, EMMAXNL, 15, x.x.emma.xx, 06-19",
    "desenio, XYES15, 15, kamilkaaalove, 06-19",
    "myproteinnl, LOTTE, 25, lottleeuw, 06-19",
    "bjornborg, Charlotte20, 20, charliecarlen, 06-19",
    "stronger, MONIKA20, 20, monikabuser, 06-19",
    "stronger, rowenna20, 20, rowenna_vdl, 06-19",
    "icaniwill, ILKA20, 20, ilka.me, 06-19",
    "veromoda, ALICIA20, 20, lifestylebyalicia, 06-19",
    "shein, SBV1281, 15, xeniarock, 06-19",

    "zalando, PAPA-15, 15, zalando, 06-18",
    "asos, EXTRA25, 25, asos, 06-18",
    "loavies, SUMMERAMBER, 20, ambermeiresonne, 06-18",
    "farfetch, DELIASAVE, €30, mommalovesfashionblog, 06-18",
    "farfetch, VANILLE10, 10, vanilleblb, 06-18",
    "vitakruid, NUGGET, 10, wgk, 06-18",
    "bodyandfit.com, BASMA, 10, basma_fit, 06-18",
    "nakdfashion, jaimy, 15, jaimyruys, 06-18",
    "burga, FEMKEX15, 15, femke.meines, 06-18",
    "shein, SBV599, 15, iamanjuyadav, 06-18",
    "shein, SXYCurves66, 15, dreacierra, 06-18",
    "pinkgellac, MAEVASUMMER, 10, mamansoccupedetout, 06-18",
    "otrium, REY20, 20, rey.steezy, 06-18",
    "gymshark, CHANTELL, 10, chantellramirezz, 06-18",
    "heyestrid, UNIDAYS, 20, honey, 06-18",
    "ginatricot, MARIE20, 20, maryshionista, 06-18",
    "famousstore, Chayenna10, 10, dailydiscountsnl, 06-18",
    "loavies, SUMMERYAS, 20, yasminevanhissenhoven, 06-18",
    "loavies, SUMMER-ZARA, 20, zaravandam, 06-18",
    "nakdfashion, arguelles, 15, hannah.arguelles, 06-18",
    "geurwolkje, HILDY10, 10, happy_hildy_home, 06-18",
    "nanabeebi, kaya15, 15, thelittlekayafamilyy, 06-18",
    "burga, JEANETXNL, 15, jeanetdijkstra, 06-18",
    "desenio, XDDXX, 15, djeni_monroe, 06-18",
    "myproteinnl, PRIS, 25, lifewithprissie, 06-18",
    "bjornborg, KIMD20, 20, kim.dejonghe, 06-18",
    "chiquelle, EVA25, 25, eef_dgn, 06-18",
    "stronger, ANNELINA20, 20, annelinawaller, 06-18",
    "stronger, thehague20, 20, love.thehague, 06-18",
    "icaniwill, HELGESON20, 20, iehlifestyle, 06-18",
    "veromoda, charlottewestlund20, 20, charlotte_westlund, 06-18",
    "veromoda, STEPHANIEM10, 10, stephaniematthijs, 06-18",
    "hetinpakhuis, ZOMERZON, 15, hetinpakhuis, 06-18",
    "immejewellery, KIMLIAN15, 15, kimlianvdmeij, 06-18",

    "airup, MYRONSBDAY, 10, honey, 06-16",
    "meetmethere, GLAMOUR, 20, , 06-16",
    "shein, SBV1276, 15, 777_karz85psxx, 06-16",
    "bodyandfit.com, KIMMY10, 10, kimandthekids, 06-16",
    "loavies, LAURAVACAY, 20, laura.oliveiragranja, 06-16",
    "nakdfashion, shula, 15, shularoose, 06-16",
    "farfetch, ALEXSTYLE, €30, withalexstyle, 06-16",
    "burga, ISABELLEXNL, 15, belleee.vd, 06-16",
    "gutsgusto, LIZETGREVE10, 10, lizetgreve, 06-16",
    "idealofsweden, BBHOT23, 15, kleinpepertje, 06-16",
    "loavies, BOVACAY, 20, bopraet, 06-16",
    "loavies, SUMMERFEBE, 20, febedekoninck, 06-16",
    "geurwolkje, JOLIEKE10, 10, joliekebak, 06-16",
    "nakdfashion, GUUSJE, 15, guusjewm, 06-16",
    "nakdfashion, esmeeb, 15, esmeeb_, 06-16",
    "nanabeebi, sura15, 15, suraslifee, 06-16",
    "lookfantastic, LFNLNOEMIZ, 20, noemizadra_, 06-16",
    "shein, kasia001, 15, kate.ing, 06-16",
    "ginatricot, LUISA20, 20, luisasmiling, 06-16",
    "pinkgellac, LYNNSUMMER, 10, lynnwijsman_, 06-16",
    "otrium, BELLE20, 20, bellehutt, 06-16",
    "gymshark, DOMINIQUE, 10, lanae_avila, 06-16",
    "desenio, XWW15, 15, kamilkaaalove, 06-16",
    "myproteinnl, SOUPEL, 25, soupel, 06-16",
    "bjornborg, BERDIKE20, 20, berdikebriers, 06-16",
    "safira, BB307, 20, mademoiselle5374, 06-16",
    "chiquelle, BDAY11, 60, chiquelle, 06-16",
    "stronger, Sabine20, 20, styledbysabine, 06-16",
    "icaniwill, MARATHON20, 20, marathonemma, 06-16",
    "veromoda, WINKELHOF20, 20, kimvanwinkelhof, 06-16",
    "emmasleepnl, STIJN, 10, stijn_fransen, 06-16",
    "bronxshoes, DEMI20, 20, deminugteren, 06-16",
    "doonails, DEBBIE15, 15, debbiedhillon, 06-16",
    "danielwellington, DWBBDT8, 15, rentishehu, 06-16",

    "shein, SBV1725, 15, fashion_meets_color_, 06-14",
    "loavies, SUMMER-HAJAR, 20, hajarora, 06-14",
    "gutsgusto, LOLANNA10, 10, lolannaa, 06-14",
    "gymshark, Joy, 10, joyjoysfitness_, 06-14",
    "zonnebrillen.com, ROSA, 20, rosasofiakolen, 06-14",
    "loavies, JUSTINE20, 20, justinevanruymbeke, 06-14",
    "bodyandfit.com, FOODIES10, 10, foodtrackerz, 06-14",
    "nakdfashion, EMST, 15, emmstell, 06-14",
    "geurwolkje, VELDHOVEN10, 10, living_at_veldhoven, 06-14",
    "nanabeebi, jacky15, 15, jackynobels, 06-14",
    "otrium, chrissy20, 20, chrissyovergoor, 06-14",
    "snuggs, yaramairin20, 20, yaramairin, 06-14",
    "idealofsweden, BBFEARLESS, 10, kleinpepertje, 06-14",
    "gutsgusto, OHYEAH, vzk, gutsgusto, 06-14",
    "pinkgellac, ILONASUMMER, 10, ilonailsathome, 06-14",
    "adidas.nl, MAF-6NVF-MZLS-RVLV-DF7WN, 10, adidas.nl, 06-14",
    "ginatricot, ELLA20, 20, rabatt.inspo, 06-14",
    "jotex, 423681, 30, rabattkodersverige, 06-14",
    "loavies, SUMMER-SIM, 20, sim.bae, 06-14",
    "nakdfashion, anaelisa, 15, ana_elisa_, 06-14",
    "nakdfashion, chamee, 15, chameebarkmanx, 06-14",
    "snuggs, CAREAUX20, 20, careaux, 06-14",
    "desenio, XKLNNR8, 15, nazh_s, 06-14",
    "superdry, HANNAH10, 10, hannah.arguelles, 06-14",
    "wearglas, JEN20, 20, jenliujones, 06-14",
    "myproteinnl, MERIJN, 25, merijn, 06-14",
    "bjornborg, CHRISSY20, 20, chrissyovergoor, 06-14",
    "voltairesneakers, MIRTE10, €10, mirte_buurman, 06-14",
    "famousstore, naomi10, 10, dailydiscountsnl, 06-14",
    "safira, BB20BYE, 20, styleblogmichelle, 06-14",
    "chiquelle, 48HRS, 50, chiquelle, 06-14",
    "stronger, wahlberg20, 20, juliawahlberg, 06-14",
    "stronger, jolien20, 20, fitwithdriesandjolien, 06-14",
    "icaniwill, JASMINBR20, 20, jasmin_boe_rasmussen, 06-14",
    "veromoda, YAMAIKA20, 20, inspiredbyyam, 06-14",
    "shein, leah22ie, 15, _leahflynn_, 06-14",
    "armedangels, paulienmullaert15, 15, paulienmullaertx, 06-14",
    "bearswithbenefits, LOISBLOG25, 25, loisblog, 06-14",
    "naifcare, ELISEBOERSXNAIF, 20, eliseboers, 06-14",
    "leolive, rachelgoesspring, 10, by.rachellx, 06-14",
    "padelshop.com, DAPHNE10, 10, daphnesonneveld, 06-14",

    "asos, MORESALE, 20, asos, 06-13",

    "shein, SBV1266, 15, rr.m._x, 06-12",
    "loavies, AIDA-VACAY, 20, aidouben, 06-12",
    "nakdfashion, LOUX, 15, jordanloux, 06-12",
    "gymshark, LIVN, 10, livlivinlife__, 06-12",
    "gutsgusto, KATHY10, 10, kathys.lookbook, 06-12",
    "geurwolkje, NANOEK10, 10, gewoonnanoek, 06-12",
    "otrium, SHIVAM20, 20, shiv_1886, 06-12",
    "nanabeebi, Demi15, 15, demi.vanhouten, 06-12",
    "idealofsweden, BBCOCKTAIL, 15, kleinpepertje, 06-12",
    "veromoda, PAULINEDB20, 20, paulinedebaere, 06-12",
    "farfetch, CAROLINEB, €30, carolineblomst, 06-12",
    "divain, BBLEND, 5, kleinpepertje, 06-12",
    "pinkgellac, JOYSTYLESSUMMER, 10, joystyles.nl, 06-12",
    "ginatricot, BLOM20, 20, rabattkodersverige, 06-12",
    "myproteinnl, SAVANNAH, 30, savannahprez, 06-12",
    "desenio, KARALYNN35, 35, healthybalancedinspired, 06-12",
    "shein, MAEBH23, 15, maebhyoungxox, 06-12",
    "loavies, SUMMERCAROLIEN, 20, carolienmichel, 06-12",
    "loavies, CLEANCE-VACAY, 20, cleance_o, 06-12",
    "yesstyle, YESGIRL23, 5, kleinpepertje, 06-12",
    "nakdfashion, melissan, 15, melissa_nh, 06-12",
    "nakdfashion, laratheresa, 15, lara_theresa, 06-12",
    "danielwellington, DWBBP93, 15, zarastreetstyleitaly_, 06-12",
    "snuggs, LTV20, 20, lterveld, 06-12",
    "snuggs, GINNEYNOA20, 20, ginneynoa, 06-12",
    "wearglas, MOG20, 20, mogzee_m, 06-12",
    "bjornborg, SARAH20, 20, sarahliebregts, 06-12",
    "bjornborg, YASMINE20, 20, yasminevanhissenhoven, 06-12",
    "safira, BBDDM20, 20, daisiesandglitter, 06-12",
    "stronger, esmeralda20, 20, esmeraldaattema, 06-12",
    "stronger, Annabell20, 20, annabell_erika, 06-12",
    "icaniwill, suzanne25, 25, suzannesvanevik, 06-12",
    "madlady, MADSGYO, 15, rabattkoder.sverige, 06-12",
    "leolive, shelcycarpentierspring, 10, shelcycarpentier, 06-12",
    "finaste.nl, PAPA15, 15, jenehknoopp, 06-12",

    "zalando, DAD-DEALS, 15, zalando, 06-11",
    "shein, SMP2860, 15, gabita_grigorasofficial, 06-10",
    "airup, STIJN10, 10, honey, 06-10",
    "loavies, SUMMER-GIOVANNI, 20, giovannihuls, 06-10",
    "loavies, BARBARAVACAY, 20, jadorebar, 06-10",
    "gymshark, LAURENK, 10, laurenknott_fit, 06-10",
    "idealofsweden, BBHOT23, 15, kleinpepertje, 06-10",
    "nakdfashion, decke, 15, kimdecke, 06-10",
    "gutsgusto, LAURABRIJDE10, 10, laurabrijde, 06-10",
    "gutsgusto, TINASON15, 15, tinason__, 06-10",
    "rihoas, JAMILYA, 20, jamilya.2009.official, 06-10",
    "zaful, Selena25, 25, iamselenagrace, 06-10",
    "farfetch, FER30, €30, fernanda_reads, 06-10",
    "pinkgellac, margauxsummer, 10, diamond_roses, 06-10",
    "loavies, SUMMER-LISANNE, 20, lisanne.blonk, 06-10",
    "myfunzy, debbie35, €35, debbiedhillon, 06-10",
    "leolive, julievandoorenspring, 10, julievandooren, 06-10",
    "uwantisell, WENDIEXX, 10, wendievlaar, 06-10",
    "otrium, WEEKEND20, 20, otrium, 06-10",
    "uwantisell, NAOMIX10, 10, naomivaneeren_, 06-10",
    "tet.responsiblewear, LIZZY10, 10, lizzyvdligt, 06-10",
    "nakdfashion, URBASIL, 15, urbasil, 06-10",
    "nakdfashion, Evelien, 15, anthonisevelien, 06-10",
    "ginatricot, SABINA20, 20, rabattkode.norge, 06-10",
    "desenio, XPON, 15, alexandra_petram, 06-10",
    "myproteinnl, CLEM, 25, clem_lgy, 06-10",
    "bjornborg, ELISAN20, 20, elisanwh, 06-10",
    "veromoda, ELINAPLATOV20, 20, elina.pltv, 06-10",
    "veromoda, HENNAL20, 20, homebyhenna, 06-10",
    "shein, SBV573, 15, nermeen_tay, 06-10",
    "safira, BBOFFF20, 20, rabattkodersverige, 06-10",
    "stronger, Evelyn20, 20, evelynelisabeth, 06-10",
    "stronger, JO20, 20, handlamedrabattkoder, 06-10",
    "icaniwill, ANNEWER20, 20, anne__wer, 06-10",

    "shein, SBV424, 15, _sophiespurling, 06-08",
    "loavies, REMKE20, 20, remke, 06-08",
    "gymshark, VENUTI, 10, nickvenuti_fit, 06-08",
    "nakdfashion, Veroniquev, 15, veroniquevalkenburg, 06-08",
    "pinkgellac, DONICIASUMMER, 10, doniciahofman, 06-08",
    "rihoas, MEDEEA, 20, medeeaalexandra98, 06-08",
    "zaful, Amy2023, 22, amyfraserxox, 06-08",
    "farfetch, MENNA2, €30, janedoe, 06-08",
    "gutsgusto, MARINA15, 15, allaboutmaerry, 06-08",
    "otrium, CELESTE20, 20, _celestemunoz, 06-08",
    "myproteinnl, LYNNH, 25, lynnhermanussen, 06-08",
    "veromoda, MARIJET20, 20, marijetilkema, 06-08",
    "snuggs, BONNIE20, 20, bijbonnie, 06-08",
    "ginatricot, marijn20, 20, rabattkoder.sverige, 06-08",
    "lightinthebox, LISA20, 20, lisajkoster, 06-08",
    "ibizamode, BOMINK10, 10, bomink_, 06-08",
    "ynot.nl, LINDSEY, , lindseybeljaars, 06-08",
    "leolive, maschadaniquespring, 10, mascha.danique, 06-08",
    "womensbest, NENCIE, 10, nenciesway, 06-08",
    "merodacosmetics, dayenneritchi, 20, dayenneritchi, 06-08",
    "hellofresh.nl, HELLOLAURA85, €85, lauraxdams, 06-08",
    "veromoda, amberweyn20, 20, amberweyn, 06-08",
    "shein, Cigdem, 15, cigdemsorrell4477, 06-08",
    "desenio, XMMMM15, 15, janedoe, 06-08",
    "idealofsweden, BBVMK, 15, janedoe, 06-08",
    "loavies, SUMMER-STACEY, 20, staceeyyx, 06-08",
    "nakdfashion, berry, 15, washed_out_denim, 06-08",
    "nakdfashion, aliciala, 15, aliciala_, 06-08",
    "snuggs, SARAH, 20, sarahliebregts, 06-08",
    "burga, SHANNONWXNL, 15, shannblogtnl, 06-08",
    "burga, QUINCYXNL, 15, quincyheemskerk, 06-08",
    "bjornborg, JILL20, 20, jillgregre, 06-08",
    "safira, BBDD20, 20, daisiesandglitter, 06-08",
    "gutsgusto, MARIEYOU10, 10, marieyou__, 06-08",
    "stronger, PURESENSES20, 20, pure_senses, 06-08",
    "stronger, 20GYM, 20, lien_tack87, 06-08",
    "icaniwill, ELSAP20, 20, elsypelsy, 06-08",

    "shein, SBV1414, 15, erika_deldurazno, 06-06",
    "loavies, SUMMER-TANISHA, 20, tanishapinas, 06-06",
    "nakdfashion, alexandrova, 15, karolina.alexandrova, 06-06",
    "zonnebrillen.com, DEWI, 20, dewipijnacker, 06-06",
    "superdry, JANET10, 10, janet.osayande, 06-06",
    "zaful, emily25, 25, emily_kedzie, 06-06",
    "rihoas, leseman, 20, manaleseman, 06-06",
    "idealofsweden, BBLUSHLY, 15, wgk, 06-06",
    "divain, BBTWINKLE, 5, wgk, 06-06",
    "desenio, XFUZZY, 15, wgk, 06-06",
    "ginatricot, Mathilde20, 20, rabattkodersverige, 06-06",
    "loavies, summer-esmee.meijerr, 20, esmee.meijerr, 06-06",
    "loavies, SUMMER-NIKKI, 20, nikkiibaas, 06-06",
    "nakdfashion, VIDANAA, 15, vidanaaaa, 06-06",
    "nakdfashion, sanny, 15, xsannykaur, 06-06",
    "shein, melissap15, 15, melissapereira__, 06-06",
    "heyestrid, UNICASE, , honey, 06-06",
    "otrium, FLOOR20, 20, countlessshades, 06-06",
    "snuggs, Elyse20, 20, liefselyse, 06-06",
    "gymshark, Evelyn, 10, evelyn.shapiro.tamez.fit, 06-06",
    "burga, EMMAXNL, 15, x.x.emma.xx, 06-06",
    "myproteinnl, EMIEL, 25, emiel_sinnaeve, 06-06",
    "bjornborg, ELISE20, 20, elisetricarico, 06-06",
    "safira, BBJUN20, 20, dilara.muz99, 06-06",
    "chiquelle, EVA25, 25, eef_dgn, 06-06",
    "gutsgusto, huisjevolliefde15, 15, huisje.vol.liefde, 06-06",
    "stronger, TRAINHARD20, 20, trainhard_eatwell, 06-06",
    "stronger, 20MONA, 20, monas.diary, 06-06",
    "farfetch, LUISA30, €30, luisa.snd, 06-06",
    "icaniwill, PAULINAKART20, 20, paulinakart, 06-06",
    "veromoda, VALERYRIEMENS20, 20, valeryriemens, 06-06",
    "veromoda, ILSEM10, 10, ilsemiedema_, 06-06",
    "athletic.bee, sharon20, 20, sharonvdw, 06-06",
    "micas.official, SARAMIC12, 15, micas.official, 06-06",
    "tastea.eu, MEDINABEKER, , medinaletica, 06-06",
    "terstalnl, SOFIE10, 10, sofiegraafland, 06-06",
    "leolive, EVELIENSPRING, 10, anthonisevelien, 06-06",
    "danielwellington, DWBBF44, 15, rentishehu, 06-06",
    "hellofresh.nl, HFSOPHIE85, €85, sophiemilzink, 06-06",
    "bjornborg, KELLY20, 20, kellyhamelijnck, 06-06",
    "goboony, Saskia35, €35, saskiaweerstand, 06-06",
    "paulvalentine, PVBBWENEN, 10, martaswiggers, 06-06",
    "hellofresh.nl, HELLOCOZY85, €85, charlottejanssen94, 06-06",

    "shein, SMP1556, 15, awifeslife_, 06-04",
    "loavies, SUMMER-ELEANORE, 20, byeleanore, 06-04",
    "nakdfashion, LEEONIE, 15, leeonie.kr, 06-04",
    "superdry, WEI10, 10, chuweixuan, 06-04",
    "zaful, MINT25, 25, mintwarapon, 06-04",
    "rihoas, Eveblun, 20, eve_blun, 06-04",
    "bodyandfit.com, RAYMILS10, 10, raymilsamuel, 06-04",
    "idealofsweden, BBGLANCE, 15, wgk, 06-04",
    "desenio, XANGELS, 15, wgk, 06-04",
    "gutsgusto, LEONIE15, 15, leonacathrina, 06-04",
    "gymshark, TMAC, 10, tommacfitness, 06-04",
    "otrium, MIRTHE20, 20, mirthe_mj, 06-04",
    "veromoda, JELTJEVDP20, 20, jel_nl, 06-04",
    "veromoda, STEPHANIE20, 20, fashionkittenandlawyer, 06-04",
    "shein, BIZheileen, 15, heileenmartin, 06-04",
    "loavies, ALWENA_R-VACAY, 20, alwena_r, 06-04",
    "ginatricot, AMALIE20, 20, rabatt.inspo, 06-04",
    "myproteinnl, JESSICANL, 25, jessicakuijpers, 06-04",
    "madlady, MADT9VA, 15, bridgetxloren, 06-04",
    "emmasleepnl, YASMINEBERRAG, 10, hijabsecrets, 06-04",
    "burga, MERYEMXNL, 15, positivemeryem, 06-04",
    "bjornborg, WESTERMAN20, 20, sara.westerman, 06-04",
    "icaniwill, STINEN20, 20, stinenilsen_, 06-04",
    "nakdfashion, Tamara, 15, carrieslifestyle, 06-04",
    "stronger, MIA20, 20, mia_artistry, 06-04",
    "safira, ️BB20JUNI, 20, styleblogmichelle, 06-04",
    "twistshakebaby, 20dianegroenhof, 20, dianegroenhof, 06-04",
    "boucleme, valeriequirijns, 15, valeriequirijns, 06-04",
    "loavies, VACAYDANAE, 20, danaedewolf, 06-04",
    "zalando, LUXE-15, 15, zalando, 06-04",

    "shein, SMF0059, 15, bloggerlifestyle90, 06-02",
    "airup, BRAWADIS20, 20, honey, 06-02",
    "rihoas, LILLIAN20, 20, pinkpinkyoga, 06-02",
    "loavies, JULIE-VACAY, 20, julieplnn, 06-02",
    "superdry, TSUNGAI10, 10, t.maxieee, 06-02",
    "zaful, ELENA25, 20, elenaaesc, 06-02",
    "bodyandfit.com, MIES10, 10, coco_michellex, 06-02",
    "asos, CHANCE, 20, asos, 06-02",
    "nakdfashion, isabela, 15, isaantelmo, 06-02",
    "otrium, LYA20, 20, lyamariella, 06-02",
    "gymshark, HHF, 10, harrietharper_fitness, 06-02",
    "heyestrid, FAITHLEMONADE, , faithlouisak, 06-02",
    "snuggs, ELISEEPKER20, 20, eliseepker, 06-02",
    "myproteinnl, NAOMI, 25, naomixszabo, 06-02",
    "burga, MICHELLEXNL, 15, miespiration, 06-02",
    "wefashion, ELISEXWE, 25, eliseboers, 06-02",
    "ginatricot, Nicoline20, 20, rabattkodersverige, 06-02",
    "pinkgellac, lynettesummer, 10, lynette.trompert, 06-02",
    "shein, 23nbse15, 15, nina_bromster, 06-02",
    "merodacosmetics, RABAT, 20, rabattkoder.no, 06-02",
    "veromoda, FALLON20, 20, fallon.fashionn, 06-02",
    "loavies, FANNY-VACAY, 20, fannybgn, 06-02",
    "loavies, CAROVACAY, 20, sautercaro, 06-02",
    "nakdfashion, ocean, 15, remembertheocean, 06-02",
    "nakdfashion, BETUL, 15, betuel.klkn, 06-02",
    "bjornborg, RIKKE20, 20, rikkestener, 06-02",
    "bjornborg, WILMA20, 20, wilmaanttonen, 06-02",
    "icaniwill, NNEAM20, 20, neamanty, 06-02",
    "burga, JULIAPXNL, 15, hi.jxlia, 06-02",
    "safira, BB20SUMMER23, 20, jenia_94_, 06-02",
    "chiquelle, KIM25, 25, kim.dejonghe, 06-02",
    "stronger, thamar20, 20, thamargoesbananas, 06-02",
    "bangerhead, 10xnina, 10, ninaa_mk, 06-02",
    "fitjeans, nochtli, 30, nochtlii, 06-02",
    "stronger, lindsey20, 20, lindseybeljaars, 06-02",
    "greenchef, CHEFBRITT90, €90, brittwijnne, 06-02",
    "emmasleepnl, CHANNAH, 10, channahkoerten, 06-02",

    "shein, SBV145, 15, the_al_life, 05-31",
    "loavies, JADE20, 20, jadeanna, 05-31",
    "meetmethere, HEYYOU10, 10, meetmethere, 05-31",
    "nakdfashion, noooms, 15, nooomsworld, 05-31",
    "gutsgusto, VERADOKTER15, 15, veradokter, 05-31",
    "desenio, XDAZZLE, 15, wgk, 05-31",
    "hunkemoller, honey-df234t4fvq3y4, 12, honey, 05-31",
    "myproteinnl, MYPVERA, 20, veradokter, 05-31",
    "shein, basics461, 15, thedanarabah, 05-31",
    "veromoda, OLIWIAJ20, 20, jabloneska, 05-31",
    "gymshark, GREGORHATTIE, 10, gregorandhattie, 05-31",
    "snuggs, VEGGIE20, 20, veggiereporter, 05-31",
    "otrium, LAURYN20, 20, janedoe, 05-31",
    "popsockets, BBFLIRT, 15, wgk, 05-31",
    "chiquelle, CHANTAL25, 25, cwrekenhorst, 05-31",
    "burga, DEMIRXNL, 15, demirenee.officiall, 05-31",
    "jotex, 423676, 30, rabattkoder.no, 05-31",
    "loavies, SUMMER-LOLA, 20, hayerelola, 05-31",
    "nakdfashion, moura, 15, matildemmoura, 05-31",
    "nakdfashion, patriziagus, 15, patriziaguss, 05-31",
    "leolive, BRITTMINKspring, 10, brittmink_, 05-31",
    "hellofresh.nl, HELLOBIBI85, €85, bibibreijman, 05-31",
    "snuggs, Lindsey20, 20, lindseybeljaars, 05-31",
    "bjornborg, SHELCY20, 20, shelcycarpentier, 05-31",
    "safira, BBHELLOJUNE, 20, alisha_steinmann, 05-31",
    "stronger, Camille20, 20, camillevhp, 05-31",
    "icaniwill, JOHANNE20, 20, johannethelle, 05-31",
    "veromoda, LISP20, 20, lis.poot, 05-31",

    "shein, 23sw1461, 15, itslolag93, 05-29",
    "airup, RUG20, 20, honey, 05-29",
    "zonnebrillen.com, NIKKI, 15, nonstopnikki.nl, 05-29",
    "loavies, KIRSTEN20, 20, kirstenvo_, 05-29",
    "nakdfashion, melisa, 15, melsssz_, 05-29",
    "idealofsweden, BBCUTEY, 15, wgk, 05-29",
    "meetmethere, HAPPY15, 15, janedoe, 05-29",
    "otrium, MARINA20, 20, marinamitrakos, 05-29",
    "gymshark, AUBRIE, 10, aubrielena, 05-29",
    "chiquelle, 48HRS, 50, chiquelle, 05-29",
    "veromoda, THISISFALLON20, 20, fallon.fashionn, 05-29",
    "myproteinnl, NICKYK, 20, nicky_konings, 05-29",
    "shein, SNC781, 15, laledidio, 05-29",
    "stronger, CECILE20, 20, sportieve_bourgondier, 05-29",
    "divain, BBGLAMOUR, 5, wgk, 05-29",
    "desenio, XBUTTER, 15, wgk, 05-29",
    "ginatricot, METTI20, 20, mettiforssell, 05-29",
    "madlady, MADEW68, 15, gratispandan, 05-29",
    "loavies, ANEKSHA-VACAY, 20, aneksha, 05-29",
    "nakdfashion, jonacaca, 15, jonacaca, 05-29",
    "nakdfashion, angelad, 15, angelllllllllllllllll, 05-29",
    "thepadellers, LISANNE10, €10, lisanne.blonk, 05-29",
    "ibizamode, PASCALLE10, 10, kuss.pas, 05-29",
    "burga, LIANAXNL, 15, lianaadenise, 05-29",
    "burga, MARLYXNL, 15, marlyhartje, 05-29",
    "wearglas, Lotta20, 20, lotta__bergkvist__, 05-29",
    "bjornborg, HELBERG20, 20, helenehelberg, 05-29",
    "bjornborg, Evelien20, 20, anthonisevelien, 05-29",
    "safira, BBSUMMER23, 20, inasemotions, 05-29",
    "stronger, ANINAS20, 20, aninas_7, 05-29",
    "icaniwill, FABIENNEW20, 20, gym.b.ae, 05-29",
    "veromoda, CHARLOTTEW20, 20, charlotte_westlund, 05-29",

    "zonnebrillen.com, DAELORIAN, 20, daelostylo, 05-28",
    "shein, SBV914, 15, lishyy_x, 05-28",
    "bodyandfit.com, DAR10, 10, darylgoesgym, 05-28",
    "loavies, VACAY-FEMKE20, 20, femke.vermaas, 05-28",
    "nakdfashion, mmequeen, 15, mmequeenb, 05-28",
    "gymshark, ELLAK, 10, stayfit_ellak, 05-28",
    "myproteinnl, ANKE, 20, balansindekeuken, 05-28",
    "gutsgusto, KAMILA15, 15, kamilasara_k, 05-28",
    "otrium, MAY25, 25, otrium, 05-28",
    "chiquelle, SUMMER40, 40, chiquelle, 05-28",
    "shein, CFS130, 15, armaniballerini, 05-28",
    "veromoda, ELINAP20, 20, elina.pltv, 05-28",
    "veromoda, DANAN20, 20, dananygaardnielsen, 05-28",
    "lightinthebox, LITBMAY, 15, _lapcevic, 05-28",
    "heyestrid, ELISEMATCHA, , eliseboers, 05-28",
    "snuggs, WEET20, 20, watikvandaagweet, 05-28",
    "loavies, VACAY-JAYANNA20, 20, jayanna_linsey, 05-28",
    "loavies, LEONTIENVACAY, 20, leontiendierick, 05-28",
    "stronger, kelly20, 20, kheeell, 05-28",
    "nakdfashion, LARALAEN, 15, lara.laen, 05-28",
    "nakdfashion, PATRICIA, 15, patricia.lacher, 05-28",
    "ginatricot, FLATNES20, 20, rabatt.inspo, 05-28",
    "ginatricot, BIRKELAND20, 20, rabattkodersverige, 05-28",
    "desenio, XCTR, 15, sheyblog, 05-28",
    "begoldenlabel, DEMI20, 20, deminugteren, 05-28",
    "danielwellington, DWBBRD22, 15, rentishehu, 05-28",
    "doonails, ISA10, 10, isaluna, 05-28",
    "idealofsweden, Rebecca15ideal, 15, rebeccavandenhoek, 05-28",
    "emmasleepnl, BIBI, 10, bibibreijman, 05-28",
    "pinkgellac, NIKKi10, 10, nonstopnikki.nl, 05-28",
    "bjornborg, THEA20, 20, theapedersengoa, 05-28",
    "bjornborg, ROSA20, 20, rosahereman, 05-28",
    "safira, BBSUMM20, 20, dilara.muz99, 05-28",
    "chiquelle, FLEUR25, 25, fleurdijkstra_, 05-28",
    "chiquelle, PETERINA25, 25, xpeterinabroers, 05-28",
    "gutsgusto, robydijkshoorn15, 15, roby.dijkshoorn, 05-28",
    "stronger, BEUKERS20, 20, kellybeukers, 05-28",
    "icaniwill, Fellisa20, 20, fellisa__, 05-28",

    "zalando, ICONIC25, 25, zalando, 05-28",

    "shein, SBV63, 15, emiliaas__, 05-26",
    "nakdfashion, COMEBACK, 30, rabatt.inspo, 05-26",
    "asos, MYSTERY, 30, asos, 05-26",
    "loavies, VACAY-FLEUR20, 20, fleurdijkstra_, 05-26",
    "gymshark, EMILYSHARP, 10, emilysharp.fitness, 05-26",
    "otrium, ADEDAYO20, 20, dayotage, 05-26",
    "gutsgusto, ABOUTSUE10, 10, about.sue, 05-26",
    "gutsgusto, KIRSTEN15, 15, kirstenmaud, 05-26",
    "westwing, 15SERENA, 15, serenaverbon, 05-26",
    "lightinthebox, LEXA15, 20, beautybylexa1, 05-26",
    "lookfantastic, LFTFROBINA, 10, toniisullinails, 05-26",
    "stronger, TAMI20, 20, tami_sattler, 05-26",
    "veromoda, EVAM20, 20, evahelenameijer, 05-26",
    "nakdfashion, talisa, 15, talisalo, 05-26",
    "shein, BASICS306, 15, bloggerlifestyle90, 05-26",
    "loavies, VACAYXJULIA20, 20, juliacatharinax, 05-26",
    "emmasleepnl, JAMIE, 10, mrsjamieli, 05-26",
    "nakdfashion, JessicaM, 15, jessypaige_, 05-26",
    "nakdfashion, CHIARAMARIE, 15, chiaramarie, 05-26",
    "snuggs, HUIS20, 20, huis.vol.testosteron, 05-26",
    "madlady, MADVTEE, 15, rabattkoder.n, 05-26",
    "ginatricot, VICTORIA20, 20, rabattkoder.no, 05-26",
    "otrium, MEG20, 20, megmcmillin_, 05-26",
    "burga, ANOUKJXNL, 15, a.nouktijsen, 05-26",
    "burga, LOUISEXNL, 15, louise_compier, 05-26",
    "idealofsweden, BBD44, 15, katterina.katt, 05-26",
    "desenio, XXL15, 15, iamme._hi.you, 05-26",
    "bjornborg, AMBER20, 20, amberdawyndt, 05-26",
    "famousstore, kelsey10, 10, kelseyvannijnatten, 05-26",
    "safira, BB405, 20, mademoiselle5374, 05-26",
    "chiquelle, KELLY25, 25, kelly.van.rossum, 05-26",
    "stronger, lina20, 20, lliiinnaaa, 05-26",
    "icaniwill, STINEMARI20, 20, sstinemari, 05-26",
    "veromoda, JAMIELEEV20, 20, jamieleeverjans, 05-26",
    "hellofresh.nl, HELLO85KIM, €85, kimkotter, 05-26",
    "diamond_point, SURPRISE20, 20, moderosaofficial, 05-26",
    "ibizamode, MASCHA10, 10, mascha.danique, 05-26",
    "christineleduc, DANIQUE10, €10, daniquehogguer, 05-26",
    "rotita, rotita23, 10, rosalia_guzman_9, 05-26",
    "emmasleepnl, ELISE10, 10, eliseboers, 05-26",
    "acttoday_, shula15, 15, shularoose, 05-26",
  ];
}
