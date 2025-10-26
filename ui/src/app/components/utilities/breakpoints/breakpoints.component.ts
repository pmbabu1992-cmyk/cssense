import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-breakpoints',
    standalone:true,
    templateUrl: './breakpoints.component.html',
    styleUrls: ['./breakpoints.component.scss'],
    imports: [PageHeaderComponent]
})
export class BreakpointsComponent {

}
