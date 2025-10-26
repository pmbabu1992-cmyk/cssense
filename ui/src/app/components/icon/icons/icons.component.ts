import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-icons',
    standalone:true,
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss'],
    imports: [PageHeaderComponent, NgbTooltip]
})
export class IconsComponent {

}
