import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismcodeData from '../../../shared/prismData/borders'
@Component({
    selector: 'app-border',
    standalone:true,
    templateUrl: './border.component.html',
    styleUrls: ['./border.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class BorderComponent implements OnInit {
  prismCode = prismcodeData;
  constructor() { }

  ngOnInit(): void {
  }

}
