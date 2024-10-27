import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataDirective } from '../data/data.directive';
import { MetaService } from '../meta/meta.service';

@Component({
  selector: 'app-giftcards',
  templateUrl: './giftcards.component.html',
  styleUrls: ['./giftcards.component.css', './../app.component.css']
})
export class GiftcardsComponent implements OnInit {

  isMenuCollapsed = true;
  giftCardCompany: string | null = null;
  giftCardUrl: string | null = null;

  steps = [
      {
        imageUrl: 'https://i.ibb.co/2nBfzFx/Screenshot-20241009-193905-2.png',
        title: 'Stap 1:',
        description: "Klik hierboven op de link 'haal hier de giftcard op'. Het venster opent in een nieuwe tab. Klik op 'Doorgaan met e-mail'. Vul je mailadres in en klik op doorgaan. Download de Woolsocks app."
      },
      {
        imageUrl: 'https://i.ibb.co/JmpDR3D/Screenshot-20241009-195007-2.png',
        title: 'Stap 2:',
        description: 'Open de Woolsocks app en klik op continue with email. Vul nu het mailadres in dat je bij de vorige stap opgegeven hebt en klik op Continue.'
      },
      {
        imageUrl: 'https://i.ibb.co/994CSP1/Screenshot-20241009-195211-2.png',
        title: 'Stap 3:',
        description: "Er wordt nu een mail van Woolsocks naar dit mailadres gestuurd. Open deze en klik in de mail op de link 'Verify your email'"
      },
      {
        imageUrl: 'https://i.ibb.co/vYQz4Cx/Screenshot-20241009-195300-2.png',
        title: 'Stap 4:',
        description: 'Je gaat nu automatisch terug naar de Woolsocks app en wordt nu gevraagd om een pincode in te stellen. Zodra je dit gedaan hebt krijg je een popup dat er een giftcard voor je klaarligt.'
      },
      {
        imageUrl: 'https://i.ibb.co/nbbdMJJ/Screenshot-20241009-195325-2.png',
        title: 'Stap 5:',
        description: 'De giftcard moet nog geunlocked worden. Dit doe je door je bankrekening te koppelen in Woolsocks. Dit is veilig en levert je ook extra voordelen op in de Woolsocks app, zoals tips waar je kan besparen en verschillende cashbacks.'
      },
      {
        imageUrl: 'https://i.ibb.co/TmTgFw9/Screenshot-20241009-195417-3.png',
        title: 'Stap 6:',
        description: "Nadat je je bankrekening gekoppeld hebt wordt de giftcard vrijgegeven. Je kunt nu gewoon op de normale manier een aankoop doen bij de shop waar de giftcard voor is (dit hoeft dus niet via de Woolsocks app). Zodra je de aankoop gedaan hebt zal Woolsocks dit automatisch detecteren en de €7.50 giftcard aan je uitkeren in de Woolsocks app. Dit kun je in de app zien in de 'Money' tab (icoontje rechtsonderin), linksboven zie je een icoontje met jouw teruggekregen geld."
      },
      {
        imageUrl: 'https://i.ibb.co/txvp42q/Screenshot-20241009-195538-3.png',
        title: 'Stap 7:',
        description: "Als je op het icoontje linksboven klikt krijg je een knop 'payout', en kun je het geld overmaken naar je gewone bankrekening."
      },
  ];

  constructor(private route: ActivatedRoute, private meta: MetaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.setCompanyAndUrl(params.get('company'));
    });

    this.addNotificationToFirstStepIfNeeded();
    this.updateMeta();
  }

  private setCompanyAndUrl(company: string): void {
    const dataDirectiveCodes = DataDirective.getDataArray();
    const giftCardEntries = dataDirectiveCodes.filter(line => line.includes("woolsocks.eu"));
    const lineForCompany = giftCardEntries.find(line => line.includes(company));

    if(lineForCompany) {
      this.giftCardCompany = company;
      this.giftCardUrl = lineForCompany.split(",")[1]?.trim();
    }
  }

  addNotificationToFirstStepIfNeeded() {
    if (this.giftCardCompany && this.giftCardCompany.toLowerCase() !== 'zalando') {
      this.steps[0].description += " (NB: in onderstaande screenshots zie je als voorbeeld Zalando, maar de stappen zijn hetzelfde voor " + this.getFormattedGiftCardCompany() + ")";
    }
  }

  getFormattedGiftCardCompany(): string {
    const company = this.giftCardCompany || '';

    if (company.toLowerCase() === 'h&m' || company.toLowerCase() === 'esn') {
      return company.toUpperCase();
    }

    return this.toTitleCase(company);
  }

  private toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  private updateMeta() {
     if(this.giftCardCompany) {
        this.meta.updateTitle(this.getFormattedGiftCardCompany() + " €7.50 giftcard");
        this.meta.updateMetaInfo("Bespaar met deze giftcard €7.50 bij " + this.getFormattedGiftCardCompany(), "diski.nl", this.getFormattedGiftCardCompany() + ", Giftcard, Besparen, Tegoedbon");
     } else {
        this.meta.updateTitle("Diski €7.50 giftcards voor heel veel webshops");
        this.meta.updateMetaInfo("Bespaar met deze giftcards €7.50 bij heel veel webshops zoals Zalando, MyJewellery en Wehkamp", "diski.nl", "Tegoedbon, Giftcard, Besparen");
     }
  }
}
