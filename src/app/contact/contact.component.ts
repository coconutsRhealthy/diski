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
    this.meta.updateTitle();
    this.meta.updateMetaInfo("Contactgegevens diski.nl; Bespaar op online shoppen via diski.nl", "diski.nl", "Kortingscodes 2022");
  }

  ngOnInit(): void {
  }

}
