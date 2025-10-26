import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-review-card.component.html',
  styleUrl: './cs-review-card.component.scss'
})
export class CsReviewCardComponent {
  @Input() rating: number = 0; // Rating (1 to 5)
  @Input() timestamp: string = ''; // Review timestamp
  @Input() reviewTitle: string = ''; // Review title
  @Input() reviewText: string = ''; // Review body text
  @Input() reviewerName: string = ''; // Reviewer name
  @Input() reviewerAvatar: string = ''; // Reviewer avatar image URL
}
