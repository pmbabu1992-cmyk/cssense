import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/forms/input_group'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-input-group',
    standalone:true,
    templateUrl: './input-group.component.html',
    styleUrls: ['./input-group.component.scss'],
    imports: [PageHeaderComponent,ShowcodeCardComponent,NgbDropdownModule]
})
export class InputGroupComponent {
    prismCode = prismCodeData;
}
