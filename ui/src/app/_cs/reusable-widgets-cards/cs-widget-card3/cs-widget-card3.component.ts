import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card3',
  imports: [CommonModule],
  templateUrl: './cs-widget-card3.component.html',
  styleUrl: './cs-widget-card3.component.scss'
})
export class CsWidgetCard3Component {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() imageUrl: string = '';
  @Input() sales: any = 0;
  @Input() followers: any = 0;
  @Input() products: number = 0;
  @Input() bgColor: string = 'bg-primary'; // Background color for header
}
