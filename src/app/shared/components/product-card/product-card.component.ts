import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { CartService } from '../../../cart-service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() showOverlay: boolean = false;

  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }

  constructor(private cartService: CartService) {}
  addToCart() {
    this.cartService.addToCart({
      image: this.product.image,
      name: this.product.name,
      price: Math.floor(this.product.price),
      count: 1,
    });
  }
}
