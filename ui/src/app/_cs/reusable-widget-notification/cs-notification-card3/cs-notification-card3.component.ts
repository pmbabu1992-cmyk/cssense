import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-notification-card3',
  imports: [],
  templateUrl: './cs-notification-card3.component.html',
  styleUrl: './cs-notification-card3.component.scss'
})
export class CsNotificationCard3Component {
  @Input() title: string = '';
  @Input() IconClass: string = '';
  @Input() BgColor: string = '';
}
