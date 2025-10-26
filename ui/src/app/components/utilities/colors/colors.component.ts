import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-colors',
    standalone:true,
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss'],
    imports: [PageHeaderComponent]
})
export class ColorsComponent {

}
