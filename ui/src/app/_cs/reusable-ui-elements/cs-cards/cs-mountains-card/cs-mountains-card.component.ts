import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'cs-mountains-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-mountains-card.component.html',
  styleUrl: './cs-mountains-card.component.scss'
})
export class CsMountainsCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() badgeText: string = '';
  @Input() badgeClass: string = 'bg-primary'; // Default badge class
  @Input() text: string = '';
}
