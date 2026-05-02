import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>(this.loadCart());
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  private loadCart(): any[] {
    if (typeof localStorage !== 'undefined') {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  }

  private saveCart(items: any[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(items));
      this.cartItems.next(items);
    }
  }

  getCartItems() {
    return this.cartItems.value;
  }

  addToCart(product: any, quantity: number = 1) {
    const items = this.getCartItems();
    const existingItem = items.find(
      (i) => i.item.id === product.id && i.item.category === product.category
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.push({ item: product, quantity });
    }
    this.saveCart(items);
  }

  updateQuantity(productId: number, category: string, quantity: number) {
    const items = this.getCartItems();
    const item = items.find(
      (i) => i.item.id === productId && i.item.category === category
    );
    if (item) {
      item.quantity = quantity;
      this.saveCart(items);
    }
  }

  removeItem(productId: number, category: string) {
    const items = this.getCartItems().filter(
      (i) => !(i.item.id === productId && i.item.category === category)
    );
    this.saveCart(items);
  }

  clearCart() {
    this.saveCart([]);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce(
      (total, item) => total + item.item.price * item.quantity,
      0
    );
  }

  getCartCount(): number {
    return this.cartItems.value.reduce((count, item) => count + item.quantity, 0);
  }
}
