import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta/meta.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./../app.component.css']
})
export class PrivacyComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo("Privacy policy diski.nl", "diski.nl", "Privacy Policy");
  }

  ngOnInit(): void {
  }

}
