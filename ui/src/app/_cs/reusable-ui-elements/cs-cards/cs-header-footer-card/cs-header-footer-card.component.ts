import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-header-footer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-header-footer-card.component.html',
  styleUrl: './cs-header-footer-card.component.scss'
})
export class CsHeaderFooterCardComponent {
  @Input() avatar: string = ''; // Avatar image URL
  @Input() name: string = ''; // Person's name
  @Input() jobTitle: string = ''; // Job title
  @Input() socialMediaButtons: { icon: string; class: string; action: () => void }[] = []; // Social media buttons
}
