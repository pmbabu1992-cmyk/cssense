import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/image_figures'
@Component({
    selector: 'app-images-figures',
    standalone:true,
    templateUrl: './images-figures.component.html',
    styleUrls: ['./images-figures.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent]
})
export class ImagesFiguresComponent {
    prsimCodeData: any = PrismCode
 }
