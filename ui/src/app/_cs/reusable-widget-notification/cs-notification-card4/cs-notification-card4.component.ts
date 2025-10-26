import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cs-notification-card4',
  imports: [CommonModule],
  templateUrl: './cs-notification-card4.component.html',
  styleUrl: './cs-notification-card4.component.scss'
})
export class CsNotificationCard4Component {
  @Input() title: string = ''; // Title of the alert
  @Input() message: string = ''; // Body message
  @Input() alertType: 'success' | 'danger' | 'info' = 'success'; // Type of alert (success, error, info)
  @Input() isClosed: boolean = false; // Control collapse
  @Output() closeAlert = new EventEmitter<void>(); // Event emitter to close the alert

  // Toggle the collapse state
  toggleCollapse() {
    this.isClosed = !this.isClosed;
  }

  // Emit close event when clicking the close button
  close() {
    this.closeAlert.emit();
  }
}
