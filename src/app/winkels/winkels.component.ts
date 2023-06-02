import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../data/data.directive';

import { MetaService } from '../meta/meta.service';

@Component({
  selector: 'app-winkels',
  templateUrl: './winkels.component.html',
  styleUrls: ['./winkels.component.css', './../app.component.css']
})
export class WinkelsComponent implements OnInit {

  winkels: string[];

  groupedWinkels: { letter: string, winkels: string[] }[];

  isMenuCollapsed = true;

  constructor(private meta: MetaService) {
    this.winkels = DataDirective.getUniqueWebshops();
    this.groupedWinkels = this.groupWinkelsByLetter(this.winkels);
  }

  ngOnInit(): void {
    var monthYear = this.meta.getDateString();
    this.meta.updateTitle("Alle winkels met kortingscodes in " + monthYear);
    this.meta.updateMetaInfo("Overzicht van webshops met werkende kortingscodes in " + monthYear + "; Bespaar met deze kortingscodes op online shoppen via diski.nl", "diski.nl", "Kortingscode, Korting");
  }

  groupWinkelsByLetter(winkels: string[]): { letter: string, winkels: string[] }[] {
    const groupedWinkels: { letter: string, winkels: string[] }[] = [];

    winkels.sort((a, b) => a.localeCompare(b));

    winkels.forEach((winkel) => {
      const firstLetter = winkel.charAt(0).toUpperCase();
      const group = groupedWinkels.find((g) => g.letter === firstLetter);

      if (group) {
        group.winkels.push(winkel);
      } else {
        groupedWinkels.push({ letter: firstLetter, winkels: [winkel] });
      }
    });

    return groupedWinkels;
  }

}
