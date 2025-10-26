import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-helpers',
    standalone:true,
    templateUrl: './helpers.component.html',
    styleUrls: ['./helpers.component.scss'],
    imports: [PageHeaderComponent]
})
export class HelpersComponent {

}
