import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card2',
  imports: [CommonModule],
  templateUrl: './cs-widget-card2.component.html',
  styleUrl: './cs-widget-card2.component.scss'
})
export class CsWidgetCard2Component {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() footerText: string = '';
  @Input() footerIcon: string = '';
  @Input() footerIconColor: string = 'text-info'; // Default color for footer icon
  @Input() bgClass: string = ''; // Optional background class for customization
}
