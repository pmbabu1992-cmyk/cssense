import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-alignment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-alignment-card.component.html',
  styleUrl: './cs-alignment-card.component.scss'
})
export class CsAlignmentCardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = 'Go somewhere';
  @Input() imageUrl: string = '';
  @Input() alignmentClass: string = ''; // For text alignment
}
