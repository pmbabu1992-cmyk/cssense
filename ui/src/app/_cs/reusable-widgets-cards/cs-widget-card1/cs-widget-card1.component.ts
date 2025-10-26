import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-widget-card1',
  imports: [CommonModule],
  templateUrl: './cs-widget-card1.component.html',
  styleUrl: './cs-widget-card1.component.scss'
})
export class CsWidgetCard1Component {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() bgColor: string = '';
}
