import { Component } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/list-interaction';

@Component({
  selector: 'app-links-interactions',
  imports: [ShowcodeCardComponent,PageHeaderComponent],
  templateUrl: './links-interactions.component.html',
  styleUrl: './links-interactions.component.scss'
})
export class LinksInteractionsComponent {
  prsimCodeData: any = PrismCode;
}
