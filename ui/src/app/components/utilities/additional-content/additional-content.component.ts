import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-additional-content',
    standalone:true,
    templateUrl: './additional-content.component.html',
    styleUrls: ['./additional-content.component.scss'],
    imports: [PageHeaderComponent,CommonModule]
})
export class AdditionalContentComponent { 

}
