import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../app.component.css']
})
export class ContactComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(private meta: MetaService) {
    this.meta.updateTitle("Diski.nl contact");
    this.meta.updateMetaInfo("Neem contact op met diski.nl via mail of direct message op Instagram en TikTok", "diski.nl", "Kortingscode, Korting, Contact");
  }

  ngOnInit(): void {
  }

}
