import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';

import * as PrismCode from '../../../shared/prismData/buttongroup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-button-group',
    standalone:true,
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.scss'],
    imports: [PageHeaderComponent,NgbModule, ShowcodeCardComponent]
})
export class ButtonGroupComponent {
    prsimCodeData: any = PrismCode;
    basicButtons=[
    {class:'btn-info btn-wave',icon:'bi bi-skip-backward'},
    {class:'btn-info btn-wave',icon:'bi bi-pause'},
    {class:'btn-info btn-wave',icon:'bi bi-skip-forward'}
    ]
}
