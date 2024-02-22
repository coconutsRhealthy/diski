import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanySeoTextService {

  private companySeoTexts = {
    'airup': '<strong>Air Up: Frisheid Zonder Calorieën, Exclusieve Kortingscodes Inbegrepen</strong><br><p>Ontdek een nieuwe dimensie van hydratatie met Air Up, waar smaak en gezondheid samenkomen. Ervaar de verfrissende revolutie van geurige waterdampen zonder suikers of calorieën. Met Air Up wordt het drinken van water een heerlijke en gezonde ervaring.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je de innovatieve producten van Air Up kunt proberen zonder je budget te overschrijden. Van fruitige smaken tot verfrissende kruiden, Air Up biedt een scala aan podsmaken om je hydratatie naar een hoger niveau te tillen.</p><p>Blader door onze kortingscodes voor Air Up en ontdek hoe je water drinken kunt omtoveren tot een heerlijke smaakervaring. Geniet van de voordelen van gehydrateerd blijven zonder compromissen te sluiten op het gebied van gezondheid en smaak.</p><p>Kies Air Up voor een smaakvolle hydratatie-ervaring en laat onze exclusieve kortingscodes je helpen bij het verkennen van een nieuwe wereld van dorstlessende mogelijkheden. Start vandaag nog je reis naar gezond drinken met Air Up en profiteer van exclusieve kortingen op deze innovatieve producten!</p>',
    'albelli_nl': '<strong>Albelli: Creëer Onvergetelijke Fotoproducten</strong><br><p>Ontdek de wereld van gepersonaliseerde fotoproducten bij Albelli, jouw ultieme bestemming voor het creëren van onvergetelijke herinneringen. Albelli biedt een breed scala aan hoogwaardige fotoproducten, waaronder fotoboeken, wanddecoratie, kalenders en meer, perfect om je kostbare momenten vast te leggen en te delen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Albelli. Of je nu op zoek bent naar een gepersonaliseerd fotoboek van je laatste vakantie, een canvasafdruk van je favoriete foto, of een unieke kalender voor het nieuwe jaar, Albelli maakt het gemakkelijk om je herinneringen tot leven te brengen.</p><p>Ontdek onze kortingscodes voor Albelli en maak gebruik van speciale aanbiedingen op de nieuwste fotoproducten. Kies Albelli voor kwaliteit, creativiteit en vakmanschap in al je fotoprojecten, en laat je herinneringen schitteren met prachtige fotoproducten!</p>',
    'asos': '<strong>ASOS: Trendy Mode en Accessoires met Exclusieve Kortingscodes</strong><br><p>Ontdek de nieuwste modetrends en accessoires online bij ASOS, jouw ultieme bestemming voor trendy kleding en accessoires. Met een breed scala aan kledingstukken, schoenen, accessoires en meer, biedt ASOS een uitgebreide collectie voor mannen en vrouwen, waardoor je altijd de perfecte look kunt vinden voor elke gelegenheid.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij ASOS. Van casual outfits tot glamoureuze avondkleding, ASOS biedt een diverse selectie aan stijlen en merken, waardoor het een favoriete bestemming is voor modebewuste shoppers over de hele wereld.</p><p>Blader door onze kortingscodes voor ASOS en ontdek hoe je kunt besparen op je favoriete mode-items en accessoires. Profiteer van geweldige deals en vul je garderobe met stijlvolle en trendy items, zonder je budget te overschrijden.</p><p>Kies ASOS voor een trendy en betaalbare winkelervaring en laat onze exclusieve kortingscodes je helpen bij het creëren van je perfecte look. Begin vandaag nog met shoppen bij ASOS en geniet van speciale kortingen op de nieuwste mode!</p>',
    'aybl': '<strong>Aybl: Trendy Sportkleding en Accessoires</strong><br><p>Ontdek de wereld van trendy sportkleding en accessoires bij Aybl, jouw ultieme bestemming voor stijlvolle activewear. Aybl biedt een uitgebreide collectie van hoogwaardige sportkleding en accessoires, perfect om je workout te verbeteren en je zelfvertrouwen te vergroten.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Aybl. Of je nu op zoek bent naar een nieuwe sportlegging, een ondersteunende sportbeha, of trendy accessoires, Aybl heeft alles wat je nodig hebt om te schitteren tijdens je trainingen.</p><p>Ontdek onze kortingscodes voor Aybl en maak gebruik van speciale aanbiedingen op de nieuwste sportkleding en accessoires. Kies Aybl voor comfort, stijl en prestatie tijdens al je sportieve activiteiten, en laat zien dat je klaar bent om te stralen!</p>',
    'bodyandfit.com': '<strong>Body&Fit: Optimaliseer Je Gezondheid met Exclusieve Kortingscodes</strong><br><p>Streef naar een gezonder en fitter leven met Body&Fit, dé expert op het gebied van voeding en supplementen. Ontdek een uitgebreid assortiment hoogwaardige producten die zijn ontworpen om je te ondersteunen bij het bereiken van je gezondheids- en fitnessdoelen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je de voedzame producten van Body&Fit kunt ervaren zonder je budget te overschrijden. Of je nu op zoek bent naar proteïnepoeders, vitaminen of gezonde snacks, Body&Fit biedt alles wat je nodig hebt om je gezondheidsreis te verbeteren.</p><p>Blader door onze kortingscodes voor Body&Fit en geef jezelf de kracht van hoogwaardige voedingsondersteuning. Ontdek producten die passen bij jouw specifieke behoeften en helpen bij het optimaliseren van je welzijn.</p><p>Kies Body&Fit voor een gezondere levensstijl en laat onze exclusieve kortingscodes je helpen bij het investeren in je gezondheid zonder buitensporige uitgaven. Begin vandaag nog met het ontdekken van de uitgebreide wereld van Body&Fit en geniet van exclusieve kortingen op producten die je ondersteunen bij het bereiken van je fitnessdoelen!</p>',
    'burga': '<strong>Burga: Stijlvolle Telefoonhoesjes en Accessoires</strong><br><p>Ontdek de wereld van stijlvolle telefoonhoesjes en accessoires bij Burga, jouw ultieme bestemming voor trendy smartphonebescherming. Burga biedt een uitgebreide collectie van unieke en modieuze hoesjes en accessoires, perfect om je telefoon te beschermen en je persoonlijke stijl te laten zien.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Burga. Of je nu op zoek bent naar een slank hoesje, een stevige case, of een opvallende accessoire, Burga heeft alles wat je nodig hebt om je telefoon te personaliseren en te beschermen.</p><p>Ontdek onze kortingscodes voor Burga en maak gebruik van speciale aanbiedingen op de nieuwste telefoonhoesjes en accessoires. Kies Burga voor stijl, bescherming en functionaliteit voor je smartphone, en laat je telefoon stralen met een uniek en trendy hoesje!</p>',
    'bylashbabe': '<strong>Bylashbabe: Wimpers & Schoonheid in Stijl met Exclusieve Kortingscodes</strong><br><p>Ontdek de betoverende wereld van Bylashbabe, waar schoonheid en zelfexpressie samenkomen. Bylashbabe is dé bestemming voor hoogwaardige wimpers en schoonheidsproducten die je natuurlijke uitstraling accentueren en je zelfvertrouwen verhogen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je de glamoureuze producten van Bylashbabe kunt ervaren zonder je budget te overschrijden. Of je nu op zoek bent naar weelderige wimpers voor een speciale gelegenheid of dagelijkse schoonheidsproducten om je routine te verbeteren, Bylashbabe biedt stijlvolle oplossingen.</p><p>Blader door onze exclusieve kortingscodes voor Bylashbabe en geef je wimper- en schoonheidscollectie een upgrade. Ontdek de nieuwste trends in de wereld van schoonheid en geniet van de voordelen van hoogwaardige producten tegen een betaalbare prijs.</p><p>Kies Bylashbabe voor een ongeëvenaarde schoonheidservaring en laat onze kortingscodes je helpen bij het bereiken van de gewenste look zonder de bank te breken. Begin vandaag nog met het ontdekken van de prachtige wereld van Bylashbabe en geniet van exclusieve kortingen op je favoriete producten!</p>',
    'desenio': '<strong>Desenio: Stijlvolle Wanddecoratie met Exclusieve Kortingscodes</strong><br><p>Transformeer je ruimte in een oase van stijl met Desenio, dé bestemming voor eigentijdse wanddecoratie. Ontdek een breed scala aan kunstprints en posters die je interieur verlevendigen en je persoonlijke stijl weerspiegelen.</p><p>Bij Diski hebben we speciale kortingscodes verzameld, zodat je de prachtige kunstwerken van Desenio kunt toevoegen aan je collectie zonder je budget te overschrijden. Of je nu op zoek bent naar minimalistische designs, inspirerende citaten of levendige afbeeldingen, Desenio biedt kunst die past bij elke smaak.</p><p>Blader door onze exclusieve kortingscodes voor Desenio en geef je muren een make-over met betaalbare en stijlvolle kunst. Ontdek hoe je met de juiste kunstwerken je ruimte kunt personaliseren en een sfeer kunt creëren die bij jou past.</p><p>Kies Desenio voor hoogwaardige wanddecoratie en laat onze kortingscodes je helpen bij het verfraaien van je leefruimte zonder je portemonnee te belasten. Begin vandaag nog met het ontdekken van de prachtige wereld van Desenio en geniet van exclusieve kortingen op kunst die jouw huis compleet maakt!</p>',
    'emmasleepnl': '<strong>Emma Sleep: Comfortabele Matrassen voor een Betere Nachtrust</strong><br><p>Ontdek de wereld van comfortabele matrassen bij Emma Sleep, jouw ultieme bestemming voor een betere nachtrust. Emma Sleep biedt hoogwaardige matrassen van Duitse kwaliteit, ontworpen om je de perfecte combinatie van ondersteuning en comfort te bieden, zodat je elke ochtend fris en uitgerust wakker wordt.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Emma Sleep. Of je nu op zoek bent naar een matras voor jezelf, je partner, of je kinderen, Emma Sleep heeft een breed scala aan matrassen voor elk slaaptype en elke voorkeur.</p><p>Ontdek onze kortingscodes voor Emma Sleep en maak gebruik van speciale aanbiedingen op de nieuwste matrassen. Kies Emma Sleep voor kwaliteit, comfort en een betere nachtrust, en ervaar het verschil van een matras dat echt bij je past!</p>',
    'esn': '<strong>ESN: Kwalitatieve Voedingssupplementen voor Sporters van Eliteklasse</strong><br><p>Ontdek de wereld van kwalitatieve voedingssupplementen bij ESN, de ultieme bestemming voor serieuze sporters van eliteklasse. ESN staat bekend om zijn hoogwaardige producten en toewijding aan de behoeften van de sportgemeenschap, en biedt een uitgebreid assortiment aan supplementen die zijn ontworpen om je prestaties te verbeteren en je fitnessdoelen te ondersteunen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij ESN. Of je nu op zoek bent naar eiwitpoeders, BCAA&apos;s, creatine of andere supplementen, ESN biedt een breed scala aan producten om je te ondersteunen in je fitnessreis.</p><p>Ontdek onze kortingscodes voor ESN en maak gebruik van speciale aanbiedingen op hoogwaardige voedingssupplementen. Kies ESN voor kwaliteit en prestatie in je fitnessroutine en begin vandaag nog met het bereiken van je sportieve doelen!</p>',
    'ginatricot': '<strong>Ginatricot: Trendy Mode en Accessoires voor Jouw Stijl</strong><br><p>Ontdek de nieuwste trends in mode en accessoires bij Ginatricot, jouw go-to bestemming voor stijlvolle looks. Ginatricot biedt een uitgebreide collectie kledingstukken en accessoires van hoge kwaliteit, perfect om je persoonlijke stijl te versterken.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt profiteren van extra besparingen tijdens het winkelen bij Ginatricot. Of je nu op zoek bent naar trendy tops, jurken, of accessoires, Ginatricot heeft voor elk wat wils om je look compleet te maken.</p><p>Ontdek onze kortingscodes voor Ginatricot en maak gebruik van speciale aanbiedingen op de nieuwste mode-items. Kies Ginatricot voor kwaliteit en stijl in je garderobe en begin vandaag nog met het creëren van je eigen unieke look!</p>',
    'gutsgusto': '<strong>Gutsgusto: Stijlvolle Kleding en Accessoires voor Jouw Trendy Look</strong><br><p>Ontdek de nieuwste trends in stijlvolle kleding en accessoires bij Gutsgusto, jouw ultieme bestemming voor een trendy en eigentijdse look. Gutsgusto biedt een uitgebreide collectie hoogwaardige kledingstukken en accessoires, perfect om je garderobe aan te vullen met trendy items.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Gutsgusto. Of je nu op zoek bent naar casual tops, jurken, of accessoires, Gutsgusto biedt een breed scala aan opties om je persoonlijke stijl te laten stralen.</p><p>Ontdek onze kortingscodes voor Gutsgusto en maak gebruik van speciale aanbiedingen op de nieuwste mode-items. Kies Gutsgusto voor kwaliteit en stijl in je kledingkast en begin vandaag nog met het creëren van je eigen unieke look!</p>',
    'gymshark': '<strong>Gymshark: Innovatieve Sportkleding en Accessoires voor Je Fitnessreis</strong><br><p>Ontdek de innovatieve sportkleding en accessoires van Gymshark, ontworpen om je prestaties te verbeteren en je stijl te laten stralen terwijl je traint. Gymshark biedt een uitgebreide collectie hoogwaardige producten die je ondersteunen tijdens elke trainingssessie.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen voor Gymshark-producten. Of je nu op zoek bent naar compressieleggings, performance tops of accessoires voor je workouts, Gymshark biedt een breed scala aan opties om je fitnessdoelen te ondersteunen.</p><p>Ontdek onze kortingscodes voor Gymshark en profiteer van speciale aanbiedingen op de nieuwste sportkleding en accessoires. Kies voor kwaliteit en innovatie in je fitnessgarderobe en begin vandaag nog met het bereiken van je trainingsdoelen in stijl!</p>',
    'hunkemoller': '<strong>Hunkemöller: Verleidelijke Lingerie en Comfortabele Loungewear</strong><br><p>Ontdek de wereld van verleidelijke lingerie en comfortabele loungewear bij Hunkemöller, jouw ultieme bestemming voor hoogwaardige dameskleding. Hunkemöller staat bekend om zijn uitgebreide collectie van lingerie, nachtkleding en loungewear, perfect voor elke vrouw en elke gelegenheid.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Hunkemöller. Of je nu op zoek bent naar een sensuele bh, een comfortabele pyjama, of een trendy loungeset, Hunkemöller biedt een scala aan stijlvolle opties voor elke smaak en elk budget.</p><p>Ontdek onze kortingscodes voor Hunkemöller en maak gebruik van speciale aanbiedingen op de nieuwste lingerie en loungewear. Kies Hunkemöller voor comfort, stijl en zelfvertrouwen in al je dagelijkse bezigheden en begin vandaag nog met het omarmen van je innerlijke schoonheid!</p>',
    'idealofsweden': '<strong>iDeal of Sweden: Stijlvolle Accessoires met Voordelige Kortingscodes</strong><br><p>Duik in de wereld van elegantie en functionaliteit met iDeal of Sweden, een vooraanstaand merk dat bekend staat om zijn chique en modieuze accessoires voor elektronische apparaten. iDeal of Sweden combineert stijl met praktisch gebruik, waardoor je elektronica niet alleen beschermd wordt, maar ook een fashion statement wordt.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt profiteren van de trendy accessoires van iDeal of Sweden zonder je budget te overschrijden. Ontdek een breed scala aan telefoonhoesjes, oplaadkabels en andere accessoires die jouw persoonlijke stijl aanvullen.</p><p>Blader door onze exclusieve kortingscodes voor iDeal of Sweden en geef jezelf de kans om te experimenteren met de laatste modetrends. Ontdek betaalbare stijlvolle kleding en accessoires die je look compleet maken en je zelfvertrouwen verhogen.</p><p>Kies iDeal of Sweden voor accessoires die niet alleen je apparaten beschermen, maar ook je persoonlijke stijl weerspiegelen. Met onze kortingscodes wordt het eenvoudig om je favoriete items te bemachtigen en je elektronica te transformeren tot trendy modeaccessoires. Wacht niet langer en profiteer vandaag nog van exclusieve kortingen!</p>',
    'loavies': '<strong>Loavies: Trendy Fashion met Exclusieve Kortingscodes</strong><br><p>Duik in de wereld van modieuze elegantie met Loavies, waar stijl en zelfexpressie samenkomen. Loavies staat bekend om zijn eigentijdse kleding en accessoires die de laatste modetrends omarmen. Ontdek de perfecte outfit om je persoonlijkheid te laten stralen bij elke gelegenheid.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je de nieuwste fashion must-haves van Loavies kunt ontdekken zonder je budget te overschrijden. Of je nu op zoek bent naar casual chic of een opvallende outfit voor een avondje uit, Loavies heeft iets voor elke fashionista.</p><p>Blader door onze kortingscodes voor Loavies en geef jezelf de vrijheid om te experimenteren met de laatste modetrends. Ontdek betaalbare stijlvolle kleding en accessoires die je look compleet maken en je zelfvertrouwen verhogen.</p><p>Kies Loavies voor een modieuze reis en laat onze exclusieve kortingscodes je helpen bij het samenstellen van de perfecte outfit zonder je budget te belasten. Begin vandaag nog met het ontdekken van de nieuwste fashion bij Loavies en geniet van speciale kortingen op je favoriete items!</p>',
    'lookfantastic': '<strong>Lookfantastic: Ontdek Schoonheid en Verzorging van Wereldklasse</strong><br><p>Ontdek schoonheid en verzorging van wereldklasse bij Lookfantastic, jouw ultieme bestemming voor hoogwaardige cosmetica, huidverzorging en haarproducten. Lookfantastic biedt een uitgebreid assortiment aan producten van toonaangevende merken, waardoor je jezelf kunt verwennen met de beste beautyproducten.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Lookfantastic. Of je nu op zoek bent naar make-up, gezichtsverzorging, haarverzorging of andere beautyproducten, Lookfantastic heeft alles wat je nodig hebt om je natuurlijke schoonheid te laten stralen.</p><p>Ontdek onze kortingscodes voor Lookfantastic en maak gebruik van speciale aanbiedingen op de nieuwste beautyproducten. Kies Lookfantastic voor kwaliteit en luxe in je dagelijkse verzorgingsroutine en begin vandaag nog met het versterken van je natuurlijke schoonheid!</p>',
    'lyko': '<strong>Lyko: Kwaliteitsproducten voor Haar en Huidverzorging</strong><br><p>Ontdek de wereld van hoogwaardige haar- en huidverzorgingsproducten bij Lyko, jouw ultieme bestemming voor schoonheid en welzijn. Lyko biedt een uitgebreid assortiment van producten van topmerken, waardoor je jezelf kunt verwennen met de beste haar- en huidverzorgingsproducten.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Lyko. Of je nu op zoek bent naar haarverzorging, stylingproducten, huidverzorging of make-up, Lyko heeft alles wat je nodig hebt om je natuurlijke schoonheid te omarmen.</p><p>Ontdek onze kortingscodes voor Lyko en maak gebruik van speciale aanbiedingen op de nieuwste haar- en huidverzorgingsproducten. Kies Lyko voor kwaliteit, schoonheid en welzijn in je dagelijkse verzorgingsroutine en laat jezelf stralen met gezond en glanzend haar en een stralende huid!</p>',
    'myjewellery': '<strong>My Jewellery: Trendy Sieraden en Accessoires met Exclusieve Kortingscodes</strong><br><p>Ontdek de nieuwste trends in sieraden en accessoires online bij My Jewellery, jouw ultieme bestemming voor trendy en betaalbare items. My Jewellery staat bekend om zijn unieke collecties, variërend van minimalistische ontwerpen tot opvallende statement pieces, perfect voor elke gelegenheid.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt profiteren van extra besparingen tijdens het winkelen bij My Jewellery. Of je nu op zoek bent naar oorbellen, armbanden, kettingen of andere accessoires, My Jewellery heeft een breed scala aan opties om je look compleet te maken.</p><p>Blader door onze kortingscodes voor My Jewellery en ontdek hoe je kunt besparen op je favoriete sieraden en accessoires. Met onze exclusieve aanbiedingen kun je jouw sieradencollectie uitbreiden zonder je budget te overschrijden.</p><p>Kies My Jewellery voor een trendy en betaalbare winkelervaring en laat onze exclusieve kortingscodes je helpen bij het vinden van de perfecte accessoires voor elke gelegenheid. Begin vandaag nog met shoppen bij My Jewellery en geniet van speciale kortingen op de nieuwste trends in sieraden!</p>',
    'myproteinnl': '<strong>Myprotein: Voedingssupplementen en Sportvoeding voor Je Fitnessdoelen</strong><br><p>Ontdek de uitgebreide selectie voedingssupplementen en sportvoeding van Myprotein, ontworpen om je te helpen je fitnessdoelen te bereiken en je prestaties te verbeteren. Myprotein staat bekend om zijn hoogwaardige producten en toewijding aan kwaliteit en innovatie in de fitnessindustrie.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt profiteren van extra besparingen tijdens het winkelen voor Myprotein-producten. Of je nu op zoek bent naar eiwitpoeders, creatine, aminozuren of andere supplementen, Myprotein biedt een breed scala aan producten om je te ondersteunen bij je fitnessreis.</p><p>Ontdek onze kortingscodes voor Myprotein en ervaar de voordelen van hoogwaardige supplementen en sportvoeding die je helpen je fitnessdoelen te bereiken. Begin vandaag nog met het investeren in je gezondheid en fitness met Myprotein!</p>',
    'nakdfashion': '<strong>Nakdfashion: Stijlvolle Trends met Kortingscodes</strong><br><p>Ontdek de laatste modetrends bij Nakdfashion, waar stijl en innovatie samenkomen. Als pionier in de modewereld staat Nakdfashion bekend om zijn eigentijdse ontwerpen en hoogwaardige kleding. Ontdek de nieuwste collecties en geef je garderobe een upgrade met unieke items die je stijl weerspiegelen.</p><p>Bij Diski geloven we dat iedereen toegang moet hebben tot betaalbare mode. Daarom hebben we exclusieve kortingscodes voor Nakdfashion verzameld, zodat je kunt genieten van extra besparingen terwijl je je favoriete items ontdekt. Voeg een vleugje klasse toe aan je look zonder je budget te overschrijden.</p><p>Blader door onze verzameling kortingscodes voor Nakdfashion en ontdek hoe je kunt besparen op de nieuwste trends. Verwen jezelf met mode die jouw persoonlijkheid weerspiegelt, en profiteer van geweldige aanbiedingen die je nergens anders vindt.</p><p>Kies Nakdfashion voor een modieuze reis en geniet van exclusieve kortingen die jouw stijl betaalbaar maken. Upgrade je garderobe vandaag nog met onze speciale kortingscodes!</p>',
    'nike': '<strong>Nike: Innovatieve Sportkleding en Schoenen van Wereldklasse</strong><br><p>Ontdek de wereld van innovatieve sportkleding en schoenen van wereldklasse bij Nike, jouw ultieme bestemming voor prestatiegerichte activewear. Nike staat bekend om zijn hoogwaardige producten en toewijding aan sportieve excellentie, en biedt een uitgebreide collectie kleding, schoenen en accessoires voor elke sport en activiteit.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Nike. Of je nu op zoek bent naar hardloopschoenen, trainingskleding, of accessoires, Nike heeft alles wat je nodig hebt om je sportieve doelen te bereiken en te overtreffen.</p><p>Ontdek onze kortingscodes voor Nike en maak gebruik van speciale aanbiedingen op de nieuwste sportkleding en schoenen. Kies Nike voor kwaliteit, prestatie en stijl in al je sportieve activiteiten, en begin vandaag nog met het verleggen van je grenzen!</p>',
    'only': '<strong>Only: Trendy Kleding voor Vrouwen</strong><br><p>Ontdek de wereld van trendy kleding voor vrouwen bij Only, jouw ultieme bestemming voor stijlvolle mode. Only biedt een uitgebreide collectie van eigentijdse kledingstukken, ontworpen om je persoonlijke stijl te versterken en je zelfvertrouwen te vergroten.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Only. Of je nu op zoek bent naar een chique blouse, een comfortabele jeans, of een opvallende jurk, Only heeft alles wat je nodig hebt om je fashion game te upgraden.</p><p>Ontdek onze kortingscodes voor Only en maak gebruik van speciale aanbiedingen op de nieuwste mode-items. Kies Only voor kwaliteit, stijl en betaalbare fashion, en laat jezelf stralen in elke gelegenheid!</p>',
    'otrium': '<strong>Otrium: Ontdek Exclusieve Mode voor Minder</strong><br><p>Ontdek exclusieve mode voor minder bij Otrium, jouw ultieme bestemming voor geweldige deals op designerkleding. Otrium biedt een uitgebreide selectie van topmerken tegen scherpe prijzen, waardoor je stijlvol kunt zijn zonder de bank te breken.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Otrium. Of je nu op zoek bent naar trendy outfits, schoenen of accessoires, Otrium heeft voor elk wat wils om je garderobe aan te vullen.</p><p>Ontdek onze kortingscodes voor Otrium en maak gebruik van speciale aanbiedingen op de nieuwste mode-items. Kies Otrium voor kwaliteit en stijl in je kledingkast en begin vandaag nog met het creëren van je eigen unieke look!</p>',
    'pinkgellac': '<strong>Pink Gellac: Duurzame Gelnagellak met Exclusieve Kortingscodes</strong><br><p>Betreed de wereld van perfecte nagels met Pink Gellac, hét merk voor duurzame gelnagellak. Ervaar langdurige glans en levendige kleuren die je nagels transformeren in ware kunstwerken. Ontdek de ultieme combinatie van stijl en kwaliteit.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je de hoogwaardige gelnagellak van Pink Gellac kunt verkennen zonder je budget te overschrijden. Of je nu gaat voor een klassieke uitstraling of een gedurfde, trendy stijl, Pink Gellac biedt een uitgebreid assortiment kleuren en producten.</p><p>Blader door onze kortingscodes voor Pink Gellac en geef jezelf de vrijheid om thuis professioneel ogende gelnagels te creëren. Ervaar de voordelen van langdurige kleur, glans en duurzaamheid die Pink Gellac te bieden heeft.</p><p>Kies Pink Gellac voor een salonwaardige nagelervaring en laat onze exclusieve kortingscodes je helpen bij het bereiken van nagelperfectie zonder de salonprijzen. Begin vandaag nog met het ontdekken van de prachtige wereld van Pink Gellac en geniet van exclusieve kortingen op hoogwaardige gelnagellak!</p>',
    'vitakruid': '<strong>Vitakruid: Natuurlijke Welzijnsversterkers met Exclusieve Kortingscodes</strong><br><p>Ontdek de wereld van gezondheid en welzijn met Vitakruid, een toonaangevend merk dat zich toelegt op natuurlijke supplementen en hoogwaardige voedingsstoffen. Vitakruid staat bekend om zijn streven naar optimale gezondheid en welzijn, met een assortiment producten dat is ontworpen om een actieve en evenwichtige levensstijl te ondersteunen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt profiteren van de voedzame producten van Vitakruid zonder je budget te belasten. Of je nu op zoek bent naar vitamines, mineralen of andere supplementen, Vitakruid biedt hoogwaardige oplossingen voor een gezonder leven.</p><p>Blader door onze verzameling kortingscodes voor Vitakruid en geef jezelf de kans om te investeren in je welzijn zonder concessies te doen. Kies Vitakruid voor een gezondere levensstijl en laat onze exclusieve kortingscodes je helpen bij het optimaliseren van je gezondheid zonder de bank te breken. Begin vandaag nog met het ontdekken van het uitgebreide assortiment van Vitakruid en geniet van exclusieve kortingen op producten die je ondersteunen bij het bereiken van je wellnessdoelen!</p>',
    'shein': '<strong>Shein: Betaalbare Mode en Accessoires met Exclusieve Kortingscodes</strong><br><p>Ontdek de ongeëvenaarde wereld van betaalbare mode en accessoires bij Shein, de ultieme bestemming voor trendy kleding en accessoires. Shein is uitgegroeid tot een van &apos;s werelds meest geliefde online winkelplatforms, bekend om zijn enorme assortiment aan stijlvolle items voor elk seizoen en elke gelegenheid.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt profiteren van extra besparingen tijdens het winkelen bij Shein. Met een breed scala aan kleding, schoenen, accessoires en meer, vind je bij Shein alles wat je nodig hebt om je persoonlijke stijl te omarmen zonder je budget te overschrijden.</p><p>Blader door onze kortingscodes voor Shein en ontdek hoe je kunt besparen op je favoriete mode-items en accessoires. Van trendy outfits tot tijdloze basics, Shein heeft voor elk wat wils, waardoor het een favoriete bestemming is voor fashionista&apos;s over de hele wereld.</p><p>Kies Shein voor een betaalbare en stijlvolle winkelervaring en laat onze exclusieve kortingscodes je helpen bij het creëren van de perfecte look voor elke gelegenheid. Begin vandaag nog met shoppen bij Shein en geniet van speciale kortingen op de nieuwste mode!</p>',
    'snuggs': '<strong>Snuggs: Comfortabel Menstruatieondergoed voor Vrouwen</strong><br><p>Ontdek het comfortabele menstruatieondergoed van Snuggs, jouw ultieme bestemming voor zorgeloze menstruatiedagen. Snuggs biedt een innovatieve collectie van hoogwaardig menstruatieondergoed, ontworpen om lekken te voorkomen en je de hele dag droog en fris te houden.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Snuggs. Of je nu op zoek bent naar menstruatieondergoed voor lichte of zwaardere dagen, Snuggs heeft alles wat je nodig hebt om je comfortabel en zelfverzekerd te voelen tijdens je menstruatie.</p><p>Ontdek onze kortingscodes voor Snuggs en maak gebruik van speciale aanbiedingen op het nieuwste menstruatieondergoed. Kies Snuggs voor kwaliteit, comfort en gemoedsrust tijdens je menstruatiecyclus, en ervaar het verschil van zorgvuldig ontworpen menstruatieondergoed!</p>',
    'stronger': '<strong>Stronger: Stijlvolle Sportkleding en Accessoires</strong><br><p>Ontdek de wereld van stijlvolle sportkleding en accessoires bij Stronger, jouw ultieme bestemming voor trendy activewear. Stronger biedt een uitgebreide collectie van hoogwaardige sportkleding en accessoires, perfect om je fitnessroutine een boost te geven en je stijl naar een hoger niveau te tillen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Stronger. Of je nu op zoek bent naar een nieuwe sportlegging, een comfortabel sportshirt, of trendy accessoires, Stronger heeft alles wat je nodig hebt om te schitteren tijdens je workouts.</p><p>Ontdek onze kortingscodes voor Stronger en maak gebruik van speciale aanbiedingen op de nieuwste sportkleding en accessoires. Kies Stronger voor comfort, stijl en prestatie tijdens al je sportieve activiteiten, en laat zien dat je sterker bent dan ooit tevoren!</p>',
    'zalando': '<strong>Zalando: Mode en Schoenen Online met Exclusieve Kortingscodes</strong><br><p>Ontdek de nieuwste modetrends en schoenen online bij Zalando, jouw ultieme bestemming voor stijl en comfort. Met een uitgebreide selectie van kleding, schoenen en accessoires voor dames, heren en kinderen, vind je bij Zalando alles wat je nodig hebt om je garderobe te vernieuwen.</p><p>Bij Diski hebben we exclusieve kortingscodes verzameld, zodat je kunt genieten van extra besparingen tijdens het winkelen bij Zalando. Van trendy outfits tot klassieke schoenen, Zalando biedt een scala aan opties voor elke gelegenheid en stijl.</p><p>Blader door onze kortingscodes voor Zalando en ontdek hoe je kunt besparen op je favoriete merken en items. Profiteer van de beste deals en vul je winkelmandje met stijlvolle mode en schoenen zonder je budget te overschrijden.</p><p>Kies Zalando voor een geweldige online winkelervaring en laat onze exclusieve kortingscodes je helpen bij het vinden van de perfecte outfit voor elke gelegenheid. Begin vandaag nog met shoppen bij Zalando en geniet van speciale kortingen op de nieuwste trends!</p>',
  };

  constructor() { }

  public getCompanySeoText(company: string): string | undefined {
    return this.companySeoTexts[company];
  }
}
