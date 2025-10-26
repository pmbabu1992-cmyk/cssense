import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-gridmarkup-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-gridmarkup-card.component.html',
  styleUrl: './cs-gridmarkup-card.component.scss'
})
export class CsGridmarkupCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = 'Purchase';
  @Input() buttonClass: string = 'btn-primary';
}
