import { Component, Input } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import * as prismCodeData from '../../../../shared/prismData/forms/check_radio'
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import { ToggleBtnDirective } from 'src/app/shared/directives/toggle-btn.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-checks-radio',
    standalone:true,
    templateUrl: './checks-radio.component.html',
    styleUrls: ['./checks-radio.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent, FormsModule, ShowcodeCardComponent, ToggleBtnDirective]
})
export class ChecksRadioComponent {
  prismCode = prismCodeData;
}