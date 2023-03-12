import { Component, OnInit } from '@angular/core';
import { DataDirective } from '../data/data.directive';

@Component({
  selector: 'app-code-detailpage',
  templateUrl: './code-detailpage.component.html',
  styleUrls: ['./../app.component.css']
})
export class CodeDetailPageComponent implements OnInit {

  codeValue = "initial";

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {

  }

}
