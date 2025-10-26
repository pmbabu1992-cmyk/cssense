import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-notification-card5',
  imports: [],
  templateUrl: './cs-notification-card5.component.html',
  styleUrl: './cs-notification-card5.component.scss'
})
export class CsNotificationCard5Component {
  @Input() images: string = '';
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() imageWidth: string = '';
}
