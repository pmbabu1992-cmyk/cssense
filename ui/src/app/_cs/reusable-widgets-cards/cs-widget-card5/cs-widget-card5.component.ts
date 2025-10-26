import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card5',
  imports: [CommonModule],
  templateUrl: './cs-widget-card5.component.html',
  styleUrl: './cs-widget-card5.component.scss'
})
export class CsWidgetCard5Component {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() percentage: string = '';
  @Input() progressPercentage: number = 0;
  @Input() progressBarClass: string = 'bg-primary'; // Default class for progress bar
  @Input() iconClass: string = ''; // Default icon class
  @Input() iconColorClass: string = ''; // Color class for the icon
  @Input() description: string = '';
}
