import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-pages-pricing1',
  imports: [],
  templateUrl: './cs-pages-pricing1.component.html',
  styleUrl: './cs-pages-pricing1.component.scss'
})
export class CsPagesPricing1Component {
  @Input() planName: string = ''; // Name of the plan (e.g., Basic, Premium)
  @Input() price: string = ''; // Price of the plan
  @Input() features: string[] = []; // List of features
  @Input() buttonText: string = ''; // Text for the button (e.g., Buy Now)
  @Input() buttonColor: string = ''; // Button color class (e.g., btn-primary, btn-pink)
}
