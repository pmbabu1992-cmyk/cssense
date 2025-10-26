import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cs-alerts',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './cs-alerts.component.html',
  styleUrl: './cs-alerts.component.scss'
})
export class CsAlertsComponent {
  @Input() isDismissible = false; 
  @Input() variant:string = ''; 
  @Output() close = new EventEmitter<void>(); 
  @Input() title: string = ''; 
  @Input() linkText: string = ''; 
  @Input() buttonClass: string = ''; 


  onClose() {
    this.close.emit(); // Emit close event
  }
}
