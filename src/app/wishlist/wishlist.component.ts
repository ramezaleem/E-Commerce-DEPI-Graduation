import { Component, OnInit, OnDestroy } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Subscription } from 'rxjs';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlistProducts: any[] = [];
  private wishlistSubscription: Subscription | undefined;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.wishlistSubscription = this.wishlistService.wishlistItems$.subscribe(items => {
      this.wishlistProducts = items;
    });
  }

  addToCart(event: any) {
    this.cartService.addToCart(event.item, event.quantity);
  }

  removeFromWishlist(product: any) {
    this.wishlistService.toggleWishlist(product);
  }

  ngOnDestroy(): void {
    if (this.wishlistSubscription) {
      this.wishlistSubscription.unsubscribe();
    }
  }
}
