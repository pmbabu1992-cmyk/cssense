import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-news-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-news-card.component.html',
  styleUrl: './cs-news-card.component.scss'
})
export class CsNewsCardComponent {
  @Input() headerTitle: string = ''; // Header title
  @Input() bodyTitle: string = ''; // Main card title
  @Input() bodyText: string = ''; // Supporting body text
  @Input() primaryButton: { text: string; action: () => void } = { text: '', action: () => {} }; // Primary button details
  @Input() secondaryButton: { text: string; action: () => void } = { text: '', action: () => {} }; // Secondary button details
  @Input() footerText: string = ''; // Footer text
}
