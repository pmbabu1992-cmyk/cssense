import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-media-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-media-card.component.html',
  styleUrl: './cs-media-card.component.scss'
})
export class CsMediaCardComponent {
  @Input() avatar: string = ''; // Avatar image URL
  @Input() stats: { label: string; value: string }[] = []; // Array of stats (e.g., Posts, Followers, Following)
  @Input() name: string = ''; // Person's name
  @Input() jobTitle: string = ''; // Job title
  @Input() aboutText: string = ''; // About text
  @Input() additionalText: string = ''; // Additional card body text
}
