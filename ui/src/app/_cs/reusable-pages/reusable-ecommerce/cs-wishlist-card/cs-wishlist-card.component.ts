import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cs-wishlist-card',
  imports: [RouterModule],
  templateUrl: './cs-wishlist-card.component.html',
  styleUrl: './cs-wishlist-card.component.scss'
})
export class CsWishlistCardComponent {
  @Input() product: any; // Data for each product passed from parent
  @Output() remove = new EventEmitter<string>(); // Event to remove product

  // Emit the product id when remove is clicked
  onRemove(id: string) {
    this.remove.emit(id);
  }
  get roundedRating() {
    return Math.ceil(this.product.rating);
  }
}
