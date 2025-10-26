import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'cs-aboutus-card',
  imports: [],
  templateUrl: './cs-aboutus-card.component.html',
  styleUrl: './cs-aboutus-card.component.scss'
})
export class CsAboutusCardComponent {
  @Input() icon: string = ''; // SVG path or icon
  @Input() count: any = 0; // The numeric value to display
  @Input() label: string = ''; // The label (e.g., "Completed Projects")
  @Input() backgroundClass: string = ''; // Background color for the card
  @Input() textColor: string = ''; // Text color

  constructor(private sanitizer: DomSanitizer){
   
  }

  getSanitizedSVG(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  } 
}
