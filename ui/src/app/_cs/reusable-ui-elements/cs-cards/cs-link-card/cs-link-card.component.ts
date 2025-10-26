import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-link-card.component.html',
  styleUrl: './cs-link-card.component.scss'
})
export class CsLinkCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() department: string = '';
  @Input() age: number | null = null;
  @Input() gender: string = '';
  @Input() cardBorder: boolean = false; // To control card border styling
  @Input() textInfoClass: string = ''; // For conditional styling
}
