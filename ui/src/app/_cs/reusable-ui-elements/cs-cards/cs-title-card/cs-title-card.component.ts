import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-title-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-title-card.component.html',
  styleUrl: './cs-title-card.component.scss'
})
export class CsTitleCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() footerText?: string; // Optional string
  @Input() listItems?: string[]; // Optional array of strings
  @Input() buttonText?: string; // Optional string
  @Input() links?: { text: string; href: string; class: string }[];
}
