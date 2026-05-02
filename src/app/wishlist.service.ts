import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItems = new BehaviorSubject<any[]>(this.loadWishlist());
  wishlistItems$ = this.wishlistItems.asObservable();

  constructor() {}

  private loadWishlist(): any[] {
    if (typeof localStorage !== 'undefined') {
      const wishlist = localStorage.getItem('wishlist');
      return wishlist ? JSON.parse(wishlist) : [];
    }
    return [];
  }

  private saveWishlist(items: any[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('wishlist', JSON.stringify(items));
      this.wishlistItems.next(items);
    }
  }

  getWishlistItems() {
    return this.wishlistItems.value;
  }

  toggleWishlist(product: any) {
    const items = this.getWishlistItems();
    const index = items.findIndex(
      (i) => i.id === product.id && i.category === product.category
    );

    if (index > -1) {
      items.splice(index, 1); // Remove if exists
    } else {
      items.push(product); // Add if doesn't exist
    }
    this.saveWishlist(items);
  }

  isInWishlist(productId: number, category: string): boolean {
    return this.wishlistItems.value.some(
      (i) => i.id === productId && i.category === category
    );
  }

  getWishlistCount(): number {
    return this.wishlistItems.value.length;
  }
}
