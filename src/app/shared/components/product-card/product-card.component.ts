import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../../../wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router, private wishlistService: WishlistService) {}
  
  @Input() product: any;
  @Input() showOverlay: boolean = false;
  @Output() item = new EventEmitter();
  
  quantity: number = 1;
  showBtn: boolean = false;

  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }

  add() {
    this.item.emit({
      item: this.product,
      quantity: this.quantity
    });
  }

  ngOnInit(): void {}

  toggleWishlist() {
    this.wishlistService.toggleWishlist(this.product);
  }

  isInWishlist(): boolean {
    return this.wishlistService.isInWishlist(this.product.id, this.product.category);
  }

  route() {
    this.router.navigate([
      '/detailes/',
      this.product.category,
      this.product.id,
      this.product.name,
      this.product.image,
      this.product.price,
      this.product.rating,
      this.product.numberOfRatings,
    ]);
  }
}
