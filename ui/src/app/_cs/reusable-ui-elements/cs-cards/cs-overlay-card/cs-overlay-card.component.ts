import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-overlay-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-overlay-card.component.html',
  styleUrl: './cs-overlay-card.component.scss'
})
export class CsOverlayCardComponent {
  @Input() imageUrl: string = '';
  @Input() title?: string = '';
  @Input() bodyTitle?: string = '';
  @Input() content: string = '';
  @Input() footerText: string = '';
  @Input() contentPosition: string = '';
}
