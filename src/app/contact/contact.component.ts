import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../app.component.css']
})
export class ContactComponent implements OnInit {

  isMenuCollapsed = true;

  flameEmoji = "\u{1F525}";
  influencerEmoji = "\u{1F4F7}";
  companyEmoji = "\u{1F3E2}";

  constructor(private meta: MetaService) {
    this.meta.updateTitle("Neem Contact Op met Diski | Advies over Influencer Marketing en Kortingscodes");
    this.meta.updateMetaInfo("Neem contact op met Diski voor deskundig advies over influencer marketing. Onze uitgebreide database bevat 17.000 kortingscodes, 4.000 influencers, en samenwerkingen met 1.500 bedrijven in fashion, beauty, lifestyle, sport, en meer.", "diski.nl", "Influencer marketing advies, Kortingscodes database, Influencers en bedrijven samenwerking");
  }

  ngOnInit(): void {
  }

}
