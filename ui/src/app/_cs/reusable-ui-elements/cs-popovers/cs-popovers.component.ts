import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cs-popovers',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './cs-popovers.component.html',
  styleUrl: './cs-popovers.component.scss'
})
export class CsPopoversComponent {
  @Input() buttonText: string = '';
  @Input() title: string = 'Popover Title';
  @Input() content: string = 'Popover Content';
  @Input() placement: string = 'top';
  @Input() popoverClass: string = '';
  @Input() color: string = '';
  @Input() class: string = 'btn-outline-primary';
  @Input() autoClose: boolean | string = true;
}
