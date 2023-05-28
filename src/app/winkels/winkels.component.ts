import { Component, OnInit } from '@angular/core';

import { DataDirective } from '../data/data.directive';

@Component({
  selector: 'app-winkels',
  templateUrl: './winkels.component.html',
  styleUrls: ['./winkels.component.css']
})
export class WinkelsComponent implements OnInit {

  winkels: string[];

  constructor() {
    this.winkels = DataDirective.getUniqueWebshops();
  }

  ngOnInit(): void {
  }

}
