import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cs-product-details-card',
  imports: [RouterModule],
  templateUrl: './cs-product-details-card.component.html',
  styleUrl: './cs-product-details-card.component.scss'
})
export class CsProductDetailsCardComponent {
  @Input() productImage: string = '';
  @Input() productTitle: string = '';
  @Input() productCategory: string = '';
  @Input() originalPrice: string = '';
  @Input() discountedPrice: string = '';
  @Input() productLink: string = '/pages/products';
  @Input() cartLink: string = '/pages/cart';
}
