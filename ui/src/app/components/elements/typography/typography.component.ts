import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismcodeData from '../../../shared/prismData/typhography'
@Component({
    selector: 'app-typography',
    standalone:true,
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class TypographyComponent {
  prismCode = prismcodeData;
}
