import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-pages-pricing3',
  imports: [],
  templateUrl: './cs-pages-pricing3.component.html',
  styleUrl: './cs-pages-pricing3.component.scss'
})
export class CsPagesPricing3Component {
  @Input() planName: string = ''; // Name of the plan (e.g., Personal, Team, Business)
  @Input() price: string = ''; // Price of the plan
  @Input() features: string[] = []; // List of features
  @Input() buttonText: string = ''; // Button text (e.g., "Purchase Now!")
  @Input() buttonColor: string = ''; // Button color class (e.g., btn-primary, btn-warning)
  @Input() panelColor: string = ''; // Color for the panel header (e.g., bg-primary, bg-warning)
}
