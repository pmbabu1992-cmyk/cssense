import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/forms/inputs'
@Component({
    selector: 'app-inputs',
    standalone:true,
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent, FormsModule]
})
export class InputsComponent {
    prismCode = prismCodeData;
}
