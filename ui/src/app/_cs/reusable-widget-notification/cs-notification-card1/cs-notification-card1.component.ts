import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-notification-card1',
  imports: [CommonModule],
  templateUrl: './cs-notification-card1.component.html',
  styleUrl: './cs-notification-card1.component.scss'
})
export class CsNotificationCard1Component {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() cardType: 'success' | 'danger' | 'warning' = 'success';
}
