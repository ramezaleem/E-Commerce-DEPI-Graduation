import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  cartproducts: any[] = [];
  totalPrice: number = 0;
  private cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartproducts = items;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  detectChange(product: any) {
    this.cartService.updateQuantity(product.item.id, product.item.category, product.quantity);
    this.calculateTotal();
  }

  delete(index: number) {
    const product = this.cartproducts[index];
    this.cartService.removeItem(product.item.id, product.item.category);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
