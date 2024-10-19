import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: any) {
    const currentItems = this.cartItems.value;

    const updatedItems = [...currentItems, item]; // Add the new item to the array
    this.cartItems.next(updatedItems); // Emit the updated array through BehaviorSubject
  }
}
