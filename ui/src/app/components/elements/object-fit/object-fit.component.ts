import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/objectfit'
@Component({
    selector: 'app-object-fit',
    standalone:true,
    templateUrl: './object-fit.component.html',
    styleUrls: ['./object-fit.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class ObjectFitComponent {
    prsimCodeData: any = PrismCode;
}
