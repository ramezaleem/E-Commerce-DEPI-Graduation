import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../../cart-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to cart items and ensure count is initialized to 1 for each product
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items.map((item) => ({
        ...item,
        count: item.count > 0 ? item.count : 1, // Default count to 1 if not set
      }));
      this.calculateTotalPrice();
    });
  }

  // Increment the count of an item
  increment(item: any): void {
    item.count++;
    this.calculateTotalPrice();
  }

  // Decrement the count of an item (but not below 1)
  decrement(item: any): void {
    if (item.count > 1) {
      item.count--;
      this.calculateTotalPrice();
    }
  }

  // Calculate the total price of the cart and apply Math.floor() to round down
  calculateTotalPrice(): void {
    this.totalPrice = Math.floor(
      this.cartItems.reduce((total, item) => {
        const itemTotal = item.price * item.count;
        item.subtotal = Math.floor(itemTotal); // Store the floored subtotal for each item
        return total + item.subtotal; // Apply Math.floor() to each item's total price
      }, 0)
    );
  }

  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolled down 300px
    this.showButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
