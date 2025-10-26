import { Component, OnInit } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/tooltips'
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';

@Component({
    selector: 'app-tooltip',
    standalone:true,
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent, NgbTooltip]
})
export class TooltipComponent {
  prismCode = prismcodeData;
}
