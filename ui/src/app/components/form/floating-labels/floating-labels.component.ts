import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/floating_labels'
import { MaterialModuleModule } from '../../../material-module/material-module.module';
@Component({
    selector: 'app-floating-labels',
    standalone:true,
    templateUrl: './floating-labels.component.html',
    styleUrls: ['./floating-labels.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent,MaterialModuleModule]
})
export class FloatingLabelsComponent {
    prismCode = prismCodeData;

}
