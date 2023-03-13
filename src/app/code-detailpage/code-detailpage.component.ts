import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code-detailpage',
  templateUrl: './code-detailpage.component.html',
  styleUrls: ['./../app.component.css']
})
export class CodeDetailPageComponent implements OnInit {

  codeValue = "initial";

  isMenuCollapsed = true;

  discountCode: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.discountCode = this.route.snapshot.queryParamMap.get('discountCode');
  }

}
