import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-featured-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-featured-card.component.html',
  styleUrl: './cs-featured-card.component.scss'
})
export class CsFeaturedCardComponent {
  @Input() header: string = ''; // Card header (optional)
  @Input() title: string = ''; // Card title
  @Input() text: string = ''; // Card body text
  @Input() buttonText: string = ''; // Button text (optional)
  @Input() links: { text: string; href: string; class: string }[] = [];
  @Input() subtitle: string = ''; // Default to an empty string
  @Input() buttonClass: string = 'btn-primary';
}  
