import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'cs-landing-card1',
  imports: [CommonModule],
  templateUrl: './cs-landing-card1.component.html',
  styleUrl: './cs-landing-card1.component.scss'
})
export class CsLandingCard1Component {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() bgClass: string = '';
  @Input() iconColor: string = '';
  
  constructor(private sanitizer: DomSanitizer){
   
  }

  getSanitizedSVG(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  } 
}
