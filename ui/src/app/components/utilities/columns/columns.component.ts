import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-columns',
    standalone:true,
    templateUrl: './columns.component.html',
    styleUrls: ['./columns.component.scss'],
    imports: [PageHeaderComponent]
})
export class ColumnsComponent {

}
