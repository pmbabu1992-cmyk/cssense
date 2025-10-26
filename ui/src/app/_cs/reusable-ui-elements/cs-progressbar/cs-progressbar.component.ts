import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-progressbar.component.html',
  styleUrl: './cs-progressbar.component.scss'
})
export class CsProgressbarComponent {
  @Input() value: number = 0; // Progress value between 0 and 100
  @Input() size: string = ''; // e.g., 'progress-xs', 'progress-sm', 'progress-lg', 'progress-xl'
  @Input() barClass: string = 'bg-primary'; // Bootstrap classes for colors
  @Input() progressClass?: string = 'bg-primary'; // Bootstrap classes for colors
  @Input() showLabel: boolean = false; // Whether to show the percentage label
  @Input()  color: any;
  @Input()  title: any;
}
