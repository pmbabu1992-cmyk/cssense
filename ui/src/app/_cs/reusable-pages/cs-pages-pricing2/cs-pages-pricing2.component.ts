import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-pages-pricing2',
  imports: [],
  templateUrl: './cs-pages-pricing2.component.html',
  styleUrl: './cs-pages-pricing2.component.scss'
})
export class CsPagesPricing2Component {
  @Input() planName: string = ''; // Name of the plan (e.g., Free, Premium)
  @Input() price: string = ''; // Price of the plan
  @Input() features: { feature: string, isAvailable: boolean }[] = []; // List of features and availability
  @Input() buttonText: string = ''; // Text for the button (e.g., Choose Plan)
  @Input() buttonClass: string = ''; // Class for the button color (e.g., btn-primary, btn-success)
  @Input() cardStatusClass: string = ''; // Class for card status (e.g., bg-success)
}
