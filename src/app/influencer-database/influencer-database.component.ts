import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influencer-database',
  templateUrl: './influencer-database.component.html',
  styleUrls: ['./influencer-database.component.css', './../app.component.css']
})
export class InfluencerDatabaseComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
