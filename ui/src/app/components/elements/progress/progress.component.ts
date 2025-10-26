import { Component, OnInit } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/progress';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import { CsProgressbarComponent } from 'src/app/_cs/reusable-ui-elements/cs-progressbar/cs-progressbar.component';

@Component({
    selector: 'app-progress',
    standalone:true,
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent,CsProgressbarComponent]
})
export class ProgressComponent implements OnInit {
   constructor() {}

  ngOnInit(): void {}

  
  prismCode = prismcodeData;
}
