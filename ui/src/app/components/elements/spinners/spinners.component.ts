import { Component, OnInit } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/spinners';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
@Component({
    selector: 'app-spinners',
    standalone:true,
    templateUrl: './spinners.component.html',
    styleUrls: ['./spinners.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class SpinnersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prismCode = prismcodeData;
}
