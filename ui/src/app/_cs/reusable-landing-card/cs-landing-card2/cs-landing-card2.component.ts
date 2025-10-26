import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-landing-card2',
  imports: [CommonModule],
  templateUrl: './cs-landing-card2.component.html',
  styleUrl: './cs-landing-card2.component.scss'
})
export class CsLandingCard2Component {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() count: string = '';
  @Input() description: string = '';
}
