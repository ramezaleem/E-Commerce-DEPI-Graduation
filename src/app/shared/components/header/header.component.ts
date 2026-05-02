import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../cart-service.service';
import { WishlistService } from '../../../wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showBadge: boolean = false;
  productAmountCount: number = 0;
  wishlistCount: number = 0;
  showWishlistBadge: boolean = false;
  isSticky: boolean = false;

  searchQuery: string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.productAmountCount = items.reduce((count, item) => count + item.quantity, 0);
      this.showBadge = this.productAmountCount > 0;
    });

    this.wishlistService.wishlistItems$.subscribe((items) => {
      this.wishlistCount = items.length;
      this.showWishlistBadge = this.wishlistCount > 0;
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/allProducts'], { queryParams: { q: this.searchQuery } });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.scrollY || window.pageYOffset;
    this.isSticky = scroll > 615;
  }

  logout() {
    localStorage.removeItem('isloggedin');
    this.router.navigate(['/auth/SignUp']);
  }
}
