import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card7',
  imports: [CommonModule],
  templateUrl: './cs-widget-card7.component.html',
  styleUrl: './cs-widget-card7.component.scss'
})
export class CsWidgetCard7Component {
  @Input() title: string = ''; // Card title (e.g., Total Revenue)
  @Input() value: string | number = ''; // Card value (e.g., $125,465)
  @Input() iconClass: string = ''; // Icon class (e.g., ti-bar-chart)
  @Input() bgColorClass: string = ''; // Background color class (e.g., bg-primary-transparent)
  @Input() iconColorClass: string = '';
}
