import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./../app.component.css']
})
export class PrivacyComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
