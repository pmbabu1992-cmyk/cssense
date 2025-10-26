import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-product-details-card1',
  imports: [CommonModule],
  templateUrl: './cs-product-details-card1.component.html',
  styleUrl: './cs-product-details-card1.component.scss'
})
export class CsProductDetailsCard1Component {
  @Input() iconClass: string = '';
  @Input() backgroundClass: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
