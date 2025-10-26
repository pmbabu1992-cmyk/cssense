import { Component, OnInit } from '@angular/core';
import * as PrismCode from '../../../shared/prismData/listgroup';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
@Component({
    selector: 'app-listgroup',
    standalone:true,
    templateUrl: './listgroup.component.html',
    styleUrls: ['./listgroup.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class ListgroupComponent  {
  prsimCodeData: any = PrismCode;
}
