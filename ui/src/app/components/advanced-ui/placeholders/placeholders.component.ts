import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/placeholder';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-placeholders',
    standalone:true,
    templateUrl: './placeholders.component.html',
    styleUrls: ['./placeholders.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent,CommonModule]
})
export class PlaceholdersComponent {
    prismCode = prismCodeData;
}
