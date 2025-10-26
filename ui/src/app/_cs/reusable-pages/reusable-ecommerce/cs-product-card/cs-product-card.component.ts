import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cs-product-card',
  imports: [RouterModule],
  templateUrl: './cs-product-card.component.html',
  styleUrl: './cs-product-card.component.scss'
})
export class CsProductCardComponent {
  @Input() product: any;
}
