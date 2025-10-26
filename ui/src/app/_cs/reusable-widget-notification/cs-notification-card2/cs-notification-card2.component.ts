import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-notification-card2',
  imports: [CommonModule],
  templateUrl: './cs-notification-card2.component.html',
  styleUrl: './cs-notification-card2.component.scss'
})
export class CsNotificationCard2Component {
  @Input() title: string = '';
  @Input() IconClass: string = '';
  @Input() BgColor: string = '';
}
