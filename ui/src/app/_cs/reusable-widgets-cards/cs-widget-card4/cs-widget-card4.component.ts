import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card4',
  imports: [CommonModule],
  templateUrl: './cs-widget-card4.component.html',
  styleUrl: './cs-widget-card4.component.scss'
})
export class CsWidgetCard4Component {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() todayValue: string | number = '';
  @Input() weekValue: string | number = '';
  @Input() monthValue: string | number = '';
  @Input() progressPercentage: number = 0;
  @Input() progressBarClass: string = 'bg-primary'; 
}
