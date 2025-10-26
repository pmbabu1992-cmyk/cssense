import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card6',
  imports: [CommonModule],
  templateUrl: './cs-widget-card6.component.html',
  styleUrl: './cs-widget-card6.component.scss'
})
export class CsWidgetCard6Component {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() iconClass: string = '';
  @Input() valueColorClass: string = ''; // Class for value text color
  @Input() percentage: string = '';
  @Input() percentageColorClass: string = ''; // Class for percentage color
  @Input() subTitle: string = ''; // Subtitle for additional info like Monthly Sales or Profit
  @Input() subValue: string = ''; 
}
