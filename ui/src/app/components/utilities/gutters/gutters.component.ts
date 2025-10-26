import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-gutters',
    standalone:true,
    templateUrl: './gutters.component.html',
    styleUrls: ['./gutters.component.scss'],
    imports: [PageHeaderComponent]
})
export class GuttersComponent {

}
