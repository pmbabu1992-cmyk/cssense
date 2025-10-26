import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-profile-card',
  imports: [],
  templateUrl: './cs-profile-card.component.html',
  styleUrl: './cs-profile-card.component.scss'
})
export class CsProfileCardComponent {
  @Input() iconClass: string = ''; // Icon class for the card
  @Input() colorClass: string = ''; // Background color for the card icon
  @Input() title: string = ''; // Title of the card (e.g., Orders, Revenue, Product Sold)
  @Input() value: string = ''; // The numeric value to display (e.g., 1,587)
  @Input() changeDirection: string = ''; // Direction of change, e.g., "increase" or "decrease"
  @Input() changePercentage: string = ''; // Percentage change
}
