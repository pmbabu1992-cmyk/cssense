import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-pages-settings',
  imports: [],
  templateUrl: './cs-pages-settings.component.html',
  styleUrl: './cs-pages-settings.component.scss'
})
export class CsPagesSettingsComponent {
  @Input() iconClass: string = ''; // Icon class for the settings card
  @Input() title: string = ''; // Title for the card (e.g., Dashboard, Webapps)
  @Input() description: string = ''; // Description for the card
  @Input() checkboxChecked: boolean = false; // Checkbox initial state (checked/unchecked)
  @Input() restoreText: string = ''; // Text for "Restore default"
}
